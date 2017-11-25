define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var assert = require('assert'); var describe = require("tape-compat"); var it = describe.it;;
var UINT64 = require('cuint').UINT64

describe('rotateLeft method', function () {

  describe('0rotl1', function () {

    it('should return 0', function (done) {
      var u = UINT64(0).rotateLeft(1)

      assert.equal( u.toNumber(), 0 )
      done()
    })

  })

  describe('1rotl2', function () {

    it('should return 4', function (done) {
      var u = UINT64(1).rotateLeft(2)

      assert.equal( u.toNumber(), 4 )
      done()
    })

  })

  describe('1rotl16', function () {

    it('should return 2^16', function (done) {
      var n = Math.pow(2, 16)
      var u = UINT64(1).rotateLeft(16)

      assert.equal( u.toNumber(), n )
      done()
    })

  })

  describe('1rotl32', function () {

    it('should return 1', function (done) {
      var u = UINT64(1).rotateLeft(32)

      assert.equal( u.toString(16), '100000000' )
      done()
    })

  })

})

return module.exports;});
