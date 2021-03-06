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
    LegacyContactAddressFromJSON,
    LegacyContactAddressToJSON,
    LegacyProvisioningGroupItem,
    LegacyProvisioningGroupItemFromJSON,
    LegacyProvisioningGroupItemToJSON,
    LegacyProvisioningUserIdentifier,
    LegacyProvisioningUserIdentifierFromJSON,
    LegacyProvisioningUserIdentifierToJSON,
} from './';

/**
 * 
 * @export
 * @interface LegacyProvisioningUserItem
 */
export interface LegacyProvisioningUserItem {
    /**
     * User organization id
     * @type {string}
     * @memberof LegacyProvisioningUserItem
     */
    orgId?: string;
    /**
     * User globaly unique identifier
     * @type {string}
     * @memberof LegacyProvisioningUserItem
     */
    uuid?: string;
    /**
     * User unique identifier
     * @type {string}
     * @memberof LegacyProvisioningUserItem
     */
    userId?: string;
    /**
     * User display name
     * @type {string}
     * @memberof LegacyProvisioningUserItem
     */
    displayName?: string;
    /**
     * First name
     * @type {string}
     * @memberof LegacyProvisioningUserItem
     */
    firstName?: string;
    /**
     * Last name
     * @type {string}
     * @memberof LegacyProvisioningUserItem
     */
    lastName?: string;
    /**
     * Initials
     * @type {string}
     * @memberof LegacyProvisioningUserItem
     */
    initials?: string;
    /**
     * Email address used for login
     * @type {string}
     * @memberof LegacyProvisioningUserItem
     */
    email?: string;
    /**
     * User role.
     * Accepts USER or ADMIN
     * @type {string}
     * @memberof LegacyProvisioningUserItem
     */
    role?: string;
    /**
     * User language.
     * Organisation default lang will be used if not provided.
     * Accepts FR or EN.
     * @type {string}
     * @memberof LegacyProvisioningUserItem
     */
    lang?: string;
    /**
     * Number of allowed concurrent accesses with this user.
     * Default 1.
     * @type {number}
     * @memberof LegacyProvisioningUserItem
     */
    concurrentAccess?: number;
    /**
     * User is active or not (true or false)
     * @type {string}
     * @memberof LegacyProvisioningUserItem
     */
    active?: string;
    /**
     * User is locked or not (true or false)
     * @type {string}
     * @memberof LegacyProvisioningUserItem
     */
    locked?: string;
    /**
     * Enable Mobile version.
     * Accepts true or false.
     * Default false
     * @type {string}
     * @memberof LegacyProvisioningUserItem
     */
    enableMobile?: string;
    /**
     * Gender of this user.
     * Accepts M or F.
     * @type {string}
     * @memberof LegacyProvisioningUserItem
     */
    gender?: string;
    /**
     * Work phone number of this user
     * @type {string}
     * @memberof LegacyProvisioningUserItem
     */
    phoneWork?: string;
    /**
     * Extension of work phone number of this user.
     * @type {string}
     * @memberof LegacyProvisioningUserItem
     */
    phoneWorkExtension?: string;
    /**
     * Home phone number of this user.
     * @type {string}
     * @memberof LegacyProvisioningUserItem
     */
    phoneHome?: string;
    /**
     * Cellphone number of this user.
     * @type {string}
     * @memberof LegacyProvisioningUserItem
     */
    phoneCell?: string;
    /**
     * Fax phone number of this user.
     * @type {string}
     * @memberof LegacyProvisioningUserItem
     */
    phoneFax?: string;
    /**
     * Address of this user.
     * @type {Array<LegacyContactAddress>}
     * @memberof LegacyProvisioningUserItem
     */
    address?: Array<LegacyContactAddress>;
    /**
     * Groups the user is a member of.
     * @type {Array<LegacyProvisioningGroupItem>}
     * @memberof LegacyProvisioningUserItem
     */
    groups?: Array<LegacyProvisioningGroupItem>;
    /**
     * List of identifier to uniquely identify the user. (Ex: Extranet2 or domain userId)
     * @type {Array<LegacyProvisioningUserIdentifier>}
     * @memberof LegacyProvisioningUserItem
     */
    externalIdentifiers?: Array<LegacyProvisioningUserIdentifier>;
    /**
     * Allow the user to delegate access to his data
     * Accepts true or false.
     * @type {string}
     * @memberof LegacyProvisioningUserItem
     */
    allowDelegation?: string;
    /**
     * Can the user be deleted
     * Accepts true or false.
     * @type {string}
     * @memberof LegacyProvisioningUserItem
     */
    deletable?: string;
}

export function LegacyProvisioningUserItemFromJSON(json: any): LegacyProvisioningUserItem {
    return LegacyProvisioningUserItemFromJSONTyped(json, false);
}

export function LegacyProvisioningUserItemFromJSONTyped(json: any, _ignoreDiscriminator: boolean): LegacyProvisioningUserItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'orgId': !exists(json, 'orgId') ? undefined : json['orgId'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'userId': !exists(json, 'userId') ? undefined : json['userId'],
        'displayName': !exists(json, 'displayName') ? undefined : json['displayName'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'initials': !exists(json, 'initials') ? undefined : json['initials'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'role': !exists(json, 'role') ? undefined : json['role'],
        'lang': !exists(json, 'lang') ? undefined : json['lang'],
        'concurrentAccess': !exists(json, 'concurrentAccess') ? undefined : json['concurrentAccess'],
        'active': !exists(json, 'active') ? undefined : json['active'],
        'locked': !exists(json, 'locked') ? undefined : json['locked'],
        'enableMobile': !exists(json, 'enableMobile') ? undefined : json['enableMobile'],
        'gender': !exists(json, 'gender') ? undefined : json['gender'],
        'phoneWork': !exists(json, 'phoneWork') ? undefined : json['phoneWork'],
        'phoneWorkExtension': !exists(json, 'phoneWorkExtension') ? undefined : json['phoneWorkExtension'],
        'phoneHome': !exists(json, 'phoneHome') ? undefined : json['phoneHome'],
        'phoneCell': !exists(json, 'phoneCell') ? undefined : json['phoneCell'],
        'phoneFax': !exists(json, 'phoneFax') ? undefined : json['phoneFax'],
        'address': !exists(json, 'address') ? undefined : ((json['address'] as Array<any>).map(LegacyContactAddressFromJSON)),
        'groups': !exists(json, 'groups') ? undefined : ((json['groups'] as Array<any>).map(LegacyProvisioningGroupItemFromJSON)),
        'externalIdentifiers': !exists(json, 'externalIdentifiers') ? undefined : ((json['externalIdentifiers'] as Array<any>).map(LegacyProvisioningUserIdentifierFromJSON)),
        'allowDelegation': !exists(json, 'allowDelegation') ? undefined : json['allowDelegation'],
        'deletable': !exists(json, 'deletable') ? undefined : json['deletable'],
    };
}

export function LegacyProvisioningUserItemToJSON(value?: LegacyProvisioningUserItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'orgId': value.orgId,
        'uuid': value.uuid,
        'userId': value.userId,
        'displayName': value.displayName,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'initials': value.initials,
        'email': value.email,
        'role': value.role,
        'lang': value.lang,
        'concurrentAccess': value.concurrentAccess,
        'active': value.active,
        'locked': value.locked,
        'enableMobile': value.enableMobile,
        'gender': value.gender,
        'phoneWork': value.phoneWork,
        'phoneWorkExtension': value.phoneWorkExtension,
        'phoneHome': value.phoneHome,
        'phoneCell': value.phoneCell,
        'phoneFax': value.phoneFax,
        'address': value.address === undefined ? undefined : ((value.address as Array<any>).map(LegacyContactAddressToJSON)),
        'groups': value.groups === undefined ? undefined : ((value.groups as Array<any>).map(LegacyProvisioningGroupItemToJSON)),
        'externalIdentifiers': value.externalIdentifiers === undefined ? undefined : ((value.externalIdentifiers as Array<any>).map(LegacyProvisioningUserIdentifierToJSON)),
        'allowDelegation': value.allowDelegation,
        'deletable': value.deletable,
    };
}


