require('./check-versions')()

const io = require('socket.io')
const Koa = require('koa')
const convert = require('koa-convert')
const static = require('koa-static')
const { koaHotMiddleware } = require('koa-webpack-middleware-zm')
const http = require('http')

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

let app = new Koa()
// var app = express()
var compiler = webpack(webpackConfig)

const server = http.createServer(app.callback())
const ws = io(server)
var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: false,
  heartbeat: 2000
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(convert(proxyMiddleware(options.filter || context, options)))
})

// handle fallback for HTML5 history API
// app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use((ctx, next) => {
  return devMiddleware(ctx.req, {
    end: content => ctx.body = content,
    setHeader: (name, value) => {
      ctx.set(name, value);
    }
  }, next)
})

// enable hot-reload and state-preserving
// compilation error display
app.use(koaHotMiddleware(hotMiddleware))

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
// app.use(staticPath, express.static('./static'))
app.use(static(staticPath))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})






//创建一个websocket链接
ws.on('connection', () => {
  console.log('client connect sucess')
  setInterval(() => {
    ws.send('hello')
  }, 2000)
})
server.listen(3000, () => {
  console.log('http server listnning 3000')
})


module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
