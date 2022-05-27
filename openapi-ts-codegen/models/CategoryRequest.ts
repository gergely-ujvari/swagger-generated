/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MainMedia } from './MainMedia';
import type { Seo } from './Seo';

export type CategoryRequest = {
    /**
     * The title of the content. It should always be provided
     */
    title?: string;
    description?: string | null;
    active?: boolean;
    parent_id?: string | null;
    /**
     * Used to achieve ordering of categories. The current category will be placed after the element with previous_id
     */
    previous_id?: string | null;
    /**
     * JSON field with no validation. Should be used for migrated/unsupported content that is no longer needed but needs to be available for legacy reasons.
     */
    generic?: any;
    seo?: Seo;
    main_media?: Array<MainMedia>;
};
