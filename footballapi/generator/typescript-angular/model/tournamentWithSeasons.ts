/**
 * Football API
 * API for accessing various kinds of football data, updated in real time.
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Country } from './country';
import { Tournament } from './tournament';
import { TournamentSeason } from './tournamentSeason';

export interface TournamentWithSeasons extends Tournament { 
    /**
     * List of seasons available for the Tournament
     */
    seasons: Array<TournamentSeason>;
}
export namespace TournamentWithSeasons {
}