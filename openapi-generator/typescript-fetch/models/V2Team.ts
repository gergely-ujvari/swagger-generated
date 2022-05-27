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
    TeamSocialDto,
    TeamSocialDtoFromJSON,
    TeamSocialDtoFromJSONTyped,
    TeamSocialDtoToJSON,
} from './TeamSocialDto';
import {
    V2Country,
    V2CountryFromJSON,
    V2CountryFromJSONTyped,
    V2CountryToJSON,
} from './V2Country';
import {
    V2VenuesGetId,
    V2VenuesGetIdFromJSON,
    V2VenuesGetIdFromJSONTyped,
    V2VenuesGetIdToJSON,
} from './V2VenuesGetId';

/**
 * 
 * @export
 * @interface V2Team
 */
export interface V2Team {
    /**
     * 
     * @type {string}
     * @memberof V2Team
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof V2Team
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof V2Team
     */
    threeLetterCode?: string;
    /**
     * 
     * @type {string}
     * @memberof V2Team
     */
    shortName?: string;
    /**
     * 
     * @type {string}
     * @memberof V2Team
     */
    type: V2TeamTypeEnum;
    /**
     * 
     * @type {V2Country}
     * @memberof V2Team
     */
    country: V2Country;
    /**
     * 
     * @type {V2VenuesGetId}
     * @memberof V2Team
     */
    venue?: V2VenuesGetId;
    /**
     * 
     * @type {TeamSocialDto}
     * @memberof V2Team
     */
    social?: TeamSocialDto;
    /**
     * 
     * @type {number}
     * @memberof V2Team
     */
    founded?: number;
    /**
     * 
     * @type {string}
     * @memberof V2Team
     */
    gender?: V2TeamGenderEnum;
}


/**
 * @export
 */
export const V2TeamTypeEnum = {
    Placeholder: 'PLACEHOLDER',
    National: 'NATIONAL',
    Club: 'CLUB'
} as const;
export type V2TeamTypeEnum = typeof V2TeamTypeEnum[keyof typeof V2TeamTypeEnum];

/**
 * @export
 */
export const V2TeamGenderEnum = {
    Male: 'MALE',
    Female: 'FEMALE'
} as const;
export type V2TeamGenderEnum = typeof V2TeamGenderEnum[keyof typeof V2TeamGenderEnum];


export function V2TeamFromJSON(json: any): V2Team {
    return V2TeamFromJSONTyped(json, false);
}

export function V2TeamFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2Team {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'threeLetterCode': !exists(json, 'three_letter_code') ? undefined : json['three_letter_code'],
        'shortName': !exists(json, 'short_name') ? undefined : json['short_name'],
        'type': json['type'],
        'country': V2CountryFromJSON(json['country']),
        'venue': !exists(json, 'venue') ? undefined : V2VenuesGetIdFromJSON(json['venue']),
        'social': !exists(json, 'social') ? undefined : TeamSocialDtoFromJSON(json['social']),
        'founded': !exists(json, 'founded') ? undefined : json['founded'],
        'gender': !exists(json, 'gender') ? undefined : json['gender'],
    };
}

export function V2TeamToJSON(value?: V2Team | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'three_letter_code': value.threeLetterCode,
        'short_name': value.shortName,
        'type': value.type,
        'country': V2CountryToJSON(value.country),
        'venue': V2VenuesGetIdToJSON(value.venue),
        'social': TeamSocialDtoToJSON(value.social),
        'founded': value.founded,
        'gender': value.gender,
    };
}
