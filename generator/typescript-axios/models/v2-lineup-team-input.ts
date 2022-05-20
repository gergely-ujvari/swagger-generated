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
import { V2LineupPlayerInput } from './v2-lineup-player-input';
/**
 * 
 * @export
 * @interface V2LineupTeamInput
 */
export interface V2LineupTeamInput {
    /**
     * 
     * @type {string}
     * @memberof V2LineupTeamInput
     */
    formation?: string;
    /**
     * 
     * @type {string}
     * @memberof V2LineupTeamInput
     */
    coachId?: string;
    /**
     * 
     * @type {Array<V2LineupPlayerInput>}
     * @memberof V2LineupTeamInput
     */
    players?: Array<V2LineupPlayerInput>;
}
