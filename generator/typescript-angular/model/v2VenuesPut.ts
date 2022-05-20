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
import { V2City } from './v2City';
import { V2Country } from './v2Country';
import { VenueProfileDto } from './venueProfileDto';

export interface V2VenuesPut { 
    id?: string;
    name: string;
    country: V2Country;
    city?: V2City;
    profile?: VenueProfileDto;
}