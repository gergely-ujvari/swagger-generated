/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * JSON object used to describe the main media resources in an object
 */
export type MainMedia = {
    /**
     * Required for SMP resources (images/videos/galleries).
     */
    resource_id?: string | null;
    resource_type?: MainMedia.resource_type | null;
    /**
     * Has to be valid in combination with the resource type.
     */
    resource_subtype?: MainMedia.resource_subtype | null;
    provider?: MainMedia.provider;
    description?: string | null;
    /**
     * Free-form JSON object/array, containing resource's configuration
     */
    data?: any;
};

export namespace MainMedia {

    export enum resource_type {
        IMAGE = 'image',
        VIDEO = 'video',
        GALLERY = 'gallery',
        WIDGET = 'widget',
        EMBED = 'embed',
    }

    /**
     * Has to be valid in combination with the resource type.
     */
    export enum resource_subtype {
        DEFAULT = 'default',
        MAIN_IMAGE = 'main_image',
        VERTICAL_IMAGE = 'vertical_image',
        EYE_CATCHER = 'eye_catcher',
        ODDS = 'odds',
        COMPARE_ODDS = 'compare_odds',
        PLAYER_PROFILE = 'player_profile',
        TEAM_PROFILE = 'team_profile',
        STANDINGS = 'standings',
        MATCH = 'match',
        FIXTURES = 'fixtures',
        TOP_SCORERS = 'top_scorers',
        TEAM_PLAYERS = 'team_players',
    }

    export enum provider {
        SMP = 'smp',
        EXTERNAL = 'external',
    }


}
