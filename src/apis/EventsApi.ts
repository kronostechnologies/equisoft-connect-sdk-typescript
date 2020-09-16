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


import * as runtime from '../runtime';
import {
    CalendarsCalendar,
    CalendarsCalendarFromJSON,
    CalendarsListCalendarResponse,
    CalendarsListCalendarResponseFromJSON,
    EventsCreateEventPayload,
    EventsCreateEventPayloadToJSON,
    EventsCreateEventResponse,
    EventsCreateEventResponseFromJSON,
    EventsEvent,
    EventsEventFromJSON,
    EventsGetEventInstancesResponse,
    EventsGetEventInstancesResponseFromJSON,
    EventsListEventResponse,
    EventsListEventResponseFromJSON,
    EventsOrderByType,
    EventsPatchEventPayload,
    EventsPatchEventPayloadToJSON,
    EventsPatchEventResponse,
    EventsPatchEventResponseFromJSON,
    EventsTransferToCompletedResponse,
    EventsTransferToCompletedResponseFromJSON,
    InternalNotesCreateNotePayload,
    InternalNotesCreateNotePayloadToJSON,
    InternalNotesCreateNoteResponse,
    InternalNotesCreateNoteResponseFromJSON,
    InternalNotesHistoryType,
    InternalNotesNoteList,
    InternalNotesNoteListFromJSON,
    InternalNotesPatchNotePayload,
    InternalNotesPatchNotePayloadToJSON,
    InternalNotesPatchNoteResponse,
    InternalNotesPatchNoteResponseFromJSON,
} from '../models';

export interface ArchiveEventInternalNoteRequest {
    eventId: string;
    noteId: number;
    acceptLanguage?: string;
}

export interface CreateEventRequest {
    eventsCreateEventPayload: EventsCreateEventPayload;
    acceptLanguage?: string;
}

export interface CreateEventInternalNoteRequest {
    eventId: string;
    internalNotesCreateNotePayload: InternalNotesCreateNotePayload;
    acceptLanguage?: string;
}

export interface DeleteEventRequest {
    eventId: string;
}

export interface GetCalendarRequest {
    calendarId: string;
    acceptLanguage?: string;
}

export interface GetEventRequest {
    eventId: string;
    acceptLanguage?: string;
}

export interface GetEventInstancesRequest {
    eventId: string;
    minTime?: Date;
    maxTime?: Date;
    pageToken?: string;
    maxResults?: string;
    acceptLanguage?: string;
}

export interface GetEventInternalNoteListRequest {
    eventId: string;
    history?: InternalNotesHistoryType;
    acceptLanguage?: string;
}

export interface ListCalendarsRequest {
    acceptLanguage?: string;
}

export interface ListEventsRequest {
    calendarId?: string;
    ownerId?: string;
    contactIds?: Array<number>;
    minTime?: Date;
    maxTime?: Date;
    singleEvents?: boolean;
    isCompleted?: boolean;
    orderBy?: EventsOrderByType;
    pageToken?: string;
    maxResults?: string;
    acceptLanguage?: string;
}

export interface PatchEventRequest {
    eventId: string;
    eventsPatchEventPayload: EventsPatchEventPayload;
    acceptLanguage?: string;
}

export interface PatchEventInternalNoteRequest {
    eventId: string;
    noteId: number;
    internalNotesPatchNotePayload: InternalNotesPatchNotePayload;
    acceptLanguage?: string;
}

export interface TransferEventToCompletedRequest {
    eventId: string;
}

/**
 * 
 */
export class EventsApi extends runtime.BaseAPI {

    /**
     * Archive an internal note for and event.
     */
    async archiveEventInternalNoteRaw(requestParameters: ArchiveEventInternalNoteRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.eventId === null || requestParameters.eventId === undefined) {
            throw new runtime.RequiredError('eventId','Required parameter requestParameters.eventId was null or undefined when calling archiveEventInternalNote.');
        }

        if (requestParameters.noteId === null || requestParameters.noteId === undefined) {
            throw new runtime.RequiredError('noteId','Required parameter requestParameters.noteId was null or undefined when calling archiveEventInternalNote.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["crm:event"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/crm/api/v1/events/{eventId}/notes/{noteId}/archive`.replace(`{${"eventId"}}`, encodeURIComponent(String(requestParameters.eventId))).replace(`{${"noteId"}}`, encodeURIComponent(String(requestParameters.noteId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Archive an internal note for and event.
     */
    async archiveEventInternalNote(requestParameters: ArchiveEventInternalNoteRequest): Promise<object> {
        const response = await this.archiveEventInternalNoteRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create an event.
     */
    async createEventRaw(requestParameters: CreateEventRequest): Promise<runtime.ApiResponse<EventsCreateEventResponse>> {
        if (requestParameters.eventsCreateEventPayload === null || requestParameters.eventsCreateEventPayload === undefined) {
            throw new runtime.RequiredError('eventsCreateEventPayload','Required parameter requestParameters.eventsCreateEventPayload was null or undefined when calling createEvent.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["crm:event"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/crm/api/v1/events`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: EventsCreateEventPayloadToJSON(requestParameters.eventsCreateEventPayload),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EventsCreateEventResponseFromJSON(jsonValue));
    }

    /**
     * Create an event.
     */
    async createEvent(requestParameters: CreateEventRequest): Promise<EventsCreateEventResponse> {
        const response = await this.createEventRaw(requestParameters);
        return await response.value();
    }

    /**
     * Add an internal note to and event.
     */
    async createEventInternalNoteRaw(requestParameters: CreateEventInternalNoteRequest): Promise<runtime.ApiResponse<InternalNotesCreateNoteResponse>> {
        if (requestParameters.eventId === null || requestParameters.eventId === undefined) {
            throw new runtime.RequiredError('eventId','Required parameter requestParameters.eventId was null or undefined when calling createEventInternalNote.');
        }

        if (requestParameters.internalNotesCreateNotePayload === null || requestParameters.internalNotesCreateNotePayload === undefined) {
            throw new runtime.RequiredError('internalNotesCreateNotePayload','Required parameter requestParameters.internalNotesCreateNotePayload was null or undefined when calling createEventInternalNote.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["crm:event"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/crm/api/v1/events/{eventId}/notes`.replace(`{${"eventId"}}`, encodeURIComponent(String(requestParameters.eventId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: InternalNotesCreateNotePayloadToJSON(requestParameters.internalNotesCreateNotePayload),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InternalNotesCreateNoteResponseFromJSON(jsonValue));
    }

    /**
     * Add an internal note to and event.
     */
    async createEventInternalNote(requestParameters: CreateEventInternalNoteRequest): Promise<InternalNotesCreateNoteResponse> {
        const response = await this.createEventInternalNoteRaw(requestParameters);
        return await response.value();
    }

    /**
     * **Note:** To delete an instance of recurring event, use the master event id suffixed by the original start date of the occurrence.
     * Delete an event.
     */
    async deleteEventRaw(requestParameters: DeleteEventRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.eventId === null || requestParameters.eventId === undefined) {
            throw new runtime.RequiredError('eventId','Required parameter requestParameters.eventId was null or undefined when calling deleteEvent.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["crm:event"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/crm/api/v1/events/{eventId}`.replace(`{${"eventId"}}`, encodeURIComponent(String(requestParameters.eventId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * **Note:** To delete an instance of recurring event, use the master event id suffixed by the original start date of the occurrence.
     * Delete an event.
     */
    async deleteEvent(requestParameters: DeleteEventRequest): Promise<object> {
        const response = await this.deleteEventRaw(requestParameters);
        return await response.value();
    }

    /**
     *  Get informations about a calendar or a default calendar.
     */
    async getCalendarRaw(requestParameters: GetCalendarRequest): Promise<runtime.ApiResponse<CalendarsCalendar>> {
        if (requestParameters.calendarId === null || requestParameters.calendarId === undefined) {
            throw new runtime.RequiredError('calendarId','Required parameter requestParameters.calendarId was null or undefined when calling getCalendar.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["crm:event"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/crm/api/v1/calendars/{calendarId}`.replace(`{${"calendarId"}}`, encodeURIComponent(String(requestParameters.calendarId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CalendarsCalendarFromJSON(jsonValue));
    }

    /**
     *  Get informations about a calendar or a default calendar.
     */
    async getCalendar(requestParameters: GetCalendarRequest): Promise<CalendarsCalendar> {
        const response = await this.getCalendarRaw(requestParameters);
        return await response.value();
    }

    /**
     * Return the detail of an event.
     */
    async getEventRaw(requestParameters: GetEventRequest): Promise<runtime.ApiResponse<EventsEvent>> {
        if (requestParameters.eventId === null || requestParameters.eventId === undefined) {
            throw new runtime.RequiredError('eventId','Required parameter requestParameters.eventId was null or undefined when calling getEvent.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["crm:event"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/crm/api/v1/events/{eventId}`.replace(`{${"eventId"}}`, encodeURIComponent(String(requestParameters.eventId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EventsEventFromJSON(jsonValue));
    }

    /**
     * Return the detail of an event.
     */
    async getEvent(requestParameters: GetEventRequest): Promise<EventsEvent> {
        const response = await this.getEventRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get a recurring event instances.
     */
    async getEventInstancesRaw(requestParameters: GetEventInstancesRequest): Promise<runtime.ApiResponse<EventsGetEventInstancesResponse>> {
        if (requestParameters.eventId === null || requestParameters.eventId === undefined) {
            throw new runtime.RequiredError('eventId','Required parameter requestParameters.eventId was null or undefined when calling getEventInstances.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.minTime !== undefined) {
            queryParameters['minTime'] = (requestParameters.minTime as any).toISOString();
        }

        if (requestParameters.maxTime !== undefined) {
            queryParameters['maxTime'] = (requestParameters.maxTime as any).toISOString();
        }

        if (requestParameters.pageToken !== undefined) {
            queryParameters['pageToken'] = requestParameters.pageToken;
        }

        if (requestParameters.maxResults !== undefined) {
            queryParameters['maxResults'] = requestParameters.maxResults;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["crm:event"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/crm/api/v1/events/{eventId}/instances`.replace(`{${"eventId"}}`, encodeURIComponent(String(requestParameters.eventId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EventsGetEventInstancesResponseFromJSON(jsonValue));
    }

    /**
     * Get a recurring event instances.
     */
    async getEventInstances(requestParameters: GetEventInstancesRequest): Promise<EventsGetEventInstancesResponse> {
        const response = await this.getEventInstancesRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get the internal notes list for an event.
     */
    async getEventInternalNoteListRaw(requestParameters: GetEventInternalNoteListRequest): Promise<runtime.ApiResponse<InternalNotesNoteList>> {
        if (requestParameters.eventId === null || requestParameters.eventId === undefined) {
            throw new runtime.RequiredError('eventId','Required parameter requestParameters.eventId was null or undefined when calling getEventInternalNoteList.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.history !== undefined) {
            queryParameters['history'] = requestParameters.history;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["crm:event"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/crm/api/v1/events/{eventId}/notes`.replace(`{${"eventId"}}`, encodeURIComponent(String(requestParameters.eventId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InternalNotesNoteListFromJSON(jsonValue));
    }

    /**
     * Get the internal notes list for an event.
     */
    async getEventInternalNoteList(requestParameters: GetEventInternalNoteListRequest): Promise<InternalNotesNoteList> {
        const response = await this.getEventInternalNoteListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get the list of available calendars.
     */
    async listCalendarsRaw(requestParameters: ListCalendarsRequest): Promise<runtime.ApiResponse<CalendarsListCalendarResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["crm:event"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/crm/api/v1/calendars`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CalendarsListCalendarResponseFromJSON(jsonValue));
    }

    /**
     * Get the list of available calendars.
     */
    async listCalendars(requestParameters: ListCalendarsRequest): Promise<CalendarsListCalendarResponse> {
        const response = await this.listCalendarsRaw(requestParameters);
        return await response.value();
    }

    /**
     * List or search events.
     */
    async listEventsRaw(requestParameters: ListEventsRequest): Promise<runtime.ApiResponse<EventsListEventResponse>> {
        const queryParameters: runtime.HTTPQuery = {};

        if (requestParameters.calendarId !== undefined) {
            queryParameters['calendarId'] = requestParameters.calendarId;
        }

        if (requestParameters.ownerId !== undefined) {
            queryParameters['ownerId'] = requestParameters.ownerId;
        }

        if (requestParameters.contactIds) {
            queryParameters['contactIds'] = requestParameters.contactIds;
        }

        if (requestParameters.minTime !== undefined) {
            queryParameters['minTime'] = (requestParameters.minTime as any).toISOString();
        }

        if (requestParameters.maxTime !== undefined) {
            queryParameters['maxTime'] = (requestParameters.maxTime as any).toISOString();
        }

        if (requestParameters.singleEvents !== undefined) {
            queryParameters['singleEvents'] = requestParameters.singleEvents;
        }

        if (requestParameters.isCompleted !== undefined) {
            queryParameters['isCompleted'] = requestParameters.isCompleted;
        }

        if (requestParameters.orderBy !== undefined) {
            queryParameters['orderBy'] = requestParameters.orderBy;
        }

        if (requestParameters.pageToken !== undefined) {
            queryParameters['pageToken'] = requestParameters.pageToken;
        }

        if (requestParameters.maxResults !== undefined) {
            queryParameters['maxResults'] = requestParameters.maxResults;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["crm:event"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/crm/api/v1/events`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EventsListEventResponseFromJSON(jsonValue));
    }

    /**
     * List or search events.
     */
    async listEvents(requestParameters: ListEventsRequest): Promise<EventsListEventResponse> {
        const response = await this.listEventsRaw(requestParameters);
        return await response.value();
    }

    /**
     * **Note:** To update an instance of recurring event, use the master event id suffixed by the original start date of the occurrence.
     * Partially update an event.
     */
    async patchEventRaw(requestParameters: PatchEventRequest): Promise<runtime.ApiResponse<EventsPatchEventResponse>> {
        if (requestParameters.eventId === null || requestParameters.eventId === undefined) {
            throw new runtime.RequiredError('eventId','Required parameter requestParameters.eventId was null or undefined when calling patchEvent.');
        }

        if (requestParameters.eventsPatchEventPayload === null || requestParameters.eventsPatchEventPayload === undefined) {
            throw new runtime.RequiredError('eventsPatchEventPayload','Required parameter requestParameters.eventsPatchEventPayload was null or undefined when calling patchEvent.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["crm:event"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/crm/api/v1/events/{eventId}`.replace(`{${"eventId"}}`, encodeURIComponent(String(requestParameters.eventId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: EventsPatchEventPayloadToJSON(requestParameters.eventsPatchEventPayload),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EventsPatchEventResponseFromJSON(jsonValue));
    }

    /**
     * **Note:** To update an instance of recurring event, use the master event id suffixed by the original start date of the occurrence.
     * Partially update an event.
     */
    async patchEvent(requestParameters: PatchEventRequest): Promise<EventsPatchEventResponse> {
        const response = await this.patchEventRaw(requestParameters);
        return await response.value();
    }

    /**
     * Add an internal note to and event.
     */
    async patchEventInternalNoteRaw(requestParameters: PatchEventInternalNoteRequest): Promise<runtime.ApiResponse<InternalNotesPatchNoteResponse>> {
        if (requestParameters.eventId === null || requestParameters.eventId === undefined) {
            throw new runtime.RequiredError('eventId','Required parameter requestParameters.eventId was null or undefined when calling patchEventInternalNote.');
        }

        if (requestParameters.noteId === null || requestParameters.noteId === undefined) {
            throw new runtime.RequiredError('noteId','Required parameter requestParameters.noteId was null or undefined when calling patchEventInternalNote.');
        }

        if (requestParameters.internalNotesPatchNotePayload === null || requestParameters.internalNotesPatchNotePayload === undefined) {
            throw new runtime.RequiredError('internalNotesPatchNotePayload','Required parameter requestParameters.internalNotesPatchNotePayload was null or undefined when calling patchEventInternalNote.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.acceptLanguage !== undefined && requestParameters.acceptLanguage !== null) {
            headerParameters['Accept-Language'] = String(requestParameters.acceptLanguage);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["crm:event"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/crm/api/v1/events/{eventId}/notes/{noteId}`.replace(`{${"eventId"}}`, encodeURIComponent(String(requestParameters.eventId))).replace(`{${"noteId"}}`, encodeURIComponent(String(requestParameters.noteId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: InternalNotesPatchNotePayloadToJSON(requestParameters.internalNotesPatchNotePayload),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => InternalNotesPatchNoteResponseFromJSON(jsonValue));
    }

    /**
     * Add an internal note to and event.
     */
    async patchEventInternalNote(requestParameters: PatchEventInternalNoteRequest): Promise<InternalNotesPatchNoteResponse> {
        const response = await this.patchEventInternalNoteRaw(requestParameters);
        return await response.value();
    }

    /**
     * Transfer an event to the completed/done calendar.
     */
    async transferEventToCompletedRaw(requestParameters: TransferEventToCompletedRequest): Promise<runtime.ApiResponse<EventsTransferToCompletedResponse>> {
        if (requestParameters.eventId === null || requestParameters.eventId === undefined) {
            throw new runtime.RequiredError('eventId','Required parameter requestParameters.eventId was null or undefined when calling transferEventToCompleted.');
        }

        const queryParameters: runtime.HTTPQuery = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            if (typeof this.configuration.accessToken === 'function') {
                headerParameters["Authorization"] = this.configuration.accessToken("OAuth2", ["crm:event"]);
            } else {
                headerParameters["Authorization"] = this.configuration.accessToken;
            }
        }

        const response = await this.request({
            path: `/crm/api/v1/events/{eventId}/transferToCompleted`.replace(`{${"eventId"}}`, encodeURIComponent(String(requestParameters.eventId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => EventsTransferToCompletedResponseFromJSON(jsonValue));
    }

    /**
     * Transfer an event to the completed/done calendar.
     */
    async transferEventToCompleted(requestParameters: TransferEventToCompletedRequest): Promise<EventsTransferToCompletedResponse> {
        const response = await this.transferEventToCompletedRaw(requestParameters);
        return await response.value();
    }

}
