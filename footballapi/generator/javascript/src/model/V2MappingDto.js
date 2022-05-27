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
 * The V2MappingDto model module.
 * @module model/V2MappingDto
 * @version 0.0.1
 */
export class V2MappingDto {
  /**
   * Constructs a new <code>V2MappingDto</code>.
   * @alias module:model/V2MappingDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V2MappingDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2MappingDto} obj Optional instance to populate.
   * @return {module:model/V2MappingDto} The populated <code>V2MappingDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V2MappingDto();
      if (data.hasOwnProperty('provider'))
        obj.provider = ApiClient.convertToType(data['provider'], 'String');
      if (data.hasOwnProperty('entity_type'))
        obj.entityType = ApiClient.convertToType(data['entity_type'], 'String');
      if (data.hasOwnProperty('domain_id'))
        obj.domainId = ApiClient.convertToType(data['domain_id'], 'String');
      if (data.hasOwnProperty('provider_id'))
        obj.providerId = ApiClient.convertToType(data['provider_id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} provider
 */
V2MappingDto.prototype.provider = undefined;

/**
 * Allowed values for the <code>entityType</code> property.
 * @enum {String}
 * @readonly
 */
V2MappingDto.EntityTypeEnum = {
  /**
   * value: "PLAYER"
   * @const
   */
  PLAYER: "PLAYER",

  /**
   * value: "TEAM"
   * @const
   */
  TEAM: "TEAM",

  /**
   * value: "COACH"
   * @const
   */
  COACH: "COACH",

  /**
   * value: "MATCH"
   * @const
   */
  MATCH: "MATCH",

  /**
   * value: "SEASON"
   * @const
   */
  SEASON: "SEASON",

  /**
   * value: "VENUE"
   * @const
   */
  VENUE: "VENUE",

  /**
   * value: "REFEREE"
   * @const
   */
  REFEREE: "REFEREE",

  /**
   * value: "TOURNAMENT"
   * @const
   */
  TOURNAMENT: "TOURNAMENT",

  /**
   * value: "CITY"
   * @const
   */
  CITY: "CITY",

  /**
   * value: "PRESIDENT"
   * @const
   */
  PRESIDENT: "PRESIDENT",

  /**
   * value: "STAGE"
   * @const
   */
  STAGE: "STAGE",

  /**
   * value: "GROUP"
   * @const
   */
  GROUP: "GROUP",

  /**
   * value: "COUNTRY"
   * @const
   */
  COUNTRY: "COUNTRY",

  /**
   * value: "ODD_PROVIDER"
   * @const
   */
  ODD_PROVIDER: "ODD_PROVIDER"
};
/**
 * @member {module:model/V2MappingDto.EntityTypeEnum} entityType
 */
V2MappingDto.prototype.entityType = undefined;

/**
 * @member {String} domainId
 */
V2MappingDto.prototype.domainId = undefined;

/**
 * @member {String} providerId
 */
V2MappingDto.prototype.providerId = undefined;
