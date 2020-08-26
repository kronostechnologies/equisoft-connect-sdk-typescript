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
 * @interface GatewaysAccessesUser
 */
export interface GatewaysAccessesUser {
    /**
     * 
     * @type {number}
     * @memberof GatewaysAccessesUser
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof GatewaysAccessesUser
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof GatewaysAccessesUser
     */
    displayName: string;
}

export function GatewaysAccessesUserFromJSON(json: any): GatewaysAccessesUser {
    return GatewaysAccessesUserFromJSONTyped(json, false);
}

export function GatewaysAccessesUserFromJSONTyped(json: any, _ignoreDiscriminator: boolean): GatewaysAccessesUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'uuid': json['uuid'],
        'displayName': json['displayName'],
    };
}

export function GatewaysAccessesUserToJSON(value?: GatewaysAccessesUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'uuid': value.uuid,
        'displayName': value.displayName,
    };
}


