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

export interface V2MatchStatus {
    id?: string;

    name?: string;

    shortName?: string;

    type?: V2MatchStatus.TypeEnum;

    code?: string;

}
export namespace V2MatchStatus {
    export enum TypeEnum {
        FINISHED = <any> 'FINISHED',
        NOTSTARTED = <any> 'NOT_STARTED',
        LIVE = <any> 'LIVE',
        INTERRUPTED = <any> 'INTERRUPTED',
        CANCELLED = <any> 'CANCELLED',
        UNKNOWN = <any> 'UNKNOWN'
    }
}