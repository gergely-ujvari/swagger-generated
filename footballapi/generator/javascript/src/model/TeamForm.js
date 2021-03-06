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
import {PartialEvent} from './PartialEvent';

/**
 * The TeamForm model module.
 * @module model/TeamForm
 * @version 0.0.1
 */
export class TeamForm {
  /**
   * Constructs a new <code>TeamForm</code>.
   * @alias module:model/TeamForm
   * @class
   * @param outcome {module:model/TeamForm.OutcomeEnum} Indicates outcome of the event for the given team
   */
  constructor(outcome) {
    this.outcome = outcome;
  }

  /**
   * Constructs a <code>TeamForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamForm} obj Optional instance to populate.
   * @return {module:model/TeamForm} The populated <code>TeamForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TeamForm();
      if (data.hasOwnProperty('event'))
        obj.event = PartialEvent.constructFromObject(data['event']);
      if (data.hasOwnProperty('outcome'))
        obj.outcome = ApiClient.convertToType(data['outcome'], 'String');
    }
    return obj;
  }
}

/**
 * @member {module:model/PartialEvent} event
 */
TeamForm.prototype.event = undefined;

/**
 * Allowed values for the <code>outcome</code> property.
 * @enum {String}
 * @readonly
 */
TeamForm.OutcomeEnum = {
  /**
   * value: "W"
   * @const
   */
  W: "W",

  /**
   * value: "D"
   * @const
   */
  D: "D",

  /**
   * value: "L"
   * @const
   */
  L: "L"
};
/**
 * Indicates outcome of the event for the given team
 * @member {module:model/TeamForm.OutcomeEnum} outcome
 */
TeamForm.prototype.outcome = undefined;

