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

export class V2SquadPlayerInput {
    'playerId'?: string;
    'status'?: V2SquadPlayerInputStatusEnum;
    'contractType'?: V2SquadPlayerInputContractTypeEnum;
    'startDate'?: string;
    'endDate'?: string;
    'shirtNumber'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "playerId",
            "baseName": "player_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "V2SquadPlayerInputStatusEnum",
            "format": ""
        },
        {
            "name": "contractType",
            "baseName": "contract_type",
            "type": "V2SquadPlayerInputContractTypeEnum",
            "format": ""
        },
        {
            "name": "startDate",
            "baseName": "start_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "endDate",
            "baseName": "end_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "shirtNumber",
            "baseName": "shirt_number",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2SquadPlayerInput.attributeTypeMap;
    }

    public constructor() {
    }
}


export type V2SquadPlayerInputStatusEnum = "ACTIVE" | "INACTIVE" ;
export type V2SquadPlayerInputContractTypeEnum = "PERMANENT" | "LOAN" | "UNKNOWN" ;

