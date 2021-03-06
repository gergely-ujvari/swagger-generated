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
    describe('V2StageDetails', function() {
      beforeEach(function() {
        instance = new FootballApi.V2StageDetails();
      });

      it('should create an instance of V2StageDetails', function() {
        // TODO: update the code to test V2StageDetails
        expect(instance).to.be.a(FootballApi.V2StageDetails);
      });

      it('should have the property stage (base name: "stage")', function() {
        // TODO: update the code to test the property stage
        expect(instance).to.have.property('stage');
        // expect(instance.stage).to.be(expectedValueLiteral);
      });

      it('should have the property rounds (base name: "rounds")', function() {
        // TODO: update the code to test the property rounds
        expect(instance).to.have.property('rounds');
        // expect(instance.rounds).to.be(expectedValueLiteral);
      });

    });
  });

}));
