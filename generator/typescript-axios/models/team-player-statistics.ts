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
import { Player } from './player';
import { PlayerStatsExtended } from './player-stats-extended';
import { Team } from './team';
/**
 * 
 * @export
 * @interface TeamPlayerStatistics
 */
export interface TeamPlayerStatistics extends PlayerStatsExtended {
    /**
     * 
     * @type {Player}
     * @memberof TeamPlayerStatistics
     */
    player: Player;
    /**
     * 
     * @type {Team}
     * @memberof TeamPlayerStatistics
     */
    team?: Team;
    /**
     * 
     * @type {number}
     * @memberof TeamPlayerStatistics
     */
    shirtNumber?: number;
}
