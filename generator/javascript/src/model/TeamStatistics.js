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

/**
 * The TeamStatistics model module.
 * @module model/TeamStatistics
 * @version 0.0.1
 */
export class TeamStatistics {
  /**
   * Constructs a new <code>TeamStatistics</code>.
   * @alias module:model/TeamStatistics
   * @class
   * @param possession {Number} Percentage of time the team possess the ball
   * @param goals {Number} Number of goals scored
   * @param corners {Number} Number of corners
   * @param offside {Number} Number of offsides
   * @param shotsOn {Number} Shots on that have hit target
   * @param shotsBlocked {Number} Number of shots that have been blocked by an opposition player
   * @param shotsOff {Number} Shots outside the target
   * @param foulsCommitted {Number} Total number of fouls committed by the Team
   */
  constructor(possession, goals, corners, offside, shotsOn, shotsBlocked, shotsOff, foulsCommitted) {
    this.possession = possession;
    this.goals = goals;
    this.corners = corners;
    this.offside = offside;
    this.shotsOn = shotsOn;
    this.shotsBlocked = shotsBlocked;
    this.shotsOff = shotsOff;
    this.foulsCommitted = foulsCommitted;
  }

  /**
   * Constructs a <code>TeamStatistics</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamStatistics} obj Optional instance to populate.
   * @return {module:model/TeamStatistics} The populated <code>TeamStatistics</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamStatistics();
      if (data.hasOwnProperty('pass'))
        obj.pass = ApiClient.convertToType(data['pass'], 'Number');
      if (data.hasOwnProperty('possession'))
        obj.possession = ApiClient.convertToType(data['possession'], 'Number');
      if (data.hasOwnProperty('goals'))
        obj.goals = ApiClient.convertToType(data['goals'], 'Number');
      if (data.hasOwnProperty('corners'))
        obj.corners = ApiClient.convertToType(data['corners'], 'Number');
      if (data.hasOwnProperty('crosses'))
        obj.crosses = ApiClient.convertToType(data['crosses'], 'Number');
      if (data.hasOwnProperty('offside'))
        obj.offside = ApiClient.convertToType(data['offside'], 'Number');
      if (data.hasOwnProperty('shots_on'))
        obj.shotsOn = ApiClient.convertToType(data['shots_on'], 'Number');
      if (data.hasOwnProperty('shots_blocked'))
        obj.shotsBlocked = ApiClient.convertToType(data['shots_blocked'], 'Number');
      if (data.hasOwnProperty('shots_off'))
        obj.shotsOff = ApiClient.convertToType(data['shots_off'], 'Number');
      if (data.hasOwnProperty('throw_in'))
        obj.throwIn = ApiClient.convertToType(data['throw_in'], 'Number');
      if (data.hasOwnProperty('goal_kicks'))
        obj.goalKicks = ApiClient.convertToType(data['goal_kicks'], 'Number');
      if (data.hasOwnProperty('treatments'))
        obj.treatments = ApiClient.convertToType(data['treatments'], 'Number');
      if (data.hasOwnProperty('yellow_cards'))
        obj.yellowCards = ApiClient.convertToType(data['yellow_cards'], 'Number');
      if (data.hasOwnProperty('substitutions'))
        obj.substitutions = ApiClient.convertToType(data['substitutions'], 'Number');
      if (data.hasOwnProperty('counter_attacks'))
        obj.counterAttacks = ApiClient.convertToType(data['counter_attacks'], 'Number');
      if (data.hasOwnProperty('fouls_committed'))
        obj.foulsCommitted = ApiClient.convertToType(data['fouls_committed'], 'Number');
    }
    return obj;
  }
}

/**
 * Number of keys passes completed
 * @member {Number} pass
 */
TeamStatistics.prototype.pass = undefined;

/**
 * Percentage of time the team possess the ball
 * @member {Number} possession
 */
TeamStatistics.prototype.possession = undefined;

/**
 * Number of goals scored
 * @member {Number} goals
 */
TeamStatistics.prototype.goals = undefined;

/**
 * Number of corners
 * @member {Number} corners
 */
TeamStatistics.prototype.corners = undefined;

/**
 * Number of crosses
 * @member {Number} crosses
 */
TeamStatistics.prototype.crosses = undefined;

/**
 * Number of offsides
 * @member {Number} offside
 */
TeamStatistics.prototype.offside = undefined;

/**
 * Shots on that have hit target
 * @member {Number} shotsOn
 */
TeamStatistics.prototype.shotsOn = undefined;

/**
 * Number of shots that have been blocked by an opposition player
 * @member {Number} shotsBlocked
 */
TeamStatistics.prototype.shotsBlocked = undefined;

/**
 * Shots outside the target
 * @member {Number} shotsOff
 */
TeamStatistics.prototype.shotsOff = undefined;

/**
 * Number of throw ins taken
 * @member {Number} throwIn
 */
TeamStatistics.prototype.throwIn = undefined;

/**
 * Number of goal kicks taken
 * @member {Number} goalKicks
 */
TeamStatistics.prototype.goalKicks = undefined;

/**
 * Number of treatments to injuries
 * @member {Number} treatments
 */
TeamStatistics.prototype.treatments = undefined;

/**
 * Total numer of yellow cards
 * @member {Number} yellowCards
 */
TeamStatistics.prototype.yellowCards = undefined;

/**
 * Number of substitutions
 * @member {Number} substitutions
 */
TeamStatistics.prototype.substitutions = undefined;

/**
 * Number of counter attacks
 * @member {Number} counterAttacks
 */
TeamStatistics.prototype.counterAttacks = undefined;

/**
 * Total number of fouls committed by the Team
 * @member {Number} foulsCommitted
 */
TeamStatistics.prototype.foulsCommitted = undefined;

