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
 * @interface TournamentSeason
 */
export interface TournamentSeason {
    /**
     * Unique identifier of the object
     * @type {number}
     * @memberof TournamentSeason
     */
    id: number;
    /**
     * Human readable name of the TournamentSeason
     * @type {string}
     * @memberof TournamentSeason
     */
    name: string;
    /**
     * Whether the season is currently running or whether it is finished
     * @type {boolean}
     * @memberof TournamentSeason
     */
    active: boolean;
}

export function TournamentSeasonFromJSON(json: any): TournamentSeason {
    return TournamentSeasonFromJSONTyped(json, false);
}

export function TournamentSeasonFromJSONTyped(json: any, ignoreDiscriminator: boolean): TournamentSeason {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'active': json['active'],
    };
}

export function TournamentSeasonToJSON(value?: TournamentSeason | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'active': value.active,
    };
}

