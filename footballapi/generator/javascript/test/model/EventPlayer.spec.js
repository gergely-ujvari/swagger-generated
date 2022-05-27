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
    describe('EventPlayer', function() {
      beforeEach(function() {
        instance = new FootballApi.EventPlayer();
      });

      it('should create an instance of EventPlayer', function() {
        // TODO: update the code to test EventPlayer
        expect(instance).to.be.a(FootballApi.EventPlayer);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property player (base name: "player")', function() {
        // TODO: update the code to test the property player
        expect(instance).to.have.property('player');
        // expect(instance.player).to.be(expectedValueLiteral);
      });

      it('should have the property eventPlayerType (base name: "event_player_type")', function() {
        // TODO: update the code to test the property eventPlayerType
        expect(instance).to.have.property('eventPlayerType');
        // expect(instance.eventPlayerType).to.be(expectedValueLiteral);
      });

      it('should have the property homeTeam (base name: "home_team")', function() {
        // TODO: update the code to test the property homeTeam
        expect(instance).to.have.property('homeTeam');
        // expect(instance.homeTeam).to.be(expectedValueLiteral);
      });

      it('should have the property positionX (base name: "position_x")', function() {
        // TODO: update the code to test the property positionX
        expect(instance).to.have.property('positionX');
        // expect(instance.positionX).to.be(expectedValueLiteral);
      });

      it('should have the property positionY (base name: "position_y")', function() {
        // TODO: update the code to test the property positionY
        expect(instance).to.have.property('positionY');
        // expect(instance.positionY).to.be(expectedValueLiteral);
      });

      it('should have the property positionNumber (base name: "position_number")', function() {
        // TODO: update the code to test the property positionNumber
        expect(instance).to.have.property('positionNumber');
        // expect(instance.positionNumber).to.be(expectedValueLiteral);
      });

      it('should have the property shirtNumber (base name: "shirt_number")', function() {
        // TODO: update the code to test the property shirtNumber
        expect(instance).to.have.property('shirtNumber');
        // expect(instance.shirtNumber).to.be(expectedValueLiteral);
      });

    });
  });

}));