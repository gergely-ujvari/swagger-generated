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
 * @interface TranslationKeyDto
 */
export interface TranslationKeyDto {
    /**
     * 
     * @type {string}
     * @memberof TranslationKeyDto
     */
    entity?: TranslationKeyDtoEntityEnum;
    /**
     * 
     * @type {string}
     * @memberof TranslationKeyDto
     */
    entityId?: string;
    /**
     * 
     * @type {string}
     * @memberof TranslationKeyDto
     */
    language?: string;
}


/**
 * @export
 */
export const TranslationKeyDtoEntityEnum = {
    LineupPlayerType: 'LINEUP_PLAYER_TYPE',
    Coach: 'COACH',
    Venue: 'VENUE',
    Tournament: 'TOURNAMENT',
    Team: 'TEAM',
    Country: 'COUNTRY',
    MatchStatus: 'MATCH_STATUS',
    Stage: 'STAGE',
    Player: 'PLAYER',
    Referee: 'REFEREE',
    City: 'CITY',
    President: 'PRESIDENT',
    StandingRule: 'STANDING_RULE',
    Group: 'GROUP',
    Season: 'SEASON',
    RoundType: 'ROUND_TYPE'
} as const;
export type TranslationKeyDtoEntityEnum = typeof TranslationKeyDtoEntityEnum[keyof typeof TranslationKeyDtoEntityEnum];


export function TranslationKeyDtoFromJSON(json: any): TranslationKeyDto {
    return TranslationKeyDtoFromJSONTyped(json, false);
}

export function TranslationKeyDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationKeyDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entity': !exists(json, 'entity') ? undefined : json['entity'],
        'entityId': !exists(json, 'entity_id') ? undefined : json['entity_id'],
        'language': !exists(json, 'language') ? undefined : json['language'],
    };
}

export function TranslationKeyDtoToJSON(value?: TranslationKeyDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'entity': value.entity,
        'entity_id': value.entityId,
        'language': value.language,
    };
}

