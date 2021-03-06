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
 * @interface AdminCredentialResponse
 */
export interface AdminCredentialResponse {
    /**
     * 
     * @type {number}
     * @memberof AdminCredentialResponse
     */
    gatewayId: number;
    /**
     * 
     * @type {string}
     * @memberof AdminCredentialResponse
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AdminCredentialResponse
     */
    defaultLang: string;
}

export function AdminCredentialResponseFromJSON(json: any): AdminCredentialResponse {
    return AdminCredentialResponseFromJSONTyped(json, false);
}

export function AdminCredentialResponseFromJSONTyped(json: any, _ignoreDiscriminator: boolean): AdminCredentialResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gatewayId': json['gatewayId'],
        'name': json['name'],
        'defaultLang': json['defaultLang'],
    };
}

export function AdminCredentialResponseToJSON(value?: AdminCredentialResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gatewayId': value.gatewayId,
        'name': value.name,
        'defaultLang': value.defaultLang,
    };
}


