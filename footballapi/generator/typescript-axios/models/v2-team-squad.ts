/* tslint:disable */
/* eslint-disable */
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
import { V2SquadPlayer } from './v2-squad-player';
import { V2Team } from './v2-team';
/**
 * 
 * @export
 * @interface V2TeamSquad
 */
export interface V2TeamSquad {
    /**
     * 
     * @type {V2Team}
     * @memberof V2TeamSquad
     */
    team: V2Team;
    /**
     * 
     * @type {Array<V2SquadPlayer>}
     * @memberof V2TeamSquad
     */
    players: Array<V2SquadPlayer>;
}