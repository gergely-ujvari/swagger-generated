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

export interface EventTeamStats {
    /**
     * The Team whose stats are represented in the object
     */
    "team": models.PartialTeam;
    /**
     * Whether the stats are for the home or the away team
     */
    "homeTeam": boolean;
    /**
     * Object containing the team statistics
     */
    "statistics": models.TeamStatistics;
    /**
     * Identifier of the event the stat is related to
     */
    "eventId"?: number;
}

