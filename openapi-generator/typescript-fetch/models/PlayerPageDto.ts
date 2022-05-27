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
    PageMetaDto,
    PageMetaDtoFromJSON,
    PageMetaDtoFromJSONTyped,
    PageMetaDtoToJSON,
} from './PageMetaDto';
import {
    PlayerDto,
    PlayerDtoFromJSON,
    PlayerDtoFromJSONTyped,
    PlayerDtoToJSON,
} from './PlayerDto';

/**
 * 
 * @export
 * @interface PlayerPageDto
 */
export interface PlayerPageDto {
    /**
     * 
     * @type {Array<PlayerDto>}
     * @memberof PlayerPageDto
     */
    players?: Array<PlayerDto>;
    /**
     * 
     * @type {PageMetaDto}
     * @memberof PlayerPageDto
     */
    pageMeta?: PageMetaDto;
}

export function PlayerPageDtoFromJSON(json: any): PlayerPageDto {
    return PlayerPageDtoFromJSONTyped(json, false);
}

export function PlayerPageDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlayerPageDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'players': !exists(json, 'players') ? undefined : ((json['players'] as Array<any>).map(PlayerDtoFromJSON)),
        'pageMeta': !exists(json, 'page_meta') ? undefined : PageMetaDtoFromJSON(json['page_meta']),
    };
}

export function PlayerPageDtoToJSON(value?: PlayerPageDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'players': value.players === undefined ? undefined : ((value.players as Array<any>).map(PlayerDtoToJSON)),
        'page_meta': PageMetaDtoToJSON(value.pageMeta),
    };
}
