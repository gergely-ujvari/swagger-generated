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
import {
    V2RoundWithStatus,
    V2RoundWithStatusFromJSON,
    V2RoundWithStatusFromJSONTyped,
    V2RoundWithStatusToJSON,
} from './V2RoundWithStatus';

/**
 * 
 * @export
 * @interface V2StageDetails
 */
export interface V2StageDetails {
    /**
     * 
     * @type {V2MatchStage}
     * @memberof V2StageDetails
     */
    stage?: V2MatchStage;
    /**
     * 
     * @type {Array<V2RoundWithStatus>}
     * @memberof V2StageDetails
     */
    rounds?: Array<V2RoundWithStatus>;
}

export function V2StageDetailsFromJSON(json: any): V2StageDetails {
    return V2StageDetailsFromJSONTyped(json, false);
}

export function V2StageDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2StageDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stage': !exists(json, 'stage') ? undefined : V2MatchStageFromJSON(json['stage']),
        'rounds': !exists(json, 'rounds') ? undefined : ((json['rounds'] as Array<any>).map(V2RoundWithStatusFromJSON)),
    };
}

export function V2StageDetailsToJSON(value?: V2StageDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stage': V2MatchStageToJSON(value.stage),
        'rounds': value.rounds === undefined ? undefined : ((value.rounds as Array<any>).map(V2RoundWithStatusToJSON)),
    };
}

