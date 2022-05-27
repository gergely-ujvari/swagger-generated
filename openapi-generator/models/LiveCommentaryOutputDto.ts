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

export class LiveCommentaryOutputDto {
    'type'?: string;
    'templateText'?: string;
    'autoText'?: string;
    'elapsed'?: number;
    'details'?: Array<any>;
    'incidentTimestamp'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "templateText",
            "baseName": "template_text",
            "type": "string",
            "format": ""
        },
        {
            "name": "autoText",
            "baseName": "auto_text",
            "type": "string",
            "format": ""
        },
        {
            "name": "elapsed",
            "baseName": "elapsed",
            "type": "number",
            "format": ""
        },
        {
            "name": "details",
            "baseName": "details",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "incidentTimestamp",
            "baseName": "incident_timestamp",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return LiveCommentaryOutputDto.attributeTypeMap;
    }

    public constructor() {
    }
}

