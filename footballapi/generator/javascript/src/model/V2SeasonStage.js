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
 * The V2SeasonStage model module.
 * @module model/V2SeasonStage
 * @version 0.0.1
 */
export class V2SeasonStage {
  /**
   * Constructs a new <code>V2SeasonStage</code>.
   * @alias module:model/V2SeasonStage
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V2SeasonStage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2SeasonStage} obj Optional instance to populate.
   * @return {module:model/V2SeasonStage} The populated <code>V2SeasonStage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V2SeasonStage();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('start_date'))
        obj.startDate = ApiClient.convertToType(data['start_date'], 'Date');
      if (data.hasOwnProperty('end_date'))
        obj.endDate = ApiClient.convertToType(data['end_date'], 'Date');
      if (data.hasOwnProperty('order_in_season'))
        obj.orderInSeason = ApiClient.convertToType(data['order_in_season'], 'Number');
      if (data.hasOwnProperty('coverage'))
        obj.coverage = ApiClient.convertToType(data['coverage'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
V2SeasonStage.prototype.id = undefined;

/**
 * @member {String} name
 */
V2SeasonStage.prototype.name = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
V2SeasonStage.TypeEnum = {
  /**
   * value: "GROUP"
   * @const
   */
  GROUP: "GROUP",

  /**
   * value: "LEAGUE"
   * @const
   */
  LEAGUE: "LEAGUE",

  /**
   * value: "KNOCK_OUT"
   * @const
   */
  KNOCK_OUT: "KNOCK_OUT"
};
/**
 * @member {module:model/V2SeasonStage.TypeEnum} type
 */
V2SeasonStage.prototype.type = undefined;

/**
 * @member {Date} startDate
 */
V2SeasonStage.prototype.startDate = undefined;

/**
 * @member {Date} endDate
 */
V2SeasonStage.prototype.endDate = undefined;

/**
 * @member {Number} orderInSeason
 */
V2SeasonStage.prototype.orderInSeason = undefined;

/**
 * @member {String} coverage
 */
V2SeasonStage.prototype.coverage = undefined;

