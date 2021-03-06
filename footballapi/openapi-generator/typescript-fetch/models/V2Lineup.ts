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
    V2LineupTeamDto,
    V2LineupTeamDtoFromJSON,
    V2LineupTeamDtoFromJSONTyped,
    V2LineupTeamDtoToJSON,
} from './V2LineupTeamDto';

/**
 * 
 * @export
 * @interface V2Lineup
 */
export interface V2Lineup {
    /**
     * 
     * @type {string}
     * @memberof V2Lineup
     */
    matchId?: string;
    /**
     * 
     * @type {string}
     * @memberof V2Lineup
     */
    status?: V2LineupStatusEnum;
    /**
     * 
     * @type {V2LineupTeamDto}
     * @memberof V2Lineup
     */
    homeTeam?: V2LineupTeamDto;
    /**
     * 
     * @type {V2LineupTeamDto}
     * @memberof V2Lineup
     */
    awayTeam?: V2LineupTeamDto;
}


/**
 * @export
 */
export const V2LineupStatusEnum = {
    Confirmed: 'CONFIRMED',
    Unconfirmed: 'UNCONFIRMED',
    NotAvailable: 'NOT_AVAILABLE'
} as const;
export type V2LineupStatusEnum = typeof V2LineupStatusEnum[keyof typeof V2LineupStatusEnum];


export function V2LineupFromJSON(json: any): V2Lineup {
    return V2LineupFromJSONTyped(json, false);
}

export function V2LineupFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2Lineup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'matchId': !exists(json, 'match_id') ? undefined : json['match_id'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'homeTeam': !exists(json, 'home_team') ? undefined : V2LineupTeamDtoFromJSON(json['home_team']),
        'awayTeam': !exists(json, 'away_team') ? undefined : V2LineupTeamDtoFromJSON(json['away_team']),
    };
}

export function V2LineupToJSON(value?: V2Lineup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'match_id': value.matchId,
        'status': value.status,
        'home_team': V2LineupTeamDtoToJSON(value.homeTeam),
        'away_team': V2LineupTeamDtoToJSON(value.awayTeam),
    };
}

