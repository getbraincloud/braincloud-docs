---
title: "Store Integration - iOS"
date: "2015-08-11"
---

In this tutorial, we'll look at integrating the iTunes iOS store with the brainCloud marketplace. By doing this, iOS users will have the ability to purchase iTunes iOS items. The brainCloud backend will verify the purchase directly with iTunes, making this a secure transaction for your app.

Note that apps still have to make the purchase directly with iTunes. For more information on this process refer to the Apple developer [In-App Purchase Programming Guide](https://developer.apple.com/library/ios/documentation/NetworkingInternet/Conceptual/StoreKitGuide/Introduction.html).

## Purchase Flow

In general terms, the transaction flow of a purchase is as follows:

[![iTunes Purchase Sequence Diagram](images/iTunes-Purchase-Sequence-Diagram1.jpg)](/apidocs/wp-content/uploads/2015/08/iTunes-Purchase-Sequence-Diagram1.jpg)

- The App requests the "itunes" product inventory from brainCloud which returns a list of products, their reference prices (as configured in the brainCloud portal) and their iTunes ids.
- For the iTunes products returned from brainCloud, the App requests their real prices (in the user's currency) from iTunes.
- The user selects an item to purchase
- The App sends a request to iTunes to addPayment which brings up the iTunes purchase dialogs in your app. Eventually, a receipt is returned from iTunes assuming the user goes through with the purchase.
- The App asks brainCloud to verify the iTunes receipt that was received from the iTunes store. Assuming this is a valid receipt, brainCloud will award any virtual currencies attached to this product.
- The App finishes the transaction with iTunes to signify that the product has been awarded.

## Portal Setup

Here are the steps to configure brainCloud for iTunes purchases.

### Prerequisites

- You should have set up your products in the brainCloud marketplace. Please refer to the [Marketplace Configuration](/apidocs/portal-usage/marketplace-configuration/) guide.
- You should have created the iTunes In-App products per the Apple Developer documentation

### Associate iTunes Products with brainCloud Products

After setting up your products in the brainCloud marketplace, you'll want to associate the iTunes product ids. In particular, we will be grabbing the product ids from iTunes and entering them into the appropriate brainCloud products.

- Log into [iTunes Connect](https://itunesconnect.apple.com/)
- Select your App from the list and go to the "In-App Purchases" tab
- Select your IAP and grab the Apple Product ID  
    
    [![2015-11-10_12-02-52](images/2015-11-10_12-02-52.png)](/apidocs/wp-content/uploads/2015/08/2015-11-10_12-02-52.png)
    
- Log into the [brainCloud Portal](https://portal.braincloudservers.com/)
- Go to the "Marketplace | Products" page in the Design tab  
    
    [![2015-08-10_08-36-53](images/2015-08-10_08-36-53.png)](/apidocs/wp-content/uploads/2015/08/2015-08-10_08-36-53.png)
    
- Select the product you would like to associate.  
    
    [![2015-08-11_12-32-21](images/2015-08-11_12-32-21.png)](/apidocs/wp-content/uploads/2015/08/2015-08-11_12-32-21.png)
    
- Click the "+ Edit Product" button  
    
    [![2015-08-11_12-33-07](images/2015-08-11_12-33-07.png)](/apidocs/wp-content/uploads/2015/08/2015-08-11_12-33-07.png)
    
- Find your Price (or create one) and click the edit icon  
    
    [![2015-08-11_12-48-07](images/2015-08-11_12-48-07.png)](/apidocs/wp-content/uploads/2015/08/2015-08-11_12-48-07.png)
    
- In the Edit Price dialog, click the + icon to add an entry for Apple  
    
    [![2015-08-11_12-49-42](images/2015-08-11_12-49-42.png)](/apidocs/wp-content/uploads/2015/08/2015-08-11_12-49-42.png)
    
- Enter your iTunes product id for this price - in our case "com.braincloud.mygame.goldsack1". Note that you can enter separate iPhone/iPad ids if your app is \*not\* a universal binary (or for some other reason uses two different product ids)  
    
    [![2015-08-11_12-51-33](images/2015-08-11_12-51-33.png)](/apidocs/wp-content/uploads/2015/08/2015-08-11_12-51-33.png)
    
- At this point you may want to select your price to be the default if it isn't already selected. You can do this back in the Edit Product page.  
    
    [![2015-08-11_12-56-25](images/2015-08-11_12-56-25.png)](/apidocs/wp-content/uploads/2015/08/2015-08-11_12-56-25.png)
    
- You can now verify that your Product is coming back with the correct iTunes id. Here is the output from the API Explorer "Product.GetInventory" call  
    
    [![2015-11-10_12-06-45](images/2015-11-10_12-06-45.png)](/apidocs/wp-content/uploads/2015/08/2015-11-10_12-06-45.png)
    

### Auto-Renewable Subscriptions

If you are using auto-renewable subscriptions, you will need to add your iTunes IAP shared secret to brainCloud.

- Log into [iTunes Connect](https://itunesconnect.apple.com/)
- Select your App from the list and go to the "In-App Purchases" tab
- Click the "View or generate a shared secret" link at the bottom of the IAP list  
    
    [![2015-08-11_10-27-14](images/2015-08-11_10-27-14.png)](/apidocs/wp-content/uploads/2015/08/2015-08-11_10-27-14.png)
    
- Grab the shared secret from the page (or generate a new one if none exists)  
    
    [![2015-08-11_10-28-15](images/2015-08-11_10-28-151.png)](/apidocs/wp-content/uploads/2015/08/2015-08-11_10-28-151.png)
    
- Log into the [brainCloud Portal](https://portal.braincloudservers.com/)
- Go to the "Core App Info | Application IDs" page in the Design tab for your app  
    
    [![2015-08-07_14-05-15](images/2015-08-07_14-05-15.png)](/apidocs/wp-content/uploads/2015/08/2015-08-07_14-05-15.png)
    
- Click the Apple button  
    
    [![2015-08-11_12-15-06](images/2015-08-11_12-15-061.png)](/apidocs/wp-content/uploads/2015/08/2015-08-11_12-15-061.png)
    
- Enter the iTunes Shared Secret  
    
    [![2015-08-11_12-16-45](images/2015-08-11_12-16-45.png)](/apidocs/wp-content/uploads/2015/08/2015-08-11_12-16-45.png)
