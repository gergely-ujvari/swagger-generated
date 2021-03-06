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
    describe('CardlistStandingData', function() {
      beforeEach(function() {
        instance = new FootballApi.CardlistStandingData();
      });

      it('should create an instance of CardlistStandingData', function() {
        // TODO: update the code to test CardlistStandingData
        expect(instance).to.be.a(FootballApi.CardlistStandingData);
      });

      it('should have the property player (base name: "player")', function() {
        // TODO: update the code to test the property player
        expect(instance).to.have.property('player');
        // expect(instance.player).to.be(expectedValueLiteral);
      });

      it('should have the property redCards (base name: "red_cards")', function() {
        // TODO: update the code to test the property redCards
        expect(instance).to.have.property('redCards');
        // expect(instance.redCards).to.be(expectedValueLiteral);
      });

      it('should have the property totalCards (base name: "total_cards")', function() {
        // TODO: update the code to test the property totalCards
        expect(instance).to.have.property('totalCards');
        // expect(instance.totalCards).to.be(expectedValueLiteral);
      });

      it('should have the property yellowCards (base name: "yellow_cards")', function() {
        // TODO: update the code to test the property yellowCards
        expect(instance).to.have.property('yellowCards');
        // expect(instance.yellowCards).to.be(expectedValueLiteral);
      });

      it('should have the property firstYellowCards (base name: "first_yellow_cards")', function() {
        // TODO: update the code to test the property firstYellowCards
        expect(instance).to.have.property('firstYellowCards');
        // expect(instance.firstYellowCards).to.be(expectedValueLiteral);
      });

    });
  });

}));
