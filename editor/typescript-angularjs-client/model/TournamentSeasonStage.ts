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

export interface TournamentSeasonStage {
    /**
     * Date when the first game of the stage is held
     */
    "startDate"?: string;
    /**
     * Date when the final game of the stage is held
     */
    "endDate"?: string;
    /**
     * Whether the stage is a qualification stage to a main Tournrament (Champions League Qualification)
     */
    "qualification"?: boolean;
    /**
     * Whether the API has live scores for the stage
     */
    "live"?: boolean;
    /**
     * Number of groups in the stage. Only available if the stage has groups (Champions League Group Stage)
     */
    "stageGroups"?: number;
    /**
     * League standing data if available and if cup = false
     */
    "standing"?: Array<models.LeagueStandingData>;
    /**
     * List of rounds in the Stage if cup = true
     */
    "rounds"?: Array<models.Round>;
    /**
     * Unique identifier
     */
    "id": number;
    /**
     * Human readable name of the TournamentSeasonStage
     */
    "name": string;
    /**
     * Whether the stage is a cup such as Champions League Knockout stage, World Cup Final stages, etc
     */
    "cup": boolean;
    /**
     * Id of the TournamentSeason in which the stage is part of
     */
    "tournamentSeasonId": number;
    /**
     * Id of the Tournament in whicth the stage is part of
     */
    "tournamentId": number;
    /**
     * Reference to the Country where the TournamentSeasonStage is held
     */
    "country": models.Country;
    /**
     * Indicates which confederation the stage is part of (for World Cup qualif.)
     */
    "confederation"?: string;
}

