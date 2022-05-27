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

export class V2MatchTeamDto {
    'id'?: string;
    'name'?: string;
    'threeLetterCode'?: string;
    'gender'?: string;
    'shortName'?: string;
    'type'?: V2MatchTeamDtoTypeEnum;
    'shirtColor'?: string;

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
            "name": "threeLetterCode",
            "baseName": "three_letter_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "gender",
            "baseName": "gender",
            "type": "string",
            "format": ""
        },
        {
            "name": "shortName",
            "baseName": "short_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "V2MatchTeamDtoTypeEnum",
            "format": ""
        },
        {
            "name": "shirtColor",
            "baseName": "$shirt_color",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2MatchTeamDto.attributeTypeMap;
    }

    public constructor() {
    }
}


export type V2MatchTeamDtoTypeEnum = "PLACEHOLDER" | "NATIONAL" | "CLUB" ;

