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
 * The PartialTournamentSeasonStage model module.
 * @module model/PartialTournamentSeasonStage
 * @version 0.0.1
 */
export class PartialTournamentSeasonStage {
  /**
   * Constructs a new <code>PartialTournamentSeasonStage</code>.
   * @alias module:model/PartialTournamentSeasonStage
   * @class
   * @param id {Number} Unique identifier
   * @param name {String} Human readable name of the TournamentSeasonStage
   * @param cup {Boolean} Whether the stage is a cup such as Champions League Knockout stage, World Cup Final stages, etc
   * @param tournamentSeasonId {Number} Id of the TournamentSeason in which the stage is part of
   * @param tournamentId {Number} Id of the Tournament in whicth the stage is part of
   * @param country {module:model/Country} 
   */
  constructor(id, name, cup, tournamentSeasonId, tournamentId, country) {
    this.id = id;
    this.name = name;
    this.cup = cup;
    this.tournamentSeasonId = tournamentSeasonId;
    this.tournamentId = tournamentId;
    this.country = country;
  }

  /**
   * Constructs a <code>PartialTournamentSeasonStage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PartialTournamentSeasonStage} obj Optional instance to populate.
   * @return {module:model/PartialTournamentSeasonStage} The populated <code>PartialTournamentSeasonStage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PartialTournamentSeasonStage();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('cup'))
        obj.cup = ApiClient.convertToType(data['cup'], 'Boolean');
      if (data.hasOwnProperty('tournament_season_id'))
        obj.tournamentSeasonId = ApiClient.convertToType(data['tournament_season_id'], 'Number');
      if (data.hasOwnProperty('tournament_id'))
        obj.tournamentId = ApiClient.convertToType(data['tournament_id'], 'Number');
      if (data.hasOwnProperty('country'))
        obj.country = Country.constructFromObject(data['country']);
      if (data.hasOwnProperty('confederation'))
        obj.confederation = ApiClient.convertToType(data['confederation'], 'String');
    }
    return obj;
  }
}

/**
 * Unique identifier
 * @member {Number} id
 */
PartialTournamentSeasonStage.prototype.id = undefined;

/**
 * Human readable name of the TournamentSeasonStage
 * @member {String} name
 */
PartialTournamentSeasonStage.prototype.name = undefined;

/**
 * Whether the stage is a cup such as Champions League Knockout stage, World Cup Final stages, etc
 * @member {Boolean} cup
 */
PartialTournamentSeasonStage.prototype.cup = undefined;

/**
 * Id of the TournamentSeason in which the stage is part of
 * @member {Number} tournamentSeasonId
 */
PartialTournamentSeasonStage.prototype.tournamentSeasonId = undefined;

/**
 * Id of the Tournament in whicth the stage is part of
 * @member {Number} tournamentId
 */
PartialTournamentSeasonStage.prototype.tournamentId = undefined;

/**
 * @member {module:model/Country} country
 */
PartialTournamentSeasonStage.prototype.country = undefined;

/**
 * Indicates which confederation the stage is part of (for World Cup qualif.)
 * @member {String} confederation
 */
PartialTournamentSeasonStage.prototype.confederation = undefined;

