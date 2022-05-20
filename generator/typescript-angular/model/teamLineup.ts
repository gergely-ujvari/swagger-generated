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
import { EventPlayer } from './eventPlayer';
import { PartialPerson } from './partialPerson';

export interface TeamLineup { 
    /**
     * resource id of the team
     */
    teamId?: number;
    /**
     * List of players involved for the team
     */
    players?: Array<EventPlayer>;
    coach?: PartialPerson;
    /**
     * Lineup formation
     */
    formation?: string;
}