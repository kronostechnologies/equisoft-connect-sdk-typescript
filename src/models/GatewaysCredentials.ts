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
/**
 * 
 * @export
 * @interface GatewaysCredentials
 */
export interface GatewaysCredentials {
    /**
     * 
     * @type {string}
     * @memberof GatewaysCredentials
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof GatewaysCredentials
     */
    password: string;
}

export function GatewaysCredentialsFromJSON(json: any): GatewaysCredentials {
    return GatewaysCredentialsFromJSONTyped(json, false);
}

export function GatewaysCredentialsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GatewaysCredentials {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'username': json['username'],
        'password': json['password'],
    };
}

export function GatewaysCredentialsToJSON(value?: GatewaysCredentials | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'password': value.password,
    };
}

