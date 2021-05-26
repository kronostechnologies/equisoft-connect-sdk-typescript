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
    ContextEquisoftConnectUser,
    ContextEquisoftConnectUserFromJSON,
    ContextEquisoftConnectUserToJSON,
    ContextInstance,
    ContextInstanceFromJSON,
    ContextInstanceToJSON,
    ContextPreferences,
    ContextPreferencesFromJSON,
    ContextPreferencesToJSON,
} from './';

/**
 * 
 * @export
 * @interface ContextEquisoftConnect
 */
export interface ContextEquisoftConnect {
    /**
     * $profile
     * @type {string}
     * @memberof ContextEquisoftConnect
     */
    profile: string;
    /**
     * $appVersion
     * @type {string}
     * @memberof ContextEquisoftConnect
     */
    appVersion: string;
    /**
     * 
     * @type {ContextInstance}
     * @memberof ContextEquisoftConnect
     */
    instance: ContextInstance;
    /**
     * 
     * @type {ContextEquisoftConnectUser}
     * @memberof ContextEquisoftConnect
     */
    user: ContextEquisoftConnectUser;
    /**
     * 
     * @type {ContextPreferences}
     * @memberof ContextEquisoftConnect
     */
    preferences: ContextPreferences;
}

export function ContextEquisoftConnectFromJSON(json: any): ContextEquisoftConnect {
    return ContextEquisoftConnectFromJSONTyped(json, false);
}

export function ContextEquisoftConnectFromJSONTyped(json: any, _ignoreDiscriminator: boolean): ContextEquisoftConnect {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'profile': json['profile'],
        'appVersion': json['appVersion'],
        'instance': ContextInstanceFromJSON(json['instance']),
        'user': ContextEquisoftConnectUserFromJSON(json['user']),
        'preferences': ContextPreferencesFromJSON(json['preferences']),
    };
}

export function ContextEquisoftConnectToJSON(value?: ContextEquisoftConnect | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'profile': value.profile,
        'appVersion': value.appVersion,
        'instance': ContextInstanceToJSON(value.instance),
        'user': ContextEquisoftConnectUserToJSON(value.user),
        'preferences': ContextPreferencesToJSON(value.preferences),
    };
}


