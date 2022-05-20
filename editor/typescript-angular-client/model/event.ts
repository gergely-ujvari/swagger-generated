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
import { PartialPerson } from './partialPerson';
import { PartialTeam } from './partialTeam';
import { PartialTournamentSeasonStage } from './partialTournamentSeasonStage';
import { StageGroup } from './stageGroup';
import { TeamScore } from './teamScore';
import { Venue } from './venue';


export interface Event { 
    /**
     * Number of spectators at the event
     */
    spectators?: number;
    /**
     * TournamentSeasonStage in which the Event is part of. Should be used for Standing unless the Event is part of a StageGroup
     */
    tournamentSeasonStage: PartialTournamentSeasonStage;
    /**
     * Live minute ticker. Only available if the event_status.type is 'inprogress'
     */
    minute?: number;
    /**
     * Describes the group in which the Event is part of. Available if the Event is from a TournamentSeasonStage which has groups. Example: Champions League Group Stage -> Group A
     */
    stageGroup?: StageGroup;
    referee?: PartialPerson;
    venue?: Venue;
    /**
     * Number of incidents which have occured in the Event (goals, red cards, yellow cards, etc).
     */
    incidents?: number;
    /**
     * Indicates whether player lineup information is available or not
     */
    lineupAvailable?: boolean;
    /**
     * Indicates whether the event has livescore updates. If false the event will be updated after FT.
     */
    liveUpdates?: boolean;
    /**
     * Indicates whether teamstats are available for this event
     */
    teamstatsAvailable?: boolean;
    /**
     * Score information at various stages of the Event for Home Team
     */
    homeScore?: TeamScore;
    /**
     * Score information at various stages of the Event for Home Team
     */
    awayScore?: TeamScore;
    /**
     * timestamp when the current phase (1st_half, 2nd_half, et, etc) has started. Can be used for calculating the minute ticker
     */
    startedAt?: Date;
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
    goalHome?: number;
    /**
     * Goals scored by the away team
     */
    goalAway?: number;
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
