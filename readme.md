# loadbalance-middleware

**A middleware that load balance requests between several other middlewares**

[![npm status](http://img.shields.io/npm/v/loadbalance-middleware.svg?style=flat-square)](https://www.npmjs.org/package/loadbalance-middleware) [![Dependency status](https://img.shields.io/david/kessler/node-loadbalance-middleware.svg?style=flat-square)](https://david-dm.org/kessler/node-loadbalance-middleware)

## example

`npm i loadbalance-middleware express`

```javascript
var express = require('express')
var loadbalance = require('loadbalance-middleware')

var app = express()

function m1(req, res, next) {
    res.end('1')
}

function m2(req, res, next) {
    res.end('2')
}

app.get('/', loadbalance.roundRobin([m1, m2])) 

app.listen(3000, function (err) {
    if (err) return console.error(err)
    console.log('ready')
})
```

## install

With [npm](https://npmjs.org) do:

```
npm install loadbalance-middleware
```

## api

### `loadbalance.random(array)`
Creates a middleware that randomly (and evently) distributes requests between the middlewares specified in the provided array

### `loadbalance.roundRobin(array)`
Creates a middleware that distributes requests between the middlewares specified in the provided array in a round robin fashion

### `loadbalance.engine(engine)`
For more custom uses or tweaks, tou can use any engine in [loadbalance](https://github.com/kessler/node-loadbalance)

## license

[MIT](http://opensource.org/licenses/MIT) © [yaniv kessler](blog.yanivkessler.com)
