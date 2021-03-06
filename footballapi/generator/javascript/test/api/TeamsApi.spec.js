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
    instance = new FootballApi.TeamsApi();
  });

  describe('(package)', function() {
    describe('TeamsApi', function() {
      describe('countriesIdTeamsGet', function() {
        it('should call countriesIdTeamsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for countriesIdTeamsGet call and complete the assertions
          /*
          var opts = {};

          instance.countriesIdTeamsGet(id, opts, function(error, data, response) {
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
              expect(data).to.be.a(FootballApi.Team);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('teamsGet', function() {
        it('should call teamsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for teamsGet call and complete the assertions
          /*
          var opts = {};

          instance.teamsGet(name, opts, function(error, data, response) {
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
              expect(data).to.be.a(FootballApi.Team);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('teamsIdEventsGet', function() {
        it('should call teamsIdEventsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for teamsIdEventsGet call and complete the assertions
          /*
          var opts = {};

          instance.teamsIdEventsGet(id, opts, function(error, data, response) {
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
      describe('teamsIdFormGet', function() {
        it('should call teamsIdFormGet successfully', function(done) {
          // TODO: uncomment, update parameter values for teamsIdFormGet call and complete the assertions
          /*
          var opts = {};

          instance.teamsIdFormGet(id, opts, function(error, data, response) {
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
              expect(data).to.be.a(FootballApi.TeamForm);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('teamsIdGet', function() {
        it('should call teamsIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for teamsIdGet call and complete the assertions
          /*
          var opts = {};

          instance.teamsIdGet(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.Team);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('teamsIdPlayersGet', function() {
        it('should call teamsIdPlayersGet successfully', function(done) {
          // TODO: uncomment, update parameter values for teamsIdPlayersGet call and complete the assertions
          /*
          var opts = {};

          instance.teamsIdPlayersGet(id, opts, function(error, data, response) {
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
              expect(data).to.be.a(FootballApi.TeamPlayer);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('teamsIdPlayersStatisticsGet', function() {
        it('should call teamsIdPlayersStatisticsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for teamsIdPlayersStatisticsGet call and complete the assertions
          /*
          var opts = {};

          instance.teamsIdPlayersStatisticsGet(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.TeamPlayerSeasonStatistics);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('teamsIdPlayersStatisticsSeasonsGet', function() {
        it('should call teamsIdPlayersStatisticsSeasonsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for teamsIdPlayersStatisticsSeasonsGet call and complete the assertions
          /*
          var opts = {};

          instance.teamsIdPlayersStatisticsSeasonsGet(id, opts, function(error, data, response) {
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
              expect(data).to.be.a(FootballApi.TournamentSeasonWithTournament);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('teamsIdPlayersStatisticsSeasonsSeasonIdGet', function() {
        it('should call teamsIdPlayersStatisticsSeasonsSeasonIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for teamsIdPlayersStatisticsSeasonsSeasonIdGet call and complete the assertions
          /*
          var opts = {};

          instance.teamsIdPlayersStatisticsSeasonsSeasonIdGet(seasonId, id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.TeamPlayerSeasonStatistics);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('teamsIdStatisticsLeagueGet', function() {
        it('should call teamsIdStatisticsLeagueGet successfully', function(done) {
          // TODO: uncomment, update parameter values for teamsIdStatisticsLeagueGet call and complete the assertions
          /*
          var opts = {};

          instance.teamsIdStatisticsLeagueGet(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.TeamSeasonStatistics);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tournamentsSeasonsIdTeamsGet', function() {
        it('should call tournamentsSeasonsIdTeamsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for tournamentsSeasonsIdTeamsGet call and complete the assertions
          /*
          var opts = {};

          instance.tournamentsSeasonsIdTeamsGet(id, opts, function(error, data, response) {
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
              expect(data).to.be.a(FootballApi.PartialTeam);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('tournamentsSeasonsStagesIdTeamsGet', function() {
        it('should call tournamentsSeasonsStagesIdTeamsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for tournamentsSeasonsStagesIdTeamsGet call and complete the assertions
          /*
          var opts = {};

          instance.tournamentsSeasonsStagesIdTeamsGet(id, opts, function(error, data, response) {
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
              expect(data).to.be.a(FootballApi.PartialTeam);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v2TeamsColorsPost', function() {
        it('should call v2TeamsColorsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for v2TeamsColorsPost call and complete the assertions
          /*
          var opts = {};

          instance.v2TeamsColorsPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.V2TeamColors);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v2TeamsGet', function() {
        it('should call v2TeamsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for v2TeamsGet call and complete the assertions
          /*
          var opts = {};

          instance.v2TeamsGet(offset, limit, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.TeamPageDto);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v2TeamsIdGet', function() {
        it('should call v2TeamsIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for v2TeamsIdGet call and complete the assertions
          /*
          var opts = {};

          instance.v2TeamsIdGet(id, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.V2TeamProfile);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v2TeamsIdPut', function() {
        it('should call v2TeamsIdPut successfully', function(done) {
          // TODO: uncomment, update parameter values for v2TeamsIdPut call and complete the assertions
          /*

          instance.v2TeamsIdPut(body, id, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.V2TeamProfile);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('v2TeamsPost', function() {
        it('should call v2TeamsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for v2TeamsPost call and complete the assertions
          /*
          var opts = {};

          instance.v2TeamsPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(FootballApi.V2TeamProfile);

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
