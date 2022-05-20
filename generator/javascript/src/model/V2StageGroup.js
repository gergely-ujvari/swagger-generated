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
 * The V2StageGroup model module.
 * @module model/V2StageGroup
 * @version 0.0.1
 */
export class V2StageGroup {
  /**
   * Constructs a new <code>V2StageGroup</code>.
   * @alias module:model/V2StageGroup
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V2StageGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2StageGroup} obj Optional instance to populate.
   * @return {module:model/V2StageGroup} The populated <code>V2StageGroup</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V2StageGroup();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('order_in_stage'))
        obj.orderInStage = ApiClient.convertToType(data['order_in_stage'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
V2StageGroup.prototype.id = undefined;

/**
 * @member {String} name
 */
V2StageGroup.prototype.name = undefined;

/**
 * @member {Number} orderInStage
 */
V2StageGroup.prototype.orderInStage = undefined;

