var redis = require('redis')
  , cache = redis.createClient()
  , _ = require('../etc/utils')

module.exports = (function List(name) {
  this.name = name
}).earn('push', function (item) {
    var multi = cache.multi()
      , h = _.flatten(_.pairs(item))
      , key = item.constructor.name.toLowerCase() + ':' + item.id

    h.unshift(key)

    multi.hmset.apply(multi, h)
    multi.lpush(this.name, key)
    multi.exec(function (err, res) {
      if (err) throw err
    })
  })
  .earn('pull', function (item) {
    var multi = cache.multi()
      , key = item.constructor.name.toLowerCase() + ':' + item.id

    multi.del(key)
    multi.lrem(this.name, -1, key)
    multi.exec(function (err, res) {
      if (err) throw err
    })
  })
