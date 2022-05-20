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
import { V2Team } from './v2-team';
/**
 * 
 * @export
 * @interface V2PlayerActiveClub
 */
export interface V2PlayerActiveClub {
    /**
     * 
     * @type {V2Team}
     * @memberof V2PlayerActiveClub
     */
    team?: V2Team;
    /**
     * 
     * @type {string}
     * @memberof V2PlayerActiveClub
     */
    contractType?: string;
    /**
     * 
     * @type {string}
     * @memberof V2PlayerActiveClub
     */
    startDate?: string;
    /**
     * 
     * @type {string}
     * @memberof V2PlayerActiveClub
     */
    shirtNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof V2PlayerActiveClub
     */
    status?: V2PlayerActiveClubStatusEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum V2PlayerActiveClubStatusEnum {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE'
}

