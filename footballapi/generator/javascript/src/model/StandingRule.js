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
 * The StandingRule model module.
 * @module model/StandingRule
 * @version 0.0.1
 */
export class StandingRule {
  /**
   * Constructs a new <code>StandingRule</code>.
   * @alias module:model/StandingRule
   * @class
   * @param name {String} Human readable name describing the standing rule
   * @param code {String} Unique code identifying the standing rule
   * @param type {module:model/StandingRule.TypeEnum} Type classification of the standing rule
   */
  constructor(name, code, type) {
    this.name = name;
    this.code = code;
    this.type = type;
  }

  /**
   * Constructs a <code>StandingRule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StandingRule} obj Optional instance to populate.
   * @return {module:model/StandingRule} The populated <code>StandingRule</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new StandingRule();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
    }
    return obj;
  }
}

/**
 * Human readable name describing the standing rule
 * @member {String} name
 */
StandingRule.prototype.name = undefined;

/**
 * Unique code identifying the standing rule
 * @member {String} code
 */
StandingRule.prototype.code = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
StandingRule.TypeEnum = {
  /**
   * value: "promotion"
   * @const
   */
  promotion: "promotion",

  /**
   * value: "promotion_playoff"
   * @const
   */
  promotionPlayoff: "promotion_playoff",

  /**
   * value: "relegation"
   * @const
   */
  relegation: "relegation",

  /**
   * value: "relegation_playoff"
   * @const
   */
  relegationPlayoff: "relegation_playoff",

  /**
   * value: "tiertwo"
   * @const
   */
  tiertwo: "tiertwo",

  /**
   * value: "tiertwo_playoff"
   * @const
   */
  tiertwoPlayoff: "tiertwo_playoff"
};
/**
 * Type classification of the standing rule
 * @member {module:model/StandingRule.TypeEnum} type
 */
StandingRule.prototype.type = undefined;

/**
 * Detailed description of the standing rule
 * @member {String} description
 */
StandingRule.prototype.description = undefined;

/**
 * @member {Number} id
 */
StandingRule.prototype.id = undefined;

