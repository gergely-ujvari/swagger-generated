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
    PartialTeam,
    PartialTeamFromJSON,
    PartialTeamFromJSONTyped,
    PartialTeamToJSON,
} from './PartialTeam';

/**
 * 
 * @export
 * @interface PlayerTeamAllOf
 */
export interface PlayerTeamAllOf {
    /**
     * 
     * @type {PartialTeam}
     * @memberof PlayerTeamAllOf
     */
    team: PartialTeam;
}

export function PlayerTeamAllOfFromJSON(json: any): PlayerTeamAllOf {
    return PlayerTeamAllOfFromJSONTyped(json, false);
}

export function PlayerTeamAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlayerTeamAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'team': PartialTeamFromJSON(json['team']),
    };
}

export function PlayerTeamAllOfToJSON(value?: PlayerTeamAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'team': PartialTeamToJSON(value.team),
    };
}

