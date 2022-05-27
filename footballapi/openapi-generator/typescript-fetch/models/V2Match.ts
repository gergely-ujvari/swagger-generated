/* tslint:disable */
/* eslint-disable */
/**
 * Football API
 * API for accessing various kinds of football data, updated in real time.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    V2Group,
    V2GroupFromJSON,
    V2GroupFromJSONTyped,
    V2GroupToJSON,
} from './V2Group';
import {
    V2MatchMinute,
    V2MatchMinuteFromJSON,
    V2MatchMinuteFromJSONTyped,
    V2MatchMinuteToJSON,
} from './V2MatchMinute';
import {
    V2MatchReferee,
    V2MatchRefereeFromJSON,
    V2MatchRefereeFromJSONTyped,
    V2MatchRefereeToJSON,
} from './V2MatchReferee';
import {
    V2MatchRound,
    V2MatchRoundFromJSON,
    V2MatchRoundFromJSONTyped,
    V2MatchRoundToJSON,
} from './V2MatchRound';
import {
    V2MatchScore,
    V2MatchScoreFromJSON,
    V2MatchScoreFromJSONTyped,
    V2MatchScoreToJSON,
} from './V2MatchScore';
import {
    V2MatchStage,
    V2MatchStageFromJSON,
    V2MatchStageFromJSONTyped,
    V2MatchStageToJSON,
} from './V2MatchStage';
import {
    V2MatchStatus,
    V2MatchStatusFromJSON,
    V2MatchStatusFromJSONTyped,
    V2MatchStatusToJSON,
} from './V2MatchStatus';
import {
    V2MatchTeamDto,
    V2MatchTeamDtoFromJSON,
    V2MatchTeamDtoFromJSONTyped,
    V2MatchTeamDtoToJSON,
} from './V2MatchTeamDto';
import {
    V2MatchVenue,
    V2MatchVenueFromJSON,
    V2MatchVenueFromJSONTyped,
    V2MatchVenueToJSON,
} from './V2MatchVenue';
import {
    V2Season,
    V2SeasonFromJSON,
    V2SeasonFromJSONTyped,
    V2SeasonToJSON,
} from './V2Season';

/**
 * 
 * @export
 * @interface V2Match
 */
export interface V2Match {
    /**
     * 
     * @type {string}
     * @memberof V2Match
     */
    id?: string;
    /**
     * 
     * @type {V2MatchStatus}
     * @memberof V2Match
     */
    status?: V2MatchStatus;
    /**
     * 
     * @type {Date}
     * @memberof V2Match
     */
    kickoffTime?: Date;
    /**
     * 
     * @type {V2MatchStage}
     * @memberof V2Match
     */
    stage?: V2MatchStage;
    /**
     * 
     * @type {V2Season}
     * @memberof V2Match
     */
    season?: V2Season;
    /**
     * 
     * @type {V2Group}
     * @memberof V2Match
     */
    group?: V2Group;
    /**
     * 
     * @type {V2MatchRound}
     * @memberof V2Match
     */
    round?: V2MatchRound;
    /**
     * 
     * @type {V2MatchTeamDto}
     * @memberof V2Match
     */
    homeTeam?: V2MatchTeamDto;
    /**
     * 
     * @type {V2MatchTeamDto}
     * @memberof V2Match
     */
    awayTeam?: V2MatchTeamDto;
    /**
     * 
     * @type {Array<V2MatchReferee>}
     * @memberof V2Match
     */
    referees?: Array<V2MatchReferee>;
    /**
     * 
     * @type {V2MatchVenue}
     * @memberof V2Match
     */
    venue?: V2MatchVenue;
    /**
     * 
     * @type {number}
     * @memberof V2Match
     */
    spectators?: number;
    /**
     * 
     * @type {string}
     * @memberof V2Match
     */
    coverage?: V2MatchCoverageEnum;
    /**
     * 
     * @type {V2MatchMinute}
     * @memberof V2Match
     */
    minute?: V2MatchMinute;
    /**
     * 
     * @type {Date}
     * @memberof V2Match
     */
    phaseStartedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof V2Match
     */
    finishedAt?: Date;
    /**
     * 
     * @type {V2MatchScore}
     * @memberof V2Match
     */
    score?: V2MatchScore;
}


/**
 * @export
 */
export const V2MatchCoverageEnum = {
    Live: 'LIVE',
    NotLive: 'NOT_LIVE',
    Unknown: 'UNKNOWN'
} as const;
export type V2MatchCoverageEnum = typeof V2MatchCoverageEnum[keyof typeof V2MatchCoverageEnum];


export function V2MatchFromJSON(json: any): V2Match {
    return V2MatchFromJSONTyped(json, false);
}

export function V2MatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2Match {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'status': !exists(json, 'status') ? undefined : V2MatchStatusFromJSON(json['status']),
        'kickoffTime': !exists(json, 'kickoff_time') ? undefined : (new Date(json['kickoff_time'])),
        'stage': !exists(json, 'stage') ? undefined : V2MatchStageFromJSON(json['stage']),
        'season': !exists(json, 'season') ? undefined : V2SeasonFromJSON(json['season']),
        'group': !exists(json, 'group') ? undefined : V2GroupFromJSON(json['group']),
        'round': !exists(json, 'round') ? undefined : V2MatchRoundFromJSON(json['round']),
        'homeTeam': !exists(json, 'home_team') ? undefined : V2MatchTeamDtoFromJSON(json['home_team']),
        'awayTeam': !exists(json, 'away_team') ? undefined : V2MatchTeamDtoFromJSON(json['away_team']),
        'referees': !exists(json, 'referees') ? undefined : ((json['referees'] as Array<any>).map(V2MatchRefereeFromJSON)),
        'venue': !exists(json, 'venue') ? undefined : V2MatchVenueFromJSON(json['venue']),
        'spectators': !exists(json, 'spectators') ? undefined : json['spectators'],
        'coverage': !exists(json, 'coverage') ? undefined : json['coverage'],
        'minute': !exists(json, 'minute') ? undefined : V2MatchMinuteFromJSON(json['minute']),
        'phaseStartedAt': !exists(json, 'phase_started_at') ? undefined : (new Date(json['phase_started_at'])),
        'finishedAt': !exists(json, 'finished_at') ? undefined : (new Date(json['finished_at'])),
        'score': !exists(json, 'score') ? undefined : V2MatchScoreFromJSON(json['score']),
    };
}

export function V2MatchToJSON(value?: V2Match | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'status': V2MatchStatusToJSON(value.status),
        'kickoff_time': value.kickoffTime === undefined ? undefined : (value.kickoffTime.toISOString()),
        'stage': V2MatchStageToJSON(value.stage),
        'season': V2SeasonToJSON(value.season),
        'group': V2GroupToJSON(value.group),
        'round': V2MatchRoundToJSON(value.round),
        'home_team': V2MatchTeamDtoToJSON(value.homeTeam),
        'away_team': V2MatchTeamDtoToJSON(value.awayTeam),
        'referees': value.referees === undefined ? undefined : ((value.referees as Array<any>).map(V2MatchRefereeToJSON)),
        'venue': V2MatchVenueToJSON(value.venue),
        'spectators': value.spectators,
        'coverage': value.coverage,
        'minute': V2MatchMinuteToJSON(value.minute),
        'phase_started_at': value.phaseStartedAt === undefined ? undefined : (value.phaseStartedAt.toISOString()),
        'finished_at': value.finishedAt === undefined ? undefined : (value.finishedAt.toISOString()),
        'score': V2MatchScoreToJSON(value.score),
    };
}
