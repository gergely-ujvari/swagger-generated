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
 * The V2Group model module.
 * @module model/V2Group
 * @version 0.0.1
 */
export class V2Group {
  /**
   * Constructs a new <code>V2Group</code>.
   * @alias module:model/V2Group
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V2Group</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2Group} obj Optional instance to populate.
   * @return {module:model/V2Group} The populated <code>V2Group</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V2Group();
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
V2Group.prototype.id = undefined;

/**
 * @member {String} name
 */
V2Group.prototype.name = undefined;

/**
 * @member {Number} orderInStage
 */
V2Group.prototype.orderInStage = undefined;

