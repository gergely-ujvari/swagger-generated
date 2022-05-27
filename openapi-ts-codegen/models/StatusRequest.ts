/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type StatusRequest = {
    /**
     * Alias for the status in slug format
     */
    slug?: string;
    name?: string;
    /**
     * Flag if this status is the default for this content type
     */
    default?: boolean;
    description?: string | null;
};
