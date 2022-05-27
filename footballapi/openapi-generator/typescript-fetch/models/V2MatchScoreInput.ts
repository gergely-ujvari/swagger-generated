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
    V2TeamScoreInput,
    V2TeamScoreInputFromJSON,
    V2TeamScoreInputFromJSONTyped,
    V2TeamScoreInputToJSON,
} from './V2TeamScoreInput';

/**
 * 
 * @export
 * @interface V2MatchScoreInput
 */
export interface V2MatchScoreInput {
    /**
     * 
     * @type {V2TeamScoreInput}
     * @memberof V2MatchScoreInput
     */
    total?: V2TeamScoreInput;
    /**
     * 
     * @type {V2TeamScoreInput}
     * @memberof V2MatchScoreInput
     */
    halfTime?: V2TeamScoreInput;
    /**
     * 
     * @type {V2TeamScoreInput}
     * @memberof V2MatchScoreInput
     */
    regularTime?: V2TeamScoreInput;
    /**
     * 
     * @type {V2TeamScoreInput}
     * @memberof V2MatchScoreInput
     */
    extraTime?: V2TeamScoreInput;
    /**
     * 
     * @type {V2TeamScoreInput}
     * @memberof V2MatchScoreInput
     */
    penaltyShootout?: V2TeamScoreInput;
    /**
     * 
     * @type {V2TeamScoreInput}
     * @memberof V2MatchScoreInput
     */
    aggregate?: V2TeamScoreInput;
}

export function V2MatchScoreInputFromJSON(json: any): V2MatchScoreInput {
    return V2MatchScoreInputFromJSONTyped(json, false);
}

export function V2MatchScoreInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2MatchScoreInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'total': !exists(json, 'total') ? undefined : V2TeamScoreInputFromJSON(json['total']),
        'halfTime': !exists(json, 'half_time') ? undefined : V2TeamScoreInputFromJSON(json['half_time']),
        'regularTime': !exists(json, 'regular_time') ? undefined : V2TeamScoreInputFromJSON(json['regular_time']),
        'extraTime': !exists(json, 'extra_time') ? undefined : V2TeamScoreInputFromJSON(json['extra_time']),
        'penaltyShootout': !exists(json, 'penalty_shootout') ? undefined : V2TeamScoreInputFromJSON(json['penalty_shootout']),
        'aggregate': !exists(json, 'aggregate') ? undefined : V2TeamScoreInputFromJSON(json['aggregate']),
    };
}

export function V2MatchScoreInputToJSON(value?: V2MatchScoreInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'total': V2TeamScoreInputToJSON(value.total),
        'half_time': V2TeamScoreInputToJSON(value.halfTime),
        'regular_time': V2TeamScoreInputToJSON(value.regularTime),
        'extra_time': V2TeamScoreInputToJSON(value.extraTime),
        'penalty_shootout': V2TeamScoreInputToJSON(value.penaltyShootout),
        'aggregate': V2TeamScoreInputToJSON(value.aggregate),
    };
}
