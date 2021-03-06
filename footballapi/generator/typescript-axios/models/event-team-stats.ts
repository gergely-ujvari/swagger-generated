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
import { PartialTeam } from './partial-team';
import { TeamStatistics } from './team-statistics';
/**
 * 
 * @export
 * @interface EventTeamStats
 */
export interface EventTeamStats {
    /**
     * 
     * @type {PartialTeam}
     * @memberof EventTeamStats
     */
    team: PartialTeam;
    /**
     * Whether the stats are for the home or the away team
     * @type {boolean}
     * @memberof EventTeamStats
     */
    homeTeam: boolean;
    /**
     * 
     * @type {TeamStatistics}
     * @memberof EventTeamStats
     */
    statistics: TeamStatistics;
    /**
     * Identifier of the event the stat is related to
     * @type {number}
     * @memberof EventTeamStats
     */
    eventId?: number;
}
