---
title: "Store Integration – Google"
date: "2020-12-23"
---

In this tutorial, we’ll look at integrating the Google Play store with the brainCloud marketplace. By doing this, Google Android users will have the ability to validate purchased items from the Google Play store with brainCloud.

Note that apps still have to make the purchase directly with the Google Play Store. For more information on this process refer to the [Google Play developer](https://play.google.com/console/u/0/developers) site.

## Purchase Flow

[![](https://downloads.intercomcdn.com/i/o/279464093/96a162bfb83a045f4249e48f/image.png)](https://downloads.intercomcdn.com/i/o/279464093/96a162bfb83a045f4249e48f/image.png)

## brainCloud Portal Setup

Here are the steps to configure brainCloud for Google Play purchases.

Prerequisites

- You should have set up your products in the brainCloud marketplace. Please refer to the [Marketplace Configuration](/learn/portal-tutorials/marketplace-configuration/) guide.
- You should have created the Google Store In-App products as per the Google Developer documentation

### Associate Google In-App Products with brainCloud Products

After setting up your products in the brainCloud marketplace, you’ll want to associate them with the Google product ids. In particular, we will be grabbing the product ids from the Google Play developer site and entering them into the appropriate brainCloud products.

- Log in to the [Google Play Developer](https://play.google.com/apps/publish/) site
- Select an existing app or create a new one

[![](https://downloads.intercomcdn.com/i/o/279464139/b80669dfb09a41272c386545/image.png)](https://downloads.intercomcdn.com/i/o/279464139/b80669dfb09a41272c386545/image.png)

- Fill out all necessary settings information

[![](https://downloads.intercomcdn.com/i/o/279464161/c757a91e8ac4e31e9d0ea55f/image.png)](https://downloads.intercomcdn.com/i/o/279464161/c757a91e8ac4e31e9d0ea55f/image.png)

- Upload and roll-out your APK with billing permission to one of the releases and set countries and testers accordingly

[![](https://downloads.intercomcdn.com/i/o/279464204/277ff8c336ec186366d0c751/image.png)](https://downloads.intercomcdn.com/i/o/279464204/277ff8c336ec186366d0c751/image.png)

- Make sure the testing is active. _Note: you can always upload a new updated app APK later_

[![](https://downloads.intercomcdn.com/i/o/279464238/89edfe625ce16c1286de222f/image.png)](https://downloads.intercomcdn.com/i/o/279464238/89edfe625ce16c1286de222f/image.png)

- Select your App and go to the “In-App Products” section
- Create a product from the In-app products section

[![](https://downloads.intercomcdn.com/i/o/279464270/d29b14c64aaadee5e3ed69d0/image.png)](https://downloads.intercomcdn.com/i/o/279464270/d29b14c64aaadee5e3ed69d0/image.png)

- Select your IAP and grab the Google Product ID

[![](https://downloads.intercomcdn.com/i/o/279464301/1731aed646e60a6bfd6381ca/image.png)](https://downloads.intercomcdn.com/i/o/279464301/1731aed646e60a6bfd6381ca/image.png)

(for this tutorial we’ll use the product id 2012testproduct01 as an example of configuring at brainCloud)

- Log into the brainCloud Portal
- Go to the “Design | Marketplace | Products” page
- Select the product you would like to associate with or create a new product by clicking **Adding Product**.

[![](https://downloads.intercomcdn.com/i/o/279464310/c851e11b89fcd10a798af0a6/image.png)](https://downloads.intercomcdn.com/i/o/279464310/c851e11b89fcd10a798af0a6/image.png)

- Click the “+ Edit Product” button

[![](https://downloads.intercomcdn.com/i/o/279464327/adac8a8031a21745152fde95/image.png)](https://downloads.intercomcdn.com/i/o/279464327/adac8a8031a21745152fde95/image.png)

- Find your Price (or create one) and click the edit icon

[![](https://downloads.intercomcdn.com/i/o/279464350/a13100721cafc5caf46ffd94/image.png)](https://downloads.intercomcdn.com/i/o/279464350/a13100721cafc5caf46ffd94/image.png)

- In the Edit Price dialog, click the + icon to add an entry for Google, enter your Google product id for this price – in our case 2012testproduct01.

[![](https://downloads.intercomcdn.com/i/o/279464452/e8db7965490fdc57c158ead8/image.png)](https://downloads.intercomcdn.com/i/o/279464452/e8db7965490fdc57c158ead8/image.png)

- At this point, you may want to select your price to be the default if it isn’t already selected. You can do this back on the Edit Product page.

[![](https://downloads.intercomcdn.com/i/o/279464480/b32c60ffb7631db0c181e0ca/image.png)](https://downloads.intercomcdn.com/i/o/279464480/b32c60ffb7631db0c181e0ca/image.png)

- You can now verify that your Product is coming back with the correct Google In-app Product id. Here is the output from the API Explorer “AppStore.GetSalesInventory” call using googlePlay as the storeId:

[![](https://downloads.intercomcdn.com/i/o/279464493/3be7cbe26284a76557bb9b6a/image.png)](https://downloads.intercomcdn.com/i/o/279464493/3be7cbe26284a76557bb9b6a/image.png)

### Google Certificates and Credentials

Once the products have been configured, you will need to add the appropriate Google credentials to brainCloud.

- Navigate to the Design | Core App Infor | Application IDs page, click the Google icon and notice the following fields

[![](https://downloads.intercomcdn.com/i/o/279464513/48b9b3055f9173d7a8416a59/image.png)](https://downloads.intercomcdn.com/i/o/279464513/48b9b3055f9173d7a8416a59/image.png)

- The following sections will show you where to find the appropriate information for these three fields

#### Google Package Name

- Log into the [Google Play](https://play.google.com/apps/publish/) developer site
- Select your application
- Grab the package name from Dashboard

[![](https://downloads.intercomcdn.com/i/o/279464560/0a8e078695a28e9a3ae1035f/image.png)](https://downloads.intercomcdn.com/i/o/279464560/0a8e078695a28e9a3ae1035f/image.png)

#### Google Service Account Email & p12 Certificate File

To validate purchases, brainCloud requires the usage of a **Service Account** in a Google Cloud project to communicate with the Google Play backend servers.

- Log in to the [Google Cloud Console](https://console.developers.google.com/) developer site

[![](https://downloads.intercomcdn.com/i/o/279464575/d6f604aac53c59b30dca8fd4/image.png)](https://downloads.intercomcdn.com/i/o/279464575/d6f604aac53c59b30dca8fd4/image.png)

- Create a project (or select an existing project). Note that the Google Service Account can be used across multiple Google Play apps. (by clicking the caret down icon, open the project list dialogue with select or create new project options)

[![](https://downloads.intercomcdn.com/i/o/279464586/1159fd2ed5e3f5f1fdf998ff/image.png)](https://downloads.intercomcdn.com/i/o/279464586/1159fd2ed5e3f5f1fdf998ff/image.png)

- Enable the Google Play Android Developer API for this project

[![](https://downloads.intercomcdn.com/i/o/279464606/9bfc6c0a7c61ad976be87328/image.png)](https://downloads.intercomcdn.com/i/o/279464606/9bfc6c0a7c61ad976be87328/image.png)

- Type the name of APIs or Services on the search bar field and select Google Play Android Developer API

[![](https://downloads.intercomcdn.com/i/o/279464635/42d5f65c890010da9240ed04/image.png)](https://downloads.intercomcdn.com/i/o/279464635/42d5f65c890010da9240ed04/image.png)

- Check Google Play Android Developer API is added on the list of APIs & Services

[![](https://downloads.intercomcdn.com/i/o/279464657/ff18d1a8095f3450418c4040/image.png)](https://downloads.intercomcdn.com/i/o/279464657/ff18d1a8095f3450418c4040/image.png)

- Navigate to the **Home** \->**Credentials**, click \[+ CREATE CREDENTIALS\], select **Service account**

[![](https://downloads.intercomcdn.com/i/o/279464685/b43c8a3ca0b00517d706be58/image.png)](https://downloads.intercomcdn.com/i/o/279464685/b43c8a3ca0b00517d706be58/image.png)

- Click **CREATE** to create a new Service Account

[![](https://downloads.intercomcdn.com/i/o/279464699/e46608c23b19d21d07b8851d/image.png)](https://downloads.intercomcdn.com/i/o/279464699/e46608c23b19d21d07b8851d/image.png)

- Set service account permissions and click **CONTINUE** (select a role and click continue as following then click **DONE**)

[![](https://downloads.intercomcdn.com/i/o/279464738/1db2fa0975b5c361c16a047e/image.png)](https://downloads.intercomcdn.com/i/o/279464738/1db2fa0975b5c361c16a047e/image.png)

- Click the **ADD KEY** drop-down button and select the **Create new key** option

[![](https://downloads.intercomcdn.com/i/o/279464760/f9faecbe7a916cf81a49c85c/image.png)](https://downloads.intercomcdn.com/i/o/279464760/f9faecbe7a916cf81a49c85c/image.png)

- From the pop-up dialog, select the **P12** key type and click **CREATE** (a P12 key cert will be downloaded to your local computer’s default download folder.)

[![](https://downloads.intercomcdn.com/i/o/279464771/319c14336ac9683cd7a59b5b/image.png)](https://downloads.intercomcdn.com/i/o/279464771/319c14336ac9683cd7a59b5b/image.png)

- This should create a new Service Account and immediately download the p12 key file to your computer. If for some reason the browser did not download the p12 key file try Chrome.
- Upload the p12 key file to the brainCloud portal.
- Also, the _Service Account_ should now show up on the _Credentials_ page. Important: Grab the email address and save it to the brainCloud portal – **Design | Core App Info | Application IDs**, _Google_ platform tab, _Google Service Account Email_ field.

[![](https://downloads.intercomcdn.com/i/o/279464824/95e956da2aae9147f49bab1a/image.png)](https://downloads.intercomcdn.com/i/o/279464824/95e956da2aae9147f49bab1a/image.png)

### Linking the Google Console project to the Google Play app

For the **Service Account** to be active, you will need to link the console project to the Google Play app and give the Service Account permission to View Financial Reports.

**_Note you will need to be the account owner in order to complete these steps._**

- Login back to the [Google Play Developer Console](https://play.google.com/apps/publish)
- Go to Settings | API Access

[![](https://downloads.intercomcdn.com/i/o/279464855/f176bb04f99fa75866acc286/image.png)](https://downloads.intercomcdn.com/i/o/279464855/f176bb04f99fa75866acc286/image.png)

- Select the created Google Cloud project from the above steps and link it to your Google Play Console account. Once done, you will find the linked project shows here:

[![](https://downloads.intercomcdn.com/i/o/279464872/798f6cc733a342d820d3ea45/image.png)](https://downloads.intercomcdn.com/i/o/279464872/798f6cc733a342d820d3ea45/image.png)

- Verify the created Service Account is linked to your Google Play Console account and listed here:

[![](https://downloads.intercomcdn.com/i/o/279464882/29d41510fd0b141b40758dcf/image.png)](https://downloads.intercomcdn.com/i/o/279464882/29d41510fd0b141b40758dcf/image.png)

- Click View access from the above image, it will navigate to the **Users & permissions** section

[![](https://downloads.intercomcdn.com/i/o/279464900/996f0f2b9e1ef0190d40199e/image.png)](https://downloads.intercomcdn.com/i/o/279464900/996f0f2b9e1ef0190d40199e/image.png)

- Select the **App permissions** tab and add your apps that you want to this service account to access by clicking the **Add app**

[![](https://downloads.intercomcdn.com/i/o/279464913/eb3a71fb56bfa9083da1dcd5/image.png)](https://downloads.intercomcdn.com/i/o/279464913/eb3a71fb56bfa9083da1dcd5/image.png)

- After your app, which has the in-app-products, is added to the accessible list of the service account. Switch to the Account permissions tab, and grant Financial data permission to this service account by checking the **View financial data, orders, and cancellation survey responses** checkbox.

[![](https://downloads.intercomcdn.com/i/o/279464942/04827fe57214b7514aa6e5df/image.png)](https://downloads.intercomcdn.com/i/o/279464942/04827fe57214b7514aa6e5df/image.png)

- You should now be able to validate your Google In-app product purchases with brainCloud.

### Testing in-app-product purchases with an example app

- After your testing app gets reviewed by Google Play, you can download and install it on your test device.

[![](https://downloads.intercomcdn.com/i/o/279465169/5ef7b8ff97c1afe541d9d9a4/image.png)](https://downloads.intercomcdn.com/i/o/279465169/5ef7b8ff97c1afe541d9d9a4/image.png)

- Login to brainCloud with any authentication methods

[![](https://downloads.intercomcdn.com/i/o/279465209/04de76929bd67252ecb8eaa3/image.png)](https://downloads.intercomcdn.com/i/o/279465209/04de76929bd67252ecb8eaa3/image.png)

- Launch the purchase flow from the app to buy the products

[![](https://downloads.intercomcdn.com/i/o/279465242/9e4231a4735f1d59d6f12487/image.png)](https://downloads.intercomcdn.com/i/o/279465242/9e4231a4735f1d59d6f12487/image.png)

- Buy the products and verify the purchases with brainCloud

[![](https://downloads.intercomcdn.com/i/o/279465287/3f34969c268687e4c436dc1a/image.png)](https://downloads.intercomcdn.com/i/o/279465287/3f34969c268687e4c436dc1a/image.png)

- Check transactions from the brainCloud portal

[![](https://downloads.intercomcdn.com/i/o/279465302/3022a2a67f8adf64f1c5a4c7/image.png)](https://downloads.intercomcdn.com/i/o/279465302/3022a2a67f8adf64f1c5a4c7/image.png)

### Confirming the purchase Client Side

After making a purchase client-side, GooglePlay will return a receipt with an orderId, productId, and purchaseToken that is used by the [VerifyPurchase](/api/capi/product/confirmgoogleplaypurchase) API call.

#### Code Snippets of Integrating the Google Play Billing Library into your Android app - Android Studio

- when billing clients starting a connection
```js
@Override
public void onBillingSetupFinished(BillingResult billingResult) {
    // \[start querySku\]
    if (billingResult.getResponseCode() ==  BillingClient.BillingResponseCode.OK) {
        // The BillingClient is ready. You can query purchases here.
        List<String> skuList = new ArrayList<>();
        skuList.add("2012testproduct01");
        skuList.add("2012testproduct02");
        Log.e(TAG, "buy product...billingResult2");
        SkuDetailsParams.Builder params = SkuDetailsParams.newBuilder();
        params.setSkusList(skuList).setType(BillingClient.SkuType.INAPP);
        billingClient.querySkuDetailsAsync(params.build(),
            new SkuDetailsResponseListener() {
                @Override
                public void onSkuDetailsResponse(BillingResult billingResult,
                                                  List<SkuDetails> skuDetailsList) {
                    // Process the result.
                    if (billingResult == null) {
                        Log.wtf(TAG, "onSkuDetailsResponse: null BillingResult");
                        return;
                    }
                    int responseCode = billingResult.getResponseCode();
                    String debugMessage = billingResult.getDebugMessage();
                    switch (responseCode) {
                        case BillingClient.BillingResponseCode.OK:
                            Log.i(TAG, "onSkuDetailsResponse: " + responseCode + " " + debugMessage);
                            if (skuDetailsList == null) {
                                Log.w(TAG, "onSkuDetailsResponse: null SkuDetails list");
                                skusWithSkuDetails.postValue(Collections.<String, SkuDetails>emptyMap());
                            } else {
                                Map<String, SkuDetails> newSkusDetailList = new HashMap<String, SkuDetails>();
                                for (SkuDetails skuDetails : skuDetailsList) {                                   newSkusDetailList.put(skuDetails.getSku(), skuDetails);
                                    BillingFlowParams billingFlowParams = BillingFlowParams.newBuilder()
                                            .setSkuDetails(skuDetails)
                                            .build();
                                    int responseCodeF = billingClient.launchBillingFlow(MainActivity.this, billingFlowParams).getResponseCode();
                                }                               skusWithSkuDetails.postValue(newSkusDetailList);
                                Log.i(TAG, "onSkuDetailsResponse: count " + newSkusDetailList.size());
                            }
                            break;
                        case BillingClient.BillingResponseCode.SERVICE\_DISCONNECTED:
                        case BillingClient.BillingResponseCode.SERVICE\_UNAVAILABLE:
                        case BillingClient.BillingResponseCode.BILLING\_UNAVAILABLE:
                        case BillingClient.BillingResponseCode.ITEM\_UNAVAILABLE:
                        case BillingClient.BillingResponseCode.DEVELOPER\_ERROR:
                        case BillingClient.BillingResponseCode.ERROR:
                            Log.e(TAG, "onSkuDetailsResponse: " + responseCode + " " + debugMessage);
                            break;
                        case BillingClient.BillingResponseCode.USER\_CANCELED:
                            Log.i(TAG, "onSkuDetailsResponse: " + responseCode + " " + debugMessage);
                            break;
                        // These response codes are not expected.
                        case BillingClient.BillingResponseCode.FEATURE\_NOT\_SUPPORTED:
                        case BillingClient.BillingResponseCode.ITEM\_ALREADY\_OWNED:
                        case BillingClient.BillingResponseCode.ITEM\_NOT\_OWNED:
                        default:
                            Log.wtf(TAG, "onSkuDetailsResponse: " + responseCode + " " + debugMessage);
                    }
                }
            });
    }
    // \[Start query purchase\]
    if (!billingClient.isReady()) {
        Log.e(TAG, "queryPurchases: BillingClient is not ready");
    }
    Log.d(TAG, "queryPurchases: INAPP");
    Purchase.PurchasesResult result = billingClient.queryPurchases(BillingClient.SkuType.INAPP);
    if (result == null) {
        Log.i(TAG, "queryPurchases: null purchase result");
        processPurchases(null);
    } else {
        if (result.getPurchasesList() == null) {
            Log.i(TAG, "queryPurchases: null purchase list");
            processPurchases(null);
        } else {
            processPurchases(result.getPurchasesList());
        }
    }
}
```
- Verify purchases with brainCloud inside onPurchasesUpdated() method
```js
public void onPurchasesUpdated(BillingResult billingResult, List<Purchase> purchases) {
    if (billingResult == null) {
        Log.wtf(TAG, "onPurchasesUpdated: null BillingResult");
        return;
    }
    int responseCode = billingResult.getResponseCode();
    String debugMessage = billingResult.getDebugMessage();
    Log.d(TAG, "onPurchasesUpdated: $responseCode $debugMessage");
    switch (responseCode) {
        case BillingClient.BillingResponseCode.OK:
            if (purchases == null) {
                Log.d(TAG, "onPurchasesUpdated: null purchase list");
                processPurchases(null);
            }else{
                processPurchases(purchases);
                //bc purchase verify
                for (Purchase purchase : purchases) {
                    String storeId = "googlePlay";
                    JSONObject receiptData = new JSONObject();
                    String productId = purchase.getSku();
                    String orderId = purchase.getOrderId();
                    String token = purchase.getPurchaseToken();
                    String developerPayload = purchase.getDeveloperPayload();
                    try {
                        receiptData.put("productId", productId);
                        receiptData.put("orderId", orderId);
                        receiptData.put("token", token);
                        receiptData.put("developerPayload", developerPayload);
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }
                    String receiptDataS = receiptData.toString();
                    //verify purchase from brainCloud                 \_bc.GetWrapper().getAppStoreService().verifyPurchase(storeId, receiptDataS, theCallback);
                }
            }
            break;
        case BillingClient.BillingResponseCode.USER\_CANCELED:
            Log.i(TAG, "onPurchasesUpdated: User canceled the purchase");
            break;
        case BillingClient.BillingResponseCode.ITEM\_ALREADY\_OWNED:
            Log.i(TAG, "onPurchasesUpdated: The user already owns this item");
            break;
    }
}
```
#### Code Snippets of Integrating the Google Play Billing Library into your Android app - Unity
```js
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
using System.Threading.Tasks;
using UnityEngine.Purchasing;
using BrainCloud.JsonFx.Json;
public class BrainCloudInterface : MonoBehaviour, IStoreListener //needed for unity iap
{
    //these are simply references to the unity specific canvas system
    Text status;
    string statusText;
    string email;
    string authCode;
    string idToken;
    //purchase
    string productId;
    string orderId;
    string purchaseToken;
    string developerPayload;
    //Google info 
    Dictionary<string, object> wrapper;
    string store;
    string payload;
    Dictionary<string, object> gpDetails;
    string gpJson;
    string gpSig;
    Dictionary<string, object> gpJsonDict;
    //for purchasing
    private static IStoreController m\_StoreController;          // The Unity Purchasing system.
    private static IExtensionProvider m\_StoreExtensionProvider; // The store-specific Purchasing subsystems.
    public static string kProductIDConsumable = "bc\_test\_orb";
    // Use this for initialization
    void Start()
    {
        //allow the people who sign in to change profiles. 
        BCConfig.\_bc.SetAlwaysAllowProfileSwitch(true);
        BCConfig.\_bc.Client.EnableLogging(true);
        //unity's ugly way to look for gameobjects
        status = GameObject.Find("Status").GetComponent<Text>();
        // If we haven't set up the Unity Purchasing reference
        if (m\_StoreController == null)
        {
            // Begin to configure our connection to Purchasing
            InitializePurchasing();
        }
    }
    void Update()
    {
        status.text = statusText;
    }
    public void OnAuthEmail()
    {
        BCConfig.\_bc.AuthenticateEmailPassword("ryan.daniel.ruth@gmail.com", "password", true, OnSuccess\_AuthenticateEmail, OnError\_AuthenticateEmail);
    }
    public void OnSuccess\_AuthenticateEmail(string responseData, object cbObject)
    {
        statusText = "Logged into braincloud!\\n" + responseData;
    }
    public void OnError\_AuthenticateEmail(int statusCode, int reasonCode, string statusMessage, object cbObject)
    {
        statusText = "Failed to Login to braincloud...\\n" + statusMessage + "\\n" + reasonCode;
    }
    //purchasing 
    public void InitializePurchasing()
    {
        // If we have already connected to Purchasing ...
        if (IsInitialized())
        {
            // ... we are done here.
            return;
        }
        // Create a builder, first passing in a suite of Unity provided stores.
        var configurationBuilder = ConfigurationBuilder.Instance(Google.Play.Billing.GooglePlayStoreModule.Instance()); //For Google purchasing specifically
        //var configurationBuilder = ConfigurationBuilder.Instance(StandardPurchasingModule.Instance());
        // Add a product to sell / restore by way of its identifier, associating the general identifier
        // with its store-specific identifiers.
        configurationBuilder.AddProduct(kProductIDConsumable, ProductType.Consumable);
        // Kick off the remainder of the set-up with an asynchrounous call, passing the configuration 
        // and this class' instance. Expect a response either in OnInitialized or OnInitializeFailed.
        UnityPurchasing.Initialize(this, configurationBuilder);
    }
    private bool IsInitialized()
    {
        // Only say we are initialized if both the Purchasing references are set.
        return m\_StoreController != null && m\_StoreExtensionProvider != null;
    }
    public void OnGooglePurchase()
    {
        // Buy the consumable product using its general identifier. Expect a response either 
        // through ProcessPurchase or OnPurchaseFailed asynchronously.
        BuyProductID(kProductIDConsumable);
    }
    public void OnVerifyPurchase()
    {
        gpJsonDict = (Dictionary<string, object>)MiniJson.JsonDecode(gpJson);
        Dictionary<string, object> receiptData = new Dictionary<string, object>();
        receiptData.Add("productId", gpJsonDict\["productId"\]);
        receiptData.Add("orderId", gpJsonDict\["orderId"\]);
        receiptData.Add("token", gpJsonDict\["purchaseToken"\]);
        //Developer payload is not supported
        //Google Play deprecated developer payload and is replacing it with alternatives that are more meaningful and contextual. 
        receiptData.Add("developerPayload", ""); //So pass in empty string for developer payload.
        string receiptDataString = JsonWriter.Serialize(receiptData);
        BCConfig.\_bc.AppStoreService.VerifyPurchase("googlePlay", receiptDataString, OnSuccess\_VerifyPurchase, OnError\_VerifyPurchase);
    }
    public void OnSuccess\_VerifyPurchase(string responseData, object cbObject)
    {
        statusText = "Verified Purchase!\\n" + responseData;
    }
    public void OnError\_VerifyPurchase(int statusCode, int reasonCode, string statusMessage, object cbObject)
    {
        statusText = "Failed to Verify Purchase...\\n" + statusMessage + "\\n" + reasonCode;
    }
    void BuyProductID(string productId)
    {
        // If Purchasing has been initialized ...
        if (IsInitialized())
        {
            // ... look up the Product reference with the general product identifier and the Purchasing 
            // system's products collection.
            Product product = m\_StoreController.products.WithID(productId);
            // If the look up found a product for this device's store and that product is ready to be sold ... 
            if (product != null && product.availableToPurchase)
            {
                Debug.Log(string.Format("Purchasing product asychronously: '{0}'", product.definition.id));
                // ... buy the product. Expect a response either through ProcessPurchase or OnPurchaseFailed 
                // asynchronously.
                m\_StoreController.InitiatePurchase(product);
            }
            // Otherwise ...
            else
            {
                // ... report the product look-up failure situation  
                Debug.Log("BuyProductID: FAIL. Not purchasing product, either is not found or is not available for purchase");
            }
        }
        // Otherwise ...
        else
        {
            // ... report the fact Purchasing has not succeeded initializing yet. Consider waiting longer or 
            // retrying initiailization.
            Debug.Log("BuyProductID FAIL. Not initialized.");
        }
    }
    public void OnShowGoogleStats()
    {
        statusText = "STORE: " + store +"\\nPAYLOAD: " + payload + "\\nJSON: " + gpJson + "\\nSIGNATURE: " + gpSig;
    }
    public void OnShowJSONStats()
    {
        gpJsonDict = (Dictionary<string, object>)MiniJson.JsonDecode(gpJson);
        statusText = "PRODUCTID: " + gpJsonDict\["productId"\] + "\\n:ORDERID " + gpJsonDict\["orderId"\] + "\\nTOKEN: " + gpJsonDict\["purchaseToken"\];
    }
    //  
    // --- IStoreListener callbacks
    //
    public void OnInitialized(IStoreController controller, IExtensionProvider extensions)
    {
        // Purchasing has succeeded initializing. Collect our Purchasing references.
        statusText = "OnInitialized: Google Store PASS";
        //Debug.Log("OnInitialized: PASS");
        // Overall Purchasing system, configured with products for this application.
        m\_StoreController = controller;
        // Store specific subsystem, for accessing device-specific store features.
        m\_StoreExtensionProvider = extensions;
    }
    public void OnInitializeFailed(InitializationFailureReason error)
    {
        // Purchasing set-up has not succeeded. Check error for reason. Consider sharing this reason with the user.
        statusText = "OnInitializeFailed InitializationFailureReason:" + error;
        //statusText = "blah bala";
        //Debug.Log("OnInitializeFailed InitializationFailureReason:" + error);
    }
    public PurchaseProcessingResult ProcessPurchase(PurchaseEventArgs args)
    {
        // A consumable product has been purchased by this user.
        if (String.Equals(args.purchasedProduct.definition.id, kProductIDConsumable, StringComparison.Ordinal))
        {
            //Debug.Log(string.Format("ProcessPurchase: PASS. Product: '{0}'", args.purchasedProduct.definition.id));
            statusText = "ProcessPurchase: PASS. Product: " + args.purchasedProduct.definition.id;
        }
        else
        {
            //Debug.Log(string.Format("ProcessPurchase: FAIL. Unrecognized product: '{0}'", args.purchasedProduct.definition.id));
            statusText = "ProcessPurchase: FAIL. Unrecognized product: " + args.purchasedProduct.definition.id;
        }
        wrapper = (Dictionary<string, object>)MiniJson.JsonDecode(args.purchasedProduct.receipt);
        store = (string)wrapper\["Store"\];
        payload = (string)wrapper\["Payload"\];
        gpDetails = (Dictionary<string, object>)MiniJson.JsonDecode(payload);
        gpJson = (string)gpDetails\["json"\];
        gpSig = (string)gpDetails\["signature"\];
        // Return a flag indicating whether this product has completely been received, or if the application needs 
        // to be reminded of this purchase at next app launch. Use PurchaseProcessingResult.Pending when still 
        // saving purchased products to the cloud, and when that save is delayed. 
        return PurchaseProcessingResult.Complete;
    }
    public void OnPurchaseFailed(Product product, PurchaseFailureReason failureReason)
    {
        // A product purchase attempt did not succeed. Check failureReason for more detail. Consider sharing 
        // this reason with the user to guide their troubleshooting actions.
        //Debug.Log(string.Format("OnPurchaseFailed: FAIL. Product: '{0}', PurchaseFailureReason: {1}", product.definition.storeSpecificId, failureReason));
        statusText = "OnPurchaseFailed: FAIL. Product: " + product.definition.storeSpecificId + ", PurchaseFailureReason: " + failureReason;
    }
}
```
Here is the [repository](https://github.com/getbraincloud/examples-unity/tree/develop/GoogleIAP) of the above Unity example.
