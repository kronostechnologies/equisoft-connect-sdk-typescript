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
 * @interface MovementDistributionList
 */
export interface MovementDistributionList {
    /**
     * 
     * @type {number}
     * @memberof MovementDistributionList
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof MovementDistributionList
     */
    label?: string;
}

export function MovementDistributionListFromJSON(json: any): MovementDistributionList {
    return MovementDistributionListFromJSONTyped(json, false);
}

export function MovementDistributionListFromJSONTyped(json: any, ignoreDiscriminator: boolean): MovementDistributionList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'label': !exists(json, 'label') ? undefined : json['label'],
    };
}

export function MovementDistributionListToJSON(value?: MovementDistributionList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'label': value.label,
    };
}

