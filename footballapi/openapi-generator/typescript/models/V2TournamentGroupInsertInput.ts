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

import { TournamentItemDto } from './TournamentItemDto';
import { HttpFile } from '../http/http';

export class V2TournamentGroupInsertInput {
    'code'?: string;
    'name'?: string;
    'description'?: string;
    'tournaments'?: Array<TournamentItemDto>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "code",
            "baseName": "code",
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
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "tournaments",
            "baseName": "tournaments",
            "type": "Array<TournamentItemDto>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2TournamentGroupInsertInput.attributeTypeMap;
    }

    public constructor() {
    }
}
