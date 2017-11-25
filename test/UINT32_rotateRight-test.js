define(function(){var require = WILTON_requiresync;var module = {exports: {}};var exports = module.exports;
var assert = require('assert'); var describe = require("tape-compat"); var it = describe.it;;
var UINT32 = require('cuint').UINT32

describe('rotateRight method', function () {

  describe('0rotr1', function () {

    it('should return 0', function (done) {
      var u = UINT32(0).rotateRight(1)

      assert.equal( u.toNumber(), 0 )
      done()
    })

  })

  describe('4rotr1', function () {

    it('should return 2', function (done) {
      var u = UINT32(4).rotateRight(1)

      assert.equal( u.toNumber(), 2 )
      done()
    })

  })

  describe('2^16rotr16', function () {

    it('should return 1', function (done) {
      var n = Math.pow(2, 16)
      var u = UINT32(n).rotateRight(16)

      assert.equal( u.toNumber(), 1 )
      done()
    })

  })

  describe('1rotr32', function () {

    it('should return 1', function (done) {
      var u = UINT32(1).rotateRight(32)

      assert.equal( u.toNumber(), 1 )
      done()
    })

  })

})

return module.exports;});
