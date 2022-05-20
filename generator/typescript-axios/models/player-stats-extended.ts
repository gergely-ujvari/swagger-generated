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
import { PlayerStatsBasic } from './player-stats-basic';
/**
 * 
 * @export
 * @interface PlayerStatsExtended
 */
export interface PlayerStatsExtended extends PlayerStatsBasic {
    /**
     * Goals conceded (Goalkeeper)
     * @type {number}
     * @memberof PlayerStatsExtended
     */
    conceded?: number;
    /**
     * Games started as a substitute
     * @type {number}
     * @memberof PlayerStatsExtended
     */
    substitute?: number;
    /**
     * Games without allowing a goal (Goalkeeper)
     * @type {number}
     * @memberof PlayerStatsExtended
     */
    cleansheets?: number;
    /**
     * Games where the player has come on
     * @type {number}
     * @memberof PlayerStatsExtended
     */
    substituteIn?: number;
    /**
     * Games where the player has come off
     * @type {number}
     * @memberof PlayerStatsExtended
     */
    substituteOut?: number;
    /**
     * Minutes played after coming on as a substitute
     * @type {number}
     * @memberof PlayerStatsExtended
     */
    minutesSubstitute?: number;
}
