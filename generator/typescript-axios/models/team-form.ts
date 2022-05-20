/* tslint:disable */
/* eslint-disable */
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
import { PartialEvent } from './partial-event';
/**
 * 
 * @export
 * @interface TeamForm
 */
export interface TeamForm {
    /**
     * 
     * @type {PartialEvent}
     * @memberof TeamForm
     */
    event?: PartialEvent;
    /**
     * Indicates outcome of the event for the given team
     * @type {string}
     * @memberof TeamForm
     */
    outcome: TeamFormOutcomeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum TeamFormOutcomeEnum {
    W = 'W',
    D = 'D',
    L = 'L'
}
