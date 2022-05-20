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

export interface EventIncident {
    /**
     * Unique identifier
     */
    "id": number;
    /**
     * Identifier of the event during which the incident occurred
     */
    "eventId": number;
    /**
     * The type of incident
     */
    "type": EventIncident.TypeEnum;
    /**
     * Whether the incident is related to the home or away team. true if home team
     */
    "homeTeam": boolean;
    /**
     * The minute when the incident occured
     */
    "minute": number;
    /**
     * Id of the team for which the incident is related
     */
    "teamId"?: number;
    /**
     * Updated home team score if the incident changes the scoreline (penalty, goal, own_goal, etc)
     */
    "goalHome"?: number;
    /**
     * Updated away team score  if the incident changes the scoreline (penalty, goal, own_goal, etc)
     */
    "goalAway"?: number;
    /**
     * Player who is the main actor in the incident: Goal Scorer, player who received yellow card. If type == 'substitution' this is the player coming off
     */
    "player"?: models.PartialPerson;
    /**
     * Player who is of secondary importance to the incident: Player who assisted a goal. If type == 'substitution' this is the player coming on
     */
    "relPlayer"?: models.PartialPerson;
    /**
     * Whether the incident has been deleted or not - a disallowed goal for example
     */
    "deleted"?: boolean;
    /**
     * If there are multiple incidents with the same minute, this indicates how they are sorted
     */
    "sortorder"?: number;
}

export namespace EventIncident {
    export enum TypeEnum {
        PenaltyShootoutScored = <any> 'penalty_shootout_scored',
        YellowCardRed = <any> 'yellow_card_red',
        PenaltyShootoutMissed = <any> 'penalty_shootout_missed',
        Substitution = <any> 'substitution',
        Goal = <any> 'goal',
        RedCard = <any> 'red_card',
        PenaltyMiss = <any> 'penalty_miss',
        YellowCard = <any> 'yellow_card',
        PenaltyGoal = <any> 'penalty_goal',
        OwnGoal = <any> 'own_goal'
    }
}