define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var assert = require('assert'); var describe = require("tape-compat"); var it = describe.it;;
var UINT32 = require('cuint').UINT32

describe('greaterThan method', function () {

  describe('0>1', function () {

    it('should return false', function (done) {
      var u = UINT32(0).greaterThan( UINT32(1) )

      assert( !u )
      done()
    })

  })

  describe('1>2', function () {

    it('should return false', function (done) {
      var u = UINT32(1).greaterThan( UINT32(2) )

      assert( !u )
      done()
    })

  })

  describe('1>2^16', function () {

    it('should return false', function (done) {
      var n = Math.pow(2, 16)
      var u = UINT32(1).greaterThan( UINT32(n) )

      assert( !u )
      done()
    })

  })

  describe('2^16>1', function () {

    it('should return true', function (done) {
      var n = Math.pow(2, 16)
      var u = UINT32(n).greaterThan( UINT32(1) )

      assert( u )
      done()
    })

  })

})

return module.exports;});
