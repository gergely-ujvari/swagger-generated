/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RelatedResponse = Array<{
    type?: 'article' | 'video' | 'gallery' | 'image' | 'tag' | 'content' | 'player' | 'team' | 'match' | 'tournament' | 'championship' | 'round' | 'venue' | 'coach' | 'referee' | 'team_president';
    provider?: 'undefined' | 'smp' | 'football-api';
    data?: any;
}>;