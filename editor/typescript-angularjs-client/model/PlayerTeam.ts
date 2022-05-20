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

export interface PlayerTeam extends TeamPlayerData {
    /**
     * Whether the person is currently part of the Team
     */
    "active"?: boolean;
    /**
     * Date when the Person joined the team
     */
    "startDate"?: string;
    /**
     * Date when the Person left the team (if any)
     */
    "endDate"?: string;
    /**
     * Reference to the Team the player participates in
     */
    "team": models.PartialTeam;
}

