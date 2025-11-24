# User Items

The **User Items** service, introduced in 4.2, is used to manage a collection of in-app items that users can be awarded, buy, sell, or trade (using virtual currency). Optionally, these items can be backed up to the blockchain.

Key concepts:

- Items are first defined in the **Item Catalog** 
- Defined items can be purchased or awarded to users, where they will be recorded as userItem instances.
- Using an item may consume it (or a portion of it - or none of it). Consumed items will automatically disappear from the user's user item inventory.
- Using an item may trigger a status effect (i.e. invulnerability for 60 seconds)
- Using an item may trigger a cool-down period (before the item can be used again) or a regeneration period (a period after which the item regenerates a "use.")


### API Summary

* [SYS_AwardUserItemToUser](/api/capi/useritems/sysawarduseritemtouser) - Client cloud code only Sys API to allow item(s) to be awarded to the applicable user without collecting the purchase amount. If includeDef is true, response includes associated itemDef with language fields limited to the current or default language.
* [SYS_AwardUserItem](/api/capi/useritems/sysawarduseritem) - Client cloud code only call to allow item(s) to be awarded to the session user without collecting the purchase amount. If includeDef is true, response includes associated itemDef with language fields limited to the current or default language.

:::tip
All the client APIs that the names beigin with <strong>"Sys"</strong> <em>are</em> also available to S2S. 
For the usages of the S2S user APIs (if they are not listed at this section),
refer to <%= data.branding.productName %> client [useritems](/api/capi/useritems) APIs.
:::

<DocCardList />