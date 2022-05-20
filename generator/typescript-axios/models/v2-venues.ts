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
import { V2City } from './v2-city';
import { V2Country } from './v2-country';
import { VenueProfileDto } from './venue-profile-dto';
/**
 * 
 * @export
 * @interface V2Venues
 */
export interface V2Venues {
    /**
     * 
     * @type {string}
     * @memberof V2Venues
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof V2Venues
     */
    name: string;
    /**
     * 
     * @type {V2Country}
     * @memberof V2Venues
     */
    country: V2Country;
    /**
     * 
     * @type {V2City}
     * @memberof V2Venues
     */
    city?: V2City;
    /**
     * 
     * @type {VenueProfileDto}
     * @memberof V2Venues
     */
    profile?: VenueProfileDto;
}