import { Red, Node, NodeProperties } from "node-red";

export default function arrayIterator(RED: Red) {
  function ArrayIteratorNode(config: NodeProperties & { [key: string]: any }) {
    RED.nodes.createNode(this, config);

    const node = this as Node;
    const context = this.context();

    this.input = config.input || "payload";
    this.inputType = config.inputType || "msg";

    this.output = config.output || "payload";

    this.repeat = config.repeat || false;

    node.on("input", function (msg, send) {
      const inputValue = RED.util.evaluateNodeProperty(
        this.input, // "payload", "widgets", "gadgets", etc.
        this.inputType, // "msg", "flow", "global"
        node,
        msg
      );
      if (inputValue) {
        let currentIndex = context.get("index") || 0;
        msg[this.output] = inputValue[currentIndex++];

        if (currentIndex >= inputValue.length) {
          currentIndex = this.repeat ? 0 : inputValue.length;
          if (!msg[this.output]) return;
        }

        context.set("index", currentIndex);
        send(msg);
      }
    });
  }

  RED.nodes.registerType("array-iterator", ArrayIteratorNode);
}

module.exports = arrayIterator;
