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

import { Seo } from './Seo';
import { HttpFile } from '../http/http';

export class CategoryResponse {
    'id'?: number;
    /**
    * The title of the content. It should always be provided
    */
    'title'?: string;
    'description'?: string;
    'active'?: boolean;
    'parentId'?: string;
    /**
    * Read-only element used for ordering in ascending order
    */
    'weight'?: number;
    /**
    * List of sub categories
    */
    'subs'?: Array<any>;
    /**
    * JSON field with no validation. Should be used for migrated/unsupported content that is no longer needed but needs to be available for legacy reasons.
    */
    'generic'?: any;
    'seo'?: Seo;
    'createdAt'?: string;
    'updatedAt'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "active",
            "baseName": "active",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "parentId",
            "baseName": "parent_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "weight",
            "baseName": "weight",
            "type": "number",
            "format": ""
        },
        {
            "name": "subs",
            "baseName": "subs",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "generic",
            "baseName": "generic",
            "type": "any",
            "format": ""
        },
        {
            "name": "seo",
            "baseName": "seo",
            "type": "Seo",
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
        return CategoryResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

