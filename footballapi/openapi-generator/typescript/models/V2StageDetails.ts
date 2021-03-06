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

import { V2MatchStage } from './V2MatchStage';
import { V2RoundWithStatus } from './V2RoundWithStatus';
import { HttpFile } from '../http/http';

export class V2StageDetails {
    'stage'?: V2MatchStage;
    'rounds'?: Array<V2RoundWithStatus>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "stage",
            "baseName": "stage",
            "type": "V2MatchStage",
            "format": ""
        },
        {
            "name": "rounds",
            "baseName": "rounds",
            "type": "Array<V2RoundWithStatus>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2StageDetails.attributeTypeMap;
    }

    public constructor() {
    }
}

