/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Translation } from './Translation';

export type TranslationGroupResponse = {
    id?: string;
    /**
     * One of article, video, or gallery
     */
    content_type?: string;
    /**
     * The ID of the resource for which the group was created
     */
    master_content_id?: string;
    /**
     * The IDs and languages of the resources assigned to the group
     */
    translations?: Array<Translation>;
};
