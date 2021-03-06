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

import { V2KnockoutMatch } from './V2KnockoutMatch';
import { V2KnockoutTeam } from './V2KnockoutTeam';
import { HttpFile } from '../http/http';

export class V2KnockoutGroup {
    'id'?: string;
    'order'?: number;
    'teams'?: Array<V2KnockoutTeam>;
    'matches'?: Array<V2KnockoutMatch>;
    'childObjectId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "order",
            "baseName": "order",
            "type": "number",
            "format": ""
        },
        {
            "name": "teams",
            "baseName": "teams",
            "type": "Array<V2KnockoutTeam>",
            "format": ""
        },
        {
            "name": "matches",
            "baseName": "matches",
            "type": "Array<V2KnockoutMatch>",
            "format": ""
        },
        {
            "name": "childObjectId",
            "baseName": "child_object_id",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2KnockoutGroup.attributeTypeMap;
    }

    public constructor() {
    }
}

