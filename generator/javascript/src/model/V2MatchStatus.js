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
 * The V2MatchStatus model module.
 * @module model/V2MatchStatus
 * @version 0.0.1
 */
export class V2MatchStatus {
  /**
   * Constructs a new <code>V2MatchStatus</code>.
   * @alias module:model/V2MatchStatus
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V2MatchStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2MatchStatus} obj Optional instance to populate.
   * @return {module:model/V2MatchStatus} The populated <code>V2MatchStatus</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V2MatchStatus();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('short_name'))
        obj.shortName = ApiClient.convertToType(data['short_name'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
V2MatchStatus.prototype.id = undefined;

/**
 * @member {String} name
 */
V2MatchStatus.prototype.name = undefined;

/**
 * @member {String} shortName
 */
V2MatchStatus.prototype.shortName = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
V2MatchStatus.TypeEnum = {
  /**
   * value: "FINISHED"
   * @const
   */
  FINISHED: "FINISHED",

  /**
   * value: "NOT_STARTED"
   * @const
   */
  NOT_STARTED: "NOT_STARTED",

  /**
   * value: "LIVE"
   * @const
   */
  LIVE: "LIVE",

  /**
   * value: "INTERRUPTED"
   * @const
   */
  INTERRUPTED: "INTERRUPTED",

  /**
   * value: "CANCELLED"
   * @const
   */
  CANCELLED: "CANCELLED",

  /**
   * value: "UNKNOWN"
   * @const
   */
  UNKNOWN: "UNKNOWN"
};
/**
 * @member {module:model/V2MatchStatus.TypeEnum} type
 */
V2MatchStatus.prototype.type = undefined;

/**
 * @member {String} code
 */
V2MatchStatus.prototype.code = undefined;
