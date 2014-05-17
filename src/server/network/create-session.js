var Socket = require('net').Socket
  , server = require('../index')
  , _ = require('../etc/utils')
  , shortId = require('shortid')
  , User = require('../data/user')

module.exports = function createSession(id, socket, callback) {
  User.find({ id: id }, function (doc) {
    if (doc) {
      socket.id = shortId.generate()

      callback({
        id: id
      , timestamp: Date.now()
      , socketId: socket.id
      })
    } else callback(false)
  }.bind(this))
}
