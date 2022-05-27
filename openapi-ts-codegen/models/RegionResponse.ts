/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreatorPartialResponse } from './CreatorPartialResponse';

export type RegionResponse = {
    id?: string;
    /**
     * Alias for the region in slug format
     */
    slug?: string;
    name?: string;
    /**
     * Flag if this region is one of the defaults for the project
     */
    default?: boolean;
    description?: string | null;
    /**
     * System field for the creation date and time of the content.
     */
    created_at?: string;
    /**
     * The last time the banner was updated.
     */
    updated_at?: string;
    created_by?: CreatorPartialResponse;
};
