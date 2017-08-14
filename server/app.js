const Koa = require('koa')
const static = require('koa-static')
const http = require('http')
const path = require('path')
const staticPath = '../dist'
const app = new Koa()

app.use(static(
  path.join( __dirname,  staticPath)
))

const server = http.createServer(app.callback())


const io = require('socket.io')(server);

io.on('connection', function(){
  console.log('websocket connect sucess')
  setInterval(function () {
    io.send('hello world') },
    1000)
});


server.listen(3000, function () {
  console.log('http listenning 3000')
})
















