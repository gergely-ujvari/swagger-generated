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
import { V2KnockoutEdgeRound } from './v2-knockout-edge-round';
import { V2KnockoutRound } from './v2-knockout-round';
import { V2MatchStage } from './v2-match-stage';
/**
 * 
 * @export
 * @interface V2KnockoutScheme
 */
export interface V2KnockoutScheme {
    /**
     * 
     * @type {V2KnockoutEdgeRound}
     * @memberof V2KnockoutScheme
     */
    startRound?: V2KnockoutEdgeRound;
    /**
     * 
     * @type {V2KnockoutEdgeRound}
     * @memberof V2KnockoutScheme
     */
    endRound?: V2KnockoutEdgeRound;
    /**
     * 
     * @type {boolean}
     * @memberof V2KnockoutScheme
     */
    smallFinal?: boolean;
    /**
     * 
     * @type {V2MatchStage}
     * @memberof V2KnockoutScheme
     */
    stage?: V2MatchStage;
    /**
     * 
     * @type {Array<V2KnockoutRound>}
     * @memberof V2KnockoutScheme
     */
    rounds?: Array<V2KnockoutRound>;
}