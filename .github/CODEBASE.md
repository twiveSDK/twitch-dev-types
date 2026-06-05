# Codebase Structure

This document outlines the structure of the projects codebase, detailing the organization of directories and files, 
as well as the naming conventions used for exported types and interfaces.

**NOTE**: This document is intended for contributors and maintainers of the project to ensure consistency and clarity 
in the codebase.

## Directory and Files

The project is organized into the following three main directories:

```
/ api
    ...
/ authentication
    ...
/ eventsub
    ...
```

`api` - This directory contains all types and interfaces related to [Twitch API Endpoints](https://dev.twitch.tv/docs/api/reference/), organized 
by the *Resource* type (e.g., Chat, Moderation, Streams).

`authentication` - This directory contains all types and interfaces related to [Twitch Authentication](https://dev.twitch.tv/docs/authentication/), 
such as OAuth scopes.

`eventsub` - This directory contains all types and interfaces related to [Twitch EventSub](https://dev.twitch.tv/docs/eventsub/), 
including subscription types and event payloads.

### `events` Directory
- Within the `eventsub` directory, there is an `events` subdirectory that contains types and interfaces 
for individual EventSub event payloads.

- Each event type has its own subdirectory named after the event category (e.g., `channel`, `hypetrain`, `automod`).

- Each event is organized into its own file, named according to the event it represents 
(e.g., `channelBan.ts`, `streamOnline.ts`).

- If an event has a version **1** and **2**, the v2 events are grouped together in a separate subdirectory named `v2`.

### `common.ts` Files
- Some directory contain a `common.ts` file that includes shared types and interfaces used across multiple files 
within that directory.

### `index.ts` Files
- Each directory contains an `index.ts` file that exports all types and interfaces defined within that directory.

- The **root `index.ts`** file exports all types and interfaces from this project, providing a single entry point for 
users to import the types they need.

## Naming Conventions

The exported types and interfaces are separated into four main parts:

- Everything exported with the `API` prefix represents data from the **Twitch REST API**.

- Everything exported with the `OAuth2` prefix represents data that is related to the **Twitch OAuth2 Grant Flows**.

- Everything exported with the `EventSub` prefix represents data that comes from or is related to the **Twitch EventSub**.
    - EventSub event payloads does not have this prefix, because their generally follow this structure: 
        `<EventName>Event` where `<EventName>` indicates the specific event.
        - For example: `ChannelBanEvent` or `StreamOnlineEvent`
        - **NOTE**: EventSub event payloads are versioned, so if an event has a version 1 and 2, it will indicate the v2 event 
        at the end of the type name. For example: `ChannelModerateEventV2` or `AutomodMessageHoldEventV2`

- Everything exported with the `REST` prefix represents a payload that is related to the **Twitch REST API**.
    - The following represents the structure: 
    `REST<HttpMethod><Type><Request(Body|Params|Param|Body[Param|Data])|Response|FormData>` where the type represents 
    what it will be used for.
        - For example: `RESTGetStreamsRequestParams` or `RESTPostPredictionResponse`
        - Some exported types do not follow this structure, but are still related to the **Twitch REST API**.
    - Every Type that ends with `...Response` represent the expected payload returned from the **Twitch REST API** and 
    includes the `data` field which contains an array of the actual data.
- There are some types that do not follow any of the above conventions, these are usually utility types or types that 
are used in multiple places.
