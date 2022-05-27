/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Meta } from './Meta';
import type { StatusResponse } from './StatusResponse';

export type StatusesCollection = {
    data?: Array<StatusResponse>;
    meta?: Meta;
};
