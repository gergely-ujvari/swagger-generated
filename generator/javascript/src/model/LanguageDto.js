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
 * The LanguageDto model module.
 * @module model/LanguageDto
 * @version 0.0.1
 */
export class LanguageDto {
  /**
   * Constructs a new <code>LanguageDto</code>.
   * @alias module:model/LanguageDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>LanguageDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LanguageDto} obj Optional instance to populate.
   * @return {module:model/LanguageDto} The populated <code>LanguageDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new LanguageDto();
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} code
 */
LanguageDto.prototype.code = undefined;

