# Array Iterator

[![Travis (.com) branch](https://img.shields.io/travis/com/tmobile/node-red-contrib-array-iterator/master?style=flat-square)](https://travis-ci.com/tmobile/node-red-contrib-array-iterator) ![GitHub package.json version](https://img.shields.io/github/package-json/v/tmobile/node-red-contrib-array-iterator?style=flat-square) [![npm (scoped)](https://img.shields.io/npm/v/@tmus/node-red-contrib-array-iterator?style=flat-square)](https://www.npmjs.com/package/@tmus/node-red-contrib-array-iterator)

Given an array input, when this node is executed it will pass the “next” value
of the array to the succeeding connected node(s).

## Install

`cd ~/.node-red && npm install --only=prod @tmus/node-red-contrib-array-iterator`

## Usage

Drag and Drop the "Array Iterator" onto the canvas. Set the `Input` value to the
source array and the `output` value to the destination property. Optionally, you
can enable `Repeat` to go back to the beginning of the array after the end is
reached.

### Example

The [example](./example-flow.json) iterates through the three items in the array
then stops. To see it in action, [import
it](https://nodered.org/docs/user-guide/editor/workspace/import-export) into
your Node-RED project.

![Example of Array Iterator](./example-flow.png)
