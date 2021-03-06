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
import {Player} from './Player';
import {PlayerStatsExtended} from './PlayerStatsExtended';
import {Team} from './Team';

/**
 * The TeamPlayerStatistics model module.
 * @module model/TeamPlayerStatistics
 * @version 0.0.1
 */
export class TeamPlayerStatistics extends PlayerStatsExtended {
  /**
   * Constructs a new <code>TeamPlayerStatistics</code>.
   * @alias module:model/TeamPlayerStatistics
   * @class
   * @extends module:model/PlayerStatsExtended
   * @param player {} 
   */
  constructor(player) {
    super(goals, played, minutes, redCards, yellowCards);
    this.player = player;
  }

  /**
   * Constructs a <code>TeamPlayerStatistics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamPlayerStatistics} obj Optional instance to populate.
   * @return {module:model/TeamPlayerStatistics} The populated <code>TeamPlayerStatistics</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamPlayerStatistics();
      PlayerStatsExtended.constructFromObject(data, obj);
      if (data.hasOwnProperty('player'))
        obj.player = Player.constructFromObject(data['player']);
      if (data.hasOwnProperty('team'))
        obj.team = Team.constructFromObject(data['team']);
      if (data.hasOwnProperty('shirt_number'))
        obj.shirtNumber = ApiClient.convertToType(data['shirt_number'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {module:model/Player} player
 */
TeamPlayerStatistics.prototype.player = undefined;

/**
 * @member {module:model/Team} team
 */
TeamPlayerStatistics.prototype.team = undefined;

/**
 * @member {Number} shirtNumber
 */
TeamPlayerStatistics.prototype.shirtNumber = undefined;

