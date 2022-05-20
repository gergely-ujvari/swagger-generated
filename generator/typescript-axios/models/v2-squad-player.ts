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
import { V2Player } from './v2-player';
/**
 * 
 * @export
 * @interface V2SquadPlayer
 */
export interface V2SquadPlayer {
    /**
     * 
     * @type {V2Player}
     * @memberof V2SquadPlayer
     */
    player: V2Player;
    /**
     * 
     * @type {string}
     * @memberof V2SquadPlayer
     */
    status: V2SquadPlayerStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof V2SquadPlayer
     */
    contractType?: V2SquadPlayerContractTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof V2SquadPlayer
     */
    startDate?: string;
    /**
     * 
     * @type {string}
     * @memberof V2SquadPlayer
     */
    endDate?: string;
    /**
     * 
     * @type {number}
     * @memberof V2SquadPlayer
     */
    shirtNumber?: number;
}

/**
    * @export
    * @enum {string}
    */
export enum V2SquadPlayerStatusEnum {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE'
}
/**
    * @export
    * @enum {string}
    */
export enum V2SquadPlayerContractTypeEnum {
    PERMANENT = 'PERMANENT',
    LOAN = 'LOAN',
    UNKNOWN = 'UNKNOWN'
}

