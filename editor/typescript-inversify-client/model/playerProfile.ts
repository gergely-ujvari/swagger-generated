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
import { Player } from './player';
import { PlayerTeam } from './playerTeam';
import { TournamentSeasonWithTournament } from './tournamentSeasonWithTournament';


export interface PlayerProfile extends Player { 
    /**
     * Information about the current league the player is in
     */
    currentLeague?: TournamentSeasonWithTournament;
    /**
     * Information about the club the Player is currently playing in
     */
    club?: PlayerTeam;
    /**
     * Information about the national team the Player is currently playing in
     */
    nationalTeam?: PlayerTeam;
    /**
     * Display name of the player position
     */
    positionDisplay?: string;
}
export namespace PlayerProfile {
}
