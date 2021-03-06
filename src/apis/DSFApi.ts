/**
 * Equisoft /connect API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    DsfCreateOrUpdateFinancialCenterResponse,
    DsfCreateOrUpdateFinancialCenterResponseFromJSON,
    DsfFinancialCenterPayload,
    DsfFinancialCenterPayloadToJSON,
    DsfListFinancialCenterResponse,
    DsfListFinancialCenterResponseFromJSON,
} from '../models';

export interface CreateDsfFinancialCenterRequest {
    dsfFinancialCenterPayload: DsfFinancialCenterPayload;
}

export interface DeleteDsfFinancialCenterRequest {
    financialCenterId: number;
}

export interface UpdateDsfFinancialCenterRequest {
    financialCenterId: number;
    dsfFinancialCenterPayload: DsfFinancialCenterPayload;
}

/**
 * 
 */
export class DSFApi extends runtime.BaseAPI {

    /**
     */
    async createDsfFinancialCenterRaw(requestParameters: CreateDsfFinancialCenterRequest): Promise<runtime.ApiResponse<DsfCreateOrUpdateFinancialCenterResponse>> {
        if (requestParameters.dsfFinancialCenterPayload === null || requestParameters.dsfFinancialCenterPayload === undefined) {
            throw new runtime.RequiredError('dsfFinancialCenterPayload','Required parameter requestParameters.dsfFinancialCenterPayload was null or undefined when calling createDsfFinancialCenter.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["crm:database"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/crm/api/v1/dsf/financialCenters`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DsfFinancialCenterPayloadToJSON(requestParameters.dsfFinancialCenterPayload),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DsfCreateOrUpdateFinancialCenterResponseFromJSON(jsonValue));
    }

    /**
     */
    async createDsfFinancialCenter(requestParameters: CreateDsfFinancialCenterRequest): Promise<DsfCreateOrUpdateFinancialCenterResponse> {
        const response = await this.createDsfFinancialCenterRaw(requestParameters);
        return await response.value();
    }

    /**
     */
    async deleteDsfFinancialCenterRaw(requestParameters: DeleteDsfFinancialCenterRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.financialCenterId === null || requestParameters.financialCenterId === undefined) {
            throw new runtime.RequiredError('financialCenterId','Required parameter requestParameters.financialCenterId was null or undefined when calling deleteDsfFinancialCenter.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["crm:database"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/crm/api/v1/dsf/financialCenters/{financialCenterId}`.replace(`{${"financialCenterId"}}`, encodeURIComponent(String(requestParameters.financialCenterId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async deleteDsfFinancialCenter(requestParameters: DeleteDsfFinancialCenterRequest): Promise<void> {
        await this.deleteDsfFinancialCenterRaw(requestParameters);
    }

    /**
     */
    async listDsfFinancialCentersRaw(): Promise<runtime.ApiResponse<DsfListFinancialCenterResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["crm:database"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/crm/api/v1/dsf/financialCenters`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DsfListFinancialCenterResponseFromJSON(jsonValue));
    }

    /**
     */
    async listDsfFinancialCenters(): Promise<DsfListFinancialCenterResponse> {
        const response = await this.listDsfFinancialCentersRaw();
        return await response.value();
    }

    /**
     */
    async updateDsfFinancialCenterRaw(requestParameters: UpdateDsfFinancialCenterRequest): Promise<runtime.ApiResponse<DsfCreateOrUpdateFinancialCenterResponse>> {
        if (requestParameters.financialCenterId === null || requestParameters.financialCenterId === undefined) {
            throw new runtime.RequiredError('financialCenterId','Required parameter requestParameters.financialCenterId was null or undefined when calling updateDsfFinancialCenter.');
        }

        if (requestParameters.dsfFinancialCenterPayload === null || requestParameters.dsfFinancialCenterPayload === undefined) {
            throw new runtime.RequiredError('dsfFinancialCenterPayload','Required parameter requestParameters.dsfFinancialCenterPayload was null or undefined when calling updateDsfFinancialCenter.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["crm:database"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/crm/api/v1/dsf/financialCenters/{financialCenterId}`.replace(`{${"financialCenterId"}}`, encodeURIComponent(String(requestParameters.financialCenterId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: DsfFinancialCenterPayloadToJSON(requestParameters.dsfFinancialCenterPayload),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => DsfCreateOrUpdateFinancialCenterResponseFromJSON(jsonValue));
    }

    /**
     */
    async updateDsfFinancialCenter(requestParameters: UpdateDsfFinancialCenterRequest): Promise<DsfCreateOrUpdateFinancialCenterResponse> {
        const response = await this.updateDsfFinancialCenterRaw(requestParameters);
        return await response.value();
    }

}
