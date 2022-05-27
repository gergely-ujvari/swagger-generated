/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Gallery block contains ID and main_image_id. ID refers to the ID of the gallery, while main_image_id refers to the image to be displayed. The same gallery can be embedded different times using different main images.
 */
export type BlockyGalleryBlock = {
    data?: {
        /**
         * Gallery ID
         */
        id?: string;
        /**
         * Image ID
         */
        main_image_id?: string;
        preview?: {
            alignment?: string;
            width?: string;
            mainImageId?: string;
            mainImageUrl?: string;
            title?: string;
        };
    };
    /**
     * Block type
     */
    type?: string;
};
