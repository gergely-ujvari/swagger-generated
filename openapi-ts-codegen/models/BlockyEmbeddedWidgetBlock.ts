/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * This block contains raw HTML to be printed on the page.
 */
export type BlockyEmbeddedWidgetBlock = {
    data?: {
        /**
         * HTML
         */
        content?: string;
        /**
         * The source type of the embed code
         */
        embed_type?: string;
    };
    /**
     * Block type
     */
    type?: string;
};
