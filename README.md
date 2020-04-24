# Array Iterator

Given an array input, when this node is executed it will pass the “next” value of the array to the succeeding connected node(s).

## Install

> Note: Once public, as with other Node-RED packages this package will be installable through the Node-RED UI. Until then, be sure you follow the [developer instructions](https://gitlab.com/tmobile/iot-mobile/kit/-/blob/tmo/master/developers.md) **before** you try to install any private T-Mobile NPM packages.

<!-- TODO: Once package is public, update instructions -->

```
cd ~/.node-red
npm install --save @tmobile/node-red-contrib-array-iterator
```

## Usage

Drag and Drop the "Array Iterator" onto the canvas. Set the `Input` value to the source array and the `output` value to the destination property. Optionally, you can enable `Repeat` to go back to the beginning of the array after the end is reached.

### Example

The [example](./example-flow.json) iterates through the three items in the array then stops. To see it in action, [import it](https://nodered.org/docs/user-guide/editor/workspace/import-export) into your Node-RED project.

![Example of Array Iterator](./example-flow.png)
