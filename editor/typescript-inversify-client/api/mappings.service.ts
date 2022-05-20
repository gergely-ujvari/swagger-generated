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


import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class MappingsService {
    @inject('IAPIConfiguration') private APIConfiguration: IAPIConfiguration;
    @inject('IApiHttpClient') private httpClient: IHttpClient;



    /**
     * 
     * Get FootballApi ID to Sportal ID maps for various types of objects
     * @param object Filter ID maps by a specific object type
     * @param id Return single Sportal ID for the specified FootballAPI &#39;id&#39;
     
     */
    public mappingsSportalGet(object?: 'player' | 'team' | 'tournament' | 'tournament_season' | 'tournament_season_stage', id?: number, observe?: 'body', headers?: Headers): Observable<any>;
    public mappingsSportalGet(object?: 'player' | 'team' | 'tournament' | 'tournament_season' | 'tournament_season_stage', id?: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public mappingsSportalGet(object?: 'player' | 'team' | 'tournament' | 'tournament_season' | 'tournament_season_stage', id?: number, observe: any = 'body', headers: Headers = {}): Observable<any> {
        let queryParameters: string[] = [];
        if (object !== undefined) {
            queryParameters.push('object='+encodeURIComponent(String(object)));
        }
        if (id !== undefined) {
            queryParameters.push('id='+encodeURIComponent(String(id)));
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<any>> = this.httpClient.get(`${this.APIConfiguration.basePath}/mappings/sportal?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }


    /**
     * 
     * Get Sportal to Football API ID maps for various types of objects
     * @param object Filter ID maps by a specific object type
     * @param id Return single FotballApi ID for the specified Sportal &#39;id&#39;
     
     */
    public mappingsSportalReverseGet(object?: 'player' | 'team' | 'tournament' | 'tournament_season' | 'tournament_season_stage', id?: number, observe?: 'body', headers?: Headers): Observable<any>;
    public mappingsSportalReverseGet(object?: 'player' | 'team' | 'tournament' | 'tournament_season' | 'tournament_season_stage', id?: number, observe?: 'response', headers?: Headers): Observable<HttpResponse<any>>;
    public mappingsSportalReverseGet(object?: 'player' | 'team' | 'tournament' | 'tournament_season' | 'tournament_season_stage', id?: number, observe: any = 'body', headers: Headers = {}): Observable<any> {
        let queryParameters: string[] = [];
        if (object !== undefined) {
            queryParameters.push('object='+encodeURIComponent(String(object)));
        }
        if (id !== undefined) {
            queryParameters.push('id='+encodeURIComponent(String(id)));
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<any>> = this.httpClient.get(`${this.APIConfiguration.basePath}/mappings/sportal/reverse?${queryParameters.join('&')}` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }

}
