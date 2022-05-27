/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ActionLogsResponse = {
    action?: string;
    actor?: {
        id?: string;
        name?: string;
        type?: string;
    };
    content?: {
        id?: string;
        name?: string;
        type?: string;
    };
    changed?: Array<string>;
    project?: string;
    action_time?: string;
};
