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

import { BannersResponse } from './BannersResponse';
import { HttpFile } from '../http/http';

export class BannersIdDelete200Response {
    'data'?: BannersResponse;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "BannersResponse",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BannersIdDelete200Response.attributeTypeMap;
    }

    public constructor() {
    }
}

