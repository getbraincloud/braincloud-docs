# App Store




The **AppStore Service** provides access to *Product / Pricing / Promotion* features, as well as integrations with supported AppStores.

*This service replaces the deprecated* **Product Service** *for purchases and product / pricing data. Currency operations have been moved to the new* [VirtualCurrency Service](/api/capi/virtualcurrency).

It includes APIs for:

* Handling In-app Purchases (IAP)
* Querying Products and Promotions

### API Summary

### Verifying In-app Purchases

The specifics of processing in-app purchases from platform to platform vary slightly, but the overall flow is as follows:

1. Client app requests the list of products to display from <%= data.branding.productName %> ( [GetSalesInventory](/api/capi/appstore/getsalesinventory) ), and keeps each product's `payload` and pricing ID (`priceData.id`, the store's product ID / SKU)
2. Client app displays the in-app store to the user. Each item knows its store ID / info and its payload
3. User selects a store item to purchase
4. Client app caches the selected item's payload with <%= data.branding.productName %> ( [CachePurchasePayloadContext](/api/capi/appstore/cachepurchasepayloadcontext) )
5. Client app invokes the purchase API from the AppStore. AppStore performs the purchase, and sends back a response with the receipt to the client
6. Client sends the receipt to <%= data.branding.productName %> for validation ( [VerifyPurchase](/api/capi/appstore/verifypurchase) )
7. <%= data.branding.productName %> performs a back-channel verification of the receipt with the AppStore, and uses the receipt info together with the cached payload to resolve the purchase to the proper product item, with the proper pricing, promotions and campaign info. If all is good, it makes any required changes to virtual currency balances

:::note

- Step 4 applies to Google Play, Apple and Meta Horizon, and is recommended for every purchase on those stores: the payload identifies the product, and records the price, promotion and any live-ops campaign the user was shown. It is also what tells several products sharing one store product ID apart, so a purchase of a shared ID without one is rejected by default. Other stores do not use the cached payload — see [CachePurchasePayloadContext](/api/capi/appstore/cachepurchasepayloadcontext) for details.

:::

The follow call requests the list of products for sale:

* [GetSalesInventory](/api/capi/appstore/getsalesinventory)
* [GetSalesInventoryByCategory](/api/capi/appstore/getsalesinventorybycategory)

This method caches the payload of the item being purchased:

* [CachePurchasePayloadContext](/api/capi/appstore/cachepurchasepayloadcontext) - call it when the user selects an item, before starting the store purchase

This method is used to confirm store receipts:

* [VerifyPurchase](/api/capi/appstore/verifypurchase) - standardized receive verification for Apple, Google, Facebook and Steam purchases


### Performing Two-part Purchases

Some AppStores, like Steam, do a real-time two-part purchase. The following new API methods handle this requirement:

* [StartPurchase](/api/capi/appstore/startpurchase) - Generic version of start purchase.
* [FinalizePurchase](/api/capi/appstore/finalizepurchase) - Generic version of finalize purchase.


### Promotions

In addition to the above purchase flows, the app can also query to see if any promotions are currently active (for display in banners, etc.), using the [GetEligiblePromotions](/api/capi/appstore/geteligiblepromotions) call – and can make manual adjustments to virtual currency balances.

The promotions API(s) are:

* [GetEligiblePromotions](/api/capi/appstore/geteligiblepromotions) - Retrieves eligible promotions.

<DocCardList />