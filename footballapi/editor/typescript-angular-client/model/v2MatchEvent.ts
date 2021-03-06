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
import { V2Player } from './v2Player';
import { V2TeamScore } from './v2TeamScore';


export interface V2MatchEvent { 
    id?: string;
    matchId?: string;
    typeCode?: V2MatchEvent.TypeCodeEnum;
    teamPosition?: V2MatchEvent.TeamPositionEnum;
    minute?: number;
    teamId?: string;
    primaryPlayer?: V2Player;
    secondaryPlayer?: V2Player;
    score?: V2TeamScore;
}
export namespace V2MatchEvent {
    export type TypeCodeEnum = 'YELLOW_RED_CARD' | 'PENALTY_SHOOTOUT_MISSED' | 'PENALTY_SHOOTOUT_SCORED' | 'SUBSTITUTION' | 'GOAL' | 'RED_CARD' | 'PENALTY_MISS' | 'YELLOW_CARD' | 'ASSIST' | 'PENALTY_GOAL' | 'OWN_GOAL';
    export const TypeCodeEnum = {
        YELLOWREDCARD: 'YELLOW_RED_CARD' as TypeCodeEnum,
        PENALTYSHOOTOUTMISSED: 'PENALTY_SHOOTOUT_MISSED' as TypeCodeEnum,
        PENALTYSHOOTOUTSCORED: 'PENALTY_SHOOTOUT_SCORED' as TypeCodeEnum,
        SUBSTITUTION: 'SUBSTITUTION' as TypeCodeEnum,
        GOAL: 'GOAL' as TypeCodeEnum,
        REDCARD: 'RED_CARD' as TypeCodeEnum,
        PENALTYMISS: 'PENALTY_MISS' as TypeCodeEnum,
        YELLOWCARD: 'YELLOW_CARD' as TypeCodeEnum,
        ASSIST: 'ASSIST' as TypeCodeEnum,
        PENALTYGOAL: 'PENALTY_GOAL' as TypeCodeEnum,
        OWNGOAL: 'OWN_GOAL' as TypeCodeEnum
    };
    export type TeamPositionEnum = 'HOME' | 'AWAY';
    export const TeamPositionEnum = {
        HOME: 'HOME' as TeamPositionEnum,
        AWAY: 'AWAY' as TeamPositionEnum
    };
}
