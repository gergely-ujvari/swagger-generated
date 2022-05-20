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


export interface V2RoundWithStatus { 
    startDate?: string;
    endDate?: string;
    /**
     * Not available at endpoint /v2/rounds
     */
    status?: string;
    id?: string;
    key?: string;
    name?: string;
    type?: string;
}
