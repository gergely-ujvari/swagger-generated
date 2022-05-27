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

import { PartialEvent } from './PartialEvent';
import { HttpFile } from '../http/http';

export class TeamForm {
    'event'?: PartialEvent;
    /**
    * Indicates outcome of the event for the given team
    */
    'outcome': TeamFormOutcomeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "event",
            "baseName": "event",
            "type": "PartialEvent",
            "format": ""
        },
        {
            "name": "outcome",
            "baseName": "outcome",
            "type": "TeamFormOutcomeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TeamForm.attributeTypeMap;
    }

    public constructor() {
    }
}


export type TeamFormOutcomeEnum = "W" | "D" | "L" ;

