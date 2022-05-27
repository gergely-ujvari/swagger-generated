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

export class V2MatchStage {
    'id'?: string;
    'name'?: string;
    'type'?: V2MatchStageTypeEnum;
    'startDate'?: string;
    'endDate'?: string;
    'orderInSeason'?: number;
    'coverage'?: string;
    /**
    * Available only for /v2/seasons/{id}/stages
    */
    'status'?: V2MatchStageStatusEnum;

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
            "name": "type",
            "baseName": "type",
            "type": "V2MatchStageTypeEnum",
            "format": ""
        },
        {
            "name": "startDate",
            "baseName": "start_date",
            "type": "string",
            "format": "date"
        },
        {
            "name": "endDate",
            "baseName": "end_date",
            "type": "string",
            "format": "date"
        },
        {
            "name": "orderInSeason",
            "baseName": "order_in_season",
            "type": "number",
            "format": ""
        },
        {
            "name": "coverage",
            "baseName": "coverage",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "V2MatchStageStatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2MatchStage.attributeTypeMap;
    }

    public constructor() {
    }
}


export type V2MatchStageTypeEnum = "GROUP" | "LEAGUE" | "KNOCK_OUT" ;
export type V2MatchStageStatusEnum = "ACTIVE" | "INACTIVE" ;
