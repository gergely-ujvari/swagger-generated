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
import {V2SquadPlayer} from './V2SquadPlayer';
import {V2Team} from './V2Team';

/**
 * The V2TeamSquad model module.
 * @module model/V2TeamSquad
 * @version 0.0.1
 */
export class V2TeamSquad {
  /**
   * Constructs a new <code>V2TeamSquad</code>.
   * @alias module:model/V2TeamSquad
   * @class
   * @param team {module:model/V2Team} 
   * @param players {Array.<module:model/V2SquadPlayer>} 
   */
  constructor(team, players) {
    this.team = team;
    this.players = players;
  }

  /**
   * Constructs a <code>V2TeamSquad</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2TeamSquad} obj Optional instance to populate.
   * @return {module:model/V2TeamSquad} The populated <code>V2TeamSquad</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V2TeamSquad();
      if (data.hasOwnProperty('team'))
        obj.team = V2Team.constructFromObject(data['team']);
      if (data.hasOwnProperty('players'))
        obj.players = ApiClient.convertToType(data['players'], [V2SquadPlayer]);
    }
    return obj;
  }
}

/**
 * @member {module:model/V2Team} team
 */
V2TeamSquad.prototype.team = undefined;

/**
 * @member {Array.<module:model/V2SquadPlayer>} players
 */
V2TeamSquad.prototype.players = undefined;

