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
import { PageMetaDto } from './page-meta-dto';
import { VenueDto } from './venue-dto';
/**
 * 
 * @export
 * @interface VenuePageDto
 */
export interface VenuePageDto {
    /**
     * 
     * @type {Array<VenueDto>}
     * @memberof VenuePageDto
     */
    venues?: Array<VenueDto>;
    /**
     * 
     * @type {PageMetaDto}
     * @memberof VenuePageDto
     */
    pageMeta?: PageMetaDto;
}
