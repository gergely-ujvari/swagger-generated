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

export interface V2SquadPlayerInput {
    "playerId"?: string;
    "status"?: V2SquadPlayerInput.StatusEnum;
    "contractType"?: V2SquadPlayerInput.ContractTypeEnum;
    "startDate"?: string;
    "endDate"?: string;
    "shirtNumber"?: number;
}

export namespace V2SquadPlayerInput {
    export enum StatusEnum {
        ACTIVE = <any> 'ACTIVE',
        INACTIVE = <any> 'INACTIVE'
    }
    export enum ContractTypeEnum {
        PERMANENT = <any> 'PERMANENT',
        LOAN = <any> 'LOAN',
        UNKNOWN = <any> 'UNKNOWN'
    }
}
