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
    instance = new FootballApi.SeasonApi();
  });

  describe('(package)', function() {
    describe('SeasonApi', function() {
      describe('v2SeasonsDetailsGet', function() {
        it('should call v2SeasonsDetailsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for v2SeasonsDetailsGet call and complete the assertions
          /*
          var opts = {};

          instance.v2SeasonsDetailsGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.V2SeasonDetails);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v2SeasonsGet', function() {
        it('should call v2SeasonsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for v2SeasonsGet call and complete the assertions
          /*
          var opts = {};

          instance.v2SeasonsGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.V2SeasonList);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v2SeasonsIdPut', function() {
        it('should call v2SeasonsIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for v2SeasonsIdPut call and complete the assertions
          /*

          instance.v2SeasonsIdPut(body, id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.V2Season);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v2SeasonsIdStagesGet', function() {
        it('should call v2SeasonsIdStagesGet successfully', function(done) {
          // TODO: uncomment, update parameter values for v2SeasonsIdStagesGet call and complete the assertions
          /*
          var opts = {};

          instance.v2SeasonsIdStagesGet(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.V2SeasonStageCollection);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v2SeasonsIdStagesPost', function() {
        it('should call v2SeasonsIdStagesPost successfully', function(done) {
          // TODO: uncomment, update parameter values for v2SeasonsIdStagesPost call and complete the assertions
          /*

          instance.v2SeasonsIdStagesPost(body, id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.V2SeasonStageCollection);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v2SeasonsPost', function() {
        it('should call v2SeasonsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for v2SeasonsPost call and complete the assertions
          /*

          instance.v2SeasonsPost(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.V2Season);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v2StagesIdDelete', function() {
        it('should call v2StagesIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for v2StagesIdDelete call
          /*

          instance.v2StagesIdDelete(id, function(error, data, response) {
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
      describe('v2TournamentsIdSeasonsCurrentPatch', function() {
        it('should call v2TournamentsIdSeasonsCurrentPatch successfully', function(done) {
          // TODO: uncomment, update parameter values for v2TournamentsIdSeasonsCurrentPatch call and complete the assertions
          /*

          instance.v2TournamentsIdSeasonsCurrentPatch(body, id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.V2Season);

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
