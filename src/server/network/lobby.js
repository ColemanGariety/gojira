var eventFactory = require('./event-factory')
  , net = require('net')
  , List = require('../storage/list')

module.exports = (function Lobby (settings) {
  net.createServer(function (socket) {
    socket.on('data', function (msg) {
      eventFactory(msg.toString(), socket)
    })
  }).listen(settings.port)
  this.mongodb = settings.mongodb
})
