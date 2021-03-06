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
    V2KnockoutEdgeRound,
    V2KnockoutEdgeRoundFromJSON,
    V2KnockoutEdgeRoundFromJSONTyped,
    V2KnockoutEdgeRoundToJSON,
} from './V2KnockoutEdgeRound';
import {
    V2KnockoutRound,
    V2KnockoutRoundFromJSON,
    V2KnockoutRoundFromJSONTyped,
    V2KnockoutRoundToJSON,
} from './V2KnockoutRound';
import {
    V2MatchStage,
    V2MatchStageFromJSON,
    V2MatchStageFromJSONTyped,
    V2MatchStageToJSON,
} from './V2MatchStage';

/**
 * 
 * @export
 * @interface V2KnockoutScheme
 */
export interface V2KnockoutScheme {
    /**
     * 
     * @type {V2KnockoutEdgeRound}
     * @memberof V2KnockoutScheme
     */
    startRound?: V2KnockoutEdgeRound;
    /**
     * 
     * @type {V2KnockoutEdgeRound}
     * @memberof V2KnockoutScheme
     */
    endRound?: V2KnockoutEdgeRound;
    /**
     * 
     * @type {boolean}
     * @memberof V2KnockoutScheme
     */
    smallFinal?: boolean;
    /**
     * 
     * @type {V2MatchStage}
     * @memberof V2KnockoutScheme
     */
    stage?: V2MatchStage;
    /**
     * 
     * @type {Array<V2KnockoutRound>}
     * @memberof V2KnockoutScheme
     */
    rounds?: Array<V2KnockoutRound>;
}

export function V2KnockoutSchemeFromJSON(json: any): V2KnockoutScheme {
    return V2KnockoutSchemeFromJSONTyped(json, false);
}

export function V2KnockoutSchemeFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2KnockoutScheme {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startRound': !exists(json, 'start_round') ? undefined : V2KnockoutEdgeRoundFromJSON(json['start_round']),
        'endRound': !exists(json, 'end_round') ? undefined : V2KnockoutEdgeRoundFromJSON(json['end_round']),
        'smallFinal': !exists(json, 'small_final') ? undefined : json['small_final'],
        'stage': !exists(json, 'stage') ? undefined : V2MatchStageFromJSON(json['stage']),
        'rounds': !exists(json, 'rounds') ? undefined : ((json['rounds'] as Array<any>).map(V2KnockoutRoundFromJSON)),
    };
}

export function V2KnockoutSchemeToJSON(value?: V2KnockoutScheme | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'start_round': V2KnockoutEdgeRoundToJSON(value.startRound),
        'end_round': V2KnockoutEdgeRoundToJSON(value.endRound),
        'small_final': value.smallFinal,
        'stage': V2MatchStageToJSON(value.stage),
        'rounds': value.rounds === undefined ? undefined : ((value.rounds as Array<any>).map(V2KnockoutRoundToJSON)),
    };
}

