/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * An object describing a video file. Custom string properties can be added and stored together with the required type and url
 */
export type VideoFile = {
    /**
     * The type of the video - e.g. preview, h264, live_url - any string value
     */
    type?: string;
    /**
     * A relative or absolute URL for the current video file
     */
    url?: string;
};
