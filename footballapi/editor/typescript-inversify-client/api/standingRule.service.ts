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

import { StandingRule } from '../model/standingRule';

import { COLLECTION_FORMATS }  from '../variables';



@injectable()
export class StandingRuleService {
    @inject('IAPIConfiguration') private APIConfiguration: IAPIConfiguration;
    @inject('IApiHttpClient') private httpClient: IHttpClient;



    /**
     * 
     * Get a list of available StandingRule objects in the system
     * @param acceptLanguage List of acceptable human languages for response. https://en.wikipedia.org/wiki/Content_negotiation
     
     */
    public standingRulesGet(acceptLanguage?: string, observe?: 'body', headers?: Headers): Observable<StandingRule>;
    public standingRulesGet(acceptLanguage?: string, observe?: 'response', headers?: Headers): Observable<HttpResponse<StandingRule>>;
    public standingRulesGet(acceptLanguage?: string, observe: any = 'body', headers: Headers = {}): Observable<any> {
        if (acceptLanguage) {
            headers['Accept-Language'] = String(acceptLanguage);
        }

        // authentication (basicAuth) required
        if (this.APIConfiguration.username || this.APIConfiguration.password) {
            headers['Authorization'] = btoa(this.APIConfiguration.username + ':' + this.APIConfiguration.password);
        }
        headers['Accept'] = 'application/json; charset=utf-8';

        const response: Observable<HttpResponse<StandingRule>> = this.httpClient.get(`${this.APIConfiguration.basePath}/standing_rules` as any, headers);
        if (observe === 'body') {
               return response.map(httpResponse => httpResponse.response);
        }
        return response;
    }

}
