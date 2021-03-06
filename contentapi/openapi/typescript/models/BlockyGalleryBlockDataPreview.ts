/**
 * Content-API
 * SMP Content-API
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class BlockyGalleryBlockDataPreview {
    'alignment'?: string;
    'width'?: string;
    'mainImageId'?: string;
    'mainImageUrl'?: string;
    'title'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "alignment",
            "baseName": "alignment",
            "type": "string",
            "format": ""
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "string",
            "format": ""
        },
        {
            "name": "mainImageId",
            "baseName": "mainImageId",
            "type": "string",
            "format": ""
        },
        {
            "name": "mainImageUrl",
            "baseName": "mainImageUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BlockyGalleryBlockDataPreview.attributeTypeMap;
    }

    public constructor() {
    }
}

