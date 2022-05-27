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

import { V2Player } from './V2Player';
import { V2Season } from './V2Season';
import { V2StatisticItem } from './V2StatisticItem';
import { V2Team } from './V2Team';
import { HttpFile } from '../http/http';

export class V2PlayerSeasonStatisticOutput {
    'player'?: V2Player;
    'teams'?: Array<V2Team>;
    'season'?: V2Season;
    'statistics'?: Array<V2StatisticItem>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "player",
            "baseName": "player",
            "type": "V2Player",
            "format": ""
        },
        {
            "name": "teams",
            "baseName": "teams",
            "type": "Array<V2Team>",
            "format": ""
        },
        {
            "name": "season",
            "baseName": "season",
            "type": "V2Season",
            "format": ""
        },
        {
            "name": "statistics",
            "baseName": "statistics",
            "type": "Array<V2StatisticItem>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2PlayerSeasonStatisticOutput.attributeTypeMap;
    }

    public constructor() {
    }
}

