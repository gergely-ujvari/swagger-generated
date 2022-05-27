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
import {TournamentItemDto} from './TournamentItemDto';

/**
 * The V2TournamentGroupUpdateInput model module.
 * @module model/V2TournamentGroupUpdateInput
 * @version 0.0.1
 */
export class V2TournamentGroupUpdateInput {
  /**
   * Constructs a new <code>V2TournamentGroupUpdateInput</code>.
   * @alias module:model/V2TournamentGroupUpdateInput
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V2TournamentGroupUpdateInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2TournamentGroupUpdateInput} obj Optional instance to populate.
   * @return {module:model/V2TournamentGroupUpdateInput} The populated <code>V2TournamentGroupUpdateInput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V2TournamentGroupUpdateInput();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('tournaments'))
        obj.tournaments = ApiClient.convertToType(data['tournaments'], [TournamentItemDto]);
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
V2TournamentGroupUpdateInput.prototype.name = undefined;

/**
 * @member {String} description
 */
V2TournamentGroupUpdateInput.prototype.description = undefined;

/**
 * @member {Array.<module:model/TournamentItemDto>} tournaments
 */
V2TournamentGroupUpdateInput.prototype.tournaments = undefined;
