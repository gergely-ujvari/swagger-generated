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

import { PageMetaDto } from './PageMetaDto';
import { PlayerDto } from './PlayerDto';
import { HttpFile } from '../http/http';

export class PlayerPageDto {
    'players'?: Array<PlayerDto>;
    'pageMeta'?: PageMetaDto;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "players",
            "baseName": "players",
            "type": "Array<PlayerDto>",
            "format": ""
        },
        {
            "name": "pageMeta",
            "baseName": "page_meta",
            "type": "PageMetaDto",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PlayerPageDto.attributeTypeMap;
    }

    public constructor() {
    }
}

