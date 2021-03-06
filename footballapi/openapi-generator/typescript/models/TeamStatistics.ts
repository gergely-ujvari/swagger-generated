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

export class TeamStatistics {
    /**
    * Number of keys passes completed
    */
    'pass'?: number;
    /**
    * Percentage of time the team possess the ball
    */
    'possession': number;
    /**
    * Number of goals scored
    */
    'goals': number;
    /**
    * Number of corners
    */
    'corners': number;
    /**
    * Number of crosses
    */
    'crosses'?: number;
    /**
    * Number of offsides
    */
    'offside': number;
    /**
    * Shots on that have hit target
    */
    'shotsOn': number;
    /**
    * Number of shots that have been blocked by an opposition player
    */
    'shotsBlocked': number;
    /**
    * Shots outside the target
    */
    'shotsOff': number;
    /**
    * Number of throw ins taken
    */
    'throwIn'?: number;
    /**
    * Number of goal kicks taken
    */
    'goalKicks'?: number;
    /**
    * Number of treatments to injuries
    */
    'treatments'?: number;
    /**
    * Total numer of yellow cards
    */
    'yellowCards'?: number;
    /**
    * Number of substitutions
    */
    'substitutions'?: number;
    /**
    * Number of counter attacks
    */
    'counterAttacks'?: number;
    /**
    * Total number of fouls committed by the Team
    */
    'foulsCommitted': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "pass",
            "baseName": "pass",
            "type": "number",
            "format": ""
        },
        {
            "name": "possession",
            "baseName": "possession",
            "type": "number",
            "format": ""
        },
        {
            "name": "goals",
            "baseName": "goals",
            "type": "number",
            "format": ""
        },
        {
            "name": "corners",
            "baseName": "corners",
            "type": "number",
            "format": ""
        },
        {
            "name": "crosses",
            "baseName": "crosses",
            "type": "number",
            "format": ""
        },
        {
            "name": "offside",
            "baseName": "offside",
            "type": "number",
            "format": ""
        },
        {
            "name": "shotsOn",
            "baseName": "shots_on",
            "type": "number",
            "format": ""
        },
        {
            "name": "shotsBlocked",
            "baseName": "shots_blocked",
            "type": "number",
            "format": ""
        },
        {
            "name": "shotsOff",
            "baseName": "shots_off",
            "type": "number",
            "format": ""
        },
        {
            "name": "throwIn",
            "baseName": "throw_in",
            "type": "number",
            "format": ""
        },
        {
            "name": "goalKicks",
            "baseName": "goal_kicks",
            "type": "number",
            "format": ""
        },
        {
            "name": "treatments",
            "baseName": "treatments",
            "type": "number",
            "format": ""
        },
        {
            "name": "yellowCards",
            "baseName": "yellow_cards",
            "type": "number",
            "format": ""
        },
        {
            "name": "substitutions",
            "baseName": "substitutions",
            "type": "number",
            "format": ""
        },
        {
            "name": "counterAttacks",
            "baseName": "counter_attacks",
            "type": "number",
            "format": ""
        },
        {
            "name": "foulsCommitted",
            "baseName": "fouls_committed",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TeamStatistics.attributeTypeMap;
    }

    public constructor() {
    }
}

