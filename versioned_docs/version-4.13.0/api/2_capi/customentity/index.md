# Custom Entity
## Overview




**Custom Entities** are very similar to **Global Entities**, but with several advanced features that make them more applicable for larger data sets.

Like *Global Entities*, *Custom Entites* are:

* available across all users of an app
* access is controlled via ACL
* have an `entityType` for organization
* can have `owners` or be un-owned (as system objects)
* can be automatically deleted via TTL (time-to-live)

*Custom Entities* differ in these ways:

* You must pre-declare your `entityTypes` ahead-of-time
* You can create *custom indexes* for each `entityType` for fast lookups
* You can have an unlimited # of custom entities
* You can do partial updates of custom entities
* Custom entities support auto-migration during deployment

*Custom Entities* supports `text` index, `$text` operator can be use to query document fields once a `text` index is set up. Note that as the MongoDB restriction, one collection can have only one `text` index. 

```
{
  "entityType": "questions",
  "context": {
    "pagination": {
      "rowsPerPage": 50,
      "pageNumber": 1
    },
    "searchCriteria": {
        "$text":{"$search": "moon"}
    },
    "sortCriteria": {
      "createdAt": 1
    }
  }
}
```
  
:::tip
Custom Entities are a premium feature available to <em>Plus Plan</em> customers. Additional usage fees apply.
:::

### API Summary

#### Basic Access
* [CreateEntity](/api/capi/customentity/createentity) - Creates new custom entity.
* [DeleteEntity](/api/capi/customentity/deleteentity) - Deletes the specified custom entity on the server.
* [DeleteEntities](/api/capi/customentity/deleteentities) - Deletes all applicable custom entities from the server based on the custom entity type and specified delete criteria.
* [DeleteSingleton](/api/capi/customentity/deletesingleton) - Deletes the specified custom entity singleton, owned by the session's user, for the specified entity type, on the server.
* [IncrementData](/api/capi/customentity/incrementdata) - Increments the specified fields by the specified amount within custom entity data on the server.
* [IncrementDataSharded](/api/capi/customentity/incrementdatasharded) - Increments the specified fields by the specified amount within custom entity data on the server, enforcing ownership/ACL permissions.
* [IncrementSingletonData](/api/capi/customentity/incrementsingletondata) - Increments the specified fields, of the singleton owned by the user, by the specified amount within the custom entity data on the server.
* [ReadEntity](/api/capi/customentity/readentity) - Reads a custom entity.
* [ReadSingleton](/api/capi/customentity/readsingleton) - Reads the custom entity singleton owned by the session's user.
* [UpdateEntity](/api/capi/customentity/updateentity) - Replaces the specified custom entity's data, and optionally updates the acl and expiry, on the server.
* [UpdateEntityFields](/api/capi/customentity/updateentityfields) - Sets the specified fields within custom entity data on the server.
* [UpdateEntityFieldsSharded](/api/capi/customentity/updateentityfieldssharded) - For sharded custom collection entities. Sets the specified fields within custom entity data on the server, enforcing ownership/ACL permissions.
* [UpdateSingleton](/api/capi/customentity/updatesingleton) - Updates the singleton owned by the user for the specified custom entity type on the server, creating the singleton if it does not exist. This operation results in the owned singleton's data being completely replaced by the passed in JSON object.
* [UpdateSingletonFields](/api/capi/customentity/updatesingletonFields) - Partially updates the data, of the singleton owned by the user for the specified custom entity type, with the specified fields, on the server.

#### Paging
* [GetCount](/api/capi/customentity/getcount) - Counts the number of custom entities meeting the specified where clause.
* [GetEntityPage](/api/capi/customentity/getentitypage) - Retrieves first page of custom entities from the server based on the custom entity type and specified query context.
* [GetEntityPageOffset](/api/capi/customentity/getentitypageoffset) - Gets the page of custom entities from the server based on the encoded context and specified page offset.
* [GetRandomEntitiesMatching](/api/capi/customentity/getrandomentitiesmatching) - Gets a list of up to maxReturn randomly selected custom entities from the server based on the entity type and where condition.

#### Bypassing ACL for System Objects
* [SysCreateEntity](/api/capi/customentity/syscreateentity) - Creates new custom entity.
* [SysDeleteEntity](/api/capi/customentity/sysdeleteentity) - Deletes the specified custom entity on the server.
* [SysDeleteEntities](/api/capi/customentity/sysdeleteentities) - Deletes all applicable custom entities from the server based on the custom entity type, specified delete criteria and acrossAllUsers flag.
* [SysGetCount](/api/capi/customentity/sysgetcount) - Counts the number of custom entities meeting the specified where clause.
* [SysGetEntityPage](/api/capi/customentity/sysgetentitypage) - Retrieves first page of custom entities from the server based on the custom entity type and specified query context
* [SysGetEntityPageOffset](/api/capi/customentity/sysgetentitypageoffset) - Gets the page of custom entities from the server based on the encoded context and specified page offset.
* [SysGetRandomEntitiesMatching](/api/capi/customentity/sysgetrandomentitiesmatching) - Gets a list of up to maxReturn randomly selected custom entities from the server based on the entity type and where condition, bypassing ownership/ACL permissions checking.
* [SysIncrementData](/api/capi/customentity/sysincrementdata) - Increments the specified fields by the specified amount within custom entity data on the server.
* [SysIncrementData](/api/capi/customentity/sysincrementdata) - Increments the specified fields by the specified amount within custom entity data on the server, bypassing ownership/ACL permissions checks.
* [SysIncrementDataSharded](/api/capi/customentity/sysincrementdatasharded) - Increments the specified fields by the specified amount within custom entity data on the server, bypassing ownership/ACL permissions.
* [SysReadEntity](/api/capi/customentity/sysreadentity) - Reads a custom entity.
* [SysUpdateEntity](/api/capi/customentity/sysupdateentity) - Replaces the specified custom entity's data, and optionally updates the acl and expiry, on the server.
* [SysUpdateEntityFields](/api/capi/customentity/sysupdateentityfields) - Sets the specified fields within custom entity data on the server.
* [SysUpdateEntityFieldsSharded](/api/capi/customentity/sysupdateentityfieldssharded) - For sharded custom collection entities. Sets the specified fields within custom entity data on the server, bypassing ACL permissions checks.
* [SysUpdateEntityOwner](/api/capi/customentity/sysupdateentityowner) - Updates the owner of the custom entity.

#### Schema Management
* [SysCreateCollection](/api/capi/customentity/syscreatecollection) - Creates configuration for new custom entity collection.
* [SysCreateIndex](/api/capi/customentity/syscreateindex) - Creates a new index on a custom entity collection.
* [SysDropCollection](/api/capi/customentity/sysdropcollection) - Drops the specified custom entity collection.
* [SysDropIndex](/api/capi/customentity/sysdropindex) - Drops the specified index from the identified custom entity collection.
* [SysListCollections](/api/capi/customentity/syslistcollections) - Lists the custom entity collections configured for the application.
* [SysListIndexes](/api/capi/customentity/syslistindexes) - Retrieves list of indexes configured for a custom entity collection.
* [SysUpdateCollectionMigrate](/api/capi/customentity/sysupdatecollectionmigrate) - Updates the migration flag for the custom entity collection.


<DocCardList />