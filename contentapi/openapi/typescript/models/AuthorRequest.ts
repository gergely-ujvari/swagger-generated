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
* Author
*/
export class AuthorRequest {
    /**
    * The name of the author. First and last name.
    */
    'name'?: string;
    /**
    * Brief biography of the author.
    */
    'bio'?: string;
    'active'?: boolean;
    /**
    * Only one author can be default. If a content is created without an author, the default author will be assigned.
    */
    '_default'?: boolean;
    /**
    * Url for the avatar image. Can be either absolute Url, or a relative path to SMP Image API. Relative paths will be expanded in a response
    */
    'avatarUrl'?: string;
    /**
    * JSON field with no validation. Should be used for migrated/unsupported content that is no longer needed but needs to be available for legacy reasons.
    */
    'generic'?: any;
    /**
    * Used to achieve ordering of authors. The current author will be placed after the element with previous_id
    */
    'previousId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "bio",
            "baseName": "bio",
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
            "name": "_default",
            "baseName": "default",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "avatarUrl",
            "baseName": "avatar_url",
            "type": "string",
            "format": ""
        },
        {
            "name": "generic",
            "baseName": "generic",
            "type": "any",
            "format": ""
        },
        {
            "name": "previousId",
            "baseName": "previous_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AuthorRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
