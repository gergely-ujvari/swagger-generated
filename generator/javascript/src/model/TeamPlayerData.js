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
 * The TeamPlayerData model module.
 * @module model/TeamPlayerData
 * @version 0.0.1
 */
export class TeamPlayerData {
  /**
   * Constructs a new <code>TeamPlayerData</code>.
   * @alias module:model/TeamPlayerData
   * @class
   * @param active {Boolean} Whether the person is currently part of the Team
   */
  constructor(active) {
    this.active = active;
  }

  /**
   * Constructs a <code>TeamPlayerData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamPlayerData} obj Optional instance to populate.
   * @return {module:model/TeamPlayerData} The populated <code>TeamPlayerData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamPlayerData();
      if (data.hasOwnProperty('shirt_number'))
        obj.shirtNumber = ApiClient.convertToType(data['shirt_number'], 'Number');
      if (data.hasOwnProperty('loan'))
        obj.loan = ApiClient.convertToType(data['loan'], 'Boolean');
      if (data.hasOwnProperty('active'))
        obj.active = ApiClient.convertToType(data['active'], 'Boolean');
      if (data.hasOwnProperty('start_date'))
        obj.startDate = ApiClient.convertToType(data['start_date'], 'Date');
      if (data.hasOwnProperty('end_date'))
        obj.endDate = ApiClient.convertToType(data['end_date'], 'Date');
    }
    return obj;
  }
}

/**
 * Shirt number which the player wears for the team
 * @member {Number} shirtNumber
 */
TeamPlayerData.prototype.shirtNumber = undefined;

/**
 * Whether the player is on loan with the team
 * @member {Boolean} loan
 */
TeamPlayerData.prototype.loan = undefined;

/**
 * Whether the person is currently part of the Team
 * @member {Boolean} active
 */
TeamPlayerData.prototype.active = undefined;

/**
 * Date when the Person joined the team
 * @member {Date} startDate
 */
TeamPlayerData.prototype.startDate = undefined;

/**
 * Date when the Person left the team (if any)
 * @member {Date} endDate
 */
TeamPlayerData.prototype.endDate = undefined;

