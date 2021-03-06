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
/**
 * 
 * @export
 * @interface V2MatchStatus
 */
export interface V2MatchStatus {
    /**
     * 
     * @type {string}
     * @memberof V2MatchStatus
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof V2MatchStatus
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof V2MatchStatus
     */
    shortName?: string;
    /**
     * 
     * @type {string}
     * @memberof V2MatchStatus
     */
    type?: V2MatchStatusTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof V2MatchStatus
     */
    code?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum V2MatchStatusTypeEnum {
    FINISHED = 'FINISHED',
    NOTSTARTED = 'NOT_STARTED',
    LIVE = 'LIVE',
    INTERRUPTED = 'INTERRUPTED',
    CANCELLED = 'CANCELLED',
    UNKNOWN = 'UNKNOWN'
}

