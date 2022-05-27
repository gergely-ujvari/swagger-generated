/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RegionRequest = {
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
};
