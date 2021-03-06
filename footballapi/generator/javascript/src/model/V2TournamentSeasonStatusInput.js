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
 * The V2TournamentSeasonStatusInput model module.
 * @module model/V2TournamentSeasonStatusInput
 * @version 0.0.1
 */
export class V2TournamentSeasonStatusInput {
  /**
   * Constructs a new <code>V2TournamentSeasonStatusInput</code>.
   * @alias module:model/V2TournamentSeasonStatusInput
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V2TournamentSeasonStatusInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2TournamentSeasonStatusInput} obj Optional instance to populate.
   * @return {module:model/V2TournamentSeasonStatusInput} The populated <code>V2TournamentSeasonStatusInput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V2TournamentSeasonStatusInput();
      if (data.hasOwnProperty('season_id'))
        obj.seasonId = ApiClient.convertToType(data['season_id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} seasonId
 */
V2TournamentSeasonStatusInput.prototype.seasonId = undefined;

