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
import { BasicPlayerStats } from './basic-player-stats';
import { TournamentSeasonStage } from './tournament-season-stage';
/**
 * 
 * @export
 * @interface TeamSeasonStatistics
 */
export interface TeamSeasonStatistics {
    /**
     * 
     * @type {number}
     * @memberof TeamSeasonStatistics
     */
    teamId?: number;
    /**
     * 
     * @type {TournamentSeasonStage}
     * @memberof TeamSeasonStatistics
     */
    latestLeagueStage?: TournamentSeasonStage;
    /**
     * Player statistics for the TournamentSeason
     * @type {Array<BasicPlayerStats>}
     * @memberof TeamSeasonStatistics
     */
    playerStatistics?: Array<BasicPlayerStats>;
}
