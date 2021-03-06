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
import { VenueProfileDto } from './venue-profile-dto';
/**
 * 
 * @export
 * @interface VenueEditDto
 */
export interface VenueEditDto {
    /**
     * 
     * @type {string}
     * @memberof VenueEditDto
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof VenueEditDto
     */
    countryId: string;
    /**
     * 
     * @type {string}
     * @memberof VenueEditDto
     */
    cityId?: string;
    /**
     * 
     * @type {VenueProfileDto}
     * @memberof VenueEditDto
     */
    profile?: VenueProfileDto;
}
