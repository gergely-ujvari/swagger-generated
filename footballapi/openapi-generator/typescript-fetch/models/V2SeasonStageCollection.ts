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
    V2MatchStage,
    V2MatchStageFromJSON,
    V2MatchStageFromJSONTyped,
    V2MatchStageToJSON,
} from './V2MatchStage';

/**
 * 
 * @export
 * @interface V2SeasonStageCollection
 */
export interface V2SeasonStageCollection {
    /**
     * 
     * @type {Array<V2MatchStage>}
     * @memberof V2SeasonStageCollection
     */
    stages?: Array<V2MatchStage>;
}

export function V2SeasonStageCollectionFromJSON(json: any): V2SeasonStageCollection {
    return V2SeasonStageCollectionFromJSONTyped(json, false);
}

export function V2SeasonStageCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2SeasonStageCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stages': !exists(json, 'stages') ? undefined : ((json['stages'] as Array<any>).map(V2MatchStageFromJSON)),
    };
}

export function V2SeasonStageCollectionToJSON(value?: V2SeasonStageCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stages': value.stages === undefined ? undefined : ((value.stages as Array<any>).map(V2MatchStageToJSON)),
    };
}

