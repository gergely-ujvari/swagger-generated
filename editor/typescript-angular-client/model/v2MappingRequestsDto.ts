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
import { V2MappingRequestDto } from './v2MappingRequestDto';


export interface V2MappingRequestsDto { 
    provider?: string;
    mappingRequests: Array<V2MappingRequestDto>;
}
