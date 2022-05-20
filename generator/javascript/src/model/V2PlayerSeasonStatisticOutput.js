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
import {V2Player} from './V2Player';
import {V2Season} from './V2Season';
import {V2StatisticItem} from './V2StatisticItem';
import {V2Team} from './V2Team';

/**
 * The V2PlayerSeasonStatisticOutput model module.
 * @module model/V2PlayerSeasonStatisticOutput
 * @version 0.0.1
 */
export class V2PlayerSeasonStatisticOutput {
  /**
   * Constructs a new <code>V2PlayerSeasonStatisticOutput</code>.
   * @alias module:model/V2PlayerSeasonStatisticOutput
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V2PlayerSeasonStatisticOutput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2PlayerSeasonStatisticOutput} obj Optional instance to populate.
   * @return {module:model/V2PlayerSeasonStatisticOutput} The populated <code>V2PlayerSeasonStatisticOutput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V2PlayerSeasonStatisticOutput();
      if (data.hasOwnProperty('player'))
        obj.player = V2Player.constructFromObject(data['player']);
      if (data.hasOwnProperty('teams'))
        obj.teams = ApiClient.convertToType(data['teams'], [V2Team]);
      if (data.hasOwnProperty('season'))
        obj.season = V2Season.constructFromObject(data['season']);
      if (data.hasOwnProperty('statistics'))
        obj.statistics = ApiClient.convertToType(data['statistics'], [V2StatisticItem]);
    }
    return obj;
  }
}

/**
 * @member {module:model/V2Player} player
 */
V2PlayerSeasonStatisticOutput.prototype.player = undefined;

/**
 * @member {Array.<module:model/V2Team>} teams
 */
V2PlayerSeasonStatisticOutput.prototype.teams = undefined;

/**
 * @member {module:model/V2Season} season
 */
V2PlayerSeasonStatisticOutput.prototype.season = undefined;

/**
 * @member {Array.<module:model/V2StatisticItem>} statistics
 */
V2PlayerSeasonStatisticOutput.prototype.statistics = undefined;
