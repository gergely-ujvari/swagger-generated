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
 * The V2MatchVenue model module.
 * @module model/V2MatchVenue
 * @version 0.0.1
 */
export class V2MatchVenue {
  /**
   * Constructs a new <code>V2MatchVenue</code>.
   * @alias module:model/V2MatchVenue
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V2MatchVenue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2MatchVenue} obj Optional instance to populate.
   * @return {module:model/V2MatchVenue} The populated <code>V2MatchVenue</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V2MatchVenue();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
V2MatchVenue.prototype.id = undefined;

/**
 * @member {String} name
 */
V2MatchVenue.prototype.name = undefined;

