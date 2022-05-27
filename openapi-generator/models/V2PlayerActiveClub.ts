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

import { V2Team } from './V2Team';
import { HttpFile } from '../http/http';

export class V2PlayerActiveClub {
    'team'?: V2Team;
    'contractType'?: string;
    'startDate'?: string;
    'shirtNumber'?: string;
    'status'?: V2PlayerActiveClubStatusEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "team",
            "baseName": "team",
            "type": "V2Team",
            "format": ""
        },
        {
            "name": "contractType",
            "baseName": "contract_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "startDate",
            "baseName": "start_date",
            "type": "string",
            "format": ""
        },
        {
            "name": "shirtNumber",
            "baseName": "shirt_number",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "V2PlayerActiveClubStatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2PlayerActiveClub.attributeTypeMap;
    }

    public constructor() {
    }
}


export type V2PlayerActiveClubStatusEnum = "ACTIVE" | "INACTIVE" ;

