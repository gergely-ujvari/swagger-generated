/* tslint:disable */
/* eslint-disable */
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
import { V2Group } from './v2-group';
import { V2MatchMinute } from './v2-match-minute';
import { V2MatchReferee } from './v2-match-referee';
import { V2MatchRound } from './v2-match-round';
import { V2MatchScore } from './v2-match-score';
import { V2MatchStage } from './v2-match-stage';
import { V2MatchStatus } from './v2-match-status';
import { V2MatchTeamDto } from './v2-match-team-dto';
import { V2MatchVenue } from './v2-match-venue';
import { V2Season } from './v2-season';
/**
 * 
 * @export
 * @interface V2Match
 */
export interface V2Match {
    /**
     * 
     * @type {string}
     * @memberof V2Match
     */
    id?: string;
    /**
     * 
     * @type {V2MatchStatus}
     * @memberof V2Match
     */
    status?: V2MatchStatus;
    /**
     * 
     * @type {Date}
     * @memberof V2Match
     */
    kickoffTime?: Date;
    /**
     * 
     * @type {V2MatchStage}
     * @memberof V2Match
     */
    stage?: V2MatchStage;
    /**
     * 
     * @type {V2Season}
     * @memberof V2Match
     */
    season?: V2Season;
    /**
     * 
     * @type {V2Group}
     * @memberof V2Match
     */
    group?: V2Group;
    /**
     * 
     * @type {V2MatchRound}
     * @memberof V2Match
     */
    round?: V2MatchRound;
    /**
     * 
     * @type {V2MatchTeamDto}
     * @memberof V2Match
     */
    homeTeam?: V2MatchTeamDto;
    /**
     * 
     * @type {V2MatchTeamDto}
     * @memberof V2Match
     */
    awayTeam?: V2MatchTeamDto;
    /**
     * 
     * @type {Array<V2MatchReferee>}
     * @memberof V2Match
     */
    referees?: Array<V2MatchReferee>;
    /**
     * 
     * @type {V2MatchVenue}
     * @memberof V2Match
     */
    venue?: V2MatchVenue;
    /**
     * 
     * @type {number}
     * @memberof V2Match
     */
    spectators?: number;
    /**
     * 
     * @type {string}
     * @memberof V2Match
     */
    coverage?: V2MatchCoverageEnum;
    /**
     * 
     * @type {V2MatchMinute}
     * @memberof V2Match
     */
    minute?: V2MatchMinute;
    /**
     * 
     * @type {Date}
     * @memberof V2Match
     */
    phaseStartedAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof V2Match
     */
    finishedAt?: Date;
    /**
     * 
     * @type {V2MatchScore}
     * @memberof V2Match
     */
    score?: V2MatchScore;
}

/**
    * @export
    * @enum {string}
    */
export enum V2MatchCoverageEnum {
    LIVE = 'LIVE',
    NOTLIVE = 'NOT_LIVE',
    UNKNOWN = 'UNKNOWN'
}

