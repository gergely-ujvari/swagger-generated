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

export interface EventPlayer {
    /**
     * Unique identifier
     */
    id: number;

    /**
     * Object describing the player in the lineup
     */
    player: models.PartialPerson;

    /**
     * Object describing the type of lineup
     */
    eventPlayerType: models.EventPlayerType;

    /**
     * Whether the player is from the home or the away team
     */
    homeTeam: boolean;

    /**
     * Number indicating the player's vertical position on the field. 1 = Goalkeeper, 2-5 = Defender, 6-9 = Midfielder, 10-11 = Forward, where 5 is an offensive defender, 9 is an offensive midfielder, etc.
     */
    positionX?: number;

    /**
     * Number indicating the player's horizontal position on the field. Ranges from 1-9, where 1 = furthest right, 9 = furthest left.
     */
    positionY?: number;

    /**
     * Number 1-11 indicating the player's position in the lineup. 1 = goalkeeper, 2 = defender furthest right.
     */
    positionNumber?: number;

    /**
     * The shirt number the player is wearing
     */
    shirtNumber?: number;

}
