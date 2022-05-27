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
 * The V2MappingRequestDto model module.
 * @module model/V2MappingRequestDto
 * @version 0.0.1
 */
export class V2MappingRequestDto {
  /**
   * Constructs a new <code>V2MappingRequestDto</code>.
   * @alias module:model/V2MappingRequestDto
   * @class
   * @param entityType {module:model/V2MappingRequestDto.EntityTypeEnum} 
   * @param providerId {String} 
   */
  constructor(entityType, providerId) {
    this.entityType = entityType;
    this.providerId = providerId;
  }

  /**
   * Constructs a <code>V2MappingRequestDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2MappingRequestDto} obj Optional instance to populate.
   * @return {module:model/V2MappingRequestDto} The populated <code>V2MappingRequestDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V2MappingRequestDto();
      if (data.hasOwnProperty('entity_type'))
        obj.entityType = ApiClient.convertToType(data['entity_type'], 'String');
      if (data.hasOwnProperty('provider_id'))
        obj.providerId = ApiClient.convertToType(data['provider_id'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>entityType</code> property.
 * @enum {String}
 * @readonly
 */
V2MappingRequestDto.EntityTypeEnum = {
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
 * @member {module:model/V2MappingRequestDto.EntityTypeEnum} entityType
 */
V2MappingRequestDto.prototype.entityType = undefined;

/**
 * @member {String} providerId
 */
V2MappingRequestDto.prototype.providerId = undefined;
