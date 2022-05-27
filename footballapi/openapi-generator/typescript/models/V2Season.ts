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

import { V2Tournament } from './V2Tournament';
import { HttpFile } from '../http/http';

export class V2Season {
    'id'?: string;
    'name'?: string;
    'tournament'?: V2Tournament;
    'status'?: V2SeasonStatusEnum;

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
            "name": "tournament",
            "baseName": "tournament",
            "type": "V2Tournament",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "V2SeasonStatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2Season.attributeTypeMap;
    }

    public constructor() {
    }
}


export type V2SeasonStatusEnum = "ACTIVE" | "INACTIVE" ;
