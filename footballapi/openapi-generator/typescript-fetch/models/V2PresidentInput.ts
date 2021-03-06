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
 * @interface V2PresidentInput
 */
export interface V2PresidentInput {
    /**
     * 
     * @type {string}
     * @memberof V2PresidentInput
     */
    name?: string;
}

export function V2PresidentInputFromJSON(json: any): V2PresidentInput {
    return V2PresidentInputFromJSONTyped(json, false);
}

export function V2PresidentInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2PresidentInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function V2PresidentInputToJSON(value?: V2PresidentInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

