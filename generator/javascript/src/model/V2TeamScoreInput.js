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
 * The V2TeamScoreInput model module.
 * @module model/V2TeamScoreInput
 * @version 0.0.1
 */
export class V2TeamScoreInput {
  /**
   * Constructs a new <code>V2TeamScoreInput</code>.
   * @alias module:model/V2TeamScoreInput
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V2TeamScoreInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2TeamScoreInput} obj Optional instance to populate.
   * @return {module:model/V2TeamScoreInput} The populated <code>V2TeamScoreInput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V2TeamScoreInput();
      if (data.hasOwnProperty('home'))
        obj.home = ApiClient.convertToType(data['home'], 'Number');
      if (data.hasOwnProperty('away'))
        obj.away = ApiClient.convertToType(data['away'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Number} home
 */
V2TeamScoreInput.prototype.home = undefined;

/**
 * @member {Number} away
 */
V2TeamScoreInput.prototype.away = undefined;
