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
 * @interface V2StatisticItem
 */
export interface V2StatisticItem {
    /**
     * 
     * @type {string}
     * @memberof V2StatisticItem
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof V2StatisticItem
     */
    value?: string;
}

export function V2StatisticItemFromJSON(json: any): V2StatisticItem {
    return V2StatisticItemFromJSONTyped(json, false);
}

export function V2StatisticItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2StatisticItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function V2StatisticItemToJSON(value?: V2StatisticItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'value': value.value,
    };
}
