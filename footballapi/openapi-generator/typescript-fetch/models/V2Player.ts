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
    PlayerEditSocialDto,
    PlayerEditSocialDtoFromJSON,
    PlayerEditSocialDtoFromJSONTyped,
    PlayerEditSocialDtoToJSON,
} from './PlayerEditSocialDto';
import {
    PlayerProfileDto,
    PlayerProfileDtoFromJSON,
    PlayerProfileDtoFromJSONTyped,
    PlayerProfileDtoToJSON,
} from './PlayerProfileDto';
import {
    V2City,
    V2CityFromJSON,
    V2CityFromJSONTyped,
    V2CityToJSON,
} from './V2City';
import {
    V2Country,
    V2CountryFromJSON,
    V2CountryFromJSONTyped,
    V2CountryToJSON,
} from './V2Country';

/**
 * 
 * @export
 * @interface V2Player
 */
export interface V2Player {
    /**
     * 
     * @type {string}
     * @memberof V2Player
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof V2Player
     */
    name: string;
    /**
     * 
     * @type {V2Country}
     * @memberof V2Player
     */
    country: V2Country;
    /**
     * 
     * @type {boolean}
     * @memberof V2Player
     */
    active?: boolean;
    /**
     * 
     * @type {string}
     * @memberof V2Player
     */
    birthdate?: string;
    /**
     * 
     * @type {V2City}
     * @memberof V2Player
     */
    birthCity?: V2City;
    /**
     * 
     * @type {PlayerProfileDto}
     * @memberof V2Player
     */
    profile?: PlayerProfileDto;
    /**
     * 
     * @type {PlayerEditSocialDto}
     * @memberof V2Player
     */
    social?: PlayerEditSocialDto;
    /**
     * 
     * @type {string}
     * @memberof V2Player
     */
    position?: string;
    /**
     * 
     * @type {string}
     * @memberof V2Player
     */
    gender?: V2PlayerGenderEnum;
}


/**
 * @export
 */
export const V2PlayerGenderEnum = {
    Male: 'MALE',
    Female: 'FEMALE'
} as const;
export type V2PlayerGenderEnum = typeof V2PlayerGenderEnum[keyof typeof V2PlayerGenderEnum];


export function V2PlayerFromJSON(json: any): V2Player {
    return V2PlayerFromJSONTyped(json, false);
}

export function V2PlayerFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2Player {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'country': V2CountryFromJSON(json['country']),
        'active': !exists(json, 'active') ? undefined : json['active'],
        'birthdate': !exists(json, 'birthdate') ? undefined : json['birthdate'],
        'birthCity': !exists(json, 'birth_city') ? undefined : V2CityFromJSON(json['birth_city']),
        'profile': !exists(json, 'profile') ? undefined : PlayerProfileDtoFromJSON(json['profile']),
        'social': !exists(json, 'social') ? undefined : PlayerEditSocialDtoFromJSON(json['social']),
        'position': !exists(json, 'position') ? undefined : json['position'],
        'gender': !exists(json, 'gender') ? undefined : json['gender'],
    };
}

export function V2PlayerToJSON(value?: V2Player | null): any {
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
        'active': value.active,
        'birthdate': value.birthdate,
        'birth_city': V2CityToJSON(value.birthCity),
        'profile': PlayerProfileDtoToJSON(value.profile),
        'social': PlayerEditSocialDtoToJSON(value.social),
        'position': value.position,
        'gender': value.gender,
    };
}

