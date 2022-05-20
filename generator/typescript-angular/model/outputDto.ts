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
import { PartialPerson } from './partialPerson';
import { PartialTeam } from './partialTeam';
import { Tournament } from './tournament';
import { TournamentSeason } from './tournamentSeason';

export interface OutputDto { 
    player: PartialPerson;
    team: PartialTeam;
    season: TournamentSeason;
    tournament: Tournament;
}