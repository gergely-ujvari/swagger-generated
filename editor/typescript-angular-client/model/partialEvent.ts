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
import { EventStatus } from './eventStatus';
import { PartialTeam } from './partialTeam';


export interface PartialEvent { 
    /**
     * Unique identifier
     */
    id: number;
    /**
     * Description of the event's current status
     */
    eventStatus: EventStatus;
    /**
     * Timestamp when the event is scheduled to start
     */
    startTime: Date;
    /**
     * Goals scored by the home team
     */
    goalHome: number;
    /**
     * Goals scored by the away team
     */
    goalAway: number;
    /**
     * Penalties scored by the home team. Available only if the game goes to penalty shootouts
     */
    penaltyHome?: number;
    /**
     * Penalties scored by the away team. Available only if the game goes to penalty shootouts
     */
    penaltyAway?: number;
    /**
     * Goals scored by home team over 1 or more legs. Available only if the tie has mutliple legs
     */
    aggHome?: number;
    /**
     * Goals scored by home team over 1 or more legs. Available only if the tie has mutliple legs
     */
    aggAway?: number;
    /**
     * Home Team
     */
    homeTeam: PartialTeam;
    /**
     * Away Team
     */
    awayTeam: PartialTeam;
}