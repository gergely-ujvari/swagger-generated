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
 * @interface V2MatchReferee
 */
export interface V2MatchReferee {
    /**
     * 
     * @type {string}
     * @memberof V2MatchReferee
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof V2MatchReferee
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof V2MatchReferee
     */
    role?: V2MatchRefereeRoleEnum;
    /**
     * 
     * @type {string}
     * @memberof V2MatchReferee
     */
    gender?: V2MatchRefereeGenderEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum V2MatchRefereeRoleEnum {
    REFEREE = 'REFEREE'
}
/**
    * @export
    * @enum {string}
    */
export enum V2MatchRefereeGenderEnum {
    MALE = 'MALE',
    FEMALE = 'FEMALE'
}
