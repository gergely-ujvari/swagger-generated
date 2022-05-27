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

import { HttpFile } from '../http/http';

export class StageGroup {
    /**
    * Unique resource identifier
    */
    'id': number;
    /**
    * Human readable name of the Group
    */
    'name': string;
    /**
    * The order in the stage of the group
    */
    'orderInStage'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "orderInStage",
            "baseName": "order_in_stage",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return StageGroup.attributeTypeMap;
    }

    public constructor() {
    }
}
