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

export interface V2Lineup {
    matchId?: string;

    status?: V2Lineup.StatusEnum;

    homeTeam?: models.V2LineupTeamDto;

    awayTeam?: models.V2LineupTeamDto;

}
export namespace V2Lineup {
    export enum StatusEnum {
        CONFIRMED = <any> 'CONFIRMED',
        UNCONFIRMED = <any> 'UNCONFIRMED',
        NOTAVAILABLE = <any> 'NOT_AVAILABLE'
    }
}
