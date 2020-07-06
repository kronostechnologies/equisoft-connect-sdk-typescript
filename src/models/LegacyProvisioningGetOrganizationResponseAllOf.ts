/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import {
    LegacyProvisioningOrganizationItem,
    LegacyProvisioningOrganizationItemFromJSON,
    LegacyProvisioningOrganizationItemFromJSONTyped,
    LegacyProvisioningOrganizationItemToJSON,
} from './';

/**
 * 
 * @export
 * @interface LegacyProvisioningGetOrganizationResponseAllOf
 */
export interface LegacyProvisioningGetOrganizationResponseAllOf {
    /**
     * 
     * @type {LegacyProvisioningOrganizationItem}
     * @memberof LegacyProvisioningGetOrganizationResponseAllOf
     */
    organization: LegacyProvisioningOrganizationItem;
}

export function LegacyProvisioningGetOrganizationResponseAllOfFromJSON(json: any): LegacyProvisioningGetOrganizationResponseAllOf {
    return LegacyProvisioningGetOrganizationResponseAllOfFromJSONTyped(json, false);
}

export function LegacyProvisioningGetOrganizationResponseAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): LegacyProvisioningGetOrganizationResponseAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'organization': LegacyProvisioningOrganizationItemFromJSON(json['organization']),
    };
}

export function LegacyProvisioningGetOrganizationResponseAllOfToJSON(value?: LegacyProvisioningGetOrganizationResponseAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'organization': LegacyProvisioningOrganizationItemToJSON(value.organization),
    };
}


