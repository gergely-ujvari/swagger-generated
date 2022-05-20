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
import {ApiClient} from '../ApiClient';
import {LeagueStandingData} from './LeagueStandingData';
import {StageGroupWithStanding} from './StageGroupWithStanding';
import {TournamentSeasonStage} from './TournamentSeasonStage';

/**
 * The StageGroupWithStandingTournamentSeasonStage model module.
 * @module model/StageGroupWithStandingTournamentSeasonStage
 * @version 0.0.1
 */
export class StageGroupWithStandingTournamentSeasonStage extends StageGroupWithStanding {
  /**
   * Constructs a new <code>StageGroupWithStandingTournamentSeasonStage</code>.
   * @alias module:model/StageGroupWithStandingTournamentSeasonStage
   * @class
   * @extends module:model/StageGroupWithStanding
   * @param tournamentSeasonStage {} 
   */
  constructor(tournamentSeasonStage) {
    super(id, name);
    this.tournamentSeasonStage = tournamentSeasonStage;
  }

  /**
   * Constructs a <code>StageGroupWithStandingTournamentSeasonStage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StageGroupWithStandingTournamentSeasonStage} obj Optional instance to populate.
   * @return {module:model/StageGroupWithStandingTournamentSeasonStage} The populated <code>StageGroupWithStandingTournamentSeasonStage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StageGroupWithStandingTournamentSeasonStage();
      StageGroupWithStanding.constructFromObject(data, obj);
      if (data.hasOwnProperty('tournament_season_stage'))
        obj.tournamentSeasonStage = TournamentSeasonStage.constructFromObject(data['tournament_season_stage']);
    }
    return obj;
  }
}

/**
 * @member {module:model/TournamentSeasonStage} tournamentSeasonStage
 */
StageGroupWithStandingTournamentSeasonStage.prototype.tournamentSeasonStage = undefined;

