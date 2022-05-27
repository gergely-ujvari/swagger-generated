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
/**
 * 
 * @export
 * @interface V2RoundWithStatus
 */
export interface V2RoundWithStatus {
    /**
     * 
     * @type {string}
     * @memberof V2RoundWithStatus
     */
    startDate?: string;
    /**
     * 
     * @type {string}
     * @memberof V2RoundWithStatus
     */
    endDate?: string;
    /**
     * Not available at endpoint /v2/rounds
     * @type {string}
     * @memberof V2RoundWithStatus
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof V2RoundWithStatus
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof V2RoundWithStatus
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof V2RoundWithStatus
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof V2RoundWithStatus
     */
    type?: string;
}