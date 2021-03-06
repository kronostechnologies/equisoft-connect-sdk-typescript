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
 * @interface ContextUser
 */
export interface ContextUser {
    /**
     * environment name
     * @type {string}
     * @memberof ContextUser
     */
    uuid: string;
    /**
     * environment name
     * @type {string}
     * @memberof ContextUser
     */
    displayName: string;
    /**
     * environment name
     * @type {string}
     * @memberof ContextUser
     */
    email: string;
}

export function ContextUserFromJSON(json: any): ContextUser {
    return ContextUserFromJSONTyped(json, false);
}

export function ContextUserFromJSONTyped(json: any, _ignoreDiscriminator: boolean): ContextUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': json['uuid'],
        'displayName': json['displayName'],
        'email': json['email'],
    };
}

export function ContextUserToJSON(value?: ContextUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'displayName': value.displayName,
        'email': value.email,
    };
}


