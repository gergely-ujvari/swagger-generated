/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListsRequest = {
    /**
     * The title of the content. It should always be provided
     */
    title?: string;
    /**
     * should be unique
     */
    slug?: string | null;
    /**
     * base64 encoded image
     */
    image?: string;
    /**
     * Configuration object. No schema restrictions.
     */
    configuration?: any;
    /**
     * Used for ordering. Leave null to put on top.
     */
    previous_id?: string | null;
    /**
     * Zero-indexed indexed item positions that are considered locked. If being changed, request must also include items property.
     */
    locked_positions?: Array<number>;
    items?: Array<{
        id?: string;
        type?: 'article' | 'video' | 'gallery';
        /**
         * No schema restriction should be used for overiding properties
         */
        meta?: any;
        /**
         * Used for ordering in ascending order
         */
        weight?: number | null;
    }>;
    /**
     * Slug of a valid status for this content type
     */
    status?: string | null;
    /**
     * JSON field with no validation. Should be used for migrated/unsupported content that is no longer needed but needs to be available for legacy reasons.
     */
    generic?: any;
    /**
     * Language of the resource. Required if the project is multi-lingual, optional otherwise. Has to be project supported language.
     */
    language?: string;
};
