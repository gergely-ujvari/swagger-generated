/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Author
 */
export type AuthorResponse = {
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
     * Url for the avatar image
     */
    avatar_url?: string | null;
    /**
     * JSON field with no validation. Should be used for migrated/unsupported content that is no longer needed but needs to be available for legacy reasons.
     */
    generic?: any;
    /**
     * Calculated place in the listing. Can be controlled by setting previous_id property in requests.
     */
    weight?: string;
};
