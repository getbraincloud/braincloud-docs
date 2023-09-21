# Item Catalog
## Overview




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
* [GetCatalogItemsPage](/api/capi/itemcatalog/getcatalogitemspage) - Retrieves page of catalog items from the server, with language fields limited to the text for the current or default language.
* [GetCatalogItemsPageOffset](/api/capi/itemcatalog/getcatalogitemspageoffset) - Gets the page of catalog items from the server based on the encoded context and specified page offset, with language fields limited to the text for the current or default language.
* [GetCatalogItemDefinition](/api/capi/itemcatalog/getcatalogitemdefinition) - Reads an existing item definition from the server, with language fields limited to the current or default language.
* [SysGetCatalogItemsPage](/api/capi/itemcatalog/getcatalogitemspage) - Retrieves page of catalog items from the server, with full language fields mappings.
* [SysGetCatalogItemsPageOffset](/api/capi/itemcatalog/getcatalogitemspageoffset) - Gets the page of catalog items from the server based on the encoded context and specified page offset, with full language fields mappings.
* [SysGetCatalogItemDefinition](/api/capi/itemcatalog/getcatalogitemdefinition) - Reads an existing item definition from the server, with full language fields mappings.

#### Create
* [SysAddCatalogItem](/api/capi/itemcatalog/sysaddcatalogitem) - Create a new catalog item on the server.

#### Edit
* [SysEditCatalogItem](/api/capi/itemcatalog/syseditcatalogitem) - Update a catalog item on the server.

#### Life Cycle
* [SysPublishCatalogItem](/api/capi/itemcatalog/syspublishcatalogitem) - Publish the specified catalog item on the server.
* [SysRetireCatalogItem](/api/capi/itemcatalog/sysretirecatalogitem) - Retire the specified catalog item on the server.
* [SysRevokeCatalogItem](/api/capi/itemcatalog/sysrevokecatalogitem) - Revoke the specified catalog item on the server.

<DocCardList />