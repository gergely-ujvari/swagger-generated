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
/* tslint:disable:no-unused-variable member-ordering */

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import IHttpClient from '../IHttpClient';
import { inject, injectable } from 'inversify';
import { IAPIConfiguration } from '../IAPIConfiguration';
import { Headers } from '../Headers';
import HttpResponse from '../HttpResponse';

import { TranslationDto } from '../model/translationDto';
import { TranslationEntityDto } from '../model/translationEntityDto';
import { TranslationKeyDto } from '../model/translationKeyDto';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class TranslationsService {
    @inject('IAPIConfiguration') private APIConfiguration: IAPIConfiguration;
    @inject('IApiHttpClient') private httpClient: IHttpClient;



    /**
     * 
     * Get all possible translation entities.
     
     */
    public v2TranslationsEntitiesGet(observe?: 'body', headers?: Headers): Observable<Array<TranslationEntityDto>>;
    public v2TranslationsEntitiesGet(observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<TranslationEntityDto>>>;
    public v2TranslationsEntitiesGet(observe: any = 'body', headers: Headers = {}): Observable<any> {
        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<Array<TranslationEntityDto>>> = this.httpClient.get(`${this.APIConfiguration.basePath}/v2/translations/entities` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Bulk Upsert translations by primary key
     * @param translations Array of translations
     
     */
    public v2TranslationsPost(translations?: Array<TranslationDto>, observe?: 'body', headers?: Headers): Observable<TranslationDto>;
    public v2TranslationsPost(translations?: Array<TranslationDto>, observe?: 'response', headers?: Headers): Observable<HttpResponse<TranslationDto>>;
    public v2TranslationsPost(translations?: Array<TranslationDto>, observe: any = 'body', headers: Headers = {}): Observable<any> {
        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<TranslationDto>> = this.httpClient.post(`${this.APIConfiguration.basePath}/v2/translations`, translations as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Bulk find in translations table and return matching entries by the unique translation key.
     * @param translationKeys Array of translationKeys
     
     */
    public v2TranslationsSearchPost(translationKeys?: Array<TranslationKeyDto>, observe?: 'body', headers?: Headers): Observable<Array<TranslationDto>>;
    public v2TranslationsSearchPost(translationKeys?: Array<TranslationKeyDto>, observe?: 'response', headers?: Headers): Observable<HttpResponse<Array<TranslationDto>>>;
    public v2TranslationsSearchPost(translationKeys?: Array<TranslationKeyDto>, observe: any = 'body', headers: Headers = {}): Observable<any> {
        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';
        headers['Content-Type'] = 'application/json';

        const response: Observable<HttpResponse<Array<TranslationDto>>> = this.httpClient.post(`${this.APIConfiguration.basePath}/v2/translations/search`, translationKeys as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }

}