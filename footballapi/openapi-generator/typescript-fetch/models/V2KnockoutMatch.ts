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
    V2MatchScore,
    V2MatchScoreFromJSON,
    V2MatchScoreFromJSONTyped,
    V2MatchScoreToJSON,
} from './V2MatchScore';

/**
 * 
 * @export
 * @interface V2KnockoutMatch
 */
export interface V2KnockoutMatch {
    /**
     * 
     * @type {string}
     * @memberof V2KnockoutMatch
     */
    id?: string;
    /**
     * 
     * @type {Date}
     * @memberof V2KnockoutMatch
     */
    kickoffTime?: Date;
    /**
     * 
     * @type {V2MatchScore}
     * @memberof V2KnockoutMatch
     */
    score?: V2MatchScore;
    /**
     * 
     * @type {string}
     * @memberof V2KnockoutMatch
     */
    homeTeamId?: string;
    /**
     * 
     * @type {string}
     * @memberof V2KnockoutMatch
     */
    awayTeamId?: string;
}

export function V2KnockoutMatchFromJSON(json: any): V2KnockoutMatch {
    return V2KnockoutMatchFromJSONTyped(json, false);
}

export function V2KnockoutMatchFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2KnockoutMatch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'kickoffTime': !exists(json, 'kickoff_time') ? undefined : (new Date(json['kickoff_time'])),
        'score': !exists(json, 'score') ? undefined : V2MatchScoreFromJSON(json['score']),
        'homeTeamId': !exists(json, 'home_team_id') ? undefined : json['home_team_id'],
        'awayTeamId': !exists(json, 'away_team_id') ? undefined : json['away_team_id'],
    };
}

export function V2KnockoutMatchToJSON(value?: V2KnockoutMatch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'kickoff_time': value.kickoffTime === undefined ? undefined : (value.kickoffTime.toISOString()),
        'score': V2MatchScoreToJSON(value.score),
        'home_team_id': value.homeTeamId,
        'away_team_id': value.awayTeamId,
    };
}
