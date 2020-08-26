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
 * @interface FieldValue
 */
export interface FieldValue {
    /**
     * Unique numerical identifier of the field value.
     * @type {number}
     * @memberof FieldValue
     */
    id: number;
    /**
     * Value label in the current language.
     * @type {string}
     * @memberof FieldValue
     */
    label: string;
}

export function FieldValueFromJSON(json: any): FieldValue {
    return FieldValueFromJSONTyped(json, false);
}

export function FieldValueFromJSONTyped(json: any, _ignoreDiscriminator: boolean): FieldValue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'label': json['label'],
    };
}

export function FieldValueToJSON(value?: FieldValue | null): any {
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


