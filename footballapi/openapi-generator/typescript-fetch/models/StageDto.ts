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
    SeasonDto,
    SeasonDtoFromJSON,
    SeasonDtoFromJSONTyped,
    SeasonDtoToJSON,
} from './SeasonDto';
import {
    TournamentDto,
    TournamentDtoFromJSON,
    TournamentDtoFromJSONTyped,
    TournamentDtoToJSON,
} from './TournamentDto';

/**
 * 
 * @export
 * @interface StageDto
 */
export interface StageDto {
    /**
     * 
     * @type {number}
     * @memberof StageDto
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof StageDto
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof StageDto
     */
    cup: boolean;
    /**
     * 
     * @type {SeasonDto}
     * @memberof StageDto
     */
    season: SeasonDto;
    /**
     * 
     * @type {TournamentDto}
     * @memberof StageDto
     */
    tournament: TournamentDto;
    /**
     * 
     * @type {string}
     * @memberof StageDto
     */
    startDate?: string;
    /**
     * 
     * @type {string}
     * @memberof StageDto
     */
    endDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof StageDto
     */
    live?: boolean;
    /**
     * 
     * @type {number}
     * @memberof StageDto
     */
    stageGroups?: number;
}

export function StageDtoFromJSON(json: any): StageDto {
    return StageDtoFromJSONTyped(json, false);
}

export function StageDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): StageDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'cup': json['cup'],
        'season': SeasonDtoFromJSON(json['season']),
        'tournament': TournamentDtoFromJSON(json['tournament']),
        'startDate': !exists(json, 'start_date') ? undefined : json['start_date'],
        'endDate': !exists(json, 'end_date') ? undefined : json['end_date'],
        'live': !exists(json, 'live') ? undefined : json['live'],
        'stageGroups': !exists(json, 'stage_groups') ? undefined : json['stage_groups'],
    };
}

export function StageDtoToJSON(value?: StageDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'cup': value.cup,
        'season': SeasonDtoToJSON(value.season),
        'tournament': TournamentDtoToJSON(value.tournament),
        'start_date': value.startDate,
        'end_date': value.endDate,
        'live': value.live,
        'stage_groups': value.stageGroups,
    };
}

