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
import { V2Country } from './v2Country';


export interface V2Coach { 
    id?: string;
    name?: string;
    country?: V2Country;
    birthdate?: string;
    gender?: V2Coach.GenderEnum;
}
export namespace V2Coach {
    export type GenderEnum = 'MALE' | 'FEMALE';
    export const GenderEnum = {
        MALE: 'MALE' as GenderEnum,
        FEMALE: 'FEMALE' as GenderEnum
    }
}
