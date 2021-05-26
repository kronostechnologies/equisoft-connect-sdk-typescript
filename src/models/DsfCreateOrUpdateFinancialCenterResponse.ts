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

/**
 * 
 * @export
 * @interface DsfCreateOrUpdateFinancialCenterResponse
 */
export interface DsfCreateOrUpdateFinancialCenterResponse {
    /**
     * Unique numerical identifier of the created financial center.
     * @type {number}
     * @memberof DsfCreateOrUpdateFinancialCenterResponse
     */
    id: number;
}

export function DsfCreateOrUpdateFinancialCenterResponseFromJSON(json: any): DsfCreateOrUpdateFinancialCenterResponse {
    return DsfCreateOrUpdateFinancialCenterResponseFromJSONTyped(json, false);
}

export function DsfCreateOrUpdateFinancialCenterResponseFromJSONTyped(json: any, _ignoreDiscriminator: boolean): DsfCreateOrUpdateFinancialCenterResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
    };
}

export function DsfCreateOrUpdateFinancialCenterResponseToJSON(value?: DsfCreateOrUpdateFinancialCenterResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
    };
}


