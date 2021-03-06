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

export class V2ActiveTeamInput {
    'teamId'?: string;
    'contractType'?: string;
    'startDate'?: string;
    'shirtNumber'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "teamId",
            "baseName": "team_id",
            "type": "string",
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
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2ActiveTeamInput.attributeTypeMap;
    }

    public constructor() {
    }
}

