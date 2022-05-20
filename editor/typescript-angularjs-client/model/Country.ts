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

export interface Country {
    /**
     * Unique identifier of the object within the system
     */
    "id": number;
    /**
     * Human known name of the Country
     */
    "name": string;
    /**
     * 2 letter country code if available
     */
    "code"?: string;
    /**
     * Image of the flag for the Country
     */
    "urlFlag"?: string;
}

