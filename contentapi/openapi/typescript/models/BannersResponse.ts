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

export class BannersResponse {
    'id'?: string;
    'title'?: string;
    /**
    * HTML code of the banner.
    */
    'code'?: string;
    'isPreferred'?: boolean;
    /**
    * Valid slug of a type for this content type
    */
    'type'?: string;
    /**
    * System field for the creation date and time of the content.
    */
    'createdAt'?: string;
    /**
    * The last time the banner was updated.
    */
    'updatedAt'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "string",
            "format": ""
        },
        {
            "name": "isPreferred",
            "baseName": "is_preferred",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BannersResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

