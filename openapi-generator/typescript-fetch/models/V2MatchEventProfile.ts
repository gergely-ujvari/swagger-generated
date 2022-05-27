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
    V2MatchEvent,
    V2MatchEventFromJSON,
    V2MatchEventFromJSONTyped,
    V2MatchEventToJSON,
} from './V2MatchEvent';

/**
 * 
 * @export
 * @interface V2MatchEventProfile
 */
export interface V2MatchEventProfile {
    /**
     * 
     * @type {Array<V2MatchEvent>}
     * @memberof V2MatchEventProfile
     */
    events?: Array<V2MatchEvent>;
}

export function V2MatchEventProfileFromJSON(json: any): V2MatchEventProfile {
    return V2MatchEventProfileFromJSONTyped(json, false);
}

export function V2MatchEventProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2MatchEventProfile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'events': !exists(json, 'events') ? undefined : ((json['events'] as Array<any>).map(V2MatchEventFromJSON)),
    };
}

export function V2MatchEventProfileToJSON(value?: V2MatchEventProfile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'events': value.events === undefined ? undefined : ((value.events as Array<any>).map(V2MatchEventToJSON)),
    };
}

