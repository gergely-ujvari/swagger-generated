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

import { V2Season } from './V2Season';
import { V2StageDetails } from './V2StageDetails';
import { HttpFile } from '../http/http';

export class V2SeasonDetails {
    'season'?: V2Season;
    'stages'?: Array<V2StageDetails>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "season",
            "baseName": "season",
            "type": "V2Season",
            "format": ""
        },
        {
            "name": "stages",
            "baseName": "stages",
            "type": "Array<V2StageDetails>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V2SeasonDetails.attributeTypeMap;
    }

    public constructor() {
    }
}

