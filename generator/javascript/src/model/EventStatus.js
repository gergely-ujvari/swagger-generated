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
 * The EventStatus model module.
 * @module model/EventStatus
 * @version 0.0.1
 */
export class EventStatus {
  /**
   * Constructs a new <code>EventStatus</code>.
   * @alias module:model/EventStatus
   * @class
   * @param type {module:model/EventStatus.TypeEnum} Status classification
   * @param name {String} Human readable name describing the status, can be translated
   * @param code {module:model/EventStatus.CodeEnum} Unique string used to identify the status
   */
  constructor(type, name, code) {
    this.type = type;
    this.name = name;
    this.code = code;
  }

  /**
   * Constructs a <code>EventStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventStatus} obj Optional instance to populate.
   * @return {module:model/EventStatus} The populated <code>EventStatus</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EventStatus();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('short_name'))
        obj.shortName = ApiClient.convertToType(data['short_name'], 'String');
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
EventStatus.TypeEnum = {
  /**
   * value: "finished"
   * @const
   */
  finished: "finished",

  /**
   * value: "cancelled"
   * @const
   */
  cancelled: "cancelled",

  /**
   * value: "notstarted"
   * @const
   */
  notstarted: "notstarted",

  /**
   * value: "interrupted"
   * @const
   */
  interrupted: "interrupted",

  /**
   * value: "inprogress"
   * @const
   */
  inprogress: "inprogress"
};
/**
 * Status classification
 * @member {module:model/EventStatus.TypeEnum} type
 */
EventStatus.prototype.type = undefined;

/**
 * Human readable name describing the status, can be translated
 * @member {String} name
 */
EventStatus.prototype.name = undefined;

/**
 * Human readable short name describing the status, can be translated
 * @member {String} shortName
 */
EventStatus.prototype.shortName = undefined;

/**
 * Allowed values for the <code>code</code> property.
 * @enum {String}
 * @readonly
 */
EventStatus.CodeEnum = {
  /**
   * value: "finished"
   * @const
   */
  finished: "finished",

  /**
   * value: "not_started"
   * @const
   */
  notStarted: "not_started",

  /**
   * value: "1st_half"
   * @const
   */
  _1stHalf: "1st_half",

  /**
   * value: "2nd_half"
   * @const
   */
  _2ndHalf: "2nd_half"
};
/**
 * Unique string used to identify the status
 * @member {module:model/EventStatus.CodeEnum} code
 */
EventStatus.prototype.code = undefined;

