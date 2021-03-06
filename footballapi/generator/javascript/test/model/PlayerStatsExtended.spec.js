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
    describe('PlayerStatsExtended', function() {
      beforeEach(function() {
        instance = new FootballApi.PlayerStatsExtended();
      });

      it('should create an instance of PlayerStatsExtended', function() {
        // TODO: update the code to test PlayerStatsExtended
        expect(instance).to.be.a(FootballApi.PlayerStatsExtended);
      });

      it('should have the property conceded (base name: "conceded")', function() {
        // TODO: update the code to test the property conceded
        expect(instance).to.have.property('conceded');
        // expect(instance.conceded).to.be(expectedValueLiteral);
      });

      it('should have the property substitute (base name: "substitute")', function() {
        // TODO: update the code to test the property substitute
        expect(instance).to.have.property('substitute');
        // expect(instance.substitute).to.be(expectedValueLiteral);
      });

      it('should have the property cleansheets (base name: "cleansheets")', function() {
        // TODO: update the code to test the property cleansheets
        expect(instance).to.have.property('cleansheets');
        // expect(instance.cleansheets).to.be(expectedValueLiteral);
      });

      it('should have the property substituteIn (base name: "substitute_in")', function() {
        // TODO: update the code to test the property substituteIn
        expect(instance).to.have.property('substituteIn');
        // expect(instance.substituteIn).to.be(expectedValueLiteral);
      });

      it('should have the property substituteOut (base name: "substitute_out")', function() {
        // TODO: update the code to test the property substituteOut
        expect(instance).to.have.property('substituteOut');
        // expect(instance.substituteOut).to.be(expectedValueLiteral);
      });

      it('should have the property minutesSubstitute (base name: "minutes_substitute")', function() {
        // TODO: update the code to test the property minutesSubstitute
        expect(instance).to.have.property('minutesSubstitute');
        // expect(instance.minutesSubstitute).to.be(expectedValueLiteral);
      });

    });
  });

}));
