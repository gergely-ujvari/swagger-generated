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

import * as models from './models';

export interface TeamStatistics {
    /**
     * Number of keys passes completed
     */
    "pass"?: number;
    /**
     * Percentage of time the team possess the ball
     */
    "possession": number;
    /**
     * Number of goals scored
     */
    "goals": number;
    /**
     * Number of corners
     */
    "corners": number;
    /**
     * Number of crosses
     */
    "crosses"?: number;
    /**
     * Number of offsides
     */
    "offside": number;
    /**
     * Shots on that have hit target
     */
    "shotsOn": number;
    /**
     * Number of shots that have been blocked by an opposition player
     */
    "shotsBlocked": number;
    /**
     * Shots outside the target
     */
    "shotsOff": number;
    /**
     * Number of throw ins taken
     */
    "throwIn"?: number;
    /**
     * Number of goal kicks taken
     */
    "goalKicks"?: number;
    /**
     * Number of treatments to injuries
     */
    "treatments"?: number;
    /**
     * Total numer of yellow cards
     */
    "yellowCards"?: number;
    /**
     * Number of substitutions
     */
    "substitutions"?: number;
    /**
     * Number of counter attacks
     */
    "counterAttacks"?: number;
    /**
     * Total number of fouls committed by the Team
     */
    "foulsCommitted": number;
}

