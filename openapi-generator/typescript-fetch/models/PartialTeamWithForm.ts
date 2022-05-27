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
import {
    PartialTeamWithFormAllOf,
    PartialTeamWithFormAllOfFromJSON,
    PartialTeamWithFormAllOfFromJSONTyped,
    PartialTeamWithFormAllOfToJSON,
} from './PartialTeamWithFormAllOf';
import {
    TeamForm,
    TeamFormFromJSON,
    TeamFormFromJSONTyped,
    TeamFormToJSON,
} from './TeamForm';

/**
 * 
 * @export
 * @interface PartialTeamWithForm
 */
export interface PartialTeamWithForm {
    /**
     * Whether the team is a football club(Barcelona) or national team(Spain)
     * @type {boolean}
     * @memberof PartialTeamWithForm
     */
    national?: boolean;
    /**
     * Unique identifier of the Team within the system
     * @type {number}
     * @memberof PartialTeamWithForm
     */
    id: number;
    /**
     * Human readable name of the team
     * @type {string}
     * @memberof PartialTeamWithForm
     */
    name: string;
    /**
     * 3 character name of team
     * @type {string}
     * @memberof PartialTeamWithForm
     */
    threeLetterCode?: string;
    /**
     * Manually inserted short name of team
     * @type {string}
     * @memberof PartialTeamWithForm
     */
    shortName?: string;
    /**
     * If present and = true, the team can be one of two teams. This occurs in cup competitions when some games are still not played
     * @type {boolean}
     * @memberof PartialTeamWithForm
     */
    undecided?: boolean;
    /**
     * Team gender, MALE, FEMALE or null
     * @type {string}
     * @memberof PartialTeamWithForm
     */
    gender?: PartialTeamWithFormGenderEnum;
    /**
     * 
     * @type {string}
     * @memberof PartialTeamWithForm
     */
    urlLogo?: string;
    /**
     * 
     * @type {string}
     * @memberof PartialTeamWithForm
     */
    type?: PartialTeamWithFormTypeEnum;
    /**
     * Form guide for the Team if available and requested as an option
     * @type {Array<TeamForm>}
     * @memberof PartialTeamWithForm
     */
    form?: Array<TeamForm>;
}


/**
 * @export
 */
export const PartialTeamWithFormGenderEnum = {
    Male: 'MALE',
    Female: 'FEMALE'
} as const;
export type PartialTeamWithFormGenderEnum = typeof PartialTeamWithFormGenderEnum[keyof typeof PartialTeamWithFormGenderEnum];

/**
 * @export
 */
export const PartialTeamWithFormTypeEnum = {
    Placeholder: 'placeholder',
    Club: 'club',
    National: 'national'
} as const;
export type PartialTeamWithFormTypeEnum = typeof PartialTeamWithFormTypeEnum[keyof typeof PartialTeamWithFormTypeEnum];


export function PartialTeamWithFormFromJSON(json: any): PartialTeamWithForm {
    return PartialTeamWithFormFromJSONTyped(json, false);
}

export function PartialTeamWithFormFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartialTeamWithForm {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'national': !exists(json, 'national') ? undefined : json['national'],
        'id': json['id'],
        'name': json['name'],
        'threeLetterCode': !exists(json, 'threeLetterCode') ? undefined : json['threeLetterCode'],
        'shortName': !exists(json, 'shortName') ? undefined : json['shortName'],
        'undecided': !exists(json, 'undecided') ? undefined : json['undecided'],
        'gender': !exists(json, 'gender') ? undefined : json['gender'],
        'urlLogo': !exists(json, 'url_logo') ? undefined : json['url_logo'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'form': !exists(json, 'form') ? undefined : ((json['form'] as Array<any>).map(TeamFormFromJSON)),
    };
}

export function PartialTeamWithFormToJSON(value?: PartialTeamWithForm | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'national': value.national,
        'id': value.id,
        'name': value.name,
        'threeLetterCode': value.threeLetterCode,
        'shortName': value.shortName,
        'undecided': value.undecided,
        'gender': value.gender,
        'url_logo': value.urlLogo,
        'type': value.type,
        'form': value.form === undefined ? undefined : ((value.form as Array<any>).map(TeamFormToJSON)),
    };
}

