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
 * The StageGroup model module.
 * @module model/StageGroup
 * @version 0.0.1
 */
export class StageGroup {
  /**
   * Constructs a new <code>StageGroup</code>.
   * @alias module:model/StageGroup
   * @class
   * @param id {Number} Unique resource identifier
   * @param name {String} Human readable name of the Group
   */
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  /**
   * Constructs a <code>StageGroup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StageGroup} obj Optional instance to populate.
   * @return {module:model/StageGroup} The populated <code>StageGroup</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StageGroup();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('order_in_stage'))
        obj.orderInStage = ApiClient.convertToType(data['order_in_stage'], 'Number');
    }
    return obj;
  }
}

/**
 * Unique resource identifier
 * @member {Number} id
 */
StageGroup.prototype.id = undefined;

/**
 * Human readable name of the Group
 * @member {String} name
 */
StageGroup.prototype.name = undefined;

/**
 * The order in the stage of the group
 * @member {Number} orderInStage
 */
StageGroup.prototype.orderInStage = undefined;
