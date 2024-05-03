# Redemption Code

A Redemption Code is the alphanumeric code found on gift certificates, promotional coupons or other promotional offers that are used to obtain a benefit. Codes may be digital-only or printed upon physical cards and sold separately at retail. A user redeems them by entering the code into a special screen of the app.

<%= data.branding.productName %>'s Redemption Code feature supports two very different mechanisms for redemption codes:

- **Shared codes [NEW!]** - these are the semi-public codes you might find in a banner ad. The same shared code can be redeemed by _multiple_ people (once each). Also known as 'multi-use' codes.

- **Personal codes** - these are the sort of individualized codes that you might find in a Happy Meal or as a gift card. Each code is _unique_ - and can only be redeemed by a _single_ user. Also known as 'single-use' codes.

### Terminology

Note that due to the history of this API - the concept of _Campaign_ in the Design Portal is referred to as `codeType` _field_ in the API. There is also a  `codeUseType` field that represents the difference between Personal campaigns (`codeUseType: "SINGLE"`) and Shared campaigns (`codeUseType: "MULTI"`).

API Term | Portal Term
-------- | -----------
codeType | Campaign
scanCode | Promo Code
SINGLE codeUseType | Personal Code
MULTI codeUseType | Shared Code


## Shared Redemption Codes

Shared redemption code campaigns can be created via the _Design Portal_, or programmatically via the <code>[SysAddMultiUseCodeType](/api/capi/redemptioncode/sysaddmultiusecodetype)</code> API call.

Shared Redemption Codes go through a separate instance of the following state machine for each user that attempts to redeem them:

![Shared Redemption Code States](@site/docs/img/api-img/redemption_code_shared_code_states_5_2.png)

The following operations are available from the client API:

- <code>[RedeemCode](/api/capi/redemptioncode/redeemcode)</code> – redeem a code
- <code>[RetrieveRedeemedCodes](/api/capi/redemptioncode/getredeemedcodes)</code> – returns a list of codes that have already been redeemed by this user.

_Note that the above methods are available for use in Personal Redemption Code campaigns as well._


## Personal Redemption Codes

To run a Personal Code campaign, devs must generate a set of unique codes and distribute them to individual users. Codes can be generated by the developer (and added to the system via the AddCode() API call) - or generated via the Design Portal.

![Personal Redemption Code States](@site/docs/img/api-img/redemption_code_personal_code_states_5_2.png)

At any time, a personal redemption code is in one of six states:

State | Description
--------- | -----------
Inactive | The code has been datafilled in the system, but is not ready to be redeemed. This is useful for retail cards that must be "activated" upon purchase, before they will be ready to be redeemed.  [i.e. prevents theft]
Available | A code datafilled into the system, and ready to be redeemed
InProgress | An asynchronous type code is being asynchronously redeemed and is still within the allowed processing time
Redeemed | A code that has already been redeemed. It will contain information about the user that redeemed it.
Invalid | A code that has been invalidated for some reason. [i.e. if a set of retail cards have been stolen, it would make sense for the retailer to invalidate those cards]
Failed | Fulfilling the redemption for this code has failed. Note that if retry attempts is set > 0, it is possible to move from this state back to InProgress.

There are two ways to add to the redemption code inventory:

1. Use the "Generate New Codes..." function on the Design Portal. The Portal will generate random codes and provide a link to download those codes.
2. Call the [<code>AddCode</code>](/api/s2s/redemptioncode/addcode) method on the <%= data.branding.productName %> Server-to-Server interface. The API allows you to add a single code at a time.

Two additional methods are available for Personal Redemption Codes via the Server-to-Server API:

- `ActivateCode( <scanCode>, <codeType>, <customCodeInfo> )` – activate a inactive code (i.e. make it available for redemption)
- `InvalidateCode ( <scanCode>, <codeType>, <invalidationReason> )` – invalidate a lost or stole (or otherwise fraudulent) code


## Fulfillment Scripts


Redemption Code campaigns can _optionally_ be configured to trigger Cloud Code scripts to award the rewards associated with the code. These are called _Fulfillment Scripts_ - and are only invoked if a scan code was correctly entered.

Fulfillment scripts can be used for simple awarding of currencies and items - or in more complicated scenarios may be used to trigger offboard fulfillment (e.g. Printing of T-Shirts or minting of NFTs).

The system supports two types of fulfillment scripts:

- _Synchronous Scripts_ - perform fulfillment in a single invocation of the script
- _Asynchronous Scripts_ - are designed to be run multiple times, in a polling fashion, to handle fulfillments that may take some time to complete.

Both types of scripts take a standard set of arguments, and must call <code>[ProcessAsynchronousREsponse](/api/capi/redemptioncode/processasynchronousresponse)</code> when they complete.


### Synchronous Fulfillment Scripts


The following parameters are sent in the `data` map as parameters to _synchronous_ fulfillment scripts:

Parameter | Description
--------- | -----------
scanCode | The code being redeemed. Sometimes referred to as the Promo code.
operation | Should always be "redeem" for asynchronous scripts.
redemptionCodeId | The redemption code id of the redemption code being processed.
attempt   | The 0-based counter of the current attempt. Will be zero unless retries are allowed.
async | Will be `false` for asynchronous scripts. <- Can be used to confirm that things are configured correctly!
codeType | Corresponds to the _Campaign Name_ in the Design Portal.
codeUseType | "MULTI" if this is a Shared (multi-use) Code, and "SINGLE" if it is a Personal (single-use) code
customCodeInfo | The _Code Info JSON_ configured against the code. Normally contains the JSON data indicating what the rewards for redeeming this code should be.
customRedemptionInfo | Information that is gathered as part of the process of redeeming the code. This is for the script to write. For aynchronous script, this field will contain what previous invocations of the script have placed there.

#### Synchronous Script Return Values

A JSON map with the following fields should be _returned_ by the script.

Parameter | Description
--------- | -----------
success | `true` if the redemption succeeded, `false` otherwise. 
complete | Should always return `true` for synchronous fulfillment scripts
customRedemptionInfo | Return an updated `customRedemptionInfo` JSON map. Will be saved to the redemption code entry for the user.
errorCode | If `success` is false, return `errorCode` field with a numeric code indicating the failure
errorMsg | If `success` is `false`, return `errorMsg` field with a textual error message describing what happened.

#### Example: Synchronous Fulfillment Script

Click [synchronousFulfillment_example.ccjs.zip](script/synchronousFulfillment_example.ccjs.zip) to download the file.

### Asynchronous Fulfillment Scripts

The following parameters are sent in the `data` map as parameters to _asynchronous_ fulfillment scripts:

Parameter | Description
--------- | -----------
scanCode | The code being redeemed. Sometimes referred to as the Promo code.
operation | Will be "redeem" the first time the script is called - and "async" for each subsequent poll of the script. 
redemptionCodeId | A unique internal id for the code being redeemed <-- Warning - only sent when the operation is "async"
attempt   | The 0-based counter of the current attempt. Will be zero unless retries are allowed. 
async | Will be `true` for asynchronous scripts. <- Can be used to confirm that things are configured correctly!
codeType | Corresponds to the _Campaign Name_ in the Design Portal.
codeUseType | "MULTI" if this is a Shared (multi-use) Code, and "SINGLE" if it is a Personal (single-use) code
customCodeInfo | The _Code Info JSON_ configured against the code. Normally contains the JSON data indicating what the rewards for redeeming this code should be.
customRedemptionInfo | Information that is gathered as part of the process of redeeming the code. This is for the script to write. For aynchronous script, this field will contain what previous invocations of the script have placed there.

#### Asynchronous Script Return Values

A JSON map with the following fields should be returned by the script.  

For the initial call of the script (with the "redeem" `operation`) the script should return these values in a map.

For the subsequent calls of the script (with "async" `operation`) the script passes these results to the redemption code service via the `processAsynchronousResponse()` call.  The map is passed in as the `asyncResponse` parameter to the call.

Parameter | Description
--------- | -----------
success | `true` if this step of processing was successful (though not necessarily complete), `false` if an error occurred and processing should now be ABORTED! 
complete | Return `true` if fulfillment processing is now COMPLETE (whether it was successful or not). This means nothing else is still happening in the background.
customRedemptionInfo | Return an updated `customRedemptionInfo` JSON map. Will be saved to the redemption code entry for the user.
errorCode | If `success` is false, return `errorCode` field with a numeric code indicating the failure
errorMsg | If `success` is `false`, return `errorMsg` field with a textual error message describing what happened.

## Management and Support Operations

The web portal offers a few handy management and support operations:

- App > Design > Marketplace > Redemption Codes
  - Manage the list of Redemption Code campaigns
  - Generate new codes for Personal campaigns
- App > Global > Marketplace > Redemption Codes
  - View the up-to-date status of a Redemption Code campaign
  - View a list of recent redemption attempts 
- App > User > Marketplace > Redemption Codes
  - View the list of codes that have been redeemed by the selected user

<DocCardList />