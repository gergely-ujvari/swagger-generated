/*
 * Football API
 * API for accessing various kinds of football data, updated in real time.
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.FootballApi);
  }
}(this, function(expect, FootballApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('V2TeamColors', function() {
      beforeEach(function() {
        instance = new FootballApi.V2TeamColors();
      });

      it('should create an instance of V2TeamColors', function() {
        // TODO: update the code to test V2TeamColors
        expect(instance).to.be.a(FootballApi.V2TeamColors);
      });

      it('should have the property entityType (base name: "entity_type")', function() {
        // TODO: update the code to test the property entityType
        expect(instance).to.have.property('entityType');
        // expect(instance.entityType).to.be(expectedValueLiteral);
      });

      it('should have the property entityId (base name: "entity_id")', function() {
        // TODO: update the code to test the property entityId
        expect(instance).to.have.property('entityId');
        // expect(instance.entityId).to.be(expectedValueLiteral);
      });

      it('should have the property colors (base name: "colors")', function() {
        // TODO: update the code to test the property colors
        expect(instance).to.have.property('colors');
        // expect(instance.colors).to.be(expectedValueLiteral);
      });

    });
  });

}));