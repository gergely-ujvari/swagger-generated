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
 * @interface PartialPerson
 */
export interface PartialPerson {
    /**
     * Unique identifier within the system
     * @type {number}
     * @memberof PartialPerson
     */
    id: number;
    /**
     * Human readable name of the Person
     * @type {string}
     * @memberof PartialPerson
     */
    name: string;
    /**
     * 150x150 face image of Person
     * @type {string}
     * @memberof PartialPerson
     */
    urlThumb?: string;
    /**
     * 277x338 full body image of Person
     * @type {string}
     * @memberof PartialPerson
     */
    urlImage?: string;
}

export function PartialPersonFromJSON(json: any): PartialPerson {
    return PartialPersonFromJSONTyped(json, false);
}

export function PartialPersonFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartialPerson {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'urlThumb': !exists(json, 'url_thumb') ? undefined : json['url_thumb'],
        'urlImage': !exists(json, 'url_image') ? undefined : json['url_image'],
    };
}

export function PartialPersonToJSON(value?: PartialPerson | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'url_thumb': value.urlThumb,
        'url_image': value.urlImage,
    };
}

