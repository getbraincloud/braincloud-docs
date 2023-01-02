---
title: "brainCloud + Unity + Steam Integration"
date: "2019-05-22"
---

Steam does not offer native support for the Unity Game Engine. A third party git library was used to integrate Steam features into Unity.  

# Required Materials

Download Steamworks SDK from Steam

[https://partner.steamgames.com/doc/sdk](https://partner.steamgames.com/doc/sdk)

Steamworks.Net version 12.0.0 was used.  
[https://github.com/rlabrecque/Steamworks.NET/releases](https://github.com/rlabrecque/Steamworks.NET/releases)

brainCloud version 3.11 was used.  
[https://github.com/getbraincloud/braincloud-csharp](https://github.com/getbraincloud/braincloud-csharp)

Unity 2018.2.5f1 was used

[https://unity3d.com/get-unity/download/archive](https://unity3d.com/get-unity/download/archive)

# Configure Steam Platform with brainCloud Design Portal

Enter in the Steam App Id and Steam Publisher Key into the brainCloud Design Portal via **Design -> Core App Info -> Application IDs.**  

**Steam App Id** \- Retrievable via Steam’s partner network.

**Steam Publisher Key** \- Also referred to as WEB API key within Steam.  From the Steam partner network, Users & Permissions.  Select the correct group, and select “Create WepAPI Key” from the right panel.  

# Configure Steamworks.Net

Update **Plugins\\Steamworks.NET\\redist\\steam\_appid.txt** with the appropriate steam app Id.  

Update **SteamManager.cs**,  
```js
if (SteamAPI.RestartAppIfNecessary(AppId\_t.Invalid))
```
To
```js
if (SteamAPI.RestartAppIfNecessary((AppId\_t)<yoursteamappid>) 
```
# Setup Steamworks.Net
```js
using Steamworks;

public void SetupSteamManager()
{
    if (SteamManager.Initialized)
    {
        m\_bSteamInitialized = true;
        // required callback for authenticating, view Steamworks.Net + brainCloud Authentication
        m\_getAuthSessionTicketResponse = Callback<GetAuthSessionTicketResponse\_t>.Create(OnGetAuthSessionTicketResponse);
        // required callback for In-App Purchases, Steamworks.Net + brainCloud Microtransactions
        m\_transactionCallback = Callback<MicroTxnAuthorizationResponse\_t>.Create(OnTransactionResponse);
    }        
}
```
# Steamworks.Net + brainCloud Authentication
```js
using BrainCloud;

private bool m\_bAttachSteam = false; // used for after we receive the auth response
private uint m\_ticketSize;           // cache ticket size
private byte\[\] m\_ticket;             // cache auth ticket

// requests an auth ticket from Steam for use later
public void AttachSteamAccount(bool in\_bAttach = false, SuccessCallback in\_success = null, FailureCallback in\_fail = null)
{
    if (SteamManager.Initialized)
    {
        m\_bAttachSteam = in\_bAttach;
        m\_steamAuthSuccess = in\_success;
        m\_steamFailure = in\_fail;

        m\_ticket = new byte\[1024\];
        SteamUser.GetAuthSessionTicket(m\_ticket, 1024, out m\_ticketSize);
    }
}

public void MergeSteamAccount(SuccessCallback in\_success = null, FailureCallback in\_fail = null, object in\_obj = null)
{
    if (m\_steamIdStr != "" && m\_authToken != "")
    {
        BCWrapper.IdentityService.MergeSteamIdentity(m\_steamIdStr, m\_authToken, in\_success, in\_fail, in\_obj);
        m\_steamIdStr = ""; 
        m\_authToken  = "";
    }
}

private string m\_authToken = "";    // will cache this, if we need it for a merge
private string m\_steamIdStr = "";   // will cache this, if we need it for a merge
private void OnGetAuthSessionTicketResponse(GetAuthSessionTicketResponse\_t pCallback)
{
    CSteamID steamId = SteamUser.GetSteamID();
    if (pCallback.m\_hAuthTicket != HAuthTicket.Invalid && m\_ticketSize != 0)
    {
        m\_steamIdStr = steamId.ToString();
        // IMPORTANT!!! CONVERT TO HEX STRING
        m\_authToken = BitConverter.ToString(m\_ticket, 0, (int)m\_ticketSize).Replace("-", string.Empty);

        if (!m\_bAttachSteam)
        {
           BCWrapper.AuthenticateSteam(m\_steamIdStr, m\_authToken, false, m\_steamAuthSuccess, m\_steamFailure, m\_steamObj);
        }
        else
        {
           BCWrapper.IdentityService.AttachSteamIdentity(m\_steamIdStr, m\_authToken, m\_steamAuthSuccess, m\_steamFailure, m\_steamObj);
        }
    }
}
```
# Steamworks.Net + brainCloud Microtransactions / In-App Purchases
```js
 // steam is a two-step process, where you start a purchase, and then finalize it

private SuccessCallback m\_successCallback;
private FailureCallback m\_failureCallback;
private string m\_delayedTransactionId = "";

public void StartPurchase(string in\_languageCode, string in\_storeProductId, SuccessCallback in\_success = null, FailureCallback in\_fail = null)
{
    m\_successCallback = in\_success;
    m\_failureCallback = in\_failure;
    m\_delayedTransactionId = "";

    Dictionary<string, object> purchaseData = new Dictionary<string, object>();
    purchaseData\["language"\] = in\_languageCode;
    purchaseData\["itemId"\] = in\_storeProductId;

    BCWrapper.Client.AppStoreService.StartPurchase("steam", JsonWriter.Serialize(purchaseData), onSteamStartPurchaseSuccess, m\_failureCallback);
}

private void onSteamStartPurchaseSuccess(string in\_json, object obj)
{
    Dictionary<string, object> jsonMessage = (Dictionary<string, object>)JsonReader.Deserialize(in\_json);
    Dictionary<string, object> jsonData = (Dictionary<string, object>)jsonMessage\["data"\];
    
    // brainCloud has given a transaction ID for this interaction, the STEAM overlay will popup
    // to finalize the purchase for the user        
    m\_delayedTransactionId = (string)jsonData\["transactionId"\];
}
// callback was created during Steam Setup 
private void OnTransactionResponse(MicroTxnAuthorizationResponse\_t pCallback)
{
   Dictionary<string, object> transactionData = new Dictionary<string, object>();
   transactionData\["transId"\] = m\_delayedTransactionId;
   BCWrapper.AppStoreService.FinalizePurchase("steam", m\_delayedTransactionId, JsonWriter.Serialize(transactionData), m\_successCallback, m\_failureCallback);

   m\_delayedTransactionId = "";
}
```
# More Info

- Often times the Steam Overlay does not render/show up during editor or developer standalone builds.  You will need to upload a build using the steam SDK content uploader, to ensure the overlay is properly rendered over Unity’s engine.  
      
    
- All Steam purchases by default are in sandbox mode, to help initial integration and testing, prior to release.  Visit the brainCloud design portal Navigate to **Design -> Core App Info -> Advanced Settings**.  At the bottom is a check mark to distinguish if Steam Store purchases should be in sandbox mode or not.  Ensure this is unselected before going to the marketplace.
