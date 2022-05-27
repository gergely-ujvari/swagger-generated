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

export class PartialTeam {
    /**
    * Whether the team is a football club(Barcelona) or national team(Spain)
    */
    'national'?: boolean;
    /**
    * Unique identifier of the Team within the system
    */
    'id': number;
    /**
    * Human readable name of the team
    */
    'name': string;
    /**
    * 3 character name of team
    */
    'threeLetterCode'?: string;
    /**
    * Manually inserted short name of team
    */
    'shortName'?: string;
    /**
    * If present and = true, the team can be one of two teams. This occurs in cup competitions when some games are still not played
    */
    'undecided'?: boolean;
    /**
    * Team gender, MALE, FEMALE or null
    */
    'gender'?: PartialTeamGenderEnum;
    'urlLogo'?: string;
    'type'?: PartialTeamTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "national",
            "baseName": "national",
            "type": "boolean",
            "format": ""
        },
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
            "name": "threeLetterCode",
            "baseName": "threeLetterCode",
            "type": "string",
            "format": ""
        },
        {
            "name": "shortName",
            "baseName": "shortName",
            "type": "string",
            "format": ""
        },
        {
            "name": "undecided",
            "baseName": "undecided",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "gender",
            "baseName": "gender",
            "type": "PartialTeamGenderEnum",
            "format": ""
        },
        {
            "name": "urlLogo",
            "baseName": "url_logo",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PartialTeamTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PartialTeam.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PartialTeamGenderEnum = "MALE" | "FEMALE" ;
export type PartialTeamTypeEnum = "placeholder" | "club" | "national" ;

