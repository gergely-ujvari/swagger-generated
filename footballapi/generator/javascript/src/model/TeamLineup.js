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
import {EventPlayer} from './EventPlayer';
import {PartialPerson} from './PartialPerson';

/**
 * The TeamLineup model module.
 * @module model/TeamLineup
 * @version 0.0.1
 */
export class TeamLineup {
  /**
   * Constructs a new <code>TeamLineup</code>.
   * @alias module:model/TeamLineup
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamLineup</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamLineup} obj Optional instance to populate.
   * @return {module:model/TeamLineup} The populated <code>TeamLineup</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamLineup();
      if (data.hasOwnProperty('team_id'))
        obj.teamId = ApiClient.convertToType(data['team_id'], 'Number');
      if (data.hasOwnProperty('players'))
        obj.players = ApiClient.convertToType(data['players'], [EventPlayer]);
      if (data.hasOwnProperty('coach'))
        obj.coach = PartialPerson.constructFromObject(data['coach']);
      if (data.hasOwnProperty('formation'))
        obj.formation = ApiClient.convertToType(data['formation'], 'String');
    }
    return obj;
  }
}

/**
 * resource id of the team
 * @member {Number} teamId
 */
TeamLineup.prototype.teamId = undefined;

/**
 * List of players involved for the team
 * @member {Array.<module:model/EventPlayer>} players
 */
TeamLineup.prototype.players = undefined;

/**
 * @member {module:model/PartialPerson} coach
 */
TeamLineup.prototype.coach = undefined;

/**
 * Lineup formation
 * @member {String} formation
 */
TeamLineup.prototype.formation = undefined;
