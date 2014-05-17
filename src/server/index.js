// Modules
var MongoClient = require('mongodb').MongoClient
  , List = require('./storage/list')
  , server = {}

// Ensure mongo is connected before accepting clients
MongoClient.connect('mongodb://jackson@localhost:27017/gojira', function (err, db) {
  if (err) throw err

  server.mongodb = db
  server.clients = new List('clients')

  var Lobby = require('./network/lobby')

  server.lobby = new Lobby({
    port: 1337
  , mongodb: db
  })
})

module.exports = function () {
  return server
}
