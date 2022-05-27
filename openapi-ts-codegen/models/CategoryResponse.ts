/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Seo } from './Seo';

export type CategoryResponse = {
    id?: number;
    /**
     * The title of the content. It should always be provided
     */
    title?: string;
    description?: string | null;
    active?: boolean;
    parent_id?: string | null;
    /**
     * Read-only element used for ordering in ascending order
     */
    readonly weight?: number;
    /**
     * List of sub categories
     */
    readonly subs?: Array<any>;
    /**
     * JSON field with no validation. Should be used for migrated/unsupported content that is no longer needed but needs to be available for legacy reasons.
     */
    generic?: any;
    seo?: Seo;
    readonly created_at?: string;
    readonly updated_at?: string;
};
