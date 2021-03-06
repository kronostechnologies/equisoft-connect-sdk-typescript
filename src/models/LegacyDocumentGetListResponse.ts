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
import {
    LegacyDocumentDocumentListItem,
    LegacyDocumentDocumentListItemFromJSON,
    LegacyDocumentDocumentListItemToJSON,
} from './';

/**
 * 
 * @export
 * @interface LegacyDocumentGetListResponse
 */
export interface LegacyDocumentGetListResponse {
    /**
     * Status of the request that has been made. Can be 'ok' or 'fail'
     * @type {string}
     * @memberof LegacyDocumentGetListResponse
     */
    stat?: string;
    /**
     * If the request has failed, this element will contain the error code related to the problem encountered.
     * @type {string}
     * @memberof LegacyDocumentGetListResponse
     */
    errorCode?: string;
    /**
     * If the request has failed, this element will contain the error message related to the problem encountered.
     * @type {string}
     * @memberof LegacyDocumentGetListResponse
     */
    errorMsg?: string;
    /**
     * Array of documents
     * @type {Array<LegacyDocumentDocumentListItem>}
     * @memberof LegacyDocumentGetListResponse
     */
    documents: Array<LegacyDocumentDocumentListItem>;
}

export function LegacyDocumentGetListResponseFromJSON(json: any): LegacyDocumentGetListResponse {
    return LegacyDocumentGetListResponseFromJSONTyped(json, false);
}

export function LegacyDocumentGetListResponseFromJSONTyped(json: any, _ignoreDiscriminator: boolean): LegacyDocumentGetListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stat': !exists(json, 'stat') ? undefined : json['stat'],
        'errorCode': !exists(json, 'error_code') ? undefined : json['error_code'],
        'errorMsg': !exists(json, 'error_msg') ? undefined : json['error_msg'],
        'documents': ((json['documents'] as Array<any>).map(LegacyDocumentDocumentListItemFromJSON)),
    };
}

export function LegacyDocumentGetListResponseToJSON(value?: LegacyDocumentGetListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stat': value.stat,
        'error_code': value.errorCode,
        'error_msg': value.errorMsg,
        'documents': ((value.documents as Array<any>).map(LegacyDocumentDocumentListItemToJSON)),
    };
}


