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


export interface StandingRule { 
    /**
     * Human readable name describing the standing rule
     */
    name: string;
    /**
     * Unique code identifying the standing rule
     */
    code: string;
    /**
     * Type classification of the standing rule
     */
    type: StandingRule.TypeEnum;
    /**
     * Detailed description of the standing rule
     */
    description?: string;
    id?: number;
}
export namespace StandingRule {
    export type TypeEnum = 'promotion' | 'promotion_playoff' | 'relegation' | 'relegation_playoff' | 'tiertwo' | 'tiertwo_playoff';
    export const TypeEnum = {
        Promotion: 'promotion' as TypeEnum,
        PromotionPlayoff: 'promotion_playoff' as TypeEnum,
        Relegation: 'relegation' as TypeEnum,
        RelegationPlayoff: 'relegation_playoff' as TypeEnum,
        Tiertwo: 'tiertwo' as TypeEnum,
        TiertwoPlayoff: 'tiertwo_playoff' as TypeEnum
    }
}
