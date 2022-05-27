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
 * @interface V2MatchStage
 */
export interface V2MatchStage {
    /**
     * 
     * @type {string}
     * @memberof V2MatchStage
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof V2MatchStage
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof V2MatchStage
     */
    type?: V2MatchStageTypeEnum;
    /**
     * 
     * @type {Date}
     * @memberof V2MatchStage
     */
    startDate?: Date;
    /**
     * 
     * @type {Date}
     * @memberof V2MatchStage
     */
    endDate?: Date;
    /**
     * 
     * @type {number}
     * @memberof V2MatchStage
     */
    orderInSeason?: number;
    /**
     * 
     * @type {string}
     * @memberof V2MatchStage
     */
    coverage?: string;
    /**
     * Available only for /v2/seasons/{id}/stages
     * @type {string}
     * @memberof V2MatchStage
     */
    status?: V2MatchStageStatusEnum;
}


/**
 * @export
 */
export const V2MatchStageTypeEnum = {
    Group: 'GROUP',
    League: 'LEAGUE',
    KnockOut: 'KNOCK_OUT'
} as const;
export type V2MatchStageTypeEnum = typeof V2MatchStageTypeEnum[keyof typeof V2MatchStageTypeEnum];

/**
 * @export
 */
export const V2MatchStageStatusEnum = {
    Active: 'ACTIVE',
    Inactive: 'INACTIVE'
} as const;
export type V2MatchStageStatusEnum = typeof V2MatchStageStatusEnum[keyof typeof V2MatchStageStatusEnum];


export function V2MatchStageFromJSON(json: any): V2MatchStage {
    return V2MatchStageFromJSONTyped(json, false);
}

export function V2MatchStageFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2MatchStage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'startDate': !exists(json, 'start_date') ? undefined : (new Date(json['start_date'])),
        'endDate': !exists(json, 'end_date') ? undefined : (new Date(json['end_date'])),
        'orderInSeason': !exists(json, 'order_in_season') ? undefined : json['order_in_season'],
        'coverage': !exists(json, 'coverage') ? undefined : json['coverage'],
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function V2MatchStageToJSON(value?: V2MatchStage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'type': value.type,
        'start_date': value.startDate === undefined ? undefined : (value.startDate.toISOString().substr(0,10)),
        'end_date': value.endDate === undefined ? undefined : (value.endDate.toISOString().substr(0,10)),
        'order_in_season': value.orderInSeason,
        'coverage': value.coverage,
        'status': value.status,
    };
}
