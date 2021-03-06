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

export class BlacklistKeyDto {
    'type'?: BlacklistKeyDtoTypeEnum;
    'entity'?: BlacklistKeyDtoEntityEnum;
    'entityId'?: string;
    'context'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "BlacklistKeyDtoTypeEnum",
            "format": ""
        },
        {
            "name": "entity",
            "baseName": "entity",
            "type": "BlacklistKeyDtoEntityEnum",
            "format": ""
        },
        {
            "name": "entityId",
            "baseName": "entity_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BlacklistKeyDto.attributeTypeMap;
    }

    public constructor() {
    }
}


export type BlacklistKeyDtoTypeEnum = "TRANSLATION" | "ASSET" | "RELATION" | "ENTITY" ;
export type BlacklistKeyDtoEntityEnum = "TEAM" | "TOURNAMENT" | "SEASON" | "GROUP" | "STAGE" | "COUNTRY" | "PLAYER" | "COACH" | "LINEUP_PLAYER_TYPE" | "MATCH_STATUS" | "VENUE" | "REFEREE" | "CITY" | "PRESIDENT" | "LINEUP" | "MATCH" | "ASSET" | "STANDING_RULE" | "ROUND_TYPE" ;

