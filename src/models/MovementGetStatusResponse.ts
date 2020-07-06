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
 * @interface MovementGetStatusResponse
 */
export interface MovementGetStatusResponse {
    /**
     * 
     * @type {string}
     * @memberof MovementGetStatusResponse
     */
    status: string;
}

export function MovementGetStatusResponseFromJSON(json: any): MovementGetStatusResponse {
    return MovementGetStatusResponseFromJSONTyped(json, false);
}

export function MovementGetStatusResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovementGetStatusResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': json['status'],
    };
}

export function MovementGetStatusResponseToJSON(value?: MovementGetStatusResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
    };
}

