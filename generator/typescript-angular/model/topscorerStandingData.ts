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
import { PartialPerson } from './partialPerson';
import { PartialTeam } from './partialTeam';
import { StandingData } from './standingData';
import { StandingRule } from './standingRule';

export interface TopscorerStandingData extends StandingData { 
    player: PartialPerson;
    /**
     * Number of goals scored
     */
    goals: number;
    /**
     * Total games played
     */
    played?: number;
    /**
     * Number of assists
     */
    assists?: number;
    /**
     * Total number of minutes played
     */
    minutes?: number;
    /**
     * Number of goals scored from the penalty spot
     */
    penalties?: number;
    /**
     * Number of red cards
     */
    redCards?: number;
    /**
     * Number of times the player scored first for the team
     */
    scoredFirst?: number;
    /**
     * Number of yellow cards
     */
    yellowCards?: number;
}