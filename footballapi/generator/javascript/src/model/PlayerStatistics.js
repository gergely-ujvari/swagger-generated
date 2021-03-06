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
import {PartialPerson} from './PartialPerson';
import {PartialTeam} from './PartialTeam';
import {PlayerStatsExtended} from './PlayerStatsExtended';
import {TournamentSeasonWithTournament} from './TournamentSeasonWithTournament';

/**
 * The PlayerStatistics model module.
 * @module model/PlayerStatistics
 * @version 0.0.1
 */
export class PlayerStatistics extends PlayerStatsExtended {
  /**
   * Constructs a new <code>PlayerStatistics</code>.
   * @alias module:model/PlayerStatistics
   * @class
   * @extends module:model/PlayerStatsExtended
   */
  constructor() {
    super(goals, played, minutes, redCards, yellowCards);
  }

  /**
   * Constructs a <code>PlayerStatistics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayerStatistics} obj Optional instance to populate.
   * @return {module:model/PlayerStatistics} The populated <code>PlayerStatistics</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PlayerStatistics();
      PlayerStatsExtended.constructFromObject(data, obj);
      if (data.hasOwnProperty('tournament_season'))
        obj.tournamentSeason = TournamentSeasonWithTournament.constructFromObject(data['tournament_season']);
      if (data.hasOwnProperty('player'))
        obj.player = PartialPerson.constructFromObject(data['player']);
      if (data.hasOwnProperty('team'))
        obj.team = PartialTeam.constructFromObject(data['team']);
      if (data.hasOwnProperty('shirtNumber'))
        obj.shirtNumber = ApiClient.convertToType(data['shirtNumber'], 'Number');
      if (data.hasOwnProperty('position'))
        obj.position = ApiClient.convertToType(data['position'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/TournamentSeasonWithTournament} tournamentSeason
 */
PlayerStatistics.prototype.tournamentSeason = undefined;

/**
 * @member {module:model/PartialPerson} player
 */
PlayerStatistics.prototype.player = undefined;

/**
 * @member {module:model/PartialTeam} team
 */
PlayerStatistics.prototype.team = undefined;

/**
 * Shirt number of the player during the TournamentSeason
 * @member {Number} shirtNumber
 */
PlayerStatistics.prototype.shirtNumber = undefined;

/**
 * Position of the player during the TournamentSeason
 * @member {String} position
 */
PlayerStatistics.prototype.position = undefined;

