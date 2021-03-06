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

import * as models from './models';

export interface BasicPlayerStats extends PlayerStatsExtended {
    /**
     * Player information
     */
    "player": models.Player;
    /**
     * Player's shirt number during the season
     */
    "shirtNumber"?: number;
}

