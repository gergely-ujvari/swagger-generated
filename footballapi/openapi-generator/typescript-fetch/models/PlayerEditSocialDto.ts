/* tslint:disable */
/* eslint-disable */
/**
 * Football API
 * API for accessing various kinds of football data, updated in real time.
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PlayerEditSocialDto
 */
export interface PlayerEditSocialDto {
    /**
     * 
     * @type {string}
     * @memberof PlayerEditSocialDto
     */
    web?: string;
    /**
     * 
     * @type {string}
     * @memberof PlayerEditSocialDto
     */
    twitterId?: string;
    /**
     * 
     * @type {string}
     * @memberof PlayerEditSocialDto
     */
    facebookId?: string;
    /**
     * 
     * @type {string}
     * @memberof PlayerEditSocialDto
     */
    instagramId?: string;
    /**
     * 
     * @type {string}
     * @memberof PlayerEditSocialDto
     */
    wikipediaId?: string;
    /**
     * 
     * @type {string}
     * @memberof PlayerEditSocialDto
     */
    youtubeChannelId?: string;
}

export function PlayerEditSocialDtoFromJSON(json: any): PlayerEditSocialDto {
    return PlayerEditSocialDtoFromJSONTyped(json, false);
}

export function PlayerEditSocialDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlayerEditSocialDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'web': !exists(json, 'web') ? undefined : json['web'],
        'twitterId': !exists(json, 'twitter_id') ? undefined : json['twitter_id'],
        'facebookId': !exists(json, 'facebook_id') ? undefined : json['facebook_id'],
        'instagramId': !exists(json, 'instagram_id') ? undefined : json['instagram_id'],
        'wikipediaId': !exists(json, 'wikipedia_id') ? undefined : json['wikipedia_id'],
        'youtubeChannelId': !exists(json, 'youtube_channel_id') ? undefined : json['youtube_channel_id'],
    };
}

export function PlayerEditSocialDtoToJSON(value?: PlayerEditSocialDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'web': value.web,
        'twitter_id': value.twitterId,
        'facebook_id': value.facebookId,
        'instagram_id': value.instagramId,
        'wikipedia_id': value.wikipediaId,
        'youtube_channel_id': value.youtubeChannelId,
    };
}

