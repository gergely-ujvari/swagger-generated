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
import { PartialTeam } from './PartialTeam';
import { PlayerStatsExtended } from './PlayerStatsExtended';
import { TournamentSeasonWithTournament } from './TournamentSeasonWithTournament';
import { HttpFile } from '../http/http';

export class PlayerStatistics {
    'tournamentSeason'?: TournamentSeasonWithTournament;
    'player'?: PartialPerson;
    'team'?: PartialTeam;
    /**
    * Shirt number of the player during the TournamentSeason
    */
    'shirtNumber'?: number;
    /**
    * Position of the player during the TournamentSeason
    */
    'position'?: string;
    /**
    * Total goals scored
    */
    'goals': number;
    /**
    * Total games played
    */
    'played': number;
    /**
    * Total minutes played
    */
    'minutes': number;
    /**
    * Number of red cards
    */
    'redCards': number;
    /**
    * Number of yellow cards
    */
    'yellowCards': number;
    /**
    * Number of assists
    */
    'assists'?: number;
    /**
    * Goals conceded (Goalkeeper)
    */
    'conceded'?: number;
    /**
    * Games started as a substitute
    */
    'substitute'?: number;
    /**
    * Games without allowing a goal (Goalkeeper)
    */
    'cleansheets'?: number;
    /**
    * Games where the player has come on
    */
    'substituteIn'?: number;
    /**
    * Games where the player has come off
    */
    'substituteOut'?: number;
    /**
    * Minutes played after coming on as a substitute
    */
    'minutesSubstitute'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tournamentSeason",
            "baseName": "tournament_season",
            "type": "TournamentSeasonWithTournament",
            "format": ""
        },
        {
            "name": "player",
            "baseName": "player",
            "type": "PartialPerson",
            "format": ""
        },
        {
            "name": "team",
            "baseName": "team",
            "type": "PartialTeam",
            "format": ""
        },
        {
            "name": "shirtNumber",
            "baseName": "shirtNumber",
            "type": "number",
            "format": ""
        },
        {
            "name": "position",
            "baseName": "position",
            "type": "string",
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
            "name": "minutes",
            "baseName": "minutes",
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
            "name": "yellowCards",
            "baseName": "yellow_cards",
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
            "name": "conceded",
            "baseName": "conceded",
            "type": "number",
            "format": ""
        },
        {
            "name": "substitute",
            "baseName": "substitute",
            "type": "number",
            "format": ""
        },
        {
            "name": "cleansheets",
            "baseName": "cleansheets",
            "type": "number",
            "format": ""
        },
        {
            "name": "substituteIn",
            "baseName": "substitute_in",
            "type": "number",
            "format": ""
        },
        {
            "name": "substituteOut",
            "baseName": "substitute_out",
            "type": "number",
            "format": ""
        },
        {
            "name": "minutesSubstitute",
            "baseName": "minutes_substitute",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PlayerStatistics.attributeTypeMap;
    }

    public constructor() {
    }
}

