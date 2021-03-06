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

import { exists } from '../runtime';
import {
    LegacyProvisioningOrganizationItem,
    LegacyProvisioningOrganizationItemFromJSON,
    LegacyProvisioningOrganizationItemToJSON,
} from './';

/**
 * 
 * @export
 * @interface LegacyProvisioningGetOrganizationListResponse
 */
export interface LegacyProvisioningGetOrganizationListResponse {
    /**
     * Status of the request that has been made. Can be 'ok' or 'fail'
     * @type {string}
     * @memberof LegacyProvisioningGetOrganizationListResponse
     */
    stat?: string;
    /**
     * If the request has failed, this element will contain the error code related to the problem encountered.
     * @type {string}
     * @memberof LegacyProvisioningGetOrganizationListResponse
     */
    errorCode?: string;
    /**
     * If the request has failed, this element will contain the error message related to the problem encountered.
     * @type {string}
     * @memberof LegacyProvisioningGetOrganizationListResponse
     */
    errorMsg?: string;
    /**
     * List of organization
     * @type {Array<LegacyProvisioningOrganizationItem>}
     * @memberof LegacyProvisioningGetOrganizationListResponse
     */
    organizations: Array<LegacyProvisioningOrganizationItem>;
}

export function LegacyProvisioningGetOrganizationListResponseFromJSON(json: any): LegacyProvisioningGetOrganizationListResponse {
    return LegacyProvisioningGetOrganizationListResponseFromJSONTyped(json, false);
}

export function LegacyProvisioningGetOrganizationListResponseFromJSONTyped(json: any, _ignoreDiscriminator: boolean): LegacyProvisioningGetOrganizationListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stat': !exists(json, 'stat') ? undefined : json['stat'],
        'errorCode': !exists(json, 'error_code') ? undefined : json['error_code'],
        'errorMsg': !exists(json, 'error_msg') ? undefined : json['error_msg'],
        'organizations': ((json['organizations'] as Array<any>).map(LegacyProvisioningOrganizationItemFromJSON)),
    };
}

export function LegacyProvisioningGetOrganizationListResponseToJSON(value?: LegacyProvisioningGetOrganizationListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stat': value.stat,
        'error_code': value.errorCode,
        'error_msg': value.errorMsg,
        'organizations': ((value.organizations as Array<any>).map(LegacyProvisioningOrganizationItemToJSON)),
    };
}


