# Global Entity
## Overview



A summary on [GlobalEntityService](/api/capi/globalentity) can be found in the client API section of the documentation.

Changes made to SystemEntities (GlobalEntities that have no ownerId) can only be ran via the cloudCode S2S script.
Removing write access to the client ensures the data is protected from user alteration, while still allowing for cloud code scripts to run and edit the entity data.

Existing GlobalEntities can be converted to SystemEntities using [MakeSystemEntity](/api/capi/globalentity/makesystementity).

### API Summary

### GlobalEntity
* [CreateSystemEntity](/api/s2s/globalentity/createsystementity) - Create a new entity on the server.
* [CreateSystemEntityWithIndexedId](/api/s2s/globalentity/createsystementitywithindexedid) - Create a new system entity on the server with an indexed id.
* [UpdateSystemEntity](/api/s2s/globalentity/updatesystementity) - Updates an existing system entity on the server.
* [UpdateSystemEntityAcl](/api/s2s/globalentity/updatesystementityacl) - Updates an existing system entity's Acl on the server.
* [UpdateEntityIndexedId](/api/s2s/globalentity/updateentityindexedid) - Updates an existing entity's IndexedId on the server.
* [DeleteSystemEntity](/api/s2s/globalentity/deletesystementity) - Deletes an existing system entity on the server.
* [ReadEntity](/api/s2s/globalentity/readentity) - Reads an existing entity from the server.
* [ReadSystemEntity](/api/s2s/globalentity/readsystementity) - Reads an existing system entity from the server.
* [GetList](/api/s2s/globalentity/getlist) - Get a list of entities from the server base on where. Where clause allows entityType, createdAt, updatedAt, data items.
* [GetListByIndexedId](/api/s2s/globalentity/getlistbyindexedid) - Get a list of entities from the server base on indexed id.
* [GetSystemEntityList](/api/s2s/globalentity/getsystementitylist) - Get a list of system entities from the server base on where. Where clause allows entityType, createdAt, updatedAt, data items.
* [GetListCount](/api/s2s/globalentity/getlistcount) - Get a count of entities from the server base on where. Where clause allows entityType, createdAt, updatedAt, data items.
* [GetSystemEntityListCount](/api/s2s/globalentity/getsystementitylistcount) - Get a count of system entities from the server base on where. Where clause allows entityType, createdAt, updatedAt, data items.
* [GetPage](/api/s2s/globalentity/getpage) - Gets the page of entities from the server based on the specified context.
* [GetSystemEntityPage](/api/s2s/globalentity/getsystementitypage) - Gets the page of system entities from the server based on the specified context.
* [GetPageOffset](/api/s2s/globalentity/getpageoffset) - Gets the page of entities from the server based on the encoded context and specified page offset.
* [GetSystemEntityPageOffset](/api/s2s/globalentity/getsystementitypageoffset) - Gets the page of entities from the server based on the encoded context and specified page offset.


For more information on how <%= data.branding.productName %> organizes data, refer to the [Cloud Data Overview](http://getbraincloud.com/apidocs/api-modules/data/).



<DocCardList />