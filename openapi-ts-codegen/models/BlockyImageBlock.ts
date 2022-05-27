/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Image blocks contain image ID and description. This description is available only in the context of this image in this content. The same image might have different descriptions depending on the content it's embedded in.
 */
export type BlockyImageBlock = {
    data?: {
        /**
         * Image ID
         */
        id?: string;
        /**
         * Image description - for the Current ARTICLE
         */
        description?: string;
    };
    /**
     * Block type
     */
    type?: string;
};
