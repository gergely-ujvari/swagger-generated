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
 * @interface V2ActiveTeamInput
 */
export interface V2ActiveTeamInput {
    /**
     * 
     * @type {string}
     * @memberof V2ActiveTeamInput
     */
    teamId?: string;
    /**
     * 
     * @type {string}
     * @memberof V2ActiveTeamInput
     */
    contractType?: string;
    /**
     * 
     * @type {string}
     * @memberof V2ActiveTeamInput
     */
    startDate?: string;
    /**
     * 
     * @type {number}
     * @memberof V2ActiveTeamInput
     */
    shirtNumber?: number;
}

export function V2ActiveTeamInputFromJSON(json: any): V2ActiveTeamInput {
    return V2ActiveTeamInputFromJSONTyped(json, false);
}

export function V2ActiveTeamInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2ActiveTeamInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'teamId': !exists(json, 'team_id') ? undefined : json['team_id'],
        'contractType': !exists(json, 'contract_type') ? undefined : json['contract_type'],
        'startDate': !exists(json, 'start_date') ? undefined : json['start_date'],
        'shirtNumber': !exists(json, 'shirt_number') ? undefined : json['shirt_number'],
    };
}

export function V2ActiveTeamInputToJSON(value?: V2ActiveTeamInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'team_id': value.teamId,
        'contract_type': value.contractType,
        'start_date': value.startDate,
        'shirt_number': value.shirtNumber,
    };
}

