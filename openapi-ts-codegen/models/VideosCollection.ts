/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Meta } from './Meta';
import type { VideoResponse } from './VideoResponse';

export type VideosCollection = {
    data?: Array<VideoResponse>;
    meta?: Meta;
};
