/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * The editor block contains HTML in the "content" attribute. The type tells you what type of HTML to expect. For instance, "paragraph" will contain a "P" element. "Heading" will contain H1, H2, H3, etc elements. The HTML can be used as-is, or it can be decorated to the client's requirements. For instance, a client might want to enclose each paragraph in a DIV, or strip the P tag altogether.
 */
export type BlockyEditorBlock = {
    data?: {
        /**
         * HTML string
         */
        content?: string;
        /**
         * Block type
         */
        type?: BlockyEditorBlock.type;
    };
    /**
     * Block type
     */
    type?: string;
};

export namespace BlockyEditorBlock {

    /**
     * Block type
     */
    export enum type {
        PARAGRAPH = 'paragraph',
        QUOTE = 'quote',
        HEADING = 'heading',
        TABLE = 'table',
        LIST = 'list',
    }


}
