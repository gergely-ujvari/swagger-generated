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

import { BlockyEditorBlockData } from './BlockyEditorBlockData';
import { HttpFile } from '../http/http';

/**
* The editor block contains HTML in the \"content\" attribute. The type tells you what type of HTML to expect. For instance, \"paragraph\" will contain a \"P\" element. \"Heading\" will contain H1, H2, H3, etc elements. The HTML can be used as-is, or it can be decorated to the client's requirements. For instance, a client might want to enclose each paragraph in a DIV, or strip the P tag altogether.
*/
export class BlockyEditorBlock {
    'data'?: BlockyEditorBlockData;
    /**
    * Block type
    */
    'type'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "data",
            "baseName": "data",
            "type": "BlockyEditorBlockData",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BlockyEditorBlock.attributeTypeMap;
    }

    public constructor() {
    }
}
