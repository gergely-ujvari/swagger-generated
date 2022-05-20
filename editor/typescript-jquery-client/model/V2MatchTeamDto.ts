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

export interface V2MatchTeamDto {
    id?: string;

    name?: string;

    threeLetterCode?: string;

    gender?: string;

    shortName?: string;

    type?: V2MatchTeamDto.TypeEnum;

    shirtColor?: string;

}
export namespace V2MatchTeamDto {
    export enum TypeEnum {
        PLACEHOLDER = <any> 'PLACEHOLDER',
        NATIONAL = <any> 'NATIONAL',
        CLUB = <any> 'CLUB'
    }
}
