/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MainMedia } from './MainMedia';
import type { Seo } from './Seo';

export type TagsRequest = {
    title?: string;
    description?: string;
    /**
     * Valid slug of a type for this content type
     */
    type?: string | null;
    seo?: Seo;
    main_media?: Array<MainMedia>;
    /**
     * Used to achieve ordering of tags. The current tag will be placed after the element with previous_id. Only ordered tags can have their order changed.
     */
    previous_id?: string | null;
    /**
     * Sets the order type. Ordered tags can have their order changed. Unordered tags have their position locked.
     */
    order_type?: TagsRequest.order_type;
};

export namespace TagsRequest {

    /**
     * Sets the order type. Ordered tags can have their order changed. Unordered tags have their position locked.
     */
    export enum order_type {
        ORDERED = 'ordered',
        UNORDERED = 'unordered',
    }


}
