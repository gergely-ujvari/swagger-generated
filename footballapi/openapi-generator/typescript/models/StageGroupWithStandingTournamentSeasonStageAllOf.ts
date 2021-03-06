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

import { TournamentSeasonStage } from './TournamentSeasonStage';
import { HttpFile } from '../http/http';

export class StageGroupWithStandingTournamentSeasonStageAllOf {
    'tournamentSeasonStage': TournamentSeasonStage;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tournamentSeasonStage",
            "baseName": "tournament_season_stage",
            "type": "TournamentSeasonStage",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StageGroupWithStandingTournamentSeasonStageAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}

