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
import { TournamentItemDto } from './tournament-item-dto';
/**
 * 
 * @export
 * @interface V2TournamentGroupUpdateInput
 */
export interface V2TournamentGroupUpdateInput {
    /**
     * 
     * @type {string}
     * @memberof V2TournamentGroupUpdateInput
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof V2TournamentGroupUpdateInput
     */
    description?: string;
    /**
     * 
     * @type {Array<TournamentItemDto>}
     * @memberof V2TournamentGroupUpdateInput
     */
    tournaments?: Array<TournamentItemDto>;
}
