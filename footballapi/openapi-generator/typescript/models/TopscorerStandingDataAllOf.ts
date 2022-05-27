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

import { PartialPerson } from './PartialPerson';
import { HttpFile } from '../http/http';

export class TopscorerStandingDataAllOf {
    'player': PartialPerson;
    /**
    * Number of goals scored
    */
    'goals': number;
    /**
    * Total games played
    */
    'played'?: number;
    /**
    * Number of assists
    */
    'assists'?: number;
    /**
    * Total number of minutes played
    */
    'minutes'?: number;
    /**
    * Number of goals scored from the penalty spot
    */
    'penalties'?: number;
    /**
    * Number of red cards
    */
    'redCards'?: number;
    /**
    * Number of times the player scored first for the team
    */
    'scoredFirst'?: number;
    /**
    * Number of yellow cards
    */
    'yellowCards'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "player",
            "baseName": "player",
            "type": "PartialPerson",
            "format": ""
        },
        {
            "name": "goals",
            "baseName": "goals",
            "type": "number",
            "format": ""
        },
        {
            "name": "played",
            "baseName": "played",
            "type": "number",
            "format": ""
        },
        {
            "name": "assists",
            "baseName": "assists",
            "type": "number",
            "format": ""
        },
        {
            "name": "minutes",
            "baseName": "minutes",
            "type": "number",
            "format": ""
        },
        {
            "name": "penalties",
            "baseName": "penalties",
            "type": "number",
            "format": ""
        },
        {
            "name": "redCards",
            "baseName": "red_cards",
            "type": "number",
            "format": ""
        },
        {
            "name": "scoredFirst",
            "baseName": "scored_first",
            "type": "number",
            "format": ""
        },
        {
            "name": "yellowCards",
            "baseName": "yellow_cards",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TopscorerStandingDataAllOf.attributeTypeMap;
    }

    public constructor() {
    }
}
