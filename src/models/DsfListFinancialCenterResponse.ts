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

import {
    DsfFinancialCenter,
    DsfFinancialCenterFromJSON,
    DsfFinancialCenterToJSON,
} from './';

/**
 * 
 * @export
 * @interface DsfListFinancialCenterResponse
 */
export interface DsfListFinancialCenterResponse {
    /**
     * 
     * @type {Array<DsfFinancialCenter>}
     * @memberof DsfListFinancialCenterResponse
     */
    items: Array<DsfFinancialCenter>;
}

export function DsfListFinancialCenterResponseFromJSON(json: any): DsfListFinancialCenterResponse {
    return DsfListFinancialCenterResponseFromJSONTyped(json, false);
}

export function DsfListFinancialCenterResponseFromJSONTyped(json: any, _ignoreDiscriminator: boolean): DsfListFinancialCenterResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(DsfFinancialCenterFromJSON)),
    };
}

export function DsfListFinancialCenterResponseToJSON(value?: DsfListFinancialCenterResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': ((value.items as Array<any>).map(DsfFinancialCenterToJSON)),
    };
}


