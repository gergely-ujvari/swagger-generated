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
 * The PlayerStatisticItem model module.
 * @module model/PlayerStatisticItem
 * @version 0.0.1
 */
export class PlayerStatisticItem {
  /**
   * Constructs a new <code>PlayerStatisticItem</code>.
   * @alias module:model/PlayerStatisticItem
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PlayerStatisticItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PlayerStatisticItem} obj Optional instance to populate.
   * @return {module:model/PlayerStatisticItem} The populated <code>PlayerStatisticItem</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PlayerStatisticItem();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('value'))
        obj.value = ApiClient.convertToType(data['value'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
PlayerStatisticItem.prototype.name = undefined;

/**
 * @member {String} value
 */
PlayerStatisticItem.prototype.value = undefined;

