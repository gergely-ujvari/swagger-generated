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
    instance = new FootballApi.TeamSquadApi();
  });

  describe('(package)', function() {
    describe('TeamSquadApi', function() {
      describe('v2TeamsIdSquadGet', function() {
        it('should call v2TeamsIdSquadGet successfully', function(done) {
          // TODO: uncomment, update parameter values for v2TeamsIdSquadGet call and complete the assertions
          /*
          var opts = {};

          instance.v2TeamsIdSquadGet(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.V2TeamSquad);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v2TeamsIdSquadPatch', function() {
        it('should call v2TeamsIdSquadPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for v2TeamsIdSquadPatch call and complete the assertions
          /*

          instance.v2TeamsIdSquadPatch(body, id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.V2TeamSquad);

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