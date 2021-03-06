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

import { ArticleResponse } from './ArticleResponse';
import { HttpFile } from '../http/http';

export class ArticlesIdDelete200Response {
    'data'?: ArticleResponse;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "ArticleResponse",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ArticlesIdDelete200Response.attributeTypeMap;
    }

    public constructor() {
    }
}

