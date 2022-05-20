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
    describe('V2MatchMinute', function() {
      beforeEach(function() {
        instance = new FootballApi.V2MatchMinute();
      });

      it('should create an instance of V2MatchMinute', function() {
        // TODO: update the code to test V2MatchMinute
        expect(instance).to.be.a(FootballApi.V2MatchMinute);
      });

      it('should have the property regularTime (base name: "regular_time")', function() {
        // TODO: update the code to test the property regularTime
        expect(instance).to.have.property('regularTime');
        // expect(instance.regularTime).to.be(expectedValueLiteral);
      });

      it('should have the property injuryTime (base name: "injury_time")', function() {
        // TODO: update the code to test the property injuryTime
        expect(instance).to.have.property('injuryTime');
        // expect(instance.injuryTime).to.be(expectedValueLiteral);
      });

    });
  });

}));