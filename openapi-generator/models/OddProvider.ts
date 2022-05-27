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

export class OddProvider {
    /**
    * Resource identifier
    */
    'id': number;
    /**
    * Human readable name of the OddProvider
    */
    'name': string;
    /**
    * Homepage of the OddProvider
    */
    'url'?: string;
    'country'?: Country;
    'urlLogo'?: string;

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
            "name": "url",
            "baseName": "url",
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
            "name": "urlLogo",
            "baseName": "url_logo",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OddProvider.attributeTypeMap;
    }

    public constructor() {
    }
}

