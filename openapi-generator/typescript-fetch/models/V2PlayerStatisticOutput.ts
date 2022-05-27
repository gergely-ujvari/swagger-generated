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
/**
 * 
 * @export
 * @interface V2PlayerStatisticOutput
 */
export interface V2PlayerStatisticOutput {
    /**
     * 
     * @type {string}
     * @memberof V2PlayerStatisticOutput
     */
    playerId?: string;
    /**
     * 
     * @type {string}
     * @memberof V2PlayerStatisticOutput
     */
    matchId?: string;
    /**
     * 
     * @type {string}
     * @memberof V2PlayerStatisticOutput
     */
    teamId?: string;
    /**
     * 
     * @type {object}
     * @memberof V2PlayerStatisticOutput
     */
    statistics?: object;
    /**
     * 
     * @type {string}
     * @memberof V2PlayerStatisticOutput
     */
    origin?: string;
}

export function V2PlayerStatisticOutputFromJSON(json: any): V2PlayerStatisticOutput {
    return V2PlayerStatisticOutputFromJSONTyped(json, false);
}

export function V2PlayerStatisticOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2PlayerStatisticOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'playerId': !exists(json, 'player_id') ? undefined : json['player_id'],
        'matchId': !exists(json, 'match_id') ? undefined : json['match_id'],
        'teamId': !exists(json, 'team_id') ? undefined : json['team_id'],
        'statistics': !exists(json, 'statistics') ? undefined : json['statistics'],
        'origin': !exists(json, 'origin') ? undefined : json['origin'],
    };
}

export function V2PlayerStatisticOutputToJSON(value?: V2PlayerStatisticOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'player_id': value.playerId,
        'match_id': value.matchId,
        'team_id': value.teamId,
        'statistics': value.statistics,
        'origin': value.origin,
    };
}
