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
import { V2MatchRefereeInput } from './v2MatchRefereeInput';
import { V2MatchScoreInput } from './v2MatchScoreInput';


export interface V2MatchInput { 
    statusId?: string;
    kickoffTime?: Date;
    stageId?: string;
    homeTeamId?: string;
    awayTeamId?: string;
    roundKey?: string;
    groupId?: string;
    venueId?: string;
    referees?: Array<V2MatchRefereeInput>;
    score?: V2MatchScoreInput;
    spectators?: number;
    coverage?: V2MatchInput.CoverageEnum;
    finishedAt?: Date;
    phaseStartedAt?: Date;
}
export namespace V2MatchInput {
    export type CoverageEnum = 'LIVE' | 'NOT_LIVE' | 'UNKNOWN';
    export const CoverageEnum = {
        LIVE: 'LIVE' as CoverageEnum,
        NOTLIVE: 'NOT_LIVE' as CoverageEnum,
        UNKNOWN: 'UNKNOWN' as CoverageEnum
    }
}
