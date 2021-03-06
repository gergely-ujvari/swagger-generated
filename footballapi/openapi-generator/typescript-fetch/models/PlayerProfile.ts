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
    Country,
    CountryFromJSON,
    CountryFromJSONTyped,
    CountryToJSON,
} from './Country';
import {
    Player,
    PlayerFromJSON,
    PlayerFromJSONTyped,
    PlayerToJSON,
} from './Player';
import {
    PlayerTeam,
    PlayerTeamFromJSON,
    PlayerTeamFromJSONTyped,
    PlayerTeamToJSON,
} from './PlayerTeam';
import {
    TournamentSeasonWithTournament,
    TournamentSeasonWithTournamentFromJSON,
    TournamentSeasonWithTournamentFromJSONTyped,
    TournamentSeasonWithTournamentToJSON,
} from './TournamentSeasonWithTournament';

/**
 * 
 * @export
 * @interface PlayerProfile
 */
export interface PlayerProfile {
    /**
     * 
     * @type {TournamentSeasonWithTournament}
     * @memberof PlayerProfile
     */
    currentLeague?: TournamentSeasonWithTournament;
    /**
     * 
     * @type {PlayerTeam}
     * @memberof PlayerProfile
     */
    club?: PlayerTeam;
    /**
     * 
     * @type {PlayerTeam}
     * @memberof PlayerProfile
     */
    nationalTeam?: PlayerTeam;
    /**
     * Display name of the player position
     * @type {string}
     * @memberof PlayerProfile
     */
    positionDisplay?: string;
    /**
     * Playing position of the player
     * @type {string}
     * @memberof PlayerProfile
     */
    position?: PlayerProfilePositionEnum;
    /**
     * 
     * @type {Country}
     * @memberof PlayerProfile
     */
    country: Country;
    /**
     * Date when the person was born
     * @type {Date}
     * @memberof PlayerProfile
     */
    birthdate?: Date;
    /**
     * Human readable first(given) name
     * @type {string}
     * @memberof PlayerProfile
     */
    firstName?: string;
    /**
     * Human readable last(family) name
     * @type {string}
     * @memberof PlayerProfile
     */
    lastName?: string;
    /**
     * True if currently active, false if retired
     * @type {boolean}
     * @memberof PlayerProfile
     */
    active?: boolean;
    /**
     * Person's gender
     * @type {string}
     * @memberof PlayerProfile
     */
    gender?: PlayerProfileGenderEnum;
    /**
     * Unique identifier within the system
     * @type {number}
     * @memberof PlayerProfile
     */
    id: number;
    /**
     * Human readable name of the Person
     * @type {string}
     * @memberof PlayerProfile
     */
    name: string;
    /**
     * 150x150 face image of Person
     * @type {string}
     * @memberof PlayerProfile
     */
    urlThumb?: string;
    /**
     * 277x338 full body image of Person
     * @type {string}
     * @memberof PlayerProfile
     */
    urlImage?: string;
}


/**
 * @export
 */
export const PlayerProfilePositionEnum = {
    Keeper: 'keeper',
    Defender: 'defender',
    Midfielder: 'midfielder',
    Forward: 'forward'
} as const;
export type PlayerProfilePositionEnum = typeof PlayerProfilePositionEnum[keyof typeof PlayerProfilePositionEnum];

/**
 * @export
 */
export const PlayerProfileGenderEnum = {
    Male: 'MALE',
    Female: 'FEMALE'
} as const;
export type PlayerProfileGenderEnum = typeof PlayerProfileGenderEnum[keyof typeof PlayerProfileGenderEnum];


export function PlayerProfileFromJSON(json: any): PlayerProfile {
    return PlayerProfileFromJSONTyped(json, false);
}

export function PlayerProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlayerProfile {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currentLeague': !exists(json, 'current_league') ? undefined : TournamentSeasonWithTournamentFromJSON(json['current_league']),
        'club': !exists(json, 'club') ? undefined : PlayerTeamFromJSON(json['club']),
        'nationalTeam': !exists(json, 'nationalTeam') ? undefined : PlayerTeamFromJSON(json['nationalTeam']),
        'positionDisplay': !exists(json, 'position_display') ? undefined : json['position_display'],
        'position': !exists(json, 'position') ? undefined : json['position'],
        'country': CountryFromJSON(json['country']),
        'birthdate': !exists(json, 'birthdate') ? undefined : (new Date(json['birthdate'])),
        'firstName': !exists(json, 'first_name') ? undefined : json['first_name'],
        'lastName': !exists(json, 'last_name') ? undefined : json['last_name'],
        'active': !exists(json, 'active') ? undefined : json['active'],
        'gender': !exists(json, 'gender') ? undefined : json['gender'],
        'id': json['id'],
        'name': json['name'],
        'urlThumb': !exists(json, 'url_thumb') ? undefined : json['url_thumb'],
        'urlImage': !exists(json, 'url_image') ? undefined : json['url_image'],
    };
}

export function PlayerProfileToJSON(value?: PlayerProfile | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'current_league': TournamentSeasonWithTournamentToJSON(value.currentLeague),
        'club': PlayerTeamToJSON(value.club),
        'nationalTeam': PlayerTeamToJSON(value.nationalTeam),
        'position_display': value.positionDisplay,
        'position': value.position,
        'country': CountryToJSON(value.country),
        'birthdate': value.birthdate === undefined ? undefined : (value.birthdate.toISOString().substr(0,10)),
        'first_name': value.firstName,
        'last_name': value.lastName,
        'active': value.active,
        'gender': value.gender,
        'id': value.id,
        'name': value.name,
        'url_thumb': value.urlThumb,
        'url_image': value.urlImage,
    };
}

