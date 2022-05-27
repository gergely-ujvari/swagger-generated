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

export class V2TeamScoreInput {
    'home'?: number;
    'away'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "home",
            "baseName": "home",
            "type": "number",
            "format": ""
        },
        {
            "name": "away",
            "baseName": "away",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2TeamScoreInput.attributeTypeMap;
    }

    public constructor() {
    }
}

