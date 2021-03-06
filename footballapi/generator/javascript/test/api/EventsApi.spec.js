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
    instance = new FootballApi.EventsApi();
  });

  describe('(package)', function() {
    describe('EventsApi', function() {
      describe('eventsByTeamsGet', function() {
        it('should call eventsByTeamsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for eventsByTeamsGet call and complete the assertions
          /*
          var opts = {};

          instance.eventsByTeamsGet(homeId, awayId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.Event);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('eventsGet', function() {
        it('should call eventsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for eventsGet call and complete the assertions
          /*
          var opts = {};

          instance.eventsGet(opts, function(error, data, response) {
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
              expect(data).to.be.a(FootballApi.Event);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('eventsIdGet', function() {
        it('should call eventsIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for eventsIdGet call and complete the assertions
          /*
          var opts = {};

          instance.eventsIdGet(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.Event);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('eventsIdIncidentsGet', function() {
        it('should call eventsIdIncidentsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for eventsIdIncidentsGet call and complete the assertions
          /*
          var opts = {};

          instance.eventsIdIncidentsGet(id, opts, function(error, data, response) {
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
              expect(data).to.be.a(FootballApi.EventIncident);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('eventsIdLineupsGet', function() {
        it('should call eventsIdLineupsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for eventsIdLineupsGet call and complete the assertions
          /*
          var opts = {};

          instance.eventsIdLineupsGet(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.Lineup);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('eventsIdPlayersGet', function() {
        it('should call eventsIdPlayersGet successfully', function(done) {
          // TODO: uncomment, update parameter values for eventsIdPlayersGet call and complete the assertions
          /*
          var opts = {};

          instance.eventsIdPlayersGet(id, opts, function(error, data, response) {
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
              expect(data).to.be.a(FootballApi.EventPlayer);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('eventsIdPregameoddsGet', function() {
        it('should call eventsIdPregameoddsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for eventsIdPregameoddsGet call and complete the assertions
          /*

          instance.eventsIdPregameoddsGet(id, xOddClient, function(error, data, response) {
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
              expect(data).to.be.a(FootballApi.Odd);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('eventsLiveGet', function() {
        it('should call eventsLiveGet successfully', function(done) {
          // TODO: uncomment, update parameter values for eventsLiveGet call and complete the assertions
          /*
          var opts = {};

          instance.eventsLiveGet(opts, function(error, data, response) {
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
              expect(data).to.be.a(FootballApi.Event);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('eventsSinceGet', function() {
        it('should call eventsSinceGet successfully', function(done) {
          // TODO: uncomment, update parameter values for eventsSinceGet call and complete the assertions
          /*
          var opts = {};

          instance.eventsSinceGet(opts, function(error, data, response) {
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
              expect(data).to.be.a(FootballApi.Event);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('matchesGet', function() {
        it('should call matchesGet successfully', function(done) {
          // TODO: uncomment, update parameter values for matchesGet call and complete the assertions
          /*
          var opts = {};

          instance.matchesGet(opts, function(error, data, response) {
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
              expect(data).to.be.a(FootballApi.Event);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tournamentsSeasonsStagesIdEventsGet', function() {
        it('should call tournamentsSeasonsStagesIdEventsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for tournamentsSeasonsStagesIdEventsGet call and complete the assertions
          /*
          var opts = {};

          instance.tournamentsSeasonsStagesIdEventsGet(id, opts, function(error, data, response) {
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
              expect(data).to.be.a(FootballApi.EventsByDate);
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
