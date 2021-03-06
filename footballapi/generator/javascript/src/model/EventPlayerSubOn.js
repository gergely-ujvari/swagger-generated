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
 * The EventPlayerSubOn model module.
 * @module model/EventPlayerSubOn
 * @version 0.0.1
 */
export class EventPlayerSubOn {
  /**
   * Constructs a new <code>EventPlayerSubOn</code>.
   * @alias module:model/EventPlayerSubOn
   * @class
   * @param playerName {String} Name of the player that comes on
   * @param elapsed {Number} The minute when the substitued occured
   */
  constructor(playerName, elapsed) {
    this.playerName = playerName;
    this.elapsed = elapsed;
  }

  /**
   * Constructs a <code>EventPlayerSubOn</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EventPlayerSubOn} obj Optional instance to populate.
   * @return {module:model/EventPlayerSubOn} The populated <code>EventPlayerSubOn</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EventPlayerSubOn();
      if (data.hasOwnProperty('player_id'))
        obj.playerId = ApiClient.convertToType(data['player_id'], 'Number');
      if (data.hasOwnProperty('player_name'))
        obj.playerName = ApiClient.convertToType(data['player_name'], 'String');
      if (data.hasOwnProperty('elapsed'))
        obj.elapsed = ApiClient.convertToType(data['elapsed'], 'Number');
    }
    return obj;
  }
}

/**
 * Id of the player that comes on
 * @member {Number} playerId
 */
EventPlayerSubOn.prototype.playerId = undefined;

/**
 * Name of the player that comes on
 * @member {String} playerName
 */
EventPlayerSubOn.prototype.playerName = undefined;

/**
 * The minute when the substitued occured
 * @member {Number} elapsed
 */
EventPlayerSubOn.prototype.elapsed = undefined;

