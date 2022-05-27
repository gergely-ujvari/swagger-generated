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
    V2Player,
    V2PlayerFromJSON,
    V2PlayerFromJSONTyped,
    V2PlayerToJSON,
} from './V2Player';
import {
    V2Season,
    V2SeasonFromJSON,
    V2SeasonFromJSONTyped,
    V2SeasonToJSON,
} from './V2Season';
import {
    V2StatisticItem,
    V2StatisticItemFromJSON,
    V2StatisticItemFromJSONTyped,
    V2StatisticItemToJSON,
} from './V2StatisticItem';
import {
    V2Team,
    V2TeamFromJSON,
    V2TeamFromJSONTyped,
    V2TeamToJSON,
} from './V2Team';

/**
 * 
 * @export
 * @interface V2PlayerSeasonStatisticOutput
 */
export interface V2PlayerSeasonStatisticOutput {
    /**
     * 
     * @type {V2Player}
     * @memberof V2PlayerSeasonStatisticOutput
     */
    player?: V2Player;
    /**
     * 
     * @type {Array<V2Team>}
     * @memberof V2PlayerSeasonStatisticOutput
     */
    teams?: Array<V2Team>;
    /**
     * 
     * @type {V2Season}
     * @memberof V2PlayerSeasonStatisticOutput
     */
    season?: V2Season;
    /**
     * 
     * @type {Array<V2StatisticItem>}
     * @memberof V2PlayerSeasonStatisticOutput
     */
    statistics?: Array<V2StatisticItem>;
}

export function V2PlayerSeasonStatisticOutputFromJSON(json: any): V2PlayerSeasonStatisticOutput {
    return V2PlayerSeasonStatisticOutputFromJSONTyped(json, false);
}

export function V2PlayerSeasonStatisticOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2PlayerSeasonStatisticOutput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'player': !exists(json, 'player') ? undefined : V2PlayerFromJSON(json['player']),
        'teams': !exists(json, 'teams') ? undefined : ((json['teams'] as Array<any>).map(V2TeamFromJSON)),
        'season': !exists(json, 'season') ? undefined : V2SeasonFromJSON(json['season']),
        'statistics': !exists(json, 'statistics') ? undefined : ((json['statistics'] as Array<any>).map(V2StatisticItemFromJSON)),
    };
}

export function V2PlayerSeasonStatisticOutputToJSON(value?: V2PlayerSeasonStatisticOutput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'player': V2PlayerToJSON(value.player),
        'teams': value.teams === undefined ? undefined : ((value.teams as Array<any>).map(V2TeamToJSON)),
        'season': V2SeasonToJSON(value.season),
        'statistics': value.statistics === undefined ? undefined : ((value.statistics as Array<any>).map(V2StatisticItemToJSON)),
    };
}

