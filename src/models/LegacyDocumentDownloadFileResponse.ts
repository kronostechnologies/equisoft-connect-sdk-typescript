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
    LegacyDocumentBase64FilePayloadItem,
    LegacyDocumentBase64FilePayloadItemFromJSON,
    LegacyDocumentBase64FilePayloadItemToJSON,
} from './';

/**
 * 
 * @export
 * @interface LegacyDocumentDownloadFileResponse
 */
export interface LegacyDocumentDownloadFileResponse {
    /**
     * Status of the request that has been made. Can be 'ok' or 'fail'
     * @type {string}
     * @memberof LegacyDocumentDownloadFileResponse
     */
    stat?: string;
    /**
     * If the request has failed, this element will contain the error code related to the problem encountered.
     * @type {string}
     * @memberof LegacyDocumentDownloadFileResponse
     */
    errorCode?: string;
    /**
     * If the request has failed, this element will contain the error message related to the problem encountered.
     * @type {string}
     * @memberof LegacyDocumentDownloadFileResponse
     */
    errorMsg?: string;
    /**
     * Array of documents
     * @type {Array<LegacyDocumentBase64FilePayloadItem>}
     * @memberof LegacyDocumentDownloadFileResponse
     */
    files: Array<LegacyDocumentBase64FilePayloadItem>;
}

export function LegacyDocumentDownloadFileResponseFromJSON(json: any): LegacyDocumentDownloadFileResponse {
    return LegacyDocumentDownloadFileResponseFromJSONTyped(json, false);
}

export function LegacyDocumentDownloadFileResponseFromJSONTyped(json: any, _ignoreDiscriminator: boolean): LegacyDocumentDownloadFileResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stat': !exists(json, 'stat') ? undefined : json['stat'],
        'errorCode': !exists(json, 'error_code') ? undefined : json['error_code'],
        'errorMsg': !exists(json, 'error_msg') ? undefined : json['error_msg'],
        'files': ((json['files'] as Array<any>).map(LegacyDocumentBase64FilePayloadItemFromJSON)),
    };
}

export function LegacyDocumentDownloadFileResponseToJSON(value?: LegacyDocumentDownloadFileResponse | null): any {
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
        'files': ((value.files as Array<any>).map(LegacyDocumentBase64FilePayloadItemToJSON)),
    };
}


