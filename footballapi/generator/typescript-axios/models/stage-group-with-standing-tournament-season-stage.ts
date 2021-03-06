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
import { LeagueStandingData } from './league-standing-data';
import { StageGroupWithStanding } from './stage-group-with-standing';
import { TournamentSeasonStage } from './tournament-season-stage';
/**
 * 
 * @export
 * @interface StageGroupWithStandingTournamentSeasonStage
 */
export interface StageGroupWithStandingTournamentSeasonStage extends StageGroupWithStanding {
    /**
     * 
     * @type {TournamentSeasonStage}
     * @memberof StageGroupWithStandingTournamentSeasonStage
     */
    tournamentSeasonStage: TournamentSeasonStage;
}
