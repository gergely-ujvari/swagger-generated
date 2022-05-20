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
import { V2Player } from './v2Player';


export interface V2SquadPlayer { 
    player: V2Player;
    status: V2SquadPlayer.StatusEnum;
    contractType?: V2SquadPlayer.ContractTypeEnum;
    startDate?: string;
    endDate?: string;
    shirtNumber?: number;
}
export namespace V2SquadPlayer {
    export type StatusEnum = 'ACTIVE' | 'INACTIVE';
    export const StatusEnum = {
        ACTIVE: 'ACTIVE' as StatusEnum,
        INACTIVE: 'INACTIVE' as StatusEnum
    };
    export type ContractTypeEnum = 'PERMANENT' | 'LOAN' | 'UNKNOWN';
    export const ContractTypeEnum = {
        PERMANENT: 'PERMANENT' as ContractTypeEnum,
        LOAN: 'LOAN' as ContractTypeEnum,
        UNKNOWN: 'UNKNOWN' as ContractTypeEnum
    };
}
