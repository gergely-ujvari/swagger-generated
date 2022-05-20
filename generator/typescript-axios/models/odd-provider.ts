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
import { Country } from './country';
/**
 * 
 * @export
 * @interface OddProvider
 */
export interface OddProvider {
    /**
     * Resource identifier
     * @type {number}
     * @memberof OddProvider
     */
    id: number;
    /**
     * Human readable name of the OddProvider
     * @type {string}
     * @memberof OddProvider
     */
    name: string;
    /**
     * Homepage of the OddProvider
     * @type {string}
     * @memberof OddProvider
     */
    url?: string;
    /**
     * 
     * @type {Country}
     * @memberof OddProvider
     */
    country?: Country;
    /**
     * 
     * @type {string}
     * @memberof OddProvider
     */
    urlLogo?: string;
}