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
    describe('V2LeagueStandingInput', function() {
      beforeEach(function() {
        instance = new FootballApi.V2LeagueStandingInput();
      });

      it('should create an instance of V2LeagueStandingInput', function() {
        // TODO: update the code to test V2LeagueStandingInput
        expect(instance).to.be.a(FootballApi.V2LeagueStandingInput);
      });

      it('should have the property entries (base name: "entries")', function() {
        // TODO: update the code to test the property entries
        expect(instance).to.have.property('entries');
        // expect(instance.entries).to.be(expectedValueLiteral);
      });

    });
  });

}));