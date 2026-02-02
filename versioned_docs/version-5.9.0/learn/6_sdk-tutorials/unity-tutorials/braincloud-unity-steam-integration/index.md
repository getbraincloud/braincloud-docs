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

**Steam App Id** - Retrievable via Steam’s partner network.

**Steam Publisher Key** - Also referred to as WEB API key within Steam.  From the Steam partner network, Users & Permissions.  Select the correct group, and select “Create WepAPI Key” from the right panel.  

# Configure Steamworks.Net

Update **Plugins\Steamworks.NET\redist\steam_appid.txt** with the appropriate steam app Id.  

Update **SteamManager.cs**,  
```js
if (SteamAPI.RestartAppIfNecessary(AppId_t.Invalid))
```
To
```js
if (SteamAPI.RestartAppIfNecessary((AppId_t)<yoursteamappid>) 
```
# Setup Steamworks.Net
```js
using Steamworks;

public void SetupSteamManager()
{
    if (SteamManager.Initialized)
    {
        m_bSteamInitialized = true;
        // required callback for authenticating, view Steamworks.Net + brainCloud Authentication
        m_getAuthSessionTicketResponse = Callback<GetAuthSessionTicketResponse_t>.Create(OnGetAuthSessionTicketResponse);
        // required callback for In-App Purchases, Steamworks.Net + brainCloud Microtransactions
        m_transactionCallback = Callback<MicroTxnAuthorizationResponse_t>.Create(OnTransactionResponse);
    }        
}
```
# Steamworks.Net + brainCloud Authentication
```js
using BrainCloud;

private bool m_bAttachSteam = false; // used for after we receive the auth response
private uint m_ticketSize;           // cache ticket size
private byte[] m_ticket;             // cache auth ticket

// requests an auth ticket from Steam for use later
public void AttachSteamAccount(bool in_bAttach = false, SuccessCallback in_success = null, FailureCallback in_fail = null)
{
    if (SteamManager.Initialized)
    {
        m_bAttachSteam = in_bAttach;
        m_steamAuthSuccess = in_success;
        m_steamFailure = in_fail;

        m_ticket = new byte[1024];
        SteamUser.GetAuthSessionTicket(m_ticket, 1024, out m_ticketSize);
    }
}

public void MergeSteamAccount(SuccessCallback in_success = null, FailureCallback in_fail = null, object in_obj = null)
{
    if (m_steamIdStr != "" && m_authToken != "")
    {
        BCWrapper.IdentityService.MergeSteamIdentity(m_steamIdStr, m_authToken, in_success, in_fail, in_obj);
        m_steamIdStr = ""; 
        m_authToken  = "";
    }
}

private string m_authToken = "";    // will cache this, if we need it for a merge
private string m_steamIdStr = "";   // will cache this, if we need it for a merge
private void OnGetAuthSessionTicketResponse(GetAuthSessionTicketResponse_t pCallback)
{
    CSteamID steamId = SteamUser.GetSteamID();
    if (pCallback.m_hAuthTicket != HAuthTicket.Invalid && m_ticketSize != 0)
    {
        m_steamIdStr = steamId.ToString();
        // IMPORTANT!!! CONVERT TO HEX STRING
        m_authToken = BitConverter.ToString(m_ticket, 0, (int)m_ticketSize).Replace("-", string.Empty);

        if (!m_bAttachSteam)
        {
           BCWrapper.AuthenticateSteam(m_steamIdStr, m_authToken, false, m_steamAuthSuccess, m_steamFailure, m_steamObj);
        }
        else
        {
           BCWrapper.IdentityService.AttachSteamIdentity(m_steamIdStr, m_authToken, m_steamAuthSuccess, m_steamFailure, m_steamObj);
        }
    }
}
```
# Steamworks.Net + brainCloud Microtransactions / In-App Purchases
```js
 // steam is a two-step process, where you start a purchase, and then finalize it

private SuccessCallback m_successCallback;
private FailureCallback m_failureCallback;
private string m_delayedTransactionId = "";

public void StartPurchase(string in_languageCode, string in_storeProductId, SuccessCallback in_success = null, FailureCallback in_fail = null)
{
    m_successCallback = in_success;
    m_failureCallback = in_failure;
    m_delayedTransactionId = "";

    Dictionary<string, object> purchaseData = new Dictionary<string, object>();
    purchaseData["language"] = in_languageCode;
    purchaseData["itemId"] = in_storeProductId;

    BCWrapper.Client.AppStoreService.StartPurchase("steam", JsonWriter.Serialize(purchaseData), onSteamStartPurchaseSuccess, m_failureCallback);
}

private void onSteamStartPurchaseSuccess(string in_json, object obj)
{
    Dictionary<string, object> jsonMessage = (Dictionary<string, object>)JsonReader.Deserialize(in_json);
    Dictionary<string, object> jsonData = (Dictionary<string, object>)jsonMessage["data"];
    
    // brainCloud has given a transaction ID for this interaction, the STEAM overlay will popup
    // to finalize the purchase for the user        
    m_delayedTransactionId = (string)jsonData["transactionId"];
}
// callback was created during Steam Setup 
private void OnTransactionResponse(MicroTxnAuthorizationResponse_t pCallback)
{
   Dictionary<string, object> transactionData = new Dictionary<string, object>();
   transactionData["transId"] = m_delayedTransactionId;
   BCWrapper.AppStoreService.FinalizePurchase("steam", m_delayedTransactionId, JsonWriter.Serialize(transactionData), m_successCallback, m_failureCallback);

   m_delayedTransactionId = "";
}
```
# More Info

- Often times the Steam Overlay does not render/show up during editor or developer standalone builds.  You will need to upload a build using the steam SDK content uploader, to ensure the overlay is properly rendered over Unity’s engine.  
      
    
- All Steam purchases by default are in sandbox mode, to help initial integration and testing, prior to release.  Visit the brainCloud design portal Navigate to **Design -> Core App Info -> Advanced Settings**.  At the bottom is a check mark to distinguish if Steam Store purchases should be in sandbox mode or not.  Ensure this is unselected before going to the marketplace.
