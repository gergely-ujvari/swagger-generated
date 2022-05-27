/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CommentPolicyRequest = {
    /**
     * Alias for the comment policy in slug format
     */
    slug?: string;
    name?: string;
    /**
     * Flag if this comment policy is the default for this content type
     */
    default?: boolean;
    description?: string | null;
};
