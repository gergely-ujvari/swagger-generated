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

export class TranslationKeyDto {
    'entity'?: TranslationKeyDtoEntityEnum;
    'entityId'?: string;
    'language'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "entity",
            "baseName": "entity",
            "type": "TranslationKeyDtoEntityEnum",
            "format": ""
        },
        {
            "name": "entityId",
            "baseName": "entity_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TranslationKeyDto.attributeTypeMap;
    }

    public constructor() {
    }
}


export type TranslationKeyDtoEntityEnum = "LINEUP_PLAYER_TYPE" | "COACH" | "VENUE" | "TOURNAMENT" | "TEAM" | "COUNTRY" | "MATCH_STATUS" | "STAGE" | "PLAYER" | "REFEREE" | "CITY" | "PRESIDENT" | "STANDING_RULE" | "GROUP" | "SEASON" | "ROUND_TYPE" ;

