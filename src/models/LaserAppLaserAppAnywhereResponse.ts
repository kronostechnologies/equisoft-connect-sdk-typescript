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
 * @interface LaserAppLaserAppAnywhereResponse
 */
export interface LaserAppLaserAppAnywhereResponse {
    /**
     * $redirectUrl
     * @type {string}
     * @memberof LaserAppLaserAppAnywhereResponse
     */
    redirectUrl: string;
}

export function LaserAppLaserAppAnywhereResponseFromJSON(json: any): LaserAppLaserAppAnywhereResponse {
    return LaserAppLaserAppAnywhereResponseFromJSONTyped(json, false);
}

export function LaserAppLaserAppAnywhereResponseFromJSONTyped(json: any, _ignoreDiscriminator: boolean): LaserAppLaserAppAnywhereResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'redirectUrl': json['redirectUrl'],
    };
}

export function LaserAppLaserAppAnywhereResponseToJSON(value?: LaserAppLaserAppAnywhereResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'redirectUrl': value.redirectUrl,
    };
}


