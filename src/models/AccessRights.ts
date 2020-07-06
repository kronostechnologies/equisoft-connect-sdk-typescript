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
 * @interface AccessRights
 */
export interface AccessRights {
    /**
     * User can perform modifications request on the record.
     * @type {boolean}
     * @memberof AccessRights
     */
    write: boolean;
    /**
     * User can delete the record.
     * @type {boolean}
     * @memberof AccessRights
     */
    _delete: boolean;
}

export function AccessRightsFromJSON(json: any): AccessRights {
    return AccessRightsFromJSONTyped(json, false);
}

export function AccessRightsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccessRights {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'write': json['write'],
        '_delete': json['delete'],
    };
}

export function AccessRightsToJSON(value?: AccessRights | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'write': value.write,
        'delete': value._delete,
    };
}

