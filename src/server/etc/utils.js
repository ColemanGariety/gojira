/* PROTOTYPE */

Function.prototype.earn = function (property, value) {
  this.prototype[property] = value
  return this
}
 
Function.prototype.inherit = function (parent) {
  this.__super__ = parent
  this.prototype = Object.create(parent.prototype, {
    constructor: {
      value: this,
      enumerable: false,
      writable: true,
      configurable: true
    }
  })
  return this
}

/* LODASH */

var _ = module.exports = require('lodash')

_.mixin({
  make: function () {
    var constructor = Array.prototype.shift.call(arguments)

    return new function () {
      this.prototype = Object.create(constructor.prototype, {
        constructor: {
          value: this,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })

      return constructor.apply(this, arguments)
    }()
  }
})
