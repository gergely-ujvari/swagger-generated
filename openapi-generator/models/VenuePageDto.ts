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

import { PageMetaDto } from './PageMetaDto';
import { VenueDto } from './VenueDto';
import { HttpFile } from '../http/http';

export class VenuePageDto {
    'venues'?: Array<VenueDto>;
    'pageMeta'?: PageMetaDto;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "venues",
            "baseName": "venues",
            "type": "Array<VenueDto>",
            "format": ""
        },
        {
            "name": "pageMeta",
            "baseName": "page_meta",
            "type": "PageMetaDto",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VenuePageDto.attributeTypeMap;
    }

    public constructor() {
    }
}

