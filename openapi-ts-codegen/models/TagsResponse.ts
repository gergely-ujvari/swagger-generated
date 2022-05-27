/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MainMedia } from './MainMedia';
import type { Seo } from './Seo';

export type TagsResponse = {
    id?: string;
    title?: string;
    description?: string;
    /**
     * Valid slug of a type for this content type
     */
    type?: string | null;
    seo?: Seo;
    main_media?: Array<MainMedia>;
    /**
     * Calculated place in the listing. Can be controlled by setting previous_id property in requests.
     */
    weight?: string;
    order_type?: TagsResponse.order_type;
};

export namespace TagsResponse {

    export enum order_type {
        ORDERED = 'ordered',
        UNORDERED = 'unordered',
    }


}
