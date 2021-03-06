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
 * @interface Country
 */
export interface Country {
    /**
     * Unique identifier of the object within the system
     * @type {number}
     * @memberof Country
     */
    id: number;
    /**
     * Human known name of the Country
     * @type {string}
     * @memberof Country
     */
    name: string;
    /**
     * 2 letter country code if available
     * @type {string}
     * @memberof Country
     */
    code?: string;
    /**
     * Image of the flag for the Country
     * @type {string}
     * @memberof Country
     */
    urlFlag?: string;
}

export function CountryFromJSON(json: any): Country {
    return CountryFromJSONTyped(json, false);
}

export function CountryFromJSONTyped(json: any, ignoreDiscriminator: boolean): Country {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'urlFlag': !exists(json, 'url_flag') ? undefined : json['url_flag'],
    };
}

export function CountryToJSON(value?: Country | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'code': value.code,
        'url_flag': value.urlFlag,
    };
}

