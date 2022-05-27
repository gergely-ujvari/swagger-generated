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
/**
 * 
 * @export
 * @interface TeamStatistics
 */
export interface TeamStatistics {
    /**
     * Number of keys passes completed
     * @type {number}
     * @memberof TeamStatistics
     */
    pass?: number;
    /**
     * Percentage of time the team possess the ball
     * @type {number}
     * @memberof TeamStatistics
     */
    possession: number;
    /**
     * Number of goals scored
     * @type {number}
     * @memberof TeamStatistics
     */
    goals: number;
    /**
     * Number of corners
     * @type {number}
     * @memberof TeamStatistics
     */
    corners: number;
    /**
     * Number of crosses
     * @type {number}
     * @memberof TeamStatistics
     */
    crosses?: number;
    /**
     * Number of offsides
     * @type {number}
     * @memberof TeamStatistics
     */
    offside: number;
    /**
     * Shots on that have hit target
     * @type {number}
     * @memberof TeamStatistics
     */
    shotsOn: number;
    /**
     * Number of shots that have been blocked by an opposition player
     * @type {number}
     * @memberof TeamStatistics
     */
    shotsBlocked: number;
    /**
     * Shots outside the target
     * @type {number}
     * @memberof TeamStatistics
     */
    shotsOff: number;
    /**
     * Number of throw ins taken
     * @type {number}
     * @memberof TeamStatistics
     */
    throwIn?: number;
    /**
     * Number of goal kicks taken
     * @type {number}
     * @memberof TeamStatistics
     */
    goalKicks?: number;
    /**
     * Number of treatments to injuries
     * @type {number}
     * @memberof TeamStatistics
     */
    treatments?: number;
    /**
     * Total numer of yellow cards
     * @type {number}
     * @memberof TeamStatistics
     */
    yellowCards?: number;
    /**
     * Number of substitutions
     * @type {number}
     * @memberof TeamStatistics
     */
    substitutions?: number;
    /**
     * Number of counter attacks
     * @type {number}
     * @memberof TeamStatistics
     */
    counterAttacks?: number;
    /**
     * Total number of fouls committed by the Team
     * @type {number}
     * @memberof TeamStatistics
     */
    foulsCommitted: number;
}

export function TeamStatisticsFromJSON(json: any): TeamStatistics {
    return TeamStatisticsFromJSONTyped(json, false);
}

export function TeamStatisticsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TeamStatistics {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pass': !exists(json, 'pass') ? undefined : json['pass'],
        'possession': json['possession'],
        'goals': json['goals'],
        'corners': json['corners'],
        'crosses': !exists(json, 'crosses') ? undefined : json['crosses'],
        'offside': json['offside'],
        'shotsOn': json['shots_on'],
        'shotsBlocked': json['shots_blocked'],
        'shotsOff': json['shots_off'],
        'throwIn': !exists(json, 'throw_in') ? undefined : json['throw_in'],
        'goalKicks': !exists(json, 'goal_kicks') ? undefined : json['goal_kicks'],
        'treatments': !exists(json, 'treatments') ? undefined : json['treatments'],
        'yellowCards': !exists(json, 'yellow_cards') ? undefined : json['yellow_cards'],
        'substitutions': !exists(json, 'substitutions') ? undefined : json['substitutions'],
        'counterAttacks': !exists(json, 'counter_attacks') ? undefined : json['counter_attacks'],
        'foulsCommitted': json['fouls_committed'],
    };
}

export function TeamStatisticsToJSON(value?: TeamStatistics | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pass': value.pass,
        'possession': value.possession,
        'goals': value.goals,
        'corners': value.corners,
        'crosses': value.crosses,
        'offside': value.offside,
        'shots_on': value.shotsOn,
        'shots_blocked': value.shotsBlocked,
        'shots_off': value.shotsOff,
        'throw_in': value.throwIn,
        'goal_kicks': value.goalKicks,
        'treatments': value.treatments,
        'yellow_cards': value.yellowCards,
        'substitutions': value.substitutions,
        'counter_attacks': value.counterAttacks,
        'fouls_committed': value.foulsCommitted,
    };
}

