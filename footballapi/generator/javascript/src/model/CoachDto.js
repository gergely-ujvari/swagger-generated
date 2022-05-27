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
 * The CoachDto model module.
 * @module model/CoachDto
 * @version 0.0.1
 */
export class CoachDto {
  /**
   * Constructs a new <code>CoachDto</code>.
   * @alias module:model/CoachDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CoachDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CoachDto} obj Optional instance to populate.
   * @return {module:model/CoachDto} The populated <code>CoachDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CoachDto();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('country'))
        obj.country = CountryDto.constructFromObject(data['country']);
      if (data.hasOwnProperty('birthdate'))
        obj.birthdate = ApiClient.convertToType(data['birthdate'], 'String');
      if (data.hasOwnProperty('gender'))
        obj.gender = ApiClient.convertToType(data['gender'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} id
 */
CoachDto.prototype.id = undefined;

/**
 * @member {String} name
 */
CoachDto.prototype.name = undefined;

/**
 * @member {module:model/CountryDto} country
 */
CoachDto.prototype.country = undefined;

/**
 * @member {String} birthdate
 */
CoachDto.prototype.birthdate = undefined;

/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */
CoachDto.GenderEnum = {
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
 * @member {module:model/CoachDto.GenderEnum} gender
 */
CoachDto.prototype.gender = undefined;
