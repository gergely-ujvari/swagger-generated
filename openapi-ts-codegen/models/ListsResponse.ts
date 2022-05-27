/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ListsItem } from './ListsItem';

export type ListsResponse = {
    id?: string;
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
     * Calculated place in the listing. Can be controlled by setting previous_id property in requests.
     */
    weight?: string;
    /**
     * Configuration object. No schema restrictions.
     */
    configuration?: any;
    /**
     * Zero-indexed indexed item positions that are considered locked.
     */
    locked_positions?: Array<number>;
    items?: Array<ListsItem>;
    /**
     * Slug of a valid status for this content type
     */
    status?: string | null;
    /**
     * JSON field with no validation. Should be used for migrated/unsupported content that is no longer needed but needs to be available for legacy reasons.
     */
    generic?: any;
    /**
     * Language of the resource
     */
    language?: string;
};
