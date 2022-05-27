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
    V2TournamentItemOutput,
    V2TournamentItemOutputFromJSON,
    V2TournamentItemOutputFromJSONTyped,
    V2TournamentItemOutputToJSON,
} from './V2TournamentItemOutput';

/**
 * 
 * @export
 * @interface V2TournamentGroupGetOutput
 */
export interface V2TournamentGroupGetOutput {
    /**
     * 
     * @type {string}
     * @memberof V2TournamentGroupGetOutput
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof V2TournamentGroupGetOutput
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof V2TournamentGroupGetOutput
     */
    description?: string;
    /**
     * 
     * @type {Array<V2TournamentItemOutput>}
     * @memberof V2TournamentGroupGetOutput
     */
    tournaments?: Array<V2TournamentItemOutput>;
}

export function V2TournamentGroupGetOutputFromJSON(json: any): V2TournamentGroupGetOutput {
    return V2TournamentGroupGetOutputFromJSONTyped(json, false);
}

export function V2TournamentGroupGetOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2TournamentGroupGetOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'tournaments': !exists(json, 'tournaments') ? undefined : ((json['tournaments'] as Array<any>).map(V2TournamentItemOutputFromJSON)),
    };
}

export function V2TournamentGroupGetOutputToJSON(value?: V2TournamentGroupGetOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'name': value.name,
        'description': value.description,
        'tournaments': value.tournaments === undefined ? undefined : ((value.tournaments as Array<any>).map(V2TournamentItemOutputToJSON)),
    };
}

