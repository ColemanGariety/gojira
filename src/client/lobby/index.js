var React = require('react')
  , net = require('net')
  , Login = require('./login')

// Constants
var lobby

function Lobby() {
  this.socket = net.connect(1337, function () {
    React.renderComponent(Login(), document.querySelector('body'))
  })
}

lobby = new Lobby()

module.exports = function () {
  return lobby
}
