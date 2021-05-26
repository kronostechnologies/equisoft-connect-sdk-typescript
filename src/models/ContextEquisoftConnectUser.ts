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
 * @interface ContextEquisoftConnectUser
 */
export interface ContextEquisoftConnectUser {
    /**
     * $id
     * @type {number}
     * @memberof ContextEquisoftConnectUser
     */
    id: number;
}

export function ContextEquisoftConnectUserFromJSON(json: any): ContextEquisoftConnectUser {
    return ContextEquisoftConnectUserFromJSONTyped(json, false);
}

export function ContextEquisoftConnectUserFromJSONTyped(json: any, _ignoreDiscriminator: boolean): ContextEquisoftConnectUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
    };
}

export function ContextEquisoftConnectUserToJSON(value?: ContextEquisoftConnectUser | null): any {
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


