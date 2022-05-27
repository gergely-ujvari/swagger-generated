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
    V2PlayerSeasonStatisticOutput,
    V2PlayerSeasonStatisticOutputFromJSON,
    V2PlayerSeasonStatisticOutputFromJSONTyped,
    V2PlayerSeasonStatisticOutputToJSON,
} from './V2PlayerSeasonStatisticOutput';

/**
 * 
 * @export
 * @interface V2PlayerSeasonStatisticOutputCollection
 */
export interface V2PlayerSeasonStatisticOutputCollection {
    /**
     * 
     * @type {Array<V2PlayerSeasonStatisticOutput>}
     * @memberof V2PlayerSeasonStatisticOutputCollection
     */
    statistics?: Array<V2PlayerSeasonStatisticOutput>;
}

export function V2PlayerSeasonStatisticOutputCollectionFromJSON(json: any): V2PlayerSeasonStatisticOutputCollection {
    return V2PlayerSeasonStatisticOutputCollectionFromJSONTyped(json, false);
}

export function V2PlayerSeasonStatisticOutputCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2PlayerSeasonStatisticOutputCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'statistics': !exists(json, 'statistics') ? undefined : ((json['statistics'] as Array<any>).map(V2PlayerSeasonStatisticOutputFromJSON)),
    };
}

export function V2PlayerSeasonStatisticOutputCollectionToJSON(value?: V2PlayerSeasonStatisticOutputCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'statistics': value.statistics === undefined ? undefined : ((value.statistics as Array<any>).map(V2PlayerSeasonStatisticOutputToJSON)),
    };
}

