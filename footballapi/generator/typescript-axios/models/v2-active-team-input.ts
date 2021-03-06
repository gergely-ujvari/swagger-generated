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
 * @interface V2ActiveTeamInput
 */
export interface V2ActiveTeamInput {
    /**
     * 
     * @type {string}
     * @memberof V2ActiveTeamInput
     */
    teamId?: string;
    /**
     * 
     * @type {string}
     * @memberof V2ActiveTeamInput
     */
    contractType?: string;
    /**
     * 
     * @type {string}
     * @memberof V2ActiveTeamInput
     */
    startDate?: string;
    /**
     * 
     * @type {number}
     * @memberof V2ActiveTeamInput
     */
    shirtNumber?: number;
}
