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
import { V2MappingRequestDto } from './v2-mapping-request-dto';
/**
 * 
 * @export
 * @interface MappingsSearchBody
 */
export interface MappingsSearchBody {
    /**
     * Data entity provider name
     * @type {string}
     * @memberof MappingsSearchBody
     */
    provider: string;
    /**
     * Mapping requests
     * @type {Array<V2MappingRequestDto>}
     * @memberof MappingsSearchBody
     */
    mappingRequests: Array<V2MappingRequestDto>;
}