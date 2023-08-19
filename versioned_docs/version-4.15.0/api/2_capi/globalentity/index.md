# Global Entity
## Overview



The following methods are used to work with Global Entities, which as the name implies, are accessible to all users of the application (within the confines of the ACL specified).

:::caution
Performance warning: Global Entities are best-suited for a moderate number (i.e. < 1000) of generally read-only objects (i.e. think tuning files, level data, etc.)<br/>
<br/>
<p>Do <em>not</em> use Global Entities in cases where the data is primarily <em>owned by users</em> and the number of objects will <em>grow as the user population grows</em>. Use <em>User Entities</em> instead - or for maximum flexibility use <em>Owned Custom Entities</em>.</p>

<p>Also - if the data is <em>un-owned</em>, but high populations of objects are required (i.e. > 1000), use <em>Un-owned Custom Entities</em>.</p>
:::

Note that the integrity of Global Entities are protected by two key mechanisms:

- **Atomic writes** – MongoDB enforces that only one write at a time can be processed on an object in the database. In this way, multiple users of an application cannot each *partially* update an object
- **Version checking** – <%= data.branding.productName %> uses a versioning scheme on objects to ensure that the object you're attempting to update has not changed since you initially read it. See the [versioning documentation](/api/appendix/version) for more information.

<%= data.branding.productName %> versioning works like this:

- Entities (both Global and User/Player) each have a version associated with them
- This version is automatically incremented by the server each time an update is performed
- For a client update to be valid (and succeed), the client must provide the version in the update, and this version must match the current value stored in the database.
  - If the version match, the update is processed (automatically incrementing the version), and a copy of the updated object is returned to the client
  - If the versions don't match, an exception is triggered.

:::tip"
Entity versioning can by bypassed by passing a "-1" as the version in the update method – but this is not recommended.
:::

There are two more unique capabilities of Global Entities:

- **Indexing** – global entities can be indexed for faster lookups.
- **Time-to-live** – you can optionally set the Time-to-live (TTL) for a Global Entity.  This is very useful if you're using Global Entities to implement shared dynamic objects, that should automatically be cleaned up (based on inactivity)

### Special Topic: Global Entity Ownership and Deletion

By default, every Global Entity is *owned* by the user that creates it - and will be *automatically removed* if/when that user that is deleted.

This may not be ideal for some use cases. For this purpose, <%= data.branding.productName %> also supports *System Entities* - which are simply Global Entities without owners - and are therefore not subject to the *delete when the owner is deleted* rule.

The Global Entity service contains a subset API for dealing with *System Entities*. These API calls bypass most ACL rules, and are thus callable via cloud code scripts only.

### Scaling Global Entities


### API Summary

### Core Access:

* [CreateEntity](/api/capi/globalentity/createentity)
* [CreateEntityWithIndexedId](/api/capi/globalentity/createentitywithindexedid)
* [DeleteEntity](/api/capi/globalentity/deleteentity)
* [UpdateEntity](/api/capi/globalentity/updateentity)
* [UpdateEntityAcl](/api/capi/globalentity/updateentityacl)
* [UpdateEntityTimeToLive](/api/capi/globalentity/updateentitytimetolive)
* [UpdateEntityOwnerAndAcl](/api/capi/globalentity/updateentityownerandacl)
* [IncrementGlobalEntityData](/api/capi/globalentity/incrementglobalentitydata)

### Retrieval

* [GetList](/api/capi/globalentity/getlist)
* [GetListByIndexedId](/api/capi/globalentity/getlistbyindexedid)
* [GetListCount](/api/capi/globalentity/getlistcount)
* [ReadEntity](/api/capi/globalentity/readentity)
* [GetPage](/api/capi/globalentity/getpage)
* [GetPageOffset](/api/capi/globalentity/getpageoffset)

### System Entities

*System Entity calls are available via Cloud Code only.*

* [CreateSystemEntity](/api/capi/globalentity/createsystementity)
* [GetSystemEntityList](/api/capi/globalentity/getsystementitylist)
* [GetSystemEntityListCount](/api/capi/globalentity/getsystementitylistcount)
* [GetSystemEntityPage](/api/capi/globalentity/getsystementitypage)
* [GetSystemEntityPageOffset](/api/capi/globalentity/getsystementitypageoffset)
* [MakeSystemEntity](/api/capi/globalentity/makesystementity)
* [ReadSystemEntity](/api/capi/globalentity/readsystementity)
* [UpdateSystemEntity](/api/capi/globalentity/updatesystementity)
* [UpdateSysetmEntityAcl](/api/capi/globalentity/updatesystementityacl)
* [UpdateEntityIndexedId](/api/capi/globalentity/updateentityindexedid)




For more information on how <%= data.branding.productName %> organizes data, refer to the [Cloud Data Overview](http://getbraincloud.com/apidocs/api-modules/data/).



<DocCardList />