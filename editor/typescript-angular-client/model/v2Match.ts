/**
 * Football API
 * API for accessing various kinds of football data, updated in real time.
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { V2Group } from './v2Group';
import { V2MatchMinute } from './v2MatchMinute';
import { V2MatchReferee } from './v2MatchReferee';
import { V2MatchRound } from './v2MatchRound';
import { V2MatchScore } from './v2MatchScore';
import { V2MatchStage } from './v2MatchStage';
import { V2MatchStatus } from './v2MatchStatus';
import { V2MatchTeamDto } from './v2MatchTeamDto';
import { V2MatchVenue } from './v2MatchVenue';
import { V2Season } from './v2Season';


export interface V2Match { 
    id?: string;
    status?: V2MatchStatus;
    kickoffTime?: Date;
    stage?: V2MatchStage;
    season?: V2Season;
    group?: V2Group;
    round?: V2MatchRound;
    homeTeam?: V2MatchTeamDto;
    awayTeam?: V2MatchTeamDto;
    referees?: Array<V2MatchReferee>;
    venue?: V2MatchVenue;
    spectators?: number;
    coverage?: V2Match.CoverageEnum;
    minute?: V2MatchMinute;
    phaseStartedAt?: Date;
    finishedAt?: Date;
    score?: V2MatchScore;
}
export namespace V2Match {
    export type CoverageEnum = 'LIVE' | 'NOT_LIVE' | 'UNKNOWN';
    export const CoverageEnum = {
        LIVE: 'LIVE' as CoverageEnum,
        NOTLIVE: 'NOT_LIVE' as CoverageEnum,
        UNKNOWN: 'UNKNOWN' as CoverageEnum
    };
}
