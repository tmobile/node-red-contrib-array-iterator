import arrayIterator from "./array-iterator";
import helper from "node-red-node-test-helper";
import { expect } from "chai";

helper.init(require.resolve("node-red"));

describe("array-iterator Node", function () {
  // beforeEach(function (done) {
  //   helper.startServer(done);
  // });

  afterEach(function (done) {
    helper.unload();
    done();
    // helper.stopServer(done);
  });

  it("should be loaded", function (done) {
    var flow = [{ id: "n1", type: "array-iterator", name: "test name" }];
    helper.load(arrayIterator, flow, function () {
      var n1 = helper.getNode("n1");
      expect(n1.name).to.equal("test name");
      done();
    });
  });

  it("should make payload lower case", function (done) {
    const payload = ["First", "Second"];
    var flow = [
      {
        id: "n1",
        type: "array-iterator",
        name: "test name",
        input: "payload",
        output: "custom",
        wires: [["n2"]],
      },
      { id: "n2", type: "helper" },
    ];
    helper.load(arrayIterator, flow, function () {
      const n2 = helper.getNode("n2");
      const n1 = helper.getNode("n1");
      let index = 0;

      n2.on("input", function (msg: any) {
        expect(msg.custom).to.equal(payload[index++]);
        if (index === payload.length - 1) done();
      });

      n1.receive({ payload });
      n1.receive({ payload });
    });
  });
});
