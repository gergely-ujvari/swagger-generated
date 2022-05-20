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

import * as models from './models';

export interface V2MatchInput {
    statusId?: string;

    kickoffTime?: Date;

    stageId?: string;

    homeTeamId?: string;

    awayTeamId?: string;

    roundKey?: string;

    groupId?: string;

    venueId?: string;

    referees?: Array<models.V2MatchRefereeInput>;

    score?: models.V2MatchScoreInput;

    spectators?: number;

    coverage?: V2MatchInput.CoverageEnum;

    finishedAt?: Date;

    phaseStartedAt?: Date;

}
export namespace V2MatchInput {
    export enum CoverageEnum {
        LIVE = <any> 'LIVE',
        NOTLIVE = <any> 'NOT_LIVE',
        UNKNOWN = <any> 'UNKNOWN'
    }
}
