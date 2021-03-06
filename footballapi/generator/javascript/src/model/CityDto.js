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
import {CountryDto} from './CountryDto';

/**
 * The CityDto model module.
 * @module model/CityDto
 * @version 0.0.1
 */
export class CityDto {
  /**
   * Constructs a new <code>CityDto</code>.
   * @alias module:model/CityDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CityDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CityDto} obj Optional instance to populate.
   * @return {module:model/CityDto} The populated <code>CityDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CityDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('country'))
        obj.country = CountryDto.constructFromObject(data['country']);
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
CityDto.prototype.id = undefined;

/**
 * @member {String} name
 */
CityDto.prototype.name = undefined;

/**
 * @member {module:model/CountryDto} country
 */
CityDto.prototype.country = undefined;

