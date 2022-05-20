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

import * as models from './models';

export interface EventStatus {
    /**
     * Status classification
     */
    type: EventStatus.TypeEnum;

    /**
     * Human readable name describing the status, can be translated
     */
    name: string;

    /**
     * Human readable short name describing the status, can be translated
     */
    shortName?: string;

    /**
     * Unique string used to identify the status
     */
    code: EventStatus.CodeEnum;

}
export namespace EventStatus {
    export enum TypeEnum {
        Finished = <any> 'finished',
        Cancelled = <any> 'cancelled',
        Notstarted = <any> 'notstarted',
        Interrupted = <any> 'interrupted',
        Inprogress = <any> 'inprogress'
    }
    export enum CodeEnum {
        Finished = <any> 'finished',
        NotStarted = <any> 'not_started',
        _1stHalf = <any> '1st_half',
        _2ndHalf = <any> '2nd_half'
    }
}
