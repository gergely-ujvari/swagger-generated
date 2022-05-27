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

import { Tournament } from './Tournament';
import { HttpFile } from '../http/http';

export class TournamentSeasonWithTournamentAllOf {
    'tournament': Tournament;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tournament",
            "baseName": "tournament",
            "type": "Tournament",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TournamentSeasonWithTournamentAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

