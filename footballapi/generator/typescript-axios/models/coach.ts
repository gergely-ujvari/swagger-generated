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
 * @interface Coach
 */
export interface Coach {
    /**
     * 277x338 full body image of Person
     * @type {string}
     * @memberof Coach
     */
    urlImage?: string;
    /**
     * 
     * @type {Country}
     * @memberof Coach
     */
    country?: Country;
    /**
     * Date when the person was born
     * @type {string}
     * @memberof Coach
     */
    birthdate?: string;
    /**
     * Human readable first(given) name
     * @type {string}
     * @memberof Coach
     */
    firstName?: string;
    /**
     * Human readable last(family) name
     * @type {string}
     * @memberof Coach
     */
    lastName?: string;
    /**
     * True if currently active, false if retired
     * @type {boolean}
     * @memberof Coach
     */
    active?: boolean;
    /**
     * Person's gender
     * @type {string}
     * @memberof Coach
     */
    gender?: CoachGenderEnum;
    /**
     * Unique identifier within the system
     * @type {number}
     * @memberof Coach
     */
    id?: number;
    /**
     * Human readable name of the Person
     * @type {string}
     * @memberof Coach
     */
    name: string;
    /**
     * 150x150 face image of Person
     * @type {string}
     * @memberof Coach
     */
    urlThumb?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum CoachGenderEnum {
    MALE = 'MALE',
    FEMALE = 'FEMALE'
}
