/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SportsRelatedResponse = Array<{
    type?: 'player' | 'team' | 'match' | 'tournament' | 'championship' | 'round' | 'venue' | 'coach' | 'referee' | 'team_president';
    provider?: 'undefined' | 'smp' | 'football-api';
    data?: any;
}>;