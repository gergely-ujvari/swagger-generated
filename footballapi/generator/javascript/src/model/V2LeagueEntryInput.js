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
 * The V2LeagueEntryInput model module.
 * @module model/V2LeagueEntryInput
 * @version 0.0.1
 */
export class V2LeagueEntryInput {
  /**
   * Constructs a new <code>V2LeagueEntryInput</code>.
   * @alias module:model/V2LeagueEntryInput
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V2LeagueEntryInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2LeagueEntryInput} obj Optional instance to populate.
   * @return {module:model/V2LeagueEntryInput} The populated <code>V2LeagueEntryInput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V2LeagueEntryInput();
      if (data.hasOwnProperty('rank'))
        obj.rank = ApiClient.convertToType(data['rank'], 'Number');
      if (data.hasOwnProperty('team_id'))
        obj.teamId = ApiClient.convertToType(data['team_id'], 'String');
      if (data.hasOwnProperty('played'))
        obj.played = ApiClient.convertToType(data['played'], 'Number');
      if (data.hasOwnProperty('wins'))
        obj.wins = ApiClient.convertToType(data['wins'], 'Number');
      if (data.hasOwnProperty('draws'))
        obj.draws = ApiClient.convertToType(data['draws'], 'Number');
      if (data.hasOwnProperty('losses'))
        obj.losses = ApiClient.convertToType(data['losses'], 'Number');
      if (data.hasOwnProperty('points'))
        obj.points = ApiClient.convertToType(data['points'], 'Number');
      if (data.hasOwnProperty('goals_for'))
        obj.goalsFor = ApiClient.convertToType(data['goals_for'], 'Number');
      if (data.hasOwnProperty('goals_against'))
        obj.goalsAgainst = ApiClient.convertToType(data['goals_against'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} rank
 */
V2LeagueEntryInput.prototype.rank = undefined;

/**
 * @member {String} teamId
 */
V2LeagueEntryInput.prototype.teamId = undefined;

/**
 * @member {Number} played
 */
V2LeagueEntryInput.prototype.played = undefined;

/**
 * @member {Number} wins
 */
V2LeagueEntryInput.prototype.wins = undefined;

/**
 * @member {Number} draws
 */
V2LeagueEntryInput.prototype.draws = undefined;

/**
 * @member {Number} losses
 */
V2LeagueEntryInput.prototype.losses = undefined;

/**
 * @member {Number} points
 */
V2LeagueEntryInput.prototype.points = undefined;

/**
 * @member {Number} goalsFor
 */
V2LeagueEntryInput.prototype.goalsFor = undefined;

/**
 * @member {Number} goalsAgainst
 */
V2LeagueEntryInput.prototype.goalsAgainst = undefined;

