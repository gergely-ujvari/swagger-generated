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
    V2LineupTeamInput,
    V2LineupTeamInputFromJSON,
    V2LineupTeamInputFromJSONTyped,
    V2LineupTeamInputToJSON,
} from './V2LineupTeamInput';

/**
 * 
 * @export
 * @interface V2LineupInput
 */
export interface V2LineupInput {
    /**
     * 
     * @type {string}
     * @memberof V2LineupInput
     */
    status?: V2LineupInputStatusEnum;
    /**
     * 
     * @type {V2LineupTeamInput}
     * @memberof V2LineupInput
     */
    homeTeam?: V2LineupTeamInput;
    /**
     * 
     * @type {V2LineupTeamInput}
     * @memberof V2LineupInput
     */
    awayTeam?: V2LineupTeamInput;
}


/**
 * @export
 */
export const V2LineupInputStatusEnum = {
    Confirmed: 'CONFIRMED',
    Unconfirmed: 'UNCONFIRMED'
} as const;
export type V2LineupInputStatusEnum = typeof V2LineupInputStatusEnum[keyof typeof V2LineupInputStatusEnum];


export function V2LineupInputFromJSON(json: any): V2LineupInput {
    return V2LineupInputFromJSONTyped(json, false);
}

export function V2LineupInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2LineupInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'homeTeam': !exists(json, 'home_team') ? undefined : V2LineupTeamInputFromJSON(json['home_team']),
        'awayTeam': !exists(json, 'away_team') ? undefined : V2LineupTeamInputFromJSON(json['away_team']),
    };
}

export function V2LineupInputToJSON(value?: V2LineupInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'home_team': V2LineupTeamInputToJSON(value.homeTeam),
        'away_team': V2LineupTeamInputToJSON(value.awayTeam),
    };
}
