# Item Catalog


The **Item Catalog** service is a key component of the **Item Management** system.
All items to be managed (i.e. awarded, purchased, sold, traded, etc.) must be first defined in the *Item Catalog*.

Items in the catalog can be in one of four states:

* DRAFT - item is currently still be defined. Cannot be purchased or awarded
* PUBLISHED - item is now available for award, purchase and trading.
* RETIRED - item is no longer available for purchase or awarding, but a user can still keep it in their inventory. And the item can still be traded or sold.
* REVOKED - the item has being removed from circulation. Will be deleted from user's inventory upon refresh.

Items are normally defined and published via the **Design | Item Management | Item Catalog** screen of the Design Portal.

This service is primarily used to retrieve lists of items from the catalog for display in store purchase screens. Items are then awarded/purchased/traded via the **User Items** service.

### API Summary

#### Get
* [SysGetCatalogItemsPage](/api/s2s/itemcatalog/sysgetcatalogitemspage) - Retrieves page of catalog items from the server, with full language fields mappings.
* [SysGetCatalogItemsPageOffset](/api/s2s/itemcatalog/sysgetcatalogitemspageoffset) - Gets the page of catalog items from the server based on the encoded context and specified page offset, with full language fields mappings.
* [SysGetCatalogItemDefinition](/api/s2s/itemcatalog/sysgetcatalogitemdefinition) - Reads an existing item definition from the server, with full language fields mappings.

#### Create
* [SysAddCatalogItem](/api/s2s/itemcatalog/sysaddcatalogitem) - Create a new catalog item on the server.

#### Edit
* [SysEditCatalogItem](/api/s2s/itemcatalog/syseditcatalogitem) - Update a catalog item on the server.
* [SysDeleteCatalogItem](/api/capi/itemcatalog/sysdeletecatalogitem) - Delete an exsiting catalog item catalog.

#### Life Cycle
* [SysPublishCatalogItem](/api/s2s/itemcatalog/syspublishcatalogitem) - Publish the specified catalog item on the server.
* [SysSetInvisibleCatalogItem](/api/s2s/itemcatalog/syssetinvisiblecatalogitem) - Set the specified catalog item to invisible on the server.
* [SysRetireCatalogItem](/api/s2s/itemcatalog/sysretirecatalogitem) - Retire the specified catalog item on the server.
* [SysRevokeCatalogItem](/api/s2s/itemcatalog/sysrevokecatalogitem) - Revoke the specified catalog item on the server.

:::tip
All the client APIs that the names beigin with <strong>"Sys"</strong> <em>are</em> also available to S2S. 
For the usages of the S2S customEntity APIs (if they are not listed at this section),
refer to <%= data.branding.productName %> client [itemCatalog](/api/capi/itemcatalog) APIs.
:::

<DocCardList />