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

import { PlayerEditSocialDto } from './PlayerEditSocialDto';
import { PlayerProfileDto } from './PlayerProfileDto';
import { HttpFile } from '../http/http';

export class PlayerEditDto {
    'name'?: string;
    'countryId'?: string;
    'active'?: boolean;
    'birthdate'?: string;
    'birthCityId'?: string;
    'profile'?: PlayerProfileDto;
    'social'?: PlayerEditSocialDto;
    'position'?: string;

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
            "name": "active",
            "baseName": "active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "birthdate",
            "baseName": "birthdate",
            "type": "string",
            "format": ""
        },
        {
            "name": "birthCityId",
            "baseName": "birth_city_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "profile",
            "baseName": "profile",
            "type": "PlayerProfileDto",
            "format": ""
        },
        {
            "name": "social",
            "baseName": "social",
            "type": "PlayerEditSocialDto",
            "format": ""
        },
        {
            "name": "position",
            "baseName": "position",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PlayerEditDto.attributeTypeMap;
    }

    public constructor() {
    }
}

