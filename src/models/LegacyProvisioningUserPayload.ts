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
    LegacyContactAddress,
    LegacyProvisioningUserIdentifier,
} from './';

/**
 * 
 * @export
 * @interface LegacyProvisioningUserPayload
 */
export interface LegacyProvisioningUserPayload {
    /**
     * First name
     * @type {string}
     * @memberof LegacyProvisioningUserPayload
     */
    firstName?: string;
    /**
     * Last name
     * @type {string}
     * @memberof LegacyProvisioningUserPayload
     */
    lastName?: string;
    /**
     * Email address used for login
     * @type {string}
     * @memberof LegacyProvisioningUserPayload
     */
    email?: string;
    /**
     * User language.
     * Organisation default lang will be used if not provided.
     * Accepts FR or EN.
     * @type {string}
     * @memberof LegacyProvisioningUserPayload
     */
    lang?: string;
    /**
     * User role.
     * Accepts USER or ADMIN
     * @type {string}
     * @memberof LegacyProvisioningUserPayload
     */
    role?: string;
    /**
     * Number of allowed concurrent accesses with this user.
     * Default 1.
     * @type {number}
     * @memberof LegacyProvisioningUserPayload
     */
    concurrentAccess?: number;
    /**
     * User initial password.
     * A random password will be set if none is specified and noPassword option is not used.
     * @type {string}
     * @memberof LegacyProvisioningUserPayload
     */
    password?: string;
    /**
     * Disable password authentication.
     * Accepts true or false.
     * Default false
     * @type {string}
     * @memberof LegacyProvisioningUserPayload
     */
    noPassword?: string;
    /**
     * The user will be ask to define a new password on the first login
     * Accepts true or false.
     * Default true
     * @type {string}
     * @memberof LegacyProvisioningUserPayload
     */
    requirePasswordChange?: string;
    /**
     * Enable Mobile version.
     * Deprecated: the mobile is not enabled per user anymore.
     * Accepts true or false.
     * Default false
     * @type {string}
     * @memberof LegacyProvisioningUserPayload
     */
    enableMobile?: string;
    /**
     * List of identifier to uniquely identify the user.
     * @type {Array<LegacyProvisioningUserIdentifier>}
     * @memberof LegacyProvisioningUserPayload
     */
    externalIdentifiers?: Array<LegacyProvisioningUserIdentifier>;
    /**
     * Allow the user to delegate access to his data
     * Accepts true or false.
     * Default false
     * @type {string}
     * @memberof LegacyProvisioningUserPayload
     */
    allowDelegation?: string;
    /**
     * Gender of this user.
     * Accepts M or F.
     * @type {string}
     * @memberof LegacyProvisioningUserPayload
     */
    gender?: string;
    /**
     * Work phone number of this user
     * @type {string}
     * @memberof LegacyProvisioningUserPayload
     */
    phoneWork?: string;
    /**
     * Extension of work phone number of this user.
     * @type {string}
     * @memberof LegacyProvisioningUserPayload
     */
    phoneWorkExtension?: string;
    /**
     * Home phone number of this user.
     * @type {string}
     * @memberof LegacyProvisioningUserPayload
     */
    phoneHome?: string;
    /**
     * Cellphone number of this user.
     * @type {string}
     * @memberof LegacyProvisioningUserPayload
     */
    phoneCell?: string;
    /**
     * Fax phone number of this user.
     * @type {string}
     * @memberof LegacyProvisioningUserPayload
     */
    phoneFax?: string;
    /**
     * The phone type to be the main phone number.
     * Accepts fax, cell, home, work.
     * Default work
     * @type {string}
     * @memberof LegacyProvisioningUserPayload
     */
    phoneMain?: string;
    /**
     * Address of this user.
     * @type {Array<LegacyContactAddress>}
     * @memberof LegacyProvisioningUserPayload
     */
    address?: Array<LegacyContactAddress>;
    /**
     * Accepts true or false.
     * Default false
     * @type {string}
     * @memberof LegacyProvisioningUserPayload
     */
    noFNA?: string;
}

export function LegacyProvisioningUserPayloadFromJSON(json: any): LegacyProvisioningUserPayload {
    return LegacyProvisioningUserPayloadFromJSONTyped(json, false);
}

export function LegacyProvisioningUserPayloadFromJSONTyped(json: any, _ignoreDiscriminator: boolean): LegacyProvisioningUserPayload {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'lang': !exists(json, 'lang') ? undefined : json['lang'],
        'role': !exists(json, 'role') ? undefined : json['role'],
        'concurrentAccess': !exists(json, 'concurrentAccess') ? undefined : json['concurrentAccess'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'noPassword': !exists(json, 'noPassword') ? undefined : json['noPassword'],
        'requirePasswordChange': !exists(json, 'requirePasswordChange') ? undefined : json['requirePasswordChange'],
        'enableMobile': !exists(json, 'enableMobile') ? undefined : json['enableMobile'],
        'externalIdentifiers': !exists(json, 'externalIdentifiers') ? undefined : Array&lt;LegacyProvisioningUserIdentifier&gt;FromJSON(json['externalIdentifiers']),
        'allowDelegation': !exists(json, 'allowDelegation') ? undefined : json['allowDelegation'],
        'gender': !exists(json, 'gender') ? undefined : json['gender'],
        'phoneWork': !exists(json, 'phoneWork') ? undefined : json['phoneWork'],
        'phoneWorkExtension': !exists(json, 'phoneWorkExtension') ? undefined : json['phoneWorkExtension'],
        'phoneHome': !exists(json, 'phoneHome') ? undefined : json['phoneHome'],
        'phoneCell': !exists(json, 'phoneCell') ? undefined : json['phoneCell'],
        'phoneFax': !exists(json, 'phoneFax') ? undefined : json['phoneFax'],
        'phoneMain': !exists(json, 'phoneMain') ? undefined : json['phoneMain'],
        'address': !exists(json, 'address') ? undefined : Array&lt;LegacyContactAddress&gt;FromJSON(json['address']),
        'noFNA': !exists(json, 'noFNA') ? undefined : json['noFNA'],
    };
}

export function LegacyProvisioningUserPayloadToJSON(value?: LegacyProvisioningUserPayload | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'firstName': value.firstName,
        'lastName': value.lastName,
        'email': value.email,
        'lang': value.lang,
        'role': value.role,
        'concurrentAccess': value.concurrentAccess,
        'password': value.password,
        'noPassword': value.noPassword,
        'requirePasswordChange': value.requirePasswordChange,
        'enableMobile': value.enableMobile,
        'externalIdentifiers': Array&lt;LegacyProvisioningUserIdentifier&gt;ToJSON(value.externalIdentifiers),
        'allowDelegation': value.allowDelegation,
        'gender': value.gender,
        'phoneWork': value.phoneWork,
        'phoneWorkExtension': value.phoneWorkExtension,
        'phoneHome': value.phoneHome,
        'phoneCell': value.phoneCell,
        'phoneFax': value.phoneFax,
        'phoneMain': value.phoneMain,
        'address': Array&lt;LegacyContactAddress&gt;ToJSON(value.address),
        'noFNA': value.noFNA,
    };
}


