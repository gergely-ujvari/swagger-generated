/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthorResponse } from './AuthorResponse';
import type { OriginResponse } from './OriginResponse';

/**
 * Image Response
 */
export type ImageResponse = {
    readonly id?: number;
    description?: string | null;
    authors?: Array<AuthorResponse>;
    /**
     * A field for one-time author
     */
    custom_author?: string;
    /**
     * Content footer.
     */
    footer?: string | null;
    owner?: OriginResponse;
    origin?: OriginResponse;
    /**
     * Valid slug of a type for this content type
     */
    type?: string | null;
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
    sensitive_content?: boolean;
    /**
     * JSON field with no validation. Should be used for migrated/unsupported content that is no longer needed but needs to be available for legacy reasons.
     */
    generic?: any;
    /**
     * System field for the creation date and time of the content.
     */
    created_at?: string;
    /**
     * The last time the article was updated.
     */
    updated_at?: string;
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
