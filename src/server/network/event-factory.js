var createSession = require('./create-session')
  , createMessage = require('./create-message')
  , _ = require('../etc/utils')

module.exports = function EventFactory(string, socket) {
  var parts = string.split(':')
  
  switch (parts.shift()) {
    case 'session':
      var id = parts[0]
      createSession(id, socket, function (session) {
        if (session) {
          var lobby = require('../index')()

          lobby.clients.push(session)

          socket.on('end', function () {
            lobby.clients.pull(session)
          })

          socket.write(createMessage("logged in!"))
        } else socket.write(createMessage("User '" + id +"' not found"))
      })

  }
}
