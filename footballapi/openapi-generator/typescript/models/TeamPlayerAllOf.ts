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

import { Player } from './Player';
import { HttpFile } from '../http/http';

export class TeamPlayerAllOf {
    'player': Player;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "player",
            "baseName": "player",
            "type": "Player",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TeamPlayerAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

