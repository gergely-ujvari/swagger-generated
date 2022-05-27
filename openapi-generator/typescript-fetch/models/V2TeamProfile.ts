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
    V2Coach,
    V2CoachFromJSON,
    V2CoachFromJSONTyped,
    V2CoachToJSON,
} from './V2Coach';
import {
    V2Country,
    V2CountryFromJSON,
    V2CountryFromJSONTyped,
    V2CountryToJSON,
} from './V2Country';
import {
    V2President,
    V2PresidentFromJSON,
    V2PresidentFromJSONTyped,
    V2PresidentToJSON,
} from './V2President';
import {
    V2Season,
    V2SeasonFromJSON,
    V2SeasonFromJSONTyped,
    V2SeasonToJSON,
} from './V2Season';
import {
    V2TeamColorsColorsInner,
    V2TeamColorsColorsInnerFromJSON,
    V2TeamColorsColorsInnerFromJSONTyped,
    V2TeamColorsColorsInnerToJSON,
} from './V2TeamColorsColorsInner';
import {
    V2VenuesGetId,
    V2VenuesGetIdFromJSON,
    V2VenuesGetIdFromJSONTyped,
    V2VenuesGetIdToJSON,
} from './V2VenuesGetId';

/**
 * 
 * @export
 * @interface V2TeamProfile
 */
export interface V2TeamProfile {
    /**
     * 
     * @type {string}
     * @memberof V2TeamProfile
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof V2TeamProfile
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof V2TeamProfile
     */
    threeLetterCode?: string;
    /**
     * 
     * @type {string}
     * @memberof V2TeamProfile
     */
    shortName?: string;
    /**
     * 
     * @type {string}
     * @memberof V2TeamProfile
     */
    type?: string;
    /**
     * 
     * @type {number}
     * @memberof V2TeamProfile
     */
    founded?: number;
    /**
     * 
     * @type {V2Country}
     * @memberof V2TeamProfile
     */
    country?: V2Country;
    /**
     * 
     * @type {V2VenuesGetId}
     * @memberof V2TeamProfile
     */
    venue?: V2VenuesGetId;
    /**
     * 
     * @type {TeamSocialDto}
     * @memberof V2TeamProfile
     */
    social?: TeamSocialDto;
    /**
     * 
     * @type {V2Coach}
     * @memberof V2TeamProfile
     */
    coach?: V2Coach;
    /**
     * 
     * @type {V2President}
     * @memberof V2TeamProfile
     */
    president?: V2President;
    /**
     * 
     * @type {string}
     * @memberof V2TeamProfile
     */
    gender?: V2TeamProfileGenderEnum;
    /**
     * 
     * @type {Array<V2Season>}
     * @memberof V2TeamProfile
     */
    activeSeasons?: Array<V2Season>;
    /**
     * 
     * @type {Array<V2TeamColorsColorsInner>}
     * @memberof V2TeamProfile
     */
    shirtColors?: Array<V2TeamColorsColorsInner>;
}


/**
 * @export
 */
export const V2TeamProfileGenderEnum = {
    Male: 'MALE',
    Female: 'FEMALE'
} as const;
export type V2TeamProfileGenderEnum = typeof V2TeamProfileGenderEnum[keyof typeof V2TeamProfileGenderEnum];


export function V2TeamProfileFromJSON(json: any): V2TeamProfile {
    return V2TeamProfileFromJSONTyped(json, false);
}

export function V2TeamProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2TeamProfile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'threeLetterCode': !exists(json, 'three_letter_code') ? undefined : json['three_letter_code'],
        'shortName': !exists(json, 'short_name') ? undefined : json['short_name'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'founded': !exists(json, 'founded') ? undefined : json['founded'],
        'country': !exists(json, 'country') ? undefined : V2CountryFromJSON(json['country']),
        'venue': !exists(json, 'venue') ? undefined : V2VenuesGetIdFromJSON(json['venue']),
        'social': !exists(json, 'social') ? undefined : TeamSocialDtoFromJSON(json['social']),
        'coach': !exists(json, 'coach') ? undefined : V2CoachFromJSON(json['coach']),
        'president': !exists(json, 'president') ? undefined : V2PresidentFromJSON(json['president']),
        'gender': !exists(json, 'gender') ? undefined : json['gender'],
        'activeSeasons': !exists(json, 'active_seasons') ? undefined : ((json['active_seasons'] as Array<any>).map(V2SeasonFromJSON)),
        'shirtColors': !exists(json, 'shirt_colors') ? undefined : ((json['shirt_colors'] as Array<any>).map(V2TeamColorsColorsInnerFromJSON)),
    };
}

export function V2TeamProfileToJSON(value?: V2TeamProfile | null): any {
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
        'founded': value.founded,
        'country': V2CountryToJSON(value.country),
        'venue': V2VenuesGetIdToJSON(value.venue),
        'social': TeamSocialDtoToJSON(value.social),
        'coach': V2CoachToJSON(value.coach),
        'president': V2PresidentToJSON(value.president),
        'gender': value.gender,
        'active_seasons': value.activeSeasons === undefined ? undefined : ((value.activeSeasons as Array<any>).map(V2SeasonToJSON)),
        'shirt_colors': value.shirtColors === undefined ? undefined : ((value.shirtColors as Array<any>).map(V2TeamColorsColorsInnerToJSON)),
    };
}

