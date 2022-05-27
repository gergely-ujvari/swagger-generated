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
 * @interface V2TournamentSeasonStatusInput
 */
export interface V2TournamentSeasonStatusInput {
    /**
     * 
     * @type {string}
     * @memberof V2TournamentSeasonStatusInput
     */
    seasonId?: string;
}

export function V2TournamentSeasonStatusInputFromJSON(json: any): V2TournamentSeasonStatusInput {
    return V2TournamentSeasonStatusInputFromJSONTyped(json, false);
}

export function V2TournamentSeasonStatusInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2TournamentSeasonStatusInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'seasonId': !exists(json, 'season_id') ? undefined : json['season_id'],
    };
}

export function V2TournamentSeasonStatusInputToJSON(value?: V2TournamentSeasonStatusInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'season_id': value.seasonId,
    };
}
