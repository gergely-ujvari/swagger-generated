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
 * @interface V2MatchMinute
 */
export interface V2MatchMinute {
    /**
     * 
     * @type {number}
     * @memberof V2MatchMinute
     */
    regularTime?: number;
    /**
     * 
     * @type {number}
     * @memberof V2MatchMinute
     */
    injuryTime?: number;
}

export function V2MatchMinuteFromJSON(json: any): V2MatchMinute {
    return V2MatchMinuteFromJSONTyped(json, false);
}

export function V2MatchMinuteFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2MatchMinute {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'regularTime': !exists(json, 'regular_time') ? undefined : json['regular_time'],
        'injuryTime': !exists(json, 'injury_time') ? undefined : json['injury_time'],
    };
}

export function V2MatchMinuteToJSON(value?: V2MatchMinute | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'regular_time': value.regularTime,
        'injury_time': value.injuryTime,
    };
}
