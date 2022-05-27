/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GalleryResponse } from './GalleryResponse';
import type { Meta } from './Meta';

export type GalleriesCollection = {
    data?: Array<GalleryResponse>;
    meta?: Meta;
};
