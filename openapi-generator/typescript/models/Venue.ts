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

import { Country } from './Country';
import { HttpFile } from '../http/http';

export class Venue {
    /**
    * Unique identifier in the system
    */
    'id': number;
    /**
    * Human readable name of the Venue
    */
    'name': string;
    'country'?: Country;
    'city'?: string;
    /**
    * 600x450 image of the Venue
    */
    'urlImage'?: string;
    /**
    * Total capacity of the stadium
    */
    'capacity'?: number;
    /**
    * Latitude coordinate of the stadium's location
    */
    'lat'?: number;
    /**
    * Longitude coordinate of the stadium's location
    */
    'lng'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
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
            "type": "Country",
            "format": ""
        },
        {
            "name": "city",
            "baseName": "city",
            "type": "string",
            "format": ""
        },
        {
            "name": "urlImage",
            "baseName": "url_image",
            "type": "string",
            "format": ""
        },
        {
            "name": "capacity",
            "baseName": "capacity",
            "type": "number",
            "format": ""
        },
        {
            "name": "lat",
            "baseName": "lat",
            "type": "number",
            "format": "float"
        },
        {
            "name": "lng",
            "baseName": "lng",
            "type": "number",
            "format": "float"
        }    ];

    static getAttributeTypeMap() {
        return Venue.attributeTypeMap;
    }

    public constructor() {
    }
}
