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
import { StageGroup } from './stage-group';
/**
 * 
 * @export
 * @interface StageGroupWithStanding
 */
export interface StageGroupWithStanding extends StageGroup {
    /**
     * League Standing for the StageGroup if available and requested
     * @type {Array<LeagueStandingData>}
     * @memberof StageGroupWithStanding
     */
    standing?: Array<LeagueStandingData>;
}
