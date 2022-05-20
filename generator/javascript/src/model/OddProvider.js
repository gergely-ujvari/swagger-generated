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
import {Country} from './Country';

/**
 * The OddProvider model module.
 * @module model/OddProvider
 * @version 0.0.1
 */
export class OddProvider {
  /**
   * Constructs a new <code>OddProvider</code>.
   * @alias module:model/OddProvider
   * @class
   * @param id {Number} Resource identifier
   * @param name {String} Human readable name of the OddProvider
   */
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  /**
   * Constructs a <code>OddProvider</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OddProvider} obj Optional instance to populate.
   * @return {module:model/OddProvider} The populated <code>OddProvider</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OddProvider();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('country'))
        obj.country = Country.constructFromObject(data['country']);
      if (data.hasOwnProperty('url_logo'))
        obj.urlLogo = ApiClient.convertToType(data['url_logo'], 'String');
    }
    return obj;
  }
}

/**
 * Resource identifier
 * @member {Number} id
 */
OddProvider.prototype.id = undefined;

/**
 * Human readable name of the OddProvider
 * @member {String} name
 */
OddProvider.prototype.name = undefined;

/**
 * Homepage of the OddProvider
 * @member {String} url
 */
OddProvider.prototype.url = undefined;

/**
 * @member {module:model/Country} country
 */
OddProvider.prototype.country = undefined;

/**
 * @member {String} urlLogo
 */
OddProvider.prototype.urlLogo = undefined;
