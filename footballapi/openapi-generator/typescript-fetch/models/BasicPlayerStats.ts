/* tslint:disable */
/* eslint-disable */
/**
 * Football API
 * API for accessing various kinds of football data, updated in real time.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Player,
    PlayerFromJSON,
    PlayerFromJSONTyped,
    PlayerToJSON,
} from './Player';
import {
    PlayerStatsExtended,
    PlayerStatsExtendedFromJSON,
    PlayerStatsExtendedFromJSONTyped,
    PlayerStatsExtendedToJSON,
} from './PlayerStatsExtended';

/**
 * 
 * @export
 * @interface BasicPlayerStats
 */
export interface BasicPlayerStats {
    /**
     * 
     * @type {Player}
     * @memberof BasicPlayerStats
     */
    player?: Player;
    /**
     * Player's shirt number during the season
     * @type {number}
     * @memberof BasicPlayerStats
     */
    shirtNumber?: number;
    /**
     * Total goals scored
     * @type {number}
     * @memberof BasicPlayerStats
     */
    goals: number;
    /**
     * Total games played
     * @type {number}
     * @memberof BasicPlayerStats
     */
    played: number;
    /**
     * Total minutes played
     * @type {number}
     * @memberof BasicPlayerStats
     */
    minutes: number;
    /**
     * Number of red cards
     * @type {number}
     * @memberof BasicPlayerStats
     */
    redCards: number;
    /**
     * Number of yellow cards
     * @type {number}
     * @memberof BasicPlayerStats
     */
    yellowCards: number;
    /**
     * Number of assists
     * @type {number}
     * @memberof BasicPlayerStats
     */
    assists?: number;
    /**
     * Goals conceded (Goalkeeper)
     * @type {number}
     * @memberof BasicPlayerStats
     */
    conceded?: number;
    /**
     * Games started as a substitute
     * @type {number}
     * @memberof BasicPlayerStats
     */
    substitute?: number;
    /**
     * Games without allowing a goal (Goalkeeper)
     * @type {number}
     * @memberof BasicPlayerStats
     */
    cleansheets?: number;
    /**
     * Games where the player has come on
     * @type {number}
     * @memberof BasicPlayerStats
     */
    substituteIn?: number;
    /**
     * Games where the player has come off
     * @type {number}
     * @memberof BasicPlayerStats
     */
    substituteOut?: number;
    /**
     * Minutes played after coming on as a substitute
     * @type {number}
     * @memberof BasicPlayerStats
     */
    minutesSubstitute?: number;
}

export function BasicPlayerStatsFromJSON(json: any): BasicPlayerStats {
    return BasicPlayerStatsFromJSONTyped(json, false);
}

export function BasicPlayerStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BasicPlayerStats {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'player': !exists(json, 'player') ? undefined : PlayerFromJSON(json['player']),
        'shirtNumber': !exists(json, 'shirt_number') ? undefined : json['shirt_number'],
        'goals': json['goals'],
        'played': json['played'],
        'minutes': json['minutes'],
        'redCards': json['red_cards'],
        'yellowCards': json['yellow_cards'],
        'assists': !exists(json, 'assists') ? undefined : json['assists'],
        'conceded': !exists(json, 'conceded') ? undefined : json['conceded'],
        'substitute': !exists(json, 'substitute') ? undefined : json['substitute'],
        'cleansheets': !exists(json, 'cleansheets') ? undefined : json['cleansheets'],
        'substituteIn': !exists(json, 'substitute_in') ? undefined : json['substitute_in'],
        'substituteOut': !exists(json, 'substitute_out') ? undefined : json['substitute_out'],
        'minutesSubstitute': !exists(json, 'minutes_substitute') ? undefined : json['minutes_substitute'],
    };
}

export function BasicPlayerStatsToJSON(value?: BasicPlayerStats | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'player': PlayerToJSON(value.player),
        'shirt_number': value.shirtNumber,
        'goals': value.goals,
        'played': value.played,
        'minutes': value.minutes,
        'red_cards': value.redCards,
        'yellow_cards': value.yellowCards,
        'assists': value.assists,
        'conceded': value.conceded,
        'substitute': value.substitute,
        'cleansheets': value.cleansheets,
        'substitute_in': value.substituteIn,
        'substitute_out': value.substituteOut,
        'minutes_substitute': value.minutesSubstitute,
    };
}

