/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * JSON object used for SEO needs can be null
 */
export type Seo = {
    slug?: string | null;
    /**
     * The title of the content. It should always be provided
     */
    title?: string | null;
    description?: string | null;
    keywords?: Array<string> | null;
    /**
     * Flag, indicating whather the item should be indexed by search engines
     */
    index?: boolean | null;
    /**
     * Flag, indicating whather the search engines should follow links on this item
     */
    follow?: boolean | null;
    /**
     * Redirect type for external URLs
     */
    redirect_type?: Seo.redirect_type | null;
    /**
     * Json for Linking Data, must be a valid JSON LD value
     */
    jsonld?: string | null;
};

export namespace Seo {

    /**
     * Redirect type for external URLs
     */
    export enum redirect_type {
        TEMPORARY = 'temporary',
        PERMANENT = 'permanent',
    }


}
