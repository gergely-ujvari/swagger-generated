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
 * The V2TournamentSeasonInsertInput model module.
 * @module model/V2TournamentSeasonInsertInput
 * @version 0.0.1
 */
export class V2TournamentSeasonInsertInput {
  /**
   * Constructs a new <code>V2TournamentSeasonInsertInput</code>.
   * @alias module:model/V2TournamentSeasonInsertInput
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V2TournamentSeasonInsertInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2TournamentSeasonInsertInput} obj Optional instance to populate.
   * @return {module:model/V2TournamentSeasonInsertInput} The populated <code>V2TournamentSeasonInsertInput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V2TournamentSeasonInsertInput();
      if (data.hasOwnProperty('tournament_id'))
        obj.tournamentId = ApiClient.convertToType(data['tournament_id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} tournamentId
 */
V2TournamentSeasonInsertInput.prototype.tournamentId = undefined;

/**
 * @member {String} name
 */
V2TournamentSeasonInsertInput.prototype.name = undefined;
