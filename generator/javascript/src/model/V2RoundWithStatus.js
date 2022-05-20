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
 * The V2RoundWithStatus model module.
 * @module model/V2RoundWithStatus
 * @version 0.0.1
 */
export class V2RoundWithStatus {
  /**
   * Constructs a new <code>V2RoundWithStatus</code>.
   * @alias module:model/V2RoundWithStatus
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V2RoundWithStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2RoundWithStatus} obj Optional instance to populate.
   * @return {module:model/V2RoundWithStatus} The populated <code>V2RoundWithStatus</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V2RoundWithStatus();
      if (data.hasOwnProperty('start_date'))
        obj.startDate = ApiClient.convertToType(data['start_date'], 'String');
      if (data.hasOwnProperty('end_date'))
        obj.endDate = ApiClient.convertToType(data['end_date'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('key'))
        obj.key = ApiClient.convertToType(data['key'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} startDate
 */
V2RoundWithStatus.prototype.startDate = undefined;

/**
 * @member {String} endDate
 */
V2RoundWithStatus.prototype.endDate = undefined;

/**
 * Not available at endpoint /v2/rounds
 * @member {String} status
 */
V2RoundWithStatus.prototype.status = undefined;

/**
 * @member {String} id
 */
V2RoundWithStatus.prototype.id = undefined;

/**
 * @member {String} key
 */
V2RoundWithStatus.prototype.key = undefined;

/**
 * @member {String} name
 */
V2RoundWithStatus.prototype.name = undefined;

/**
 * @member {String} type
 */
V2RoundWithStatus.prototype.type = undefined;

