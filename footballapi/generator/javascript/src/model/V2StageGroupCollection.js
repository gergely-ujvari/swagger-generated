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
import {V2Group} from './V2Group';

/**
 * The V2StageGroupCollection model module.
 * @module model/V2StageGroupCollection
 * @version 0.0.1
 */
export class V2StageGroupCollection {
  /**
   * Constructs a new <code>V2StageGroupCollection</code>.
   * @alias module:model/V2StageGroupCollection
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V2StageGroupCollection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2StageGroupCollection} obj Optional instance to populate.
   * @return {module:model/V2StageGroupCollection} The populated <code>V2StageGroupCollection</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V2StageGroupCollection();
      if (data.hasOwnProperty('groups'))
        obj.groups = ApiClient.convertToType(data['groups'], [V2Group]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/V2Group>} groups
 */
V2StageGroupCollection.prototype.groups = undefined;

