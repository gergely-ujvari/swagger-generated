/**
 * Football API
 * API for accessing various kinds of football data, updated in real time.
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V2City } from './V2City';
import { V2Country } from './V2Country';
import { VenueProfileDto } from './VenueProfileDto';
import { HttpFile } from '../http/http';

export class V2VenuesPut {
    'id'?: string;
    'name': string;
    'country': V2Country;
    'city'?: V2City;
    'profile'?: VenueProfileDto;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "country",
            "baseName": "country",
            "type": "V2Country",
            "format": ""
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "V2City",
            "format": ""
        },
        {
            "name": "profile",
            "baseName": "profile",
            "type": "VenueProfileDto",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2VenuesPut.attributeTypeMap;
    }

    public constructor() {
    }
}

