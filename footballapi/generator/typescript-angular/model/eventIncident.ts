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

export interface EventIncident { 
    /**
     * Unique identifier
     */
    id: number;
    /**
     * Identifier of the event during which the incident occurred
     */
    eventId: number;
    /**
     * The type of incident
     */
    type: EventIncident.TypeEnum;
    /**
     * Whether the incident is related to the home or away team. true if home team
     */
    homeTeam: boolean;
    /**
     * The minute when the incident occured
     */
    minute: number;
    /**
     * Id of the team for which the incident is related
     */
    teamId?: number;
    /**
     * Updated home team score if the incident changes the scoreline (penalty, goal, own_goal, etc)
     */
    goalHome?: number;
    /**
     * Updated away team score  if the incident changes the scoreline (penalty, goal, own_goal, etc)
     */
    goalAway?: number;
    player?: PartialPerson;
    relPlayer?: PartialPerson;
    /**
     * Whether the incident has been deleted or not - a disallowed goal for example
     */
    deleted?: boolean;
    /**
     * If there are multiple incidents with the same minute, this indicates how they are sorted
     */
    sortorder?: number;
}
export namespace EventIncident {
    export type TypeEnum = 'penalty_shootout_scored' | 'yellow_card_red' | 'penalty_shootout_missed' | 'substitution' | 'goal' | 'red_card' | 'penalty_miss' | 'yellow_card' | 'penalty_goal' | 'own_goal';
    export const TypeEnum = {
        PenaltyShootoutScored: 'penalty_shootout_scored' as TypeEnum,
        YellowCardRed: 'yellow_card_red' as TypeEnum,
        PenaltyShootoutMissed: 'penalty_shootout_missed' as TypeEnum,
        Substitution: 'substitution' as TypeEnum,
        Goal: 'goal' as TypeEnum,
        RedCard: 'red_card' as TypeEnum,
        PenaltyMiss: 'penalty_miss' as TypeEnum,
        YellowCard: 'yellow_card' as TypeEnum,
        PenaltyGoal: 'penalty_goal' as TypeEnum,
        OwnGoal: 'own_goal' as TypeEnum
    };
}