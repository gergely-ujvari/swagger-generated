/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BannersRequest = {
    id?: string;
    title?: string;
    /**
     * HTML code of the banner.
     */
    code?: string;
    is_preferred?: boolean;
    /**
     * Valid slug of a type for this content type
     */
    type?: string | null;
    /**
     * System field for the creation date and time of the content.
     */
    created_at?: string;
    /**
     * The last time the banner was updated.
     */
    updated_at?: string;
};
