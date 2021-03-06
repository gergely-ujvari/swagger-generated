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
import {OddProvider} from './OddProvider';

/**
 * The Odd model module.
 * @module model/Odd
 * @version 0.0.1
 */
export class Odd {
  /**
   * Constructs a new <code>Odd</code>.
   * @alias module:model/Odd
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Odd</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Odd} obj Optional instance to populate.
   * @return {module:model/Odd} The populated <code>Odd</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Odd();
      if (data.hasOwnProperty('oddProvider'))
        obj.oddProvider = OddProvider.constructFromObject(data['oddProvider']);
      if (data.hasOwnProperty('eventId'))
        obj.eventId = ApiClient.convertToType(data['eventId'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {module:model/OddProvider} oddProvider
 */
Odd.prototype.oddProvider = undefined;

/**
 * Id of the event for which odds are provided
 * @member {Number} eventId
 */
Odd.prototype.eventId = undefined;

