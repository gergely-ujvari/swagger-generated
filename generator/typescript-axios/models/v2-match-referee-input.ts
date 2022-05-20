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
 * @interface V2MatchRefereeInput
 */
export interface V2MatchRefereeInput {
    /**
     * 
     * @type {string}
     * @memberof V2MatchRefereeInput
     */
    refereeId?: string;
    /**
     * 
     * @type {string}
     * @memberof V2MatchRefereeInput
     */
    role?: V2MatchRefereeInputRoleEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum V2MatchRefereeInputRoleEnum {
    REFEREE = 'REFEREE'
}

