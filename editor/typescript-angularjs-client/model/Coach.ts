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

export interface Coach {
    /**
     * 277x338 full body image of Person
     */
    "urlImage"?: string;
    /**
     * Person's nationality
     */
    "country"?: models.Country;
    /**
     * Date when the person was born
     */
    "birthdate"?: string;
    /**
     * Human readable first(given) name
     */
    "firstName"?: string;
    /**
     * Human readable last(family) name
     */
    "lastName"?: string;
    /**
     * True if currently active, false if retired
     */
    "active"?: boolean;
    /**
     * Person's gender
     */
    "gender"?: Coach.GenderEnum;
    /**
     * Unique identifier within the system
     */
    "id"?: number;
    /**
     * Human readable name of the Person
     */
    "name": string;
    /**
     * 150x150 face image of Person
     */
    "urlThumb"?: string;
}

export namespace Coach {
    export enum GenderEnum {
        MALE = <any> 'MALE',
        FEMALE = <any> 'FEMALE'
    }
}
