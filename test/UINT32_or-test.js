define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var assert = require('assert'); var describe = require("tape-compat"); var it = describe.it;;
var UINT32 = require('cuint').UINT32

describe('or method', function () {

  describe('0|1', function () {

    it('should return 1', function (done) {
      var u = UINT32(0).or( UINT32(1) )

      assert.equal( u.toNumber(), 1 )
      done()
    })

  })

  describe('1|2', function () {

    it('should return 3', function (done) {
      var u = UINT32(1).or( UINT32(2) )

      assert.equal( u.toNumber(), 3 )
      done()
    })

  })

  describe('1|2^16', function () {

    it('should return n+1', function (done) {
      var n = Math.pow(2, 16)
      var u = UINT32(1).or( UINT32(n) )

      assert.equal( u.toNumber(), n+1 )
      done()
    })

  })

  describe('2^16|1', function () {

    it('should return n+1', function (done) {
      var n = Math.pow(2, 16)
      var u = UINT32(n).or( UINT32(1) )

      assert.equal( u.toNumber(), n+1 )
      done()
    })

  })

})

return module.exports;});
