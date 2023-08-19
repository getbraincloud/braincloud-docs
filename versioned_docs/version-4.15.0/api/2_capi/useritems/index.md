# User Items
## Overview







The **User Items** service, introduced in 4.2, is used to manage a collection of in-app items that users can be awarded, buy, sell, or trade (using virtual currency). Optionally, these items can be backed up to the blockchain.

Key concepts:

- Items are first defined in the **Item Catalog** 
- Defined items can be purchased or awarded to users, where they will be recorded as userItem instances.
- Using an item may consume it (or a portion of it - or none of it). Consumed items will automatically disappear from the user's user item inventory.
- Using an item may trigger a status effect (i.e. invulnerability for 60 seconds)
- Using an item may trigger a cool-down period (before the item can be used again) or a regeneration period (a period after which the item regenerates a "use.")


### API Summary

#### Read Items
* [GetUserItem](/api/capi/useritems/getuseritem) - Retrieves the identified user item from the server.
* [GetUserItemsPage](/api/capi/useritems/getuseritemspage) - Retrieves the page of user's items from the server based on the context. 
* [GetUserItemsPageOffset](/api/capi/useritems/getuseritemspageoffset) - Retrieves the page of user's items from the server based on the encoded context. 

#### Affect Item Owner
* [AwardUserItem](/api/capi/useritems/awarduseritem) - Allows item(s) to be awarded to a user without collecting the purchase amount. 
* [DropUserItem](/api/capi/useritems/dropuseritem) - Allows a quantity of a specified user item to be dropped, without any recovery of the money paid for the item. 
* [SellUserItem](/api/capi/useritems/selluseritem) - Allows a quantity of a specified user item to be sold. 
* [GiveUserItemTo](/api/capi/useritems/giveuseritemto) - Gifts item to the specified player.
* [ReceiveUserItemFrom](/api/capi/useritems/receiveuseritemfrom) - Retrieves and transfers the gift item from the specified player, who must have previously called giveUserItemTo.
* [PurchaseUserItem](/api/capi/useritems/purchaseuseritem) - Purchases a quantity of an item from the specified store, if the user has enough funds. 

#### Edit Item State
* [UseUserItem](/api/capi/useritems/useuseritem) - Uses the specified item, potentially consuming it.
* [UpdateUserItemData](/api/capi/useritems/updateuseritemdata) - Updates the item data on the specified user item.

#### Blockchain 
* [PublishUserItemToBlockchain](/api/capi/useritems/publishuseritemtoblockchain) - Publishes the specified item to the item management attached blockchain. 
* [RefreshBlockchainUserItems](/api/capi/useritems/refreshblockchainuseritems) - Syncs the caller's user items with the item management attached blockchain. 

<DocCardList />