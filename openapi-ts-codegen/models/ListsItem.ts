/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ListsItem = {
    type?: ListsItem.type;
    /**
     * Related object
     */
    data?: any;
    /**
     * No schema restriction should be used for overiding properties
     */
    meta?: any;
    /**
     * Used for ordering in ascending order
     */
    weight?: number | null;
};

export namespace ListsItem {

    export enum type {
        ARTICLE = 'ARTICLE',
        VIDEO = 'VIDEO',
        GALLERY = 'GALLERY',
    }


}
