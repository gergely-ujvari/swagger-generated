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
import { Player } from './player';
import { TeamPlayerData } from './teamPlayerData';


export interface TeamPlayer extends TeamPlayerData { 
    /**
     * Whether the person is currently part of the Team
     */
    active?: boolean;
    /**
     * Date when the Person joined the team
     */
    startDate?: string;
    /**
     * Date when the Person left the team (if any)
     */
    endDate?: string;
    /**
     * Information for the Player
     */
    player: Player;
}
