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

export class EventStatus {
    /**
    * Status classification
    */
    'type': EventStatusTypeEnum;
    /**
    * Human readable name describing the status, can be translated
    */
    'name': string;
    /**
    * Human readable short name describing the status, can be translated
    */
    'shortName'?: string;
    /**
    * Unique string used to identify the status
    */
    'code': EventStatusCodeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "EventStatusTypeEnum",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "shortName",
            "baseName": "short_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "EventStatusCodeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EventStatus.attributeTypeMap;
    }

    public constructor() {
    }
}


export type EventStatusTypeEnum = "finished" | "cancelled" | "notstarted" | "interrupted" | "inprogress" ;
export type EventStatusCodeEnum = "finished" | "not_started" | "1st_half" | "2nd_half" ;
