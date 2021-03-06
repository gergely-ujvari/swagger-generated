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

import { VideoResponse } from './VideoResponse';
import { HttpFile } from '../http/http';

export class VideosIdDelete200Response {
    'data'?: VideoResponse;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "VideoResponse",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return VideosIdDelete200Response.attributeTypeMap;
    }

    public constructor() {
    }
}

