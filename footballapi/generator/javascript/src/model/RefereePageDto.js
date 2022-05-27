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
import {PageMetaDto} from './PageMetaDto';
import {RefereeDto} from './RefereeDto';

/**
 * The RefereePageDto model module.
 * @module model/RefereePageDto
 * @version 0.0.1
 */
export class RefereePageDto {
  /**
   * Constructs a new <code>RefereePageDto</code>.
   * @alias module:model/RefereePageDto
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RefereePageDto</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RefereePageDto} obj Optional instance to populate.
   * @return {module:model/RefereePageDto} The populated <code>RefereePageDto</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RefereePageDto();
      if (data.hasOwnProperty('referees'))
        obj.referees = ApiClient.convertToType(data['referees'], [RefereeDto]);
      if (data.hasOwnProperty('page_meta'))
        obj.pageMeta = PageMetaDto.constructFromObject(data['page_meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/RefereeDto>} referees
 */
RefereePageDto.prototype.referees = undefined;

/**
 * @member {module:model/PageMetaDto} pageMeta
 */
RefereePageDto.prototype.pageMeta = undefined;
