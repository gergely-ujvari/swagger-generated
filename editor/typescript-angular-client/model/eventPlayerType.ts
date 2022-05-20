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


export interface EventPlayerType { 
    /**
     * Indicates what part of the lineup the player belongs to
     */
    category: EventPlayerType.CategoryEnum;
    /**
     * Human readable name of the type
     */
    name: string;
    /**
     * Internal unique code to identify the type
     */
    code: string;
}
export namespace EventPlayerType {
    export type CategoryEnum = 'miss' | 'sub' | 'start' | 'unknown';
    export const CategoryEnum = {
        Miss: 'miss' as CategoryEnum,
        Sub: 'sub' as CategoryEnum,
        Start: 'start' as CategoryEnum,
        Unknown: 'unknown' as CategoryEnum
    };
}