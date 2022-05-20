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
import {V2Match} from './V2Match';

/**
 * The V2Matches model module.
 * @module model/V2Matches
 * @version 0.0.1
 */
export class V2Matches {
  /**
   * Constructs a new <code>V2Matches</code>.
   * @alias module:model/V2Matches
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>V2Matches</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2Matches} obj Optional instance to populate.
   * @return {module:model/V2Matches} The populated <code>V2Matches</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new V2Matches();
      if (data.hasOwnProperty('matches'))
        obj.matches = ApiClient.convertToType(data['matches'], [V2Match]);
      if (data.hasOwnProperty('page_meta'))
        obj.pageMeta = PageMetaDto.constructFromObject(data['page_meta']);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/V2Match>} matches
 */
V2Matches.prototype.matches = undefined;

/**
 * @member {module:model/PageMetaDto} pageMeta
 */
V2Matches.prototype.pageMeta = undefined;
