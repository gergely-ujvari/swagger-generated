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
    describe('V2TopScorerEntryInput', function() {
      beforeEach(function() {
        instance = new FootballApi.V2TopScorerEntryInput();
      });

      it('should create an instance of V2TopScorerEntryInput', function() {
        // TODO: update the code to test V2TopScorerEntryInput
        expect(instance).to.be.a(FootballApi.V2TopScorerEntryInput);
      });

      it('should have the property teamId (base name: "team_id")', function() {
        // TODO: update the code to test the property teamId
        expect(instance).to.have.property('teamId');
        // expect(instance.teamId).to.be(expectedValueLiteral);
      });

      it('should have the property playerId (base name: "player_id")', function() {
        // TODO: update the code to test the property playerId
        expect(instance).to.have.property('playerId');
        // expect(instance.playerId).to.be(expectedValueLiteral);
      });

      it('should have the property rank (base name: "rank")', function() {
        // TODO: update the code to test the property rank
        expect(instance).to.have.property('rank');
        // expect(instance.rank).to.be(expectedValueLiteral);
      });

      it('should have the property goals (base name: "goals")', function() {
        // TODO: update the code to test the property goals
        expect(instance).to.have.property('goals');
        // expect(instance.goals).to.be(expectedValueLiteral);
      });

      it('should have the property played (base name: "played")', function() {
        // TODO: update the code to test the property played
        expect(instance).to.have.property('played');
        // expect(instance.played).to.be(expectedValueLiteral);
      });

      it('should have the property assists (base name: "assists")', function() {
        // TODO: update the code to test the property assists
        expect(instance).to.have.property('assists');
        // expect(instance.assists).to.be(expectedValueLiteral);
      });

      it('should have the property scoredFirst (base name: "scored_first")', function() {
        // TODO: update the code to test the property scoredFirst
        expect(instance).to.have.property('scoredFirst');
        // expect(instance.scoredFirst).to.be(expectedValueLiteral);
      });

      it('should have the property minutes (base name: "minutes")', function() {
        // TODO: update the code to test the property minutes
        expect(instance).to.have.property('minutes');
        // expect(instance.minutes).to.be(expectedValueLiteral);
      });

      it('should have the property penalties (base name: "penalties")', function() {
        // TODO: update the code to test the property penalties
        expect(instance).to.have.property('penalties');
        // expect(instance.penalties).to.be(expectedValueLiteral);
      });

      it('should have the property yellowCards (base name: "yellow_cards")', function() {
        // TODO: update the code to test the property yellowCards
        expect(instance).to.have.property('yellowCards');
        // expect(instance.yellowCards).to.be(expectedValueLiteral);
      });

      it('should have the property redCards (base name: "red_cards")', function() {
        // TODO: update the code to test the property redCards
        expect(instance).to.have.property('redCards');
        // expect(instance.redCards).to.be(expectedValueLiteral);
      });

    });
  });

}));
