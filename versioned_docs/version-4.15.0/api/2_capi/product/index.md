# Product
## Overview



The Product Service manages virtual currencies and handles receipt processing for the various app stores. 

:::caution
WARNING: As of <%= data.branding.productName %> 3.9, the <code>Product</code> service is being deprecated in favor of two replacement services: <code>AppStore</code> for in-app purchases and product/promotions/pricing requests and <code>VirtualCurrency</code> for currency operations. The APIs in the replacement services are similar, but improved; more generic method names and cleaner, more standardized response formats. The <code>Product</code> service and APIs will continue to be available until the end of 2019. <strong>We strongly recommend that all new apps use the AppStore and VirtualCurrency services instead.</strong> 
:::   


The Product service includes APIs for:

* Managing Virtual Currencies
* Handling In-app Purchases (IAP)
* Querying Promotions

### Virtual Currencies

The following API calls are used to manage a user's currency balances:

* <code>[GetCurrency](/api/capi/product/getcurrency)</code> - get current currency balances
* <code>[AwardCurrency](/api/capi/product/awardcurrency)</code> - call when currency is awarded. Note that 
* <code>[ConsumeCurrency](/api/capi/product/consumecurrency)</code> - call when currency is consumed
* <code>[ResetCurrency](/api/capi/product/resetcurrency)</code> - resets the users currency to zero

*Note that there are Parent and Peer versions of these APIs available as well.*

:::tip
For security reasons, the above calls are normally only available via cloud code. You can make them client callable by enabling the <em>[x] Allow Currency Calls from Client</em> compatibility flag on the <strong>Design | Core App Info | Advanced Settings</strong> page of the <em>Design Portal</em>.
:::


### In-app Purchases

The specifics of processing in-app purchases from platform to platform vary slightly, but the overall flow is as follows:

- Client app requests a list of products from <%= data.branding.productName %>
- Client app requests the localized pricing details for the products from the AppStore
- Client app displays the products with prices to the user
- User chooses to purchase a product
- Client app invokes the purchase API from the AppStore.  AppStore performs the purchase, and sends back a receipt to the client
- Client sends the receipt to <%= data.branding.productName %> for validation.  <%= data.branding.productName %> performs a back-channel verification of the receipt with the AppStore – and if all is good, makes any required changes to virtual currency balances

The follow call requests the list of products for sale:

* <code>[GetSalesInventory](/api/capi/product/getsalesinventory)</code>
* <code>[GetSalesInventoryByCategory](/api/capi/product/getsalesinventorybycategory)</code>

These methods are used to confirm store receipts:

* Facebook - <code>[ConfirmFacebookPurchase](/api/capi/product/confirmfacebookpurchase)</code>
* Google Play - <code>[ConfirmGooglePlayPurchase](/api/capi/product/confirmgoogleplaypurchase)</code>
* iOS - <code>[VerifyItunesReceipt](/api/capi/product/verifyitunesreceipt)</code>

* Windows - <code>[VerifyMicrosoftReceipt](/api/capi/product/verifymicrosoftreceipt)</code>

These methods are for performing Steam purchases:

* <code>[StartSteamTransaction](/api/capi/product/startsteamtransaction)</code>
* <code>[FinalizeSteamTransaction](/api/capi/product/finalizesteamtransaction)</code>


### Promotions

In addition to the above purchase flow, the app can also query to see if any promotions are currently active (for display in banners, etc.), using the <code>[GetEligiblePromotions](/api/capi/product/geteligiblepromotions)</code> call – and can make manual adjustments to virtual currency balances.

The promotions APIs are:

* <code>[GetEligiblePromotions](/api/capi/product/geteligiblepromotions)</code>




<DocCardList />