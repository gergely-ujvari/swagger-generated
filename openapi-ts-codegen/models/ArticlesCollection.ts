/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ArticleResponse } from './ArticleResponse';
import type { Meta } from './Meta';

export type ArticlesCollection = {
    data?: Array<ArticleResponse>;
    meta?: Meta;
};
