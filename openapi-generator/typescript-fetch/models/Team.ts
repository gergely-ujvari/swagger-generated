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
    Coach,
    CoachFromJSON,
    CoachFromJSONTyped,
    CoachToJSON,
} from './Coach';
import {
    Country,
    CountryFromJSON,
    CountryFromJSONTyped,
    CountryToJSON,
} from './Country';
import {
    Event,
    EventFromJSON,
    EventFromJSONTyped,
    EventToJSON,
} from './Event';
import {
    TeamForm,
    TeamFormFromJSON,
    TeamFormFromJSONTyped,
    TeamFormToJSON,
} from './TeamForm';
import {
    TournamentSeasonWithTournament,
    TournamentSeasonWithTournamentFromJSON,
    TournamentSeasonWithTournamentFromJSONTyped,
    TournamentSeasonWithTournamentToJSON,
} from './TournamentSeasonWithTournament';
import {
    Venue,
    VenueFromJSON,
    VenueFromJSONTyped,
    VenueToJSON,
} from './Venue';

/**
 * 
 * @export
 * @interface Team
 */
export interface Team {
    /**
     * 
     * @type {Country}
     * @memberof Team
     */
    country: Country;
    /**
     * Name of the president of the club
     * @type {string}
     * @memberof Team
     */
    president?: string;
    /**
     * Year the club was founded
     * @type {number}
     * @memberof Team
     */
    founded?: number;
    /**
     * 
     * @type {Venue}
     * @memberof Team
     */
    venue?: Venue;
    /**
     * 
     * @type {Coach}
     * @memberof Team
     */
    coach?: Coach;
    /**
     * 
     * @type {TournamentSeasonWithTournament}
     * @memberof Team
     */
    currentLeague?: TournamentSeasonWithTournament;
    /**
     * 
     * @type {Event}
     * @memberof Team
     */
    nextEvent?: Event;
    /**
     * Various social links for the team
     * @type {object}
     * @memberof Team
     */
    social?: object;
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    urlHomeKit?: string;
    /**
     * 
     * @type {string}
     * @memberof Team
     */
    urlAwayKit?: string;
    /**
     * Image of the team squad
     * @type {string}
     * @memberof Team
     */
    urlSquadImage?: string;
    /**
     * Whether the team is a football club(Barcelona) or national team(Spain)
     * @type {boolean}
     * @memberof Team
     */
    national: boolean;
    /**
     * Unique identifier of the Team within the system
     * @type {number}
     * @memberof Team
     */
    id: number;
    /**
     * Human readable name of the team
     * @type {string}
     * @memberof Team
     */
    name: string;
    /**
     * 3 character name of team
     * @type {string}
     * @memberof Team
     */
    threeLetterCode?: string;
    /**
     * Manually inserted short name of team
     * @type {string}
     * @memberof Team
     */
    shortName?: string;
    /**
     * If present and = true, the team can be one of two teams. This occurs in cup competitions when some games are still not played
     * @type {boolean}
     * @memberof Team
     */
    undecided?: boolean;
    /**
     * Team gender, MALE, FEMALE or null
     * @type {string}
     * @memberof Team
     */
    gender?: TeamGenderEnum;
    /**
     * Form guide for the Team if available and requested as an option
     * @type {Array<TeamForm>}
     * @memberof Team
     */
    form?: Array<TeamForm>;
}


/**
 * @export
 */
export const TeamGenderEnum = {
    Male: 'MALE',
    Female: 'FEMALE'
} as const;
export type TeamGenderEnum = typeof TeamGenderEnum[keyof typeof TeamGenderEnum];


export function TeamFromJSON(json: any): Team {
    return TeamFromJSONTyped(json, false);
}

export function TeamFromJSONTyped(json: any, ignoreDiscriminator: boolean): Team {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'country': CountryFromJSON(json['country']),
        'president': !exists(json, 'president') ? undefined : json['president'],
        'founded': !exists(json, 'founded') ? undefined : json['founded'],
        'venue': !exists(json, 'venue') ? undefined : VenueFromJSON(json['venue']),
        'coach': !exists(json, 'coach') ? undefined : CoachFromJSON(json['coach']),
        'currentLeague': !exists(json, 'current_league') ? undefined : TournamentSeasonWithTournamentFromJSON(json['current_league']),
        'nextEvent': !exists(json, 'next_event') ? undefined : EventFromJSON(json['next_event']),
        'social': !exists(json, 'social') ? undefined : json['social'],
        'urlHomeKit': !exists(json, 'url_home_kit') ? undefined : json['url_home_kit'],
        'urlAwayKit': !exists(json, 'url_away_kit') ? undefined : json['url_away_kit'],
        'urlSquadImage': !exists(json, 'url_squad_image') ? undefined : json['url_squad_image'],
        'national': json['national'],
        'id': json['id'],
        'name': json['name'],
        'threeLetterCode': !exists(json, 'threeLetterCode') ? undefined : json['threeLetterCode'],
        'shortName': !exists(json, 'shortName') ? undefined : json['shortName'],
        'undecided': !exists(json, 'undecided') ? undefined : json['undecided'],
        'gender': !exists(json, 'gender') ? undefined : json['gender'],
        'form': !exists(json, 'form') ? undefined : ((json['form'] as Array<any>).map(TeamFormFromJSON)),
    };
}

export function TeamToJSON(value?: Team | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'country': CountryToJSON(value.country),
        'president': value.president,
        'founded': value.founded,
        'venue': VenueToJSON(value.venue),
        'coach': CoachToJSON(value.coach),
        'current_league': TournamentSeasonWithTournamentToJSON(value.currentLeague),
        'next_event': EventToJSON(value.nextEvent),
        'social': value.social,
        'url_home_kit': value.urlHomeKit,
        'url_away_kit': value.urlAwayKit,
        'url_squad_image': value.urlSquadImage,
        'national': value.national,
        'id': value.id,
        'name': value.name,
        'threeLetterCode': value.threeLetterCode,
        'shortName': value.shortName,
        'undecided': value.undecided,
        'gender': value.gender,
        'form': value.form === undefined ? undefined : ((value.form as Array<any>).map(TeamFormToJSON)),
    };
}

