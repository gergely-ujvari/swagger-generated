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

export interface CardlistStandingData extends StandingData { 
    player: PartialPerson;
    /**
     * Number of red cards
     */
    redCards: number;
    /**
     * Total number of cards received
     */
    totalCards: number;
    /**
     * Total number of yellow cards
     */
    yellowCards: number;
    /**
     * Number of times the Player has been booked, with a first yellow card
     */
    firstYellowCards: number;
}