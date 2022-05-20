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
    instance = new FootballApi.RefereesApi();
  });

  describe('(package)', function() {
    describe('RefereesApi', function() {
      describe('v2RefereesGet', function() {
        it('should call v2RefereesGet successfully', function(done) {
          // TODO: uncomment, update parameter values for v2RefereesGet call and complete the assertions
          /*
          var opts = {};

          instance.v2RefereesGet(offset, limit, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.RefereePageDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v2RefereesIdGet', function() {
        it('should call v2RefereesIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for v2RefereesIdGet call and complete the assertions
          /*
          var opts = {};

          instance.v2RefereesIdGet(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.RefereeDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v2RefereesIdPut', function() {
        it('should call v2RefereesIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for v2RefereesIdPut call and complete the assertions
          /*
          var opts = {};

          instance.v2RefereesIdPut(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.RefereeDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v2RefereesPost', function() {
        it('should call v2RefereesPost successfully', function(done) {
          // TODO: uncomment, update parameter values for v2RefereesPost call and complete the assertions
          /*
          var opts = {};

          instance.v2RefereesPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.RefereeDto);

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
