/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * This block contains raw HTML to be printed on the page
 */
export type BlockyLinkBlock = {
    data?: {
        /**
         * HTML
         */
        content?: string;
        text?: string;
        open_type?: string;
        link?: string;
    };
    /**
     * Block type
     */
    type?: string;
};
