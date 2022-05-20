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
import { CountryDto } from './countryDto';

export interface RefereeDto { 
    id?: string;
    name?: string;
    country?: CountryDto;
    birthdate?: string;
    active?: boolean;
    gender?: RefereeDto.GenderEnum;
}
export namespace RefereeDto {
    export type GenderEnum = 'MALE' | 'FEMALE';
    export const GenderEnum = {
        MALE: 'MALE' as GenderEnum,
        FEMALE: 'FEMALE' as GenderEnum
    };
}