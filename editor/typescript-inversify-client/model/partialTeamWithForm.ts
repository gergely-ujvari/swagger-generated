/**
 * Football API
 * API for accessing various kinds of football data, updated in real time.
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { PartialTeam } from './partialTeam';
import { TeamForm } from './teamForm';


export interface PartialTeamWithForm extends PartialTeam { 
    /**
     * Form guide for the Team if available and requested as an option
     */
    form?: Array<TeamForm>;
}
export namespace PartialTeamWithForm {
}
