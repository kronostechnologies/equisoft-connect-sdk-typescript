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
/**
 * 
 * @export
 * @interface GatewaysCredentialsWithSsnAllOf
 */
export interface GatewaysCredentialsWithSsnAllOf {
    /**
     * The list will contain formatted SSNs, i.e. "123 456 789"
     * @type {Array<string>}
     * @memberof GatewaysCredentialsWithSsnAllOf
     */
    ssnList?: Array<string>;
}

export function GatewaysCredentialsWithSsnAllOfFromJSON(json: any): GatewaysCredentialsWithSsnAllOf {
    return GatewaysCredentialsWithSsnAllOfFromJSONTyped(json, false);
}

export function GatewaysCredentialsWithSsnAllOfFromJSONTyped(json: any, _ignoreDiscriminator: boolean): GatewaysCredentialsWithSsnAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ssnList': !exists(json, 'ssnList') ? undefined : json['ssnList'],
    };
}

export function GatewaysCredentialsWithSsnAllOfToJSON(value?: GatewaysCredentialsWithSsnAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ssnList': value.ssnList,
    };
}


