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
 * The TranslationContentDto model module.
 * @module model/TranslationContentDto
 * @version 0.0.1
 */
export class TranslationContentDto {
  /**
   * Constructs a new <code>TranslationContentDto</code>.
   * @alias module:model/TranslationContentDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TranslationContentDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TranslationContentDto} obj Optional instance to populate.
   * @return {module:model/TranslationContentDto} The populated <code>TranslationContentDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TranslationContentDto();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('three_letter_code'))
        obj.threeLetterCode = ApiClient.convertToType(data['three_letter_code'], 'String');
      if (data.hasOwnProperty('short_name'))
        obj.shortName = ApiClient.convertToType(data['short_name'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} name
 */
TranslationContentDto.prototype.name = undefined;

/**
 * @member {String} threeLetterCode
 */
TranslationContentDto.prototype.threeLetterCode = undefined;

/**
 * @member {String} shortName
 */
TranslationContentDto.prototype.shortName = undefined;
