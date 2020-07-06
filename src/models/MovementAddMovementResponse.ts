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
 * @interface MovementAddMovementResponse
 */
export interface MovementAddMovementResponse {
    /**
     * Unique numerical identifier of the created movement.
     * @type {number}
     * @memberof MovementAddMovementResponse
     */
    id?: number;
}

export function MovementAddMovementResponseFromJSON(json: any): MovementAddMovementResponse {
    return MovementAddMovementResponseFromJSONTyped(json, false);
}

export function MovementAddMovementResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovementAddMovementResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
    };
}

export function MovementAddMovementResponseToJSON(value?: MovementAddMovementResponse | null): any {
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


