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

  beforeEach(function() {
    instance = new FootballApi.StandingsApi();
  });

  describe('(package)', function() {
    describe('StandingsApi', function() {
      describe('v2StandingsLeagueEntityIdPut', function() {
        it('should call v2StandingsLeagueEntityIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for v2StandingsLeagueEntityIdPut call
          /*

          instance.v2StandingsLeagueEntityIdPut(body, entity, id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v2StandingsLeagueEntityIdRulesPut', function() {
        it('should call v2StandingsLeagueEntityIdRulesPut successfully', function(done) {
          // TODO: uncomment, update parameter values for v2StandingsLeagueEntityIdRulesPut call
          /*

          instance.v2StandingsLeagueEntityIdRulesPut(body, entity, id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v2StandingsTopscorerEntityIdPut', function() {
        it('should call v2StandingsTopscorerEntityIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for v2StandingsTopscorerEntityIdPut call
          /*

          instance.v2StandingsTopscorerEntityIdPut(body, entity, id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));