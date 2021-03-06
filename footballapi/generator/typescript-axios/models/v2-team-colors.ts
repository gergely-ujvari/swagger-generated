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
import { V2TeamColorsColors } from './v2-team-colors-colors';
/**
 * 
 * @export
 * @interface V2TeamColors
 */
export interface V2TeamColors {
    /**
     * 
     * @type {string}
     * @memberof V2TeamColors
     */
    entityType: string;
    /**
     * 
     * @type {string}
     * @memberof V2TeamColors
     */
    entityId: string;
    /**
     * 
     * @type {Array<V2TeamColorsColors>}
     * @memberof V2TeamColors
     */
    colors: Array<V2TeamColorsColors>;
}
