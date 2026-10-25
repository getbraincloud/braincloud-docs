# User Items

The **User Items** service, introduced in 4.2, is used to manage a collection of in-app items that users can be awarded, buy, sell, or trade (using virtual currency). Optionally, these items can be backed up to the blockchain.

Key concepts:

- Items are first defined in the **Item Catalog** 
- Defined items can be purchased or awarded to users, where they will be recorded as userItem instances.
- Using an item may consume it (or a portion of it - or none of it). Consumed items will automatically disappear from the user's user item inventory.
- Using an item may trigger a status effect (i.e. invulnerability for 60 seconds)
- Using an item may trigger a cool-down period (before the item can be used again) or a regeneration period (a period after which the item regenerates a "use.")


### API Summary

#### Read Items
* [GetUserItem](/api/capi/useritems/getuseritem) - Retrieves the identified user item from the server. If includeDef is true, response includes associated itemDef with language fields limited to the current or default language.
* [GetUserItemsPage](/api/capi/useritems/getuseritemspage) - Retrieves the page of user's inventory from the server based on the context. If includeDef is true, response includes associated itemDef with each user item, with language fields limited to the current or default language.
* [GetUserItemsPageOffset](/api/capi/useritems/getuseritemspageoffset) - Retrieves the page of user's inventory from the server based on the encoded context. If includeDef is true, response includes associated itemDef with each user item, with language fields limited to the current or default language.
* [GetItemPromotionDetails](/api/capi/useritems/getitempromotiondetails) - Returns list of promotional details for the specified item definition, for promotions available to the current user.
* [GetItemsOnPromotion](/api/capi/useritems/getitemsonpromotion) - Returns all catalog items for which the current user has an eligible promotion, with optional support to filter on a specific 'category'. For each item, the most recently started promotion is considered the 'winning' promotion, if more than one promotion is active at the same time with a promotional price for same item. Optionally include the catalog item definition for each item and the promotion details for all 'winning' promotions.

#### Affect Item Owner

* [AwardUserItem](/api/capi/useritems/awarduseritem) - Allows item(s) to be awarded to a user without collecting the purchase amount. If includeDef is true, response includes associated itemDef with language fields limited to the current or default language.
* [AwardUserItemWithOptions](/api/capi/useritems/awarduseritemwithoptions) - Allows item(s) to be awarded to a user without collecting the purchase amount, with additional options.
* [DropUserItem](/api/capi/useritems/dropuseritem) - Allows a quantity of a specified user item to be dropped, without any recovery of the money paid for the item. If any quantity of the user item remains, it will be returned, potentially with the associated itemDef (with language fields limited to the current or default language).
* [SellUserItem](/api/capi/useritems/selluseritem) - Allows a quantity of a specified user item to be sold. If any quantity of the user item remains, it will be returned, potentially with the associated itemDef (with language fields limited to the current or default language), along with the currency refunded and currency balances.
* [GiveUserItemTo](/api/capi/useritems/giveuseritemto) - Gifts item to the specified player.
* [ReceiveUserItemFrom](/api/capi/useritems/receiveuseritemfrom) - Retrieves and transfers the gift item from the specified player, who must have previously called giveUserItemTo.
* [PurchaseUserItem](/api/capi/useritems/purchaseuseritem) - Purchases a quantity of an item from the specified store, if the user has enough funds. If includeDef is true, response includes associated itemDef with language fields limited to the current or default language.
* [PurchaseUserItemWithOptions](/api/capi/useritems/purchaseuseritemwithoptions) - Purchases a quantity of an item from the specified store, if the user has enough funds and purchasing for listed buy price is not disabled (and no eligible promotion) for associated catalog item definition. If includeDef is true, response includes associated itemDef with language fields limited to the current or default language. Additional 'optionsJson' to provide directives for processing, especially relevant for purchases involving stackable catalog items having a maxStackable.
* [SYS_AwardUserItemToUser](/api/capi/useritems/sysawarduseritemtouser) - Client cloud code only Sys API to allow item(s) to be awarded to the applicable user without collecting the purchase amount. If includeDef is true, response includes associated itemDef with language fields limited to the current or default language.
* [SYS_AwardUserItem](/api/capi/useritems/sysawarduseritem) - Client cloud code only call to allow item(s) to be awarded to the session user without collecting the purchase amount. If includeDef is true, response includes associated itemDef with language fields limited to the current or default language.
* [OpenBundle](/api/capi/useritems/openbundle) - Allows a quantity of a specified bundle user item to be opened. Response indicates any items and currency awards configured for the associated bundle user item's BUNDLE type item definition, plus any 'items' awarded and any 'currencies' awarded, along with the resulting currency balances. If includeItemDef is true, the associated item definition will be included in the response for any user items awarded and for the bundle user item being opened (if any quantity of the bundle user item remains), with language fields limited to the current or default language.

#### Edit Item State
* [UseUserItem](/api/capi/useritems/useuseritem) - Uses the specified item, potentially consuming it.
* [UpdateUserItemData](/api/capi/useritems/updateuseritemdata) - Updates the item data on the specified user item.

#### Blockchain

* [PublishUserItemToBlockchain](/api/capi/useritems/publishuseritemtoblockchain) - Publishes the specified item to the item management attached blockchain. Results are reported asynchronously via an RTT event.
* [RemoveUserItemFromBlockchain](/api/capi/useritems/removeuseritemfromblockchain) - Removes the specified item from the item management attached blockchain. Results are reported asynchronously via an RTT event.
* [RefreshBlockchainUserItems](/api/capi/useritems/refreshblockchainuseritems) - Syncs the caller's user items with the item management attached blockchain. Results are reported asynchronously via an RTT event.

<DocCardList />