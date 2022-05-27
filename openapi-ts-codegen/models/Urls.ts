/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An object containing various URLs.
 */
export type Urls = {
    /**
     * A URL that is going to be used for redirects. If you want a piece of content to take you to a specific page, you should put that address here.
     */
    external_url?: string;
    /**
     * A URL that is the master in case of duplicate content. Mostly used for SEO purposes.
     */
    canonical_url?: string;
    /**
     * A URL describing the public location of the resource, when accessed from desktop. Can be used in combination with 3rd party Social Media plugins to achieve Share functionality.
     */
    public_url_desktop?: string;
    /**
     * A URL describing the public location of the resource, as accessed from mobile.
     */
    public_url_mobile?: string;
    /**
     * A URL describing the public location of the resource, as accessed as Accellerated Mobile Page.
     */
    public_url_amp?: string;
};
