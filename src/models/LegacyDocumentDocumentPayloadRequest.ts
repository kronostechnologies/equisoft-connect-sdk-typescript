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

import {
    LegacyDocumentDocumentPayload,
    LegacyDocumentDocumentPayloadFromJSON,
    LegacyDocumentDocumentPayloadToJSON,
} from './';

/**
 * Wrapper for Legacy payload argument
 * @export
 * @interface LegacyDocumentDocumentPayloadRequest
 */
export interface LegacyDocumentDocumentPayloadRequest {
    /**
     * 
     * @type {LegacyDocumentDocumentPayload}
     * @memberof LegacyDocumentDocumentPayloadRequest
     */
    payload: LegacyDocumentDocumentPayload;
}

export function LegacyDocumentDocumentPayloadRequestFromJSON(json: any): LegacyDocumentDocumentPayloadRequest {
    return LegacyDocumentDocumentPayloadRequestFromJSONTyped(json, false);
}

export function LegacyDocumentDocumentPayloadRequestFromJSONTyped(json: any, _ignoreDiscriminator: boolean): LegacyDocumentDocumentPayloadRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'payload': LegacyDocumentDocumentPayloadFromJSON(json['payload']),
    };
}

export function LegacyDocumentDocumentPayloadRequestToJSON(value?: LegacyDocumentDocumentPayloadRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'payload': LegacyDocumentDocumentPayloadToJSON(value.payload),
    };
}


