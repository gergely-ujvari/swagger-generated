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
import {V2Season} from './V2Season';

/**
 * The V2SeasonList model module.
 * @module model/V2SeasonList
 * @version 0.0.1
 */
export class V2SeasonList {
  /**
   * Constructs a new <code>V2SeasonList</code>.
   * @alias module:model/V2SeasonList
   * @class
   * @param seasons {Array.<module:model/V2Season>} 
   */
  constructor(seasons) {
    this.seasons = seasons;
  }

  /**
   * Constructs a <code>V2SeasonList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2SeasonList} obj Optional instance to populate.
   * @return {module:model/V2SeasonList} The populated <code>V2SeasonList</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V2SeasonList();
      if (data.hasOwnProperty('seasons'))
        obj.seasons = ApiClient.convertToType(data['seasons'], [V2Season]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/V2Season>} seasons
 */
V2SeasonList.prototype.seasons = undefined;

