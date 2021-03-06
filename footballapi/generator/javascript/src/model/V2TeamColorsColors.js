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
 * The V2TeamColorsColors model module.
 * @module model/V2TeamColorsColors
 * @version 0.0.1
 */
export class V2TeamColorsColors {
  /**
   * Constructs a new <code>V2TeamColorsColors</code>.
   * @alias module:model/V2TeamColorsColors
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V2TeamColorsColors</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2TeamColorsColors} obj Optional instance to populate.
   * @return {module:model/V2TeamColorsColors} The populated <code>V2TeamColorsColors</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V2TeamColorsColors();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('color_code'))
        obj.colorCode = ApiClient.convertToType(data['color_code'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} type
 */
V2TeamColorsColors.prototype.type = undefined;

/**
 * @member {String} colorCode
 */
V2TeamColorsColors.prototype.colorCode = undefined;

