/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type OriginRequest = {
    /**
     * Alias for the origin in slug format
     */
    slug?: string;
    name?: string;
    /**
     * Flag if this origin is the default for this content type
     */
    default?: boolean;
    description?: string | null;
};
