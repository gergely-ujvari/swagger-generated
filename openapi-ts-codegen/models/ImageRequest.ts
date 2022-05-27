/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Image Request
 */
export type ImageRequest = {
    description?: string | null;
    /**
     * Array of author IDs. If no author is provided upon content creation, we select the default one (if available)
     */
    authors?: Array<number> | null;
    /**
     * A field for one-time author
     */
    custom_author?: string | null;
    /**
     * Content footer.
     */
    footer?: string | null;
    /**
     * Owner of the rights for the content.
     */
    owner?: string;
    /**
     * Valid slug of a type for this content type
     */
    type?: string | null;
    /**
     * Base64 encoded Image
     */
    image_data?: string;
    /**
     * An object containing various URLs.
     */
    urls?: {
        /**
         * Object of cropped images
         */
        '16x9'?: any;
        /**
         * Link to cropped image
         */
        copped?: string;
        /**
         * Image links
         */
        uploaded?: {
            embed?: string;
            gallery?: string;
            original?: string;
            thumbnail?: string;
        };
    };
    is_sensitive_content?: boolean;
    /**
     * ID of a valid origin for this content type
     */
    origin_id?: number | null;
    /**
     * JSON field with no validation. Should be used for migrated/unsupported content that is no longer needed but needs to be available for legacy reasons.
     */
    generic?: any;
    /**
     * Main image crop value
     */
    main_crop?: string | null;
    /**
     * Alt value
     */
    alt?: string | null;
    /**
     * Caption value
     */
    caption?: string | null;
};
