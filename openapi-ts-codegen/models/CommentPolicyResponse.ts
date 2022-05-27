/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreatorPartialResponse } from './CreatorPartialResponse';

export type CommentPolicyResponse = {
    id?: string;
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
    /**
     * System field for the creation date and time of the content.
     */
    created_at?: string;
    /**
     * The last time the comment policy was updated.
     */
    updated_at?: string;
    created_by?: CreatorPartialResponse;
};
