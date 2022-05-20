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
    describe('EventIncident', function() {
      beforeEach(function() {
        instance = new FootballApi.EventIncident();
      });

      it('should create an instance of EventIncident', function() {
        // TODO: update the code to test EventIncident
        expect(instance).to.be.a(FootballApi.EventIncident);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property eventId (base name: "event_id")', function() {
        // TODO: update the code to test the property eventId
        expect(instance).to.have.property('eventId');
        // expect(instance.eventId).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property homeTeam (base name: "home_team")', function() {
        // TODO: update the code to test the property homeTeam
        expect(instance).to.have.property('homeTeam');
        // expect(instance.homeTeam).to.be(expectedValueLiteral);
      });

      it('should have the property minute (base name: "minute")', function() {
        // TODO: update the code to test the property minute
        expect(instance).to.have.property('minute');
        // expect(instance.minute).to.be(expectedValueLiteral);
      });

      it('should have the property teamId (base name: "team_id")', function() {
        // TODO: update the code to test the property teamId
        expect(instance).to.have.property('teamId');
        // expect(instance.teamId).to.be(expectedValueLiteral);
      });

      it('should have the property goalHome (base name: "goal_home")', function() {
        // TODO: update the code to test the property goalHome
        expect(instance).to.have.property('goalHome');
        // expect(instance.goalHome).to.be(expectedValueLiteral);
      });

      it('should have the property goalAway (base name: "goal_away")', function() {
        // TODO: update the code to test the property goalAway
        expect(instance).to.have.property('goalAway');
        // expect(instance.goalAway).to.be(expectedValueLiteral);
      });

      it('should have the property player (base name: "player")', function() {
        // TODO: update the code to test the property player
        expect(instance).to.have.property('player');
        // expect(instance.player).to.be(expectedValueLiteral);
      });

      it('should have the property relPlayer (base name: "rel_player")', function() {
        // TODO: update the code to test the property relPlayer
        expect(instance).to.have.property('relPlayer');
        // expect(instance.relPlayer).to.be(expectedValueLiteral);
      });

      it('should have the property deleted (base name: "deleted")', function() {
        // TODO: update the code to test the property deleted
        expect(instance).to.have.property('deleted');
        // expect(instance.deleted).to.be(expectedValueLiteral);
      });

      it('should have the property sortorder (base name: "sortorder")', function() {
        // TODO: update the code to test the property sortorder
        expect(instance).to.have.property('sortorder');
        // expect(instance.sortorder).to.be(expectedValueLiteral);
      });

    });
  });

}));
