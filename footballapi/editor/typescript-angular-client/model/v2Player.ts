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
import { PlayerEditSocialDto } from './playerEditSocialDto';
import { PlayerProfileDto } from './playerProfileDto';
import { V2City } from './v2City';
import { V2Country } from './v2Country';


export interface V2Player { 
    id: string;
    name: string;
    country: V2Country;
    active?: boolean;
    birthdate?: string;
    birthCity?: V2City;
    profile?: PlayerProfileDto;
    social?: PlayerEditSocialDto;
    position?: string;
    gender?: V2Player.GenderEnum;
}
export namespace V2Player {
    export type GenderEnum = 'MALE' | 'FEMALE';
    export const GenderEnum = {
        MALE: 'MALE' as GenderEnum,
        FEMALE: 'FEMALE' as GenderEnum
    };
}