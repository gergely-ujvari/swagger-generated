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
    Country,
    CountryFromJSON,
    CountryFromJSONTyped,
    CountryToJSON,
} from './Country';

/**
 * 
 * @export
 * @interface Coach
 */
export interface Coach {
    /**
     * 277x338 full body image of Person
     * @type {string}
     * @memberof Coach
     */
    urlImage?: string;
    /**
     * 
     * @type {Country}
     * @memberof Coach
     */
    country?: Country;
    /**
     * Date when the person was born
     * @type {Date}
     * @memberof Coach
     */
    birthdate?: Date;
    /**
     * Human readable first(given) name
     * @type {string}
     * @memberof Coach
     */
    firstName?: string;
    /**
     * Human readable last(family) name
     * @type {string}
     * @memberof Coach
     */
    lastName?: string;
    /**
     * True if currently active, false if retired
     * @type {boolean}
     * @memberof Coach
     */
    active?: boolean;
    /**
     * Person's gender
     * @type {string}
     * @memberof Coach
     */
    gender?: CoachGenderEnum;
    /**
     * Unique identifier within the system
     * @type {number}
     * @memberof Coach
     */
    id?: number;
    /**
     * Human readable name of the Person
     * @type {string}
     * @memberof Coach
     */
    name: string;
    /**
     * 150x150 face image of Person
     * @type {string}
     * @memberof Coach
     */
    urlThumb?: string;
}


/**
 * @export
 */
export const CoachGenderEnum = {
    Male: 'MALE',
    Female: 'FEMALE'
} as const;
export type CoachGenderEnum = typeof CoachGenderEnum[keyof typeof CoachGenderEnum];


export function CoachFromJSON(json: any): Coach {
    return CoachFromJSONTyped(json, false);
}

export function CoachFromJSONTyped(json: any, ignoreDiscriminator: boolean): Coach {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'urlImage': !exists(json, 'url_image') ? undefined : json['url_image'],
        'country': !exists(json, 'country') ? undefined : CountryFromJSON(json['country']),
        'birthdate': !exists(json, 'birthdate') ? undefined : (new Date(json['birthdate'])),
        'firstName': !exists(json, 'first_name') ? undefined : json['first_name'],
        'lastName': !exists(json, 'last_name') ? undefined : json['last_name'],
        'active': !exists(json, 'active') ? undefined : json['active'],
        'gender': !exists(json, 'gender') ? undefined : json['gender'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': json['name'],
        'urlThumb': !exists(json, 'url_thumb') ? undefined : json['url_thumb'],
    };
}

export function CoachToJSON(value?: Coach | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url_image': value.urlImage,
        'country': CountryToJSON(value.country),
        'birthdate': value.birthdate === undefined ? undefined : (value.birthdate.toISOString().substr(0,10)),
        'first_name': value.firstName,
        'last_name': value.lastName,
        'active': value.active,
        'gender': value.gender,
        'id': value.id,
        'name': value.name,
        'url_thumb': value.urlThumb,
    };
}
