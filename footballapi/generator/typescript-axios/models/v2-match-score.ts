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
import { V2TeamScore } from './v2-team-score';
/**
 * 
 * @export
 * @interface V2MatchScore
 */
export interface V2MatchScore {
    /**
     * 
     * @type {V2TeamScore}
     * @memberof V2MatchScore
     */
    total?: V2TeamScore;
    /**
     * 
     * @type {V2TeamScore}
     * @memberof V2MatchScore
     */
    halfTime?: V2TeamScore;
    /**
     * 
     * @type {V2TeamScore}
     * @memberof V2MatchScore
     */
    regularTime?: V2TeamScore;
    /**
     * 
     * @type {V2TeamScore}
     * @memberof V2MatchScore
     */
    extraTime?: V2TeamScore;
    /**
     * 
     * @type {V2TeamScore}
     * @memberof V2MatchScore
     */
    penaltyShootout?: V2TeamScore;
    /**
     * 
     * @type {V2TeamScore}
     * @memberof V2MatchScore
     */
    aggregate?: V2TeamScore;
}