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


export interface PartialPerson { 
    /**
     * Unique identifier within the system
     */
    id: number;
    /**
     * Human readable name of the Person
     */
    name: string;
    /**
     * 150x150 face image of Person
     */
    urlThumb?: string;
    /**
     * 277x338 full body image of Person
     */
    urlImage?: string;
}
