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
 * @interface V2StandingEntryRuleInput
 */
export interface V2StandingEntryRuleInput {
    /**
     * 
     * @type {string}
     * @memberof V2StandingEntryRuleInput
     */
    standingRuleId?: string;
    /**
     * 
     * @type {number}
     * @memberof V2StandingEntryRuleInput
     */
    rank?: number;
}

export function V2StandingEntryRuleInputFromJSON(json: any): V2StandingEntryRuleInput {
    return V2StandingEntryRuleInputFromJSONTyped(json, false);
}

export function V2StandingEntryRuleInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2StandingEntryRuleInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'standingRuleId': !exists(json, 'standing_rule_id') ? undefined : json['standing_rule_id'],
        'rank': !exists(json, 'rank') ? undefined : json['rank'],
    };
}

export function V2StandingEntryRuleInputToJSON(value?: V2StandingEntryRuleInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'standing_rule_id': value.standingRuleId,
        'rank': value.rank,
    };
}

