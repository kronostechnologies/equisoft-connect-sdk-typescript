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
    ContextActor,
    ContextActorFromJSON,
    ContextActorToJSON,
    ContextEquisoftConnect,
    ContextEquisoftConnectFromJSON,
    ContextEquisoftConnectToJSON,
    ContextUser,
    ContextUserFromJSON,
    ContextUserToJSON,
} from './';

/**
 * 
 * @export
 * @interface ContextUserContext
 */
export interface ContextUserContext {
    /**
     * site name
     * @type {string}
     * @memberof ContextUserContext
     */
    site: string;
    /**
     * environment name
     * @type {string}
     * @memberof ContextUserContext
     */
    environment: string;
    /**
     * 
     * @type {ContextUser}
     * @memberof ContextUserContext
     */
    user: ContextUser;
    /**
     * 
     * @type {ContextActor}
     * @memberof ContextUserContext
     */
    actor?: ContextActor;
    /**
     * 
     * @type {ContextEquisoftConnect}
     * @memberof ContextUserContext
     */
    equisoftConnect: ContextEquisoftConnect;
}

export function ContextUserContextFromJSON(json: any): ContextUserContext {
    return ContextUserContextFromJSONTyped(json, false);
}

export function ContextUserContextFromJSONTyped(json: any, _ignoreDiscriminator: boolean): ContextUserContext {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'site': json['site'],
        'environment': json['environment'],
        'user': ContextUserFromJSON(json['user']),
        'actor': !exists(json, 'actor') ? undefined : ContextActorFromJSON(json['actor']),
        'equisoftConnect': ContextEquisoftConnectFromJSON(json['equisoftConnect']),
    };
}

export function ContextUserContextToJSON(value?: ContextUserContext | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'site': value.site,
        'environment': value.environment,
        'user': ContextUserToJSON(value.user),
        'actor': ContextActorToJSON(value.actor),
        'equisoftConnect': ContextEquisoftConnectToJSON(value.equisoftConnect),
    };
}

