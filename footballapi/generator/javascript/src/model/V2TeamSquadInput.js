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
import {V2SquadPlayerInput} from './V2SquadPlayerInput';

/**
 * The V2TeamSquadInput model module.
 * @module model/V2TeamSquadInput
 * @version 0.0.1
 */
export class V2TeamSquadInput {
  /**
   * Constructs a new <code>V2TeamSquadInput</code>.
   * @alias module:model/V2TeamSquadInput
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V2TeamSquadInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2TeamSquadInput} obj Optional instance to populate.
   * @return {module:model/V2TeamSquadInput} The populated <code>V2TeamSquadInput</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V2TeamSquadInput();
      if (data.hasOwnProperty('players'))
        obj.players = ApiClient.convertToType(data['players'], [V2SquadPlayerInput]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/V2SquadPlayerInput>} players
 */
V2TeamSquadInput.prototype.players = undefined;

