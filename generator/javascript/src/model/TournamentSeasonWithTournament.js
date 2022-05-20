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
import {Tournament} from './Tournament';
import {TournamentSeason} from './TournamentSeason';

/**
 * The TournamentSeasonWithTournament model module.
 * @module model/TournamentSeasonWithTournament
 * @version 0.0.1
 */
export class TournamentSeasonWithTournament extends TournamentSeason {
  /**
   * Constructs a new <code>TournamentSeasonWithTournament</code>.
   * @alias module:model/TournamentSeasonWithTournament
   * @class
   * @extends module:model/TournamentSeason
   * @param id {} Unique identifier of the object
   * @param name {} Human readable name of the TournamentSeason
   * @param active {} Whether the season is currently running or whether it is finished
   * @param tournament {} 
   */
  constructor(id, name, active, tournament) {
    super(id, name, active);
    this.tournament = tournament;
  }

  /**
   * Constructs a <code>TournamentSeasonWithTournament</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TournamentSeasonWithTournament} obj Optional instance to populate.
   * @return {module:model/TournamentSeasonWithTournament} The populated <code>TournamentSeasonWithTournament</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TournamentSeasonWithTournament();
      TournamentSeason.constructFromObject(data, obj);
      if (data.hasOwnProperty('tournament'))
        obj.tournament = Tournament.constructFromObject(data['tournament']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Tournament} tournament
 */
TournamentSeasonWithTournament.prototype.tournament = undefined;

