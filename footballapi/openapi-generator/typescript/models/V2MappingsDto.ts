/**
 * Football API
 * API for accessing various kinds of football data, updated in real time.
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V2MappingDto } from './V2MappingDto';
import { HttpFile } from '../http/http';

export class V2MappingsDto {
    'mappings'?: Array<V2MappingDto>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "mappings",
            "baseName": "mappings",
            "type": "Array<V2MappingDto>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2MappingsDto.attributeTypeMap;
    }

    public constructor() {
    }
}

