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
 * @interface CoachEditDto
 */
export interface CoachEditDto {
    /**
     * 
     * @type {string}
     * @memberof CoachEditDto
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CoachEditDto
     */
    countryId?: string;
    /**
     * 
     * @type {Date}
     * @memberof CoachEditDto
     */
    birthdate?: Date;
}

export function CoachEditDtoFromJSON(json: any): CoachEditDto {
    return CoachEditDtoFromJSONTyped(json, false);
}

export function CoachEditDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoachEditDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'countryId': !exists(json, 'country_id') ? undefined : json['country_id'],
        'birthdate': !exists(json, 'birthdate') ? undefined : (new Date(json['birthdate'])),
    };
}

export function CoachEditDtoToJSON(value?: CoachEditDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'country_id': value.countryId,
        'birthdate': value.birthdate === undefined ? undefined : (value.birthdate.toISOString().substr(0,10)),
    };
}

