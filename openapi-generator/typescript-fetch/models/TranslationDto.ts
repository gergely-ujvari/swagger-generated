/* tslint:disable */
/* eslint-disable */
/**
 * Football API
 * API for accessing various kinds of football data, updated in real time.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    TranslationContentDto,
    TranslationContentDtoFromJSON,
    TranslationContentDtoFromJSONTyped,
    TranslationContentDtoToJSON,
} from './TranslationContentDto';
import {
    TranslationKeyDto,
    TranslationKeyDtoFromJSON,
    TranslationKeyDtoFromJSONTyped,
    TranslationKeyDtoToJSON,
} from './TranslationKeyDto';

/**
 * 
 * @export
 * @interface TranslationDto
 */
export interface TranslationDto {
    /**
     * 
     * @type {TranslationKeyDto}
     * @memberof TranslationDto
     */
    key?: TranslationKeyDto;
    /**
     * 
     * @type {TranslationContentDto}
     * @memberof TranslationDto
     */
    content?: TranslationContentDto;
}

export function TranslationDtoFromJSON(json: any): TranslationDto {
    return TranslationDtoFromJSONTyped(json, false);
}

export function TranslationDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': !exists(json, 'key') ? undefined : TranslationKeyDtoFromJSON(json['key']),
        'content': !exists(json, 'content') ? undefined : TranslationContentDtoFromJSON(json['content']),
    };
}

export function TranslationDtoToJSON(value?: TranslationDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': TranslationKeyDtoToJSON(value.key),
        'content': TranslationContentDtoToJSON(value.content),
    };
}

