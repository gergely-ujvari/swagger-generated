/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Meta = {
    pagination?: {
        total?: number;
        count?: number;
        per_page?: number;
        current_page?: number;
        total_pages?: number;
        links?: {
            next?: string;
            previous?: string;
        };
    };
};
