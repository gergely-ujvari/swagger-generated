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
 * @interface TeamScore
 */
export interface TeamScore {
    /**
     * Score at the halftime break
     * @type {number}
     * @memberof TeamScore
     */
    halfTime?: number;
    /**
     * Score in regular time + injury time
     * @type {number}
     * @memberof TeamScore
     */
    ordinaryTime?: number;
    /**
     * Score in extra time, does not include the score for ordinary time
     * @type {number}
     * @memberof TeamScore
     */
    extraTime?: number;
    /**
     * Score in penalty shootout, does not include ordinarytime or extratime
     * @type {number}
     * @memberof TeamScore
     */
    penaltyShootout?: number;
}

export function TeamScoreFromJSON(json: any): TeamScore {
    return TeamScoreFromJSONTyped(json, false);
}

export function TeamScoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): TeamScore {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'halfTime': !exists(json, 'half_time') ? undefined : json['half_time'],
        'ordinaryTime': !exists(json, 'ordinary_time') ? undefined : json['ordinary_time'],
        'extraTime': !exists(json, 'extra_time') ? undefined : json['extra_time'],
        'penaltyShootout': !exists(json, 'penalty_shootout') ? undefined : json['penalty_shootout'],
    };
}

export function TeamScoreToJSON(value?: TeamScore | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'half_time': value.halfTime,
        'ordinary_time': value.ordinaryTime,
        'extra_time': value.extraTime,
        'penalty_shootout': value.penaltyShootout,
    };
}
