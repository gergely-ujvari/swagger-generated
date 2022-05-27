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
    instance = new FootballApi.MatchesApi();
  });

  describe('(package)', function() {
    describe('MatchesApi', function() {
      describe('matchesIdCommentaryGet', function() {
        it('should call matchesIdCommentaryGet successfully', function(done) {
          // TODO: uncomment, update parameter values for matchesIdCommentaryGet call and complete the assertions
          /*

          instance.matchesIdCommentaryGet(id, languageCode, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(FootballApi.LiveCommentaryOutputDto);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v2MatchesGet', function() {
        it('should call v2MatchesGet successfully', function(done) {
          // TODO: uncomment, update parameter values for v2MatchesGet call and complete the assertions
          /*
          var opts = {};

          instance.v2MatchesGet(limit, offset, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(FootballApi.V2Match);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v2MatchesIdGet', function() {
        it('should call v2MatchesIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for v2MatchesIdGet call and complete the assertions
          /*
          var opts = {};

          instance.v2MatchesIdGet(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.V2Match);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v2MatchesIdPut', function() {
        it('should call v2MatchesIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for v2MatchesIdPut call and complete the assertions
          /*

          instance.v2MatchesIdPut(body, id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.V2Match);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v2MatchesLivescoreGet', function() {
        it('should call v2MatchesLivescoreGet successfully', function(done) {
          // TODO: uncomment, update parameter values for v2MatchesLivescoreGet call and complete the assertions
          /*
          var opts = {};

          instance.v2MatchesLivescoreGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(FootballApi.V2Match);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v2MatchesPost', function() {
        it('should call v2MatchesPost successfully', function(done) {
          // TODO: uncomment, update parameter values for v2MatchesPost call and complete the assertions
          /*

          instance.v2MatchesPost(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.V2Match);

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