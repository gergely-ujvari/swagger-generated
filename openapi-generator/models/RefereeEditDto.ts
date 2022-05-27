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

import { HttpFile } from '../http/http';

export class RefereeEditDto {
    'name'?: string;
    'countryId'?: string;
    'birthdate'?: Date;
    'active'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "countryId",
            "baseName": "country_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "birthdate",
            "baseName": "birthdate",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return RefereeEditDto.attributeTypeMap;
    }

    public constructor() {
    }
}

