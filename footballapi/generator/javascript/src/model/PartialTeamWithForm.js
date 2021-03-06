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
import {PartialTeam} from './PartialTeam';
import {TeamForm} from './TeamForm';

/**
 * The PartialTeamWithForm model module.
 * @module model/PartialTeamWithForm
 * @version 0.0.1
 */
export class PartialTeamWithForm extends PartialTeam {
  /**
   * Constructs a new <code>PartialTeamWithForm</code>.
   * @alias module:model/PartialTeamWithForm
   * @class
   * @extends module:model/PartialTeam
   * @param id {} Unique identifier of the Team within the system
   * @param name {} Human readable name of the team
   */
  constructor(id, name) {
    super(id, name);
  }

  /**
   * Constructs a <code>PartialTeamWithForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PartialTeamWithForm} obj Optional instance to populate.
   * @return {module:model/PartialTeamWithForm} The populated <code>PartialTeamWithForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PartialTeamWithForm();
      PartialTeam.constructFromObject(data, obj);
      if (data.hasOwnProperty('form'))
        obj.form = ApiClient.convertToType(data['form'], [TeamForm]);
    }
    return obj;
  }
}

/**
 * Form guide for the Team if available and requested as an option
 * @member {Array.<module:model/TeamForm>} form
 */
PartialTeamWithForm.prototype.form = undefined;

