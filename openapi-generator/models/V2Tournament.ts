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

import { V2Country } from './V2Country';
import { HttpFile } from '../http/http';

export class V2Tournament {
    'id'?: string;
    'name'?: string;
    'country'?: V2Country;
    'gender'?: V2TournamentGenderEnum;
    'type'?: V2TournamentTypeEnum;
    'region'?: V2TournamentRegionEnum;

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
            "name": "gender",
            "baseName": "gender",
            "type": "V2TournamentGenderEnum",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "V2TournamentTypeEnum",
            "format": ""
        },
        {
            "name": "region",
            "baseName": "region",
            "type": "V2TournamentRegionEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2Tournament.attributeTypeMap;
    }

    public constructor() {
    }
}


export type V2TournamentGenderEnum = "MALE" | "FEMALE" ;
export type V2TournamentTypeEnum = "CUP" | "LEAGUE" ;
export type V2TournamentRegionEnum = "DOMESTIC" | "INTERNATIONAL" ;

