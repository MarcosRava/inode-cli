# inode-cli

REPL CLI based on [IPython](https://ipython.org/)

## Install
```sh
npm i -g inode-cli
```

## Usage

```sh
inode-cli <filename>=optional
```

## Example
```js
// example.js
function hello(name) {
  console.log(`Hello ${name}`)
}
```
On terminal
```sh
inode-cli example.js
```
An interactive console will appear
```sh
In [1]: 
In [1]: a = 1
Out[1]: 1

In [2]: hello('inode-cli') 
Out[2]: Hello inode-cli

In [3]:
```

Under construction....