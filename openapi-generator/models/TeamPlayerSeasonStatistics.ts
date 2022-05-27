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

import { TeamPlayerSeasonStatisticsAllOf } from './TeamPlayerSeasonStatisticsAllOf';
import { TeamPlayerStatistics } from './TeamPlayerStatistics';
import { Tournament } from './Tournament';
import { TournamentSeasonWithTournament } from './TournamentSeasonWithTournament';
import { HttpFile } from '../http/http';

export class TeamPlayerSeasonStatistics {
    /**
    * Unique identifier of the object
    */
    'id': number;
    /**
    * Human readable name of the TournamentSeason
    */
    'name': string;
    /**
    * Whether the season is currently running or whether it is finished
    */
    'active': boolean;
    'tournament': Tournament;
    'items'?: Array<TeamPlayerStatistics>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "tournament",
            "baseName": "tournament",
            "type": "Tournament",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<TeamPlayerStatistics>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TeamPlayerSeasonStatistics.attributeTypeMap;
    }

    public constructor() {
    }
}

