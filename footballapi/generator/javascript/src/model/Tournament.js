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
 * The Tournament model module.
 * @module model/Tournament
 * @version 0.0.1
 */
export class Tournament {
  /**
   * Constructs a new <code>Tournament</code>.
   * Resource representing a Football Tournament such as A Grupa, Premier League, Champions League, World Cup, etc. Does not represent a specific season such as Premier League 2015/2016.
   * @alias module:model/Tournament
   * @class
   * @param id {Number} Unique Resource identifier of the Tournament
   * @param name {String} Human readable name of the Tournament
   * @param country {module:model/Country} 
   */
  constructor(id, name, country) {
    this.id = id;
    this.name = name;
    this.country = country;
  }

  /**
   * Constructs a <code>Tournament</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tournament} obj Optional instance to populate.
   * @return {module:model/Tournament} The populated <code>Tournament</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Tournament();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('country'))
        obj.country = Country.constructFromObject(data['country']);
      if (data.hasOwnProperty('regional_league'))
        obj.regionalLeague = ApiClient.convertToType(data['regional_league'], 'Boolean');
      if (data.hasOwnProperty('client_sortorder'))
        obj.clientSortorder = ApiClient.convertToType(data['client_sortorder'], 'Number');
      if (data.hasOwnProperty('url_logo'))
        obj.urlLogo = ApiClient.convertToType(data['url_logo'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('gender'))
        obj.gender = ApiClient.convertToType(data['gender'], 'String');
      if (data.hasOwnProperty('region'))
        obj.region = ApiClient.convertToType(data['region'], 'String');
    }
    return obj;
  }
}

/**
 * Unique Resource identifier of the Tournament
 * @member {Number} id
 */
Tournament.prototype.id = undefined;

/**
 * Human readable name of the Tournament
 * @member {String} name
 */
Tournament.prototype.name = undefined;

/**
 * @member {module:model/Country} country
 */
Tournament.prototype.country = undefined;

/**
 * Whether or not the Tournament is a regional league such as the La Liga, A PFG, EPL.
 * @member {Boolean} regionalLeague
 */
Tournament.prototype.regionalLeague = undefined;

/**
 * Represents the order position in a custom client based sorted list
 * @member {Number} clientSortorder
 */
Tournament.prototype.clientSortorder = undefined;

/**
 * @member {String} urlLogo
 */
Tournament.prototype.urlLogo = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
Tournament.TypeEnum = {
  /**
   * value: "CUP"
   * @const
   */
  CUP: "CUP",

  /**
   * value: "LEAGUE"
   * @const
   */
  LEAGUE: "LEAGUE"
};
/**
 * Shows if the tournament is Cup or a League
 * @member {module:model/Tournament.TypeEnum} type
 */
Tournament.prototype.type = undefined;

/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */
Tournament.GenderEnum = {
  /**
   * value: "MALE"
   * @const
   */
  MALE: "MALE",

  /**
   * value: "FEMALE"
   * @const
   */
  FEMALE: "FEMALE"
};
/**
 * Shows if the the teams in the tournament are Male or Female
 * @member {module:model/Tournament.GenderEnum} gender
 */
Tournament.prototype.gender = undefined;

/**
 * Allowed values for the <code>region</code> property.
 * @enum {String}
 * @readonly
 */
Tournament.RegionEnum = {
  /**
   * value: "DOMESTIC"
   * @const
   */
  DOMESTIC: "DOMESTIC",

  /**
   * value: "INTERNATIONAL"
   * @const
   */
  INTERNATIONAL: "INTERNATIONAL"
};
/**
 * Shows if the tournament is Regional or International
 * @member {module:model/Tournament.RegionEnum} region
 */
Tournament.prototype.region = undefined;
