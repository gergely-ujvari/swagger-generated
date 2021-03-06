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

export interface EventPlayerSubOn {
    /**
     * Id of the player that comes on
     */
    playerId?: number;

    /**
     * Name of the player that comes on
     */
    playerName: string;

    /**
     * The minute when the substitued occured
     */
    elapsed: number;

}
