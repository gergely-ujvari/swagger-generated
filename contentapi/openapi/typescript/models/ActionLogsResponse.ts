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

import { ActionLogsResponseActor } from './ActionLogsResponseActor';
import { HttpFile } from '../http/http';

export class ActionLogsResponse {
    'action'?: string;
    'actor'?: ActionLogsResponseActor;
    'content'?: ActionLogsResponseActor;
    'changed'?: Array<string>;
    'project'?: string;
    'actionTime'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "action",
            "baseName": "action",
            "type": "string",
            "format": ""
        },
        {
            "name": "actor",
            "baseName": "actor",
            "type": "ActionLogsResponseActor",
            "format": ""
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "ActionLogsResponseActor",
            "format": ""
        },
        {
            "name": "changed",
            "baseName": "changed",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "project",
            "baseName": "project",
            "type": "string",
            "format": ""
        },
        {
            "name": "actionTime",
            "baseName": "action_time",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ActionLogsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

