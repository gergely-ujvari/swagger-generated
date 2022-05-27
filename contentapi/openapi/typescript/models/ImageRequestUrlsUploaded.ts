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

/**
* Image links
*/
export class ImageRequestUrlsUploaded {
    'embed'?: string;
    'gallery'?: string;
    'original'?: string;
    'thumbnail'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "embed",
            "baseName": "embed",
            "type": "string",
            "format": ""
        },
        {
            "name": "gallery",
            "baseName": "gallery",
            "type": "string",
            "format": ""
        },
        {
            "name": "original",
            "baseName": "original",
            "type": "string",
            "format": ""
        },
        {
            "name": "thumbnail",
            "baseName": "thumbnail",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ImageRequestUrlsUploaded.attributeTypeMap;
    }

    public constructor() {
    }
}

