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
 * The TeamScore model module.
 * @module model/TeamScore
 * @version 0.0.1
 */
export class TeamScore {
  /**
   * Constructs a new <code>TeamScore</code>.
   * @alias module:model/TeamScore
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>TeamScore</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamScore} obj Optional instance to populate.
   * @return {module:model/TeamScore} The populated <code>TeamScore</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamScore();
      if (data.hasOwnProperty('half_time'))
        obj.halfTime = ApiClient.convertToType(data['half_time'], 'Number');
      if (data.hasOwnProperty('ordinary_time'))
        obj.ordinaryTime = ApiClient.convertToType(data['ordinary_time'], 'Number');
      if (data.hasOwnProperty('extra_time'))
        obj.extraTime = ApiClient.convertToType(data['extra_time'], 'Number');
      if (data.hasOwnProperty('penalty_shootout'))
        obj.penaltyShootout = ApiClient.convertToType(data['penalty_shootout'], 'Number');
    }
    return obj;
  }
}

/**
 * Score at the halftime break
 * @member {Number} halfTime
 */
TeamScore.prototype.halfTime = undefined;

/**
 * Score in regular time + injury time
 * @member {Number} ordinaryTime
 */
TeamScore.prototype.ordinaryTime = undefined;

/**
 * Score in extra time, does not include the score for ordinary time
 * @member {Number} extraTime
 */
TeamScore.prototype.extraTime = undefined;

/**
 * Score in penalty shootout, does not include ordinarytime or extratime
 * @member {Number} penaltyShootout
 */
TeamScore.prototype.penaltyShootout = undefined;

