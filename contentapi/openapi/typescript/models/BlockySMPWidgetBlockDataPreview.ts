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

export class BlockySMPWidgetBlockDataPreview {
    'mainBookMaker'?: any;
    'match'?: any;
    'matches'?: any;
    'player'?: any;
    'properties'?: any;
    'selectedBookmakers'?: any;
    'team'?: any;
    'tournament'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "mainBookMaker",
            "baseName": "mainBookMaker",
            "type": "any",
            "format": ""
        },
        {
            "name": "match",
            "baseName": "match",
            "type": "any",
            "format": ""
        },
        {
            "name": "matches",
            "baseName": "matches",
            "type": "any",
            "format": ""
        },
        {
            "name": "player",
            "baseName": "player",
            "type": "any",
            "format": ""
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "any",
            "format": ""
        },
        {
            "name": "selectedBookmakers",
            "baseName": "selectedBookmakers",
            "type": "any",
            "format": ""
        },
        {
            "name": "team",
            "baseName": "team",
            "type": "any",
            "format": ""
        },
        {
            "name": "tournament",
            "baseName": "tournament",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BlockySMPWidgetBlockDataPreview.attributeTypeMap;
    }

    public constructor() {
    }
}

