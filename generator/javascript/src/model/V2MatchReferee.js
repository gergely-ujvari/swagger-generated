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
 * The V2MatchReferee model module.
 * @module model/V2MatchReferee
 * @version 0.0.1
 */
export class V2MatchReferee {
  /**
   * Constructs a new <code>V2MatchReferee</code>.
   * @alias module:model/V2MatchReferee
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V2MatchReferee</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2MatchReferee} obj Optional instance to populate.
   * @return {module:model/V2MatchReferee} The populated <code>V2MatchReferee</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V2MatchReferee();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('role'))
        obj.role = ApiClient.convertToType(data['role'], 'String');
      if (data.hasOwnProperty('gender'))
        obj.gender = ApiClient.convertToType(data['gender'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
V2MatchReferee.prototype.id = undefined;

/**
 * @member {String} name
 */
V2MatchReferee.prototype.name = undefined;

/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
V2MatchReferee.RoleEnum = {
  /**
   * value: "REFEREE"
   * @const
   */
  REFEREE: "REFEREE"
};
/**
 * @member {module:model/V2MatchReferee.RoleEnum} role
 */
V2MatchReferee.prototype.role = undefined;

/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */
V2MatchReferee.GenderEnum = {
  /**
   * value: "MALE"
   * @const
   */
  MALE: "MALE",

  /**
   * value: "FEMALE"
   * @const
   */
  FEMALE: "FEMALE"
};
/**
 * @member {module:model/V2MatchReferee.GenderEnum} gender
 */
V2MatchReferee.prototype.gender = undefined;

