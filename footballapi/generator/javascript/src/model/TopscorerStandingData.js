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
import {StandingData} from './StandingData';
import {StandingRule} from './StandingRule';

/**
 * The TopscorerStandingData model module.
 * @module model/TopscorerStandingData
 * @version 0.0.1
 */
export class TopscorerStandingData extends StandingData {
  /**
   * Constructs a new <code>TopscorerStandingData</code>.
   * @alias module:model/TopscorerStandingData
   * @class
   * @extends module:model/StandingData
   * @param rank {} Position of the team/player in the standing
   * @param team {} 
   * @param player {} 
   * @param goals {} Number of goals scored
   */
  constructor(rank, team, player, goals) {
    super(rank, team);
    this.player = player;
    this.goals = goals;
  }

  /**
   * Constructs a <code>TopscorerStandingData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TopscorerStandingData} obj Optional instance to populate.
   * @return {module:model/TopscorerStandingData} The populated <code>TopscorerStandingData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TopscorerStandingData();
      StandingData.constructFromObject(data, obj);
      if (data.hasOwnProperty('player'))
        obj.player = PartialPerson.constructFromObject(data['player']);
      if (data.hasOwnProperty('goals'))
        obj.goals = ApiClient.convertToType(data['goals'], 'Number');
      if (data.hasOwnProperty('played'))
        obj.played = ApiClient.convertToType(data['played'], 'Number');
      if (data.hasOwnProperty('assists'))
        obj.assists = ApiClient.convertToType(data['assists'], 'Number');
      if (data.hasOwnProperty('minutes'))
        obj.minutes = ApiClient.convertToType(data['minutes'], 'Number');
      if (data.hasOwnProperty('penalties'))
        obj.penalties = ApiClient.convertToType(data['penalties'], 'Number');
      if (data.hasOwnProperty('red_cards'))
        obj.redCards = ApiClient.convertToType(data['red_cards'], 'Number');
      if (data.hasOwnProperty('scored_first'))
        obj.scoredFirst = ApiClient.convertToType(data['scored_first'], 'Number');
      if (data.hasOwnProperty('yellow_cards'))
        obj.yellowCards = ApiClient.convertToType(data['yellow_cards'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {module:model/PartialPerson} player
 */
TopscorerStandingData.prototype.player = undefined;

/**
 * Number of goals scored
 * @member {Number} goals
 */
TopscorerStandingData.prototype.goals = undefined;

/**
 * Total games played
 * @member {Number} played
 */
TopscorerStandingData.prototype.played = undefined;

/**
 * Number of assists
 * @member {Number} assists
 */
TopscorerStandingData.prototype.assists = undefined;

/**
 * Total number of minutes played
 * @member {Number} minutes
 */
TopscorerStandingData.prototype.minutes = undefined;

/**
 * Number of goals scored from the penalty spot
 * @member {Number} penalties
 */
TopscorerStandingData.prototype.penalties = undefined;

/**
 * Number of red cards
 * @member {Number} redCards
 */
TopscorerStandingData.prototype.redCards = undefined;

/**
 * Number of times the player scored first for the team
 * @member {Number} scoredFirst
 */
TopscorerStandingData.prototype.scoredFirst = undefined;

/**
 * Number of yellow cards
 * @member {Number} yellowCards
 */
TopscorerStandingData.prototype.yellowCards = undefined;

