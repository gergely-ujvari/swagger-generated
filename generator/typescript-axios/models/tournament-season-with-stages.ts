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
import { Tournament } from './tournament';
import { TournamentSeasonStage } from './tournament-season-stage';
import { TournamentSeasonWithTournament } from './tournament-season-with-tournament';
/**
 * 
 * @export
 * @interface TournamentSeasonWithStages
 */
export interface TournamentSeasonWithStages extends TournamentSeasonWithTournament {
    /**
     * List of stages which take place during the TournamentSeason. If the parent Tournament has regional_league = true, this will usually be one stage with cup = false.
     * @type {Array<TournamentSeasonStage>}
     * @memberof TournamentSeasonWithStages
     */
    stages: Array<TournamentSeasonStage>;
}
