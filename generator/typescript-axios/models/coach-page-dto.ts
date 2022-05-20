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
import { CoachDto } from './coach-dto';
import { PageMetaDto } from './page-meta-dto';
/**
 * 
 * @export
 * @interface CoachPageDto
 */
export interface CoachPageDto {
    /**
     * 
     * @type {Array<CoachDto>}
     * @memberof CoachPageDto
     */
    coaches?: Array<CoachDto>;
    /**
     * 
     * @type {PageMetaDto}
     * @memberof CoachPageDto
     */
    pageMeta?: PageMetaDto;
}
