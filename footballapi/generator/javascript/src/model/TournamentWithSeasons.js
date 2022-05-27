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
import {Tournament} from './Tournament';
import {TournamentSeason} from './TournamentSeason';

/**
 * The TournamentWithSeasons model module.
 * @module model/TournamentWithSeasons
 * @version 0.0.1
 */
export class TournamentWithSeasons extends Tournament {
  /**
   * Constructs a new <code>TournamentWithSeasons</code>.
   * @alias module:model/TournamentWithSeasons
   * @class
   * @extends module:model/Tournament
   * @param id {} Unique Resource identifier of the Tournament
   * @param name {} Human readable name of the Tournament
   * @param country {} 
   * @param seasons {} List of seasons available for the Tournament
   */
  constructor(id, name, country, seasons) {
    super(id, name, country);
    this.seasons = seasons;
  }

  /**
   * Constructs a <code>TournamentWithSeasons</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TournamentWithSeasons} obj Optional instance to populate.
   * @return {module:model/TournamentWithSeasons} The populated <code>TournamentWithSeasons</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TournamentWithSeasons();
      Tournament.constructFromObject(data, obj);
      if (data.hasOwnProperty('seasons'))
        obj.seasons = ApiClient.convertToType(data['seasons'], [TournamentSeason]);
    }
    return obj;
  }
}

/**
 * List of seasons available for the Tournament
 * @member {Array.<module:model/TournamentSeason>} seasons
 */
TournamentWithSeasons.prototype.seasons = undefined;
