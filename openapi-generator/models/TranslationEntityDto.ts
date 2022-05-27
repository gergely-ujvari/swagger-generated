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

export class TranslationEntityDto {
    'entity'?: TranslationEntityDtoEntityEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "entity",
            "baseName": "entity",
            "type": "TranslationEntityDtoEntityEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TranslationEntityDto.attributeTypeMap;
    }

    public constructor() {
    }
}


export type TranslationEntityDtoEntityEnum = "LINEUP_PLAYER_TYPE" | "COACH" | "VENUE" | "TOURNAMENT" | "TEAM" | "COUNTRY" | "MATCH_STATUS" | "STAGE" | "PLAYER" | "REFEREE" | "CITY" | "PRESIDENT" | "STANDING_RULE" | "GROUP" | "SEASON" | "ROUND_TYPE" ;

