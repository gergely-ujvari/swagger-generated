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

/**
 * 
 * @export
 * @interface PartialTournamentSeasonStage
 */
export interface PartialTournamentSeasonStage {
    /**
     * Unique identifier
     * @type {number}
     * @memberof PartialTournamentSeasonStage
     */
    id: number;
    /**
     * Human readable name of the TournamentSeasonStage
     * @type {string}
     * @memberof PartialTournamentSeasonStage
     */
    name: string;
    /**
     * Whether the stage is a cup such as Champions League Knockout stage, World Cup Final stages, etc
     * @type {boolean}
     * @memberof PartialTournamentSeasonStage
     */
    cup: boolean;
    /**
     * Id of the TournamentSeason in which the stage is part of
     * @type {number}
     * @memberof PartialTournamentSeasonStage
     */
    tournamentSeasonId: number;
    /**
     * Id of the Tournament in whicth the stage is part of
     * @type {number}
     * @memberof PartialTournamentSeasonStage
     */
    tournamentId: number;
    /**
     * 
     * @type {Country}
     * @memberof PartialTournamentSeasonStage
     */
    country: Country;
    /**
     * Indicates which confederation the stage is part of (for World Cup qualif.)
     * @type {string}
     * @memberof PartialTournamentSeasonStage
     */
    confederation?: string;
}

export function PartialTournamentSeasonStageFromJSON(json: any): PartialTournamentSeasonStage {
    return PartialTournamentSeasonStageFromJSONTyped(json, false);
}

export function PartialTournamentSeasonStageFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartialTournamentSeasonStage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'cup': json['cup'],
        'tournamentSeasonId': json['tournament_season_id'],
        'tournamentId': json['tournament_id'],
        'country': CountryFromJSON(json['country']),
        'confederation': !exists(json, 'confederation') ? undefined : json['confederation'],
    };
}

export function PartialTournamentSeasonStageToJSON(value?: PartialTournamentSeasonStage | null): any {
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
        'tournament_season_id': value.tournamentSeasonId,
        'tournament_id': value.tournamentId,
        'country': CountryToJSON(value.country),
        'confederation': value.confederation,
    };
}

