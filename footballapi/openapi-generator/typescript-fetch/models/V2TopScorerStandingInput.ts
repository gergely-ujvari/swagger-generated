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
    V2TopScorerEntryInput,
    V2TopScorerEntryInputFromJSON,
    V2TopScorerEntryInputFromJSONTyped,
    V2TopScorerEntryInputToJSON,
} from './V2TopScorerEntryInput';

/**
 * 
 * @export
 * @interface V2TopScorerStandingInput
 */
export interface V2TopScorerStandingInput {
    /**
     * 
     * @type {Array<V2TopScorerEntryInput>}
     * @memberof V2TopScorerStandingInput
     */
    entries?: Array<V2TopScorerEntryInput>;
}

export function V2TopScorerStandingInputFromJSON(json: any): V2TopScorerStandingInput {
    return V2TopScorerStandingInputFromJSONTyped(json, false);
}

export function V2TopScorerStandingInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2TopScorerStandingInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entries': !exists(json, 'entries') ? undefined : ((json['entries'] as Array<any>).map(V2TopScorerEntryInputFromJSON)),
    };
}

export function V2TopScorerStandingInputToJSON(value?: V2TopScorerStandingInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'entries': value.entries === undefined ? undefined : ((value.entries as Array<any>).map(V2TopScorerEntryInputToJSON)),
    };
}
