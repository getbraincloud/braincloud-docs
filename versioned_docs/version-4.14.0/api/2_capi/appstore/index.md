# App Store
## Overview



The **AppStore Service** provides access to *Product / Pricing / Promotion* features, as well as integrations with supported AppStores.

*This service replaces the deprecated* **Product Service** *for purchases and product / pricing data. Currency operations have been moved to the new* [VirtualCurrency Service](/api/capi/virtualcurrency).

It includes APIs for:

* Handling In-app Purchases (IAP)
* Querying Products and Promotions

### API Summary

### Verifying In-app Purchases

The specifics of processing in-app purchases from platform to platform vary slightly, but the overall flow is as follows:

- Client app requests a list of products from <%= data.branding.productName %> ( [GetSalesInventory](/api/capi/appstore/getsalesinventory) )
- Client app requests the localized pricing details for the products from the AppStore
- Client app displays the products with prices to the user
- User chooses to purchase a product
- Client app invokes the purchase API from the AppStore.  AppStore performs the purchase, and sends back a receipt to the client
- Client sends the receipt to <%= data.branding.productName %> for validation ( [VerifyPurchase](/api/capi/appstore/verifypurchase) ).  <%= data.branding.productName %> performs a back-channel verification of the receipt with the AppStore – and if all is good, makes any required changes to virtual currency balances

The follow call requests the list of products for sale:

* [GetSalesInventory](/api/capi/appstore/getsalesinventory)
* [GetSalesInventoryByCategory](/api/capi/appstore/getsalesinventorybycategory)

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