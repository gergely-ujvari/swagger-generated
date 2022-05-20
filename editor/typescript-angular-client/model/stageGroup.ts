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


export interface StageGroup { 
    /**
     * Unique resource identifier
     */
    id: number;
    /**
     * Human readable name of the Group
     */
    name: string;
    /**
     * The order in the stage of the group
     */
    orderInStage?: number;
}
