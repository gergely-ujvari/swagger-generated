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
 * The V2AssetDeleteInput model module.
 * @module model/V2AssetDeleteInput
 * @version 0.0.1
 */
export class V2AssetDeleteInput {
  /**
   * Constructs a new <code>V2AssetDeleteInput</code>.
   * @alias module:model/V2AssetDeleteInput
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V2AssetDeleteInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2AssetDeleteInput} obj Optional instance to populate.
   * @return {module:model/V2AssetDeleteInput} The populated <code>V2AssetDeleteInput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V2AssetDeleteInput();
      if (data.hasOwnProperty('entity'))
        obj.entity = ApiClient.convertToType(data['entity'], 'String');
      if (data.hasOwnProperty('entity_id'))
        obj.entityId = ApiClient.convertToType(data['entity_id'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('context_type'))
        obj.contextType = ApiClient.convertToType(data['context_type'], 'String');
      if (data.hasOwnProperty('context_id'))
        obj.contextId = ApiClient.convertToType(data['context_id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} entity
 */
V2AssetDeleteInput.prototype.entity = undefined;

/**
 * @member {String} entityId
 */
V2AssetDeleteInput.prototype.entityId = undefined;

/**
 * @member {String} type
 */
V2AssetDeleteInput.prototype.type = undefined;

/**
 * @member {String} contextType
 */
V2AssetDeleteInput.prototype.contextType = undefined;

/**
 * @member {String} contextId
 */
V2AssetDeleteInput.prototype.contextId = undefined;
