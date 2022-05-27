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
/**
 * 
 * @export
 * @interface V2Asset
 */
export interface V2Asset {
    /**
     * 
     * @type {string}
     * @memberof V2Asset
     */
    entity?: string;
    /**
     * 
     * @type {string}
     * @memberof V2Asset
     */
    entityId?: string;
    /**
     * 
     * @type {string}
     * @memberof V2Asset
     */
    type?: string;
    /**
     * 
     * @type {string}
     * @memberof V2Asset
     */
    path?: string;
    /**
     * 
     * @type {string}
     * @memberof V2Asset
     */
    contextType?: string;
    /**
     * 
     * @type {string}
     * @memberof V2Asset
     */
    contextId?: string;
}

export function V2AssetFromJSON(json: any): V2Asset {
    return V2AssetFromJSONTyped(json, false);
}

export function V2AssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): V2Asset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entity': !exists(json, 'entity') ? undefined : json['entity'],
        'entityId': !exists(json, 'entity_id') ? undefined : json['entity_id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'path': !exists(json, 'path') ? undefined : json['path'],
        'contextType': !exists(json, 'context_type') ? undefined : json['context_type'],
        'contextId': !exists(json, 'context_id') ? undefined : json['context_id'],
    };
}

export function V2AssetToJSON(value?: V2Asset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'entity': value.entity,
        'entity_id': value.entityId,
        'type': value.type,
        'path': value.path,
        'context_type': value.contextType,
        'context_id': value.contextId,
    };
}
