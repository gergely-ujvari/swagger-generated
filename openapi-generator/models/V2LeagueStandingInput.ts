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

import { V2LeagueEntryInput } from './V2LeagueEntryInput';
import { HttpFile } from '../http/http';

export class V2LeagueStandingInput {
    'entries'?: Array<V2LeagueEntryInput>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "entries",
            "baseName": "entries",
            "type": "Array<V2LeagueEntryInput>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2LeagueStandingInput.attributeTypeMap;
    }

    public constructor() {
    }
}
