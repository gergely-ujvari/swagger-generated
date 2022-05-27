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
    Tournament,
    TournamentFromJSON,
    TournamentFromJSONTyped,
    TournamentToJSON,
} from './Tournament';

/**
 * 
 * @export
 * @interface TournamentSeasonWithTournamentAllOf
 */
export interface TournamentSeasonWithTournamentAllOf {
    /**
     * 
     * @type {Tournament}
     * @memberof TournamentSeasonWithTournamentAllOf
     */
    tournament: Tournament;
}

export function TournamentSeasonWithTournamentAllOfFromJSON(json: any): TournamentSeasonWithTournamentAllOf {
    return TournamentSeasonWithTournamentAllOfFromJSONTyped(json, false);
}

export function TournamentSeasonWithTournamentAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): TournamentSeasonWithTournamentAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tournament': TournamentFromJSON(json['tournament']),
    };
}

export function TournamentSeasonWithTournamentAllOfToJSON(value?: TournamentSeasonWithTournamentAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tournament': TournamentToJSON(value.tournament),
    };
}
