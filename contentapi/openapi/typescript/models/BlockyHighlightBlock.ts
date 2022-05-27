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

import { BlockyHighlightBlockData } from './BlockyHighlightBlockData';
import { HttpFile } from '../http/http';

/**
* This block contains the title and description of the highlight
*/
export class BlockyHighlightBlock {
    'data'?: BlockyHighlightBlockData;
    /**
    * Block type
    */
    'type'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "BlockyHighlightBlockData",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BlockyHighlightBlock.attributeTypeMap;
    }

    public constructor() {
    }
}

