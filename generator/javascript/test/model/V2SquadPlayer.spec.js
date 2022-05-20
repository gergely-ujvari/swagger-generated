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
    describe('V2SquadPlayer', function() {
      beforeEach(function() {
        instance = new FootballApi.V2SquadPlayer();
      });

      it('should create an instance of V2SquadPlayer', function() {
        // TODO: update the code to test V2SquadPlayer
        expect(instance).to.be.a(FootballApi.V2SquadPlayer);
      });

      it('should have the property player (base name: "player")', function() {
        // TODO: update the code to test the property player
        expect(instance).to.have.property('player');
        // expect(instance.player).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property contractType (base name: "contract_type")', function() {
        // TODO: update the code to test the property contractType
        expect(instance).to.have.property('contractType');
        // expect(instance.contractType).to.be(expectedValueLiteral);
      });

      it('should have the property startDate (base name: "start_date")', function() {
        // TODO: update the code to test the property startDate
        expect(instance).to.have.property('startDate');
        // expect(instance.startDate).to.be(expectedValueLiteral);
      });

      it('should have the property endDate (base name: "end_date")', function() {
        // TODO: update the code to test the property endDate
        expect(instance).to.have.property('endDate');
        // expect(instance.endDate).to.be(expectedValueLiteral);
      });

      it('should have the property shirtNumber (base name: "shirt_number")', function() {
        // TODO: update the code to test the property shirtNumber
        expect(instance).to.have.property('shirtNumber');
        // expect(instance.shirtNumber).to.be(expectedValueLiteral);
      });

    });
  });

}));