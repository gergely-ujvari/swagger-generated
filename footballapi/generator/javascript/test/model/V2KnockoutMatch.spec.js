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
    describe('V2KnockoutMatch', function() {
      beforeEach(function() {
        instance = new FootballApi.V2KnockoutMatch();
      });

      it('should create an instance of V2KnockoutMatch', function() {
        // TODO: update the code to test V2KnockoutMatch
        expect(instance).to.be.a(FootballApi.V2KnockoutMatch);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property kickoffTime (base name: "kickoff_time")', function() {
        // TODO: update the code to test the property kickoffTime
        expect(instance).to.have.property('kickoffTime');
        // expect(instance.kickoffTime).to.be(expectedValueLiteral);
      });

      it('should have the property score (base name: "score")', function() {
        // TODO: update the code to test the property score
        expect(instance).to.have.property('score');
        // expect(instance.score).to.be(expectedValueLiteral);
      });

      it('should have the property homeTeamId (base name: "home_team_id")', function() {
        // TODO: update the code to test the property homeTeamId
        expect(instance).to.have.property('homeTeamId');
        // expect(instance.homeTeamId).to.be(expectedValueLiteral);
      });

      it('should have the property awayTeamId (base name: "away_team_id")', function() {
        // TODO: update the code to test the property awayTeamId
        expect(instance).to.have.property('awayTeamId');
        // expect(instance.awayTeamId).to.be(expectedValueLiteral);
      });

    });
  });

}));