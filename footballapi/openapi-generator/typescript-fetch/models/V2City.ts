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
    V2Country,
    V2CountryFromJSON,
    V2CountryFromJSONTyped,
    V2CountryToJSON,
} from './V2Country';

/**
 * 
 * @export
 * @interface V2City
 */
export interface V2City {
    /**
     * 
     * @type {string}
     * @memberof V2City
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof V2City
     */
    name?: string;
    /**
     * 
     * @type {V2Country}
     * @memberof V2City
     */
    country?: V2Country;
}

export function V2CityFromJSON(json: any): V2City {
    return V2CityFromJSONTyped(json, false);
}

export function V2CityFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2City {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'country': !exists(json, 'country') ? undefined : V2CountryFromJSON(json['country']),
    };
}

export function V2CityToJSON(value?: V2City | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'country': V2CountryToJSON(value.country),
    };
}
