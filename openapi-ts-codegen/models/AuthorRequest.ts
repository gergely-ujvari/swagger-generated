/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Author
 */
export type AuthorRequest = {
    /**
     * The name of the author. First and last name.
     */
    name?: string;
    /**
     * Brief biography of the author.
     */
    bio?: string | null;
    active?: boolean;
    /**
     * Only one author can be default. If a content is created without an author, the default author will be assigned.
     */
    default?: boolean;
    /**
     * Url for the avatar image. Can be either absolute Url, or a relative path to SMP Image API. Relative paths will be expanded in a response
     */
    avatar_url?: string | null;
    /**
     * JSON field with no validation. Should be used for migrated/unsupported content that is no longer needed but needs to be available for legacy reasons.
     */
    generic?: any;
    /**
     * Used to achieve ordering of authors. The current author will be placed after the element with previous_id
     */
    previous_id?: string | null;
};
