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
 * @interface V2MappingRequestDto
 */
export interface V2MappingRequestDto {
    /**
     * 
     * @type {string}
     * @memberof V2MappingRequestDto
     */
    entityType: V2MappingRequestDtoEntityTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof V2MappingRequestDto
     */
    providerId: string;
}

/**
    * @export
    * @enum {string}
    */
export enum V2MappingRequestDtoEntityTypeEnum {
    PLAYER = 'PLAYER',
    TEAM = 'TEAM',
    COACH = 'COACH',
    MATCH = 'MATCH',
    SEASON = 'SEASON',
    VENUE = 'VENUE',
    REFEREE = 'REFEREE',
    TOURNAMENT = 'TOURNAMENT',
    CITY = 'CITY',
    PRESIDENT = 'PRESIDENT',
    STAGE = 'STAGE',
    GROUP = 'GROUP',
    COUNTRY = 'COUNTRY',
    ODDPROVIDER = 'ODD_PROVIDER'
}

