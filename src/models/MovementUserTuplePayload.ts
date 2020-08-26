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
 * @interface MovementUserTuplePayload
 */
export interface MovementUserTuplePayload {
    /**
     * 
     * @type {number}
     * @memberof MovementUserTuplePayload
     */
    from: number;
    /**
     * 
     * @type {number}
     * @memberof MovementUserTuplePayload
     */
    to: number;
}

export function MovementUserTuplePayloadFromJSON(json: any): MovementUserTuplePayload {
    return MovementUserTuplePayloadFromJSONTyped(json, false);
}

export function MovementUserTuplePayloadFromJSONTyped(json: any, _ignoreDiscriminator: boolean): MovementUserTuplePayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'from': json['from'],
        'to': json['to'],
    };
}

export function MovementUserTuplePayloadToJSON(value?: MovementUserTuplePayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'from': value.from,
        'to': value.to,
    };
}


