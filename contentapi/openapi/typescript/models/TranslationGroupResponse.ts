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

import { Translation } from './Translation';
import { HttpFile } from '../http/http';

export class TranslationGroupResponse {
    'id'?: string;
    /**
    * One of article, video, or gallery
    */
    'contentType'?: string;
    /**
    * The ID of the resource for which the group was created
    */
    'masterContentId'?: string;
    /**
    * The IDs and languages of the resources assigned to the group
    */
    'translations'?: Array<Translation>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "contentType",
            "baseName": "content_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "masterContentId",
            "baseName": "master_content_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "translations",
            "baseName": "translations",
            "type": "Array<Translation>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TranslationGroupResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
