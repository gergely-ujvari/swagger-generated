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
 * The RefereeEditDto model module.
 * @module model/RefereeEditDto
 * @version 0.0.1
 */
export class RefereeEditDto {
  /**
   * Constructs a new <code>RefereeEditDto</code>.
   * @alias module:model/RefereeEditDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RefereeEditDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RefereeEditDto} obj Optional instance to populate.
   * @return {module:model/RefereeEditDto} The populated <code>RefereeEditDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RefereeEditDto();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('country_id'))
        obj.countryId = ApiClient.convertToType(data['country_id'], 'String');
      if (data.hasOwnProperty('birthdate'))
        obj.birthdate = ApiClient.convertToType(data['birthdate'], 'Date');
      if (data.hasOwnProperty('active'))
        obj.active = ApiClient.convertToType(data['active'], 'Boolean');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
RefereeEditDto.prototype.name = undefined;

/**
 * @member {String} countryId
 */
RefereeEditDto.prototype.countryId = undefined;

/**
 * @member {Date} birthdate
 */
RefereeEditDto.prototype.birthdate = undefined;

/**
 * @member {Boolean} active
 */
RefereeEditDto.prototype.active = undefined;

