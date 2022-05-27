/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type TypeRequest = {
    /**
     * Alias for the type in slug format
     */
    slug?: string;
    name?: string;
    /**
     * Flag if this type is the default for this content type
     */
    default?: boolean;
    description?: string | null;
};
