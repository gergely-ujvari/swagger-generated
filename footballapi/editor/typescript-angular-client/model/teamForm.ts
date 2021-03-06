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
import { PartialEvent } from './partialEvent';


export interface TeamForm { 
    /**
     * Information about the Event in the Form guide
     */
    event?: PartialEvent;
    /**
     * Indicates outcome of the event for the given team
     */
    outcome: TeamForm.OutcomeEnum;
}
export namespace TeamForm {
    export type OutcomeEnum = 'W' | 'D' | 'L';
    export const OutcomeEnum = {
        W: 'W' as OutcomeEnum,
        D: 'D' as OutcomeEnum,
        L: 'L' as OutcomeEnum
    };
}
