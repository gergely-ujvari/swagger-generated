/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Meta } from './Meta';
import type { TagsResponse } from './TagsResponse';

export type TagsCollection = {
    data?: Array<TagsResponse>;
    meta?: Meta;
};
