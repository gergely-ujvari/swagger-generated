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
 * @interface TeamStatistics
 */
export interface TeamStatistics {
    /**
     * Number of keys passes completed
     * @type {number}
     * @memberof TeamStatistics
     */
    pass?: number;
    /**
     * Percentage of time the team possess the ball
     * @type {number}
     * @memberof TeamStatistics
     */
    possession: number;
    /**
     * Number of goals scored
     * @type {number}
     * @memberof TeamStatistics
     */
    goals: number;
    /**
     * Number of corners
     * @type {number}
     * @memberof TeamStatistics
     */
    corners: number;
    /**
     * Number of crosses
     * @type {number}
     * @memberof TeamStatistics
     */
    crosses?: number;
    /**
     * Number of offsides
     * @type {number}
     * @memberof TeamStatistics
     */
    offside: number;
    /**
     * Shots on that have hit target
     * @type {number}
     * @memberof TeamStatistics
     */
    shotsOn: number;
    /**
     * Number of shots that have been blocked by an opposition player
     * @type {number}
     * @memberof TeamStatistics
     */
    shotsBlocked: number;
    /**
     * Shots outside the target
     * @type {number}
     * @memberof TeamStatistics
     */
    shotsOff: number;
    /**
     * Number of throw ins taken
     * @type {number}
     * @memberof TeamStatistics
     */
    throwIn?: number;
    /**
     * Number of goal kicks taken
     * @type {number}
     * @memberof TeamStatistics
     */
    goalKicks?: number;
    /**
     * Number of treatments to injuries
     * @type {number}
     * @memberof TeamStatistics
     */
    treatments?: number;
    /**
     * Total numer of yellow cards
     * @type {number}
     * @memberof TeamStatistics
     */
    yellowCards?: number;
    /**
     * Number of substitutions
     * @type {number}
     * @memberof TeamStatistics
     */
    substitutions?: number;
    /**
     * Number of counter attacks
     * @type {number}
     * @memberof TeamStatistics
     */
    counterAttacks?: number;
    /**
     * Total number of fouls committed by the Team
     * @type {number}
     * @memberof TeamStatistics
     */
    foulsCommitted: number;
}