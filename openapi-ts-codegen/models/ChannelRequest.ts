/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ChannelRequest = {
    /**
     * Alias for the channel in slug format
     */
    slug?: string;
    name?: string;
    /**
     * Flag if this channel is one of the defaults for the project
     */
    default?: boolean;
    description?: string | null;
};
