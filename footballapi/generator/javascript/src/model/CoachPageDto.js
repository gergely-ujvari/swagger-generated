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
import {CoachDto} from './CoachDto';
import {PageMetaDto} from './PageMetaDto';

/**
 * The CoachPageDto model module.
 * @module model/CoachPageDto
 * @version 0.0.1
 */
export class CoachPageDto {
  /**
   * Constructs a new <code>CoachPageDto</code>.
   * @alias module:model/CoachPageDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CoachPageDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CoachPageDto} obj Optional instance to populate.
   * @return {module:model/CoachPageDto} The populated <code>CoachPageDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CoachPageDto();
      if (data.hasOwnProperty('coaches'))
        obj.coaches = ApiClient.convertToType(data['coaches'], [CoachDto]);
      if (data.hasOwnProperty('page_meta'))
        obj.pageMeta = PageMetaDto.constructFromObject(data['page_meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/CoachDto>} coaches
 */
CoachPageDto.prototype.coaches = undefined;

/**
 * @member {module:model/PageMetaDto} pageMeta
 */
CoachPageDto.prototype.pageMeta = undefined;

