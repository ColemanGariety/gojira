var server = require('../index')

module.exports = (function Schema(name, callback) {
  this.name = name
  this.collection = server().mongodb.collection(name)
}).earn('create', function (obj, callback) {
    
  })
  .earn('all', function (callback) {
    
  })
  .earn('find', function (obj, callback) {
    this.collection.find(obj).nextObject(function (err, doc) {
      if (err) throw err
      callback(doc)
    })
  })
  .earn('destroy', function () {
    
  })
