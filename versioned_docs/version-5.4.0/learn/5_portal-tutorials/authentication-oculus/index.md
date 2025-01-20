---
title: "Authentication - Oculus"
date: "2021-04-22"
---

This article elaborates on the basic steps of how to authenticate end-users with their Oculus credentials in a Unity example.

### Prerequisites

- You have set up an Oculus developer account
- Your Oculus app installed on your test device

For more information about setting up a development environment refer to the [Oculus developer](https://developer.oculus.com/documentation/unity/book-unity-gsg/) site.

### User Authentication Flow

[![](https://downloads.intercomcdn.com/i/o/327819613/7c2a2098f34ffe793f383014/image.png?expires=1619204400&signature=2db87e22097e30b94cccc23ca7ebc8ed2ca18764e0becb5b4c7b50bf0506bb07)](https://downloads.intercomcdn.com/i/o/327819613/7c2a2098f34ffe793f383014/image.png?expires=1619204400&signature=2db87e22097e30b94cccc23ca7ebc8ed2ca18764e0becb5b4c7b50bf0506bb07)

### brainCloud Portal Setup

#### Get your Oculus app info on the Oculus developer console

- Log in to the [Oculus Developer Console](https://developer.oculus.com/manage/organizations/105569934983132/) site
- Select an existing app or create a new one

[![](https://downloads.intercomcdn.com/i/o/327823074/63003ab86707ded12181f5ea/image.png?expires=1619204400&signature=787f558dd05a49b7224d88ba8e2a2dafbbb545d6d16b7043de487a8b91f2c037)](https://downloads.intercomcdn.com/i/o/327823074/63003ab86707ded12181f5ea/image.png?expires=1619204400&signature=787f558dd05a49b7224d88ba8e2a2dafbbb545d6d16b7043de487a8b91f2c037)

- Fill out all necessary settings information from there.

[![](https://downloads.intercomcdn.com/i/o/327823563/b9e18b2eeeb8582f1b198058/image.png?expires=1619204400&signature=b669e67c300e9f5aa1ce09a1f1c8714c7725faf0f97514f82497effe8f8e5ec5)](https://downloads.intercomcdn.com/i/o/327823563/b9e18b2eeeb8582f1b198058/image.png?expires=1619204400&signature=b669e67c300e9f5aa1ce09a1f1c8714c7725faf0f97514f82497effe8f8e5ec5)

- Click API from the left navigation panel, copy down App ID and App Secret

[![](https://downloads.intercomcdn.com/i/o/327823816/2880ce064445607ee8835934/image.png?expires=1619204400&signature=7eb83a181bdd562e712b580959bc2cbac55f3270b4a6b4ef165d36579d22f44b)](https://downloads.intercomcdn.com/i/o/327823816/2880ce064445607ee8835934/image.png?expires=1619204400&signature=7eb83a181bdd562e712b580959bc2cbac55f3270b4a6b4ef165d36579d22f44b)

- Go back to your organization dashboard, click Test Users from the left side panel, add a new tester, we will use it for this tutorial.

[![](https://downloads.intercomcdn.com/i/o/327824067/7a84068676c59f20b2441099/image.png?expires=1619204400&signature=4ec27b88fb512e252126ddfdac2d600b499966853dc19357958a9443ba5bb224)](https://downloads.intercomcdn.com/i/o/327824067/7a84068676c59f20b2441099/image.png?expires=1619204400&signature=4ec27b88fb512e252126ddfdac2d600b499966853dc19357958a9443ba5bb224)

#### Link your Oculus app into brainCloud

- Open your app or create a new one from brainCloud development portal, navigate to **Design | Core App Info** page.

[![](https://downloads.intercomcdn.com/i/o/327824389/d6226c87556afce86a77952a/image.png?expires=1619204400&signature=0413ff629d701a659f2c89215fdccee396abd14dd3a4dc8b1d0ec5e8af598550)](https://downloads.intercomcdn.com/i/o/327824389/d6226c87556afce86a77952a/image.png?expires=1619204400&signature=0413ff629d701a659f2c89215fdccee396abd14dd3a4dc8b1d0ec5e8af598550)

- Click **Oculus** under Configure Platforms and paste your **Oculus App ID** and **Oculus App Secret** which you copied down from the above step there.

[![](https://downloads.intercomcdn.com/i/o/327824646/f5ea1198f41f87e1e8035d52/image.png?expires=1619204400&signature=32de705ceb01e345afc64382bfb3cd5e2c9b307bdea739a7dfcc56543505485b)](https://downloads.intercomcdn.com/i/o/327824646/f5ea1198f41f87e1e8035d52/image.png?expires=1619204400&signature=32de705ceb01e345afc64382bfb3cd5e2c9b307bdea739a7dfcc56543505485b)

- Click the Save Changes button when finished.

### Create an app on Unity editor

- Open Unity hub and create a new project.
- Download and import the latest [brainCloud client Unity package](https://github.com/getbraincloud/braincloud-csharp/releases) to this project. Once imported the plugin correctly, you should find the brainCloud tab appears on the editor menu.

[![](https://downloads.intercomcdn.com/i/o/327825905/5ecb2c4b19b1eab7a452d59b/image.png?expires=1619204400&signature=d835dd9c33bef014a39419a79dc2b3847ed50a4e2243ba2b88c51ba206532f63)](https://downloads.intercomcdn.com/i/o/327825905/5ecb2c4b19b1eab7a452d59b/image.png?expires=1619204400&signature=d835dd9c33bef014a39419a79dc2b3847ed50a4e2243ba2b88c51ba206532f63)

- Download and import the latest Oculus Unity SDK to this project. You should be able to find the Oculus tab on the editor menu once it was imported.

[![](https://downloads.intercomcdn.com/i/o/327826120/442a7b3a3d8eff8dc7399a79/image.png?expires=1619204400&signature=cb59669e7afb53d6acd58685135c892e8ee9e65ce4d4e19d655cb0e0addd63a7)](https://downloads.intercomcdn.com/i/o/327826120/442a7b3a3d8eff8dc7399a79/image.png?expires=1619204400&signature=cb59669e7afb53d6acd58685135c892e8ee9e65ce4d4e19d655cb0e0addd63a7)

- Open brainCloud setting from the tab and log into brainCloud account, then select your team and the app which has Oculus app info configured from the above step.

[![](https://downloads.intercomcdn.com/i/o/327826370/704f1d2ed3ebb4164b020f66/image.png?expires=1619204400&signature=318ccd8469af814f121f59c599ecd3fdd804060e86c6cfcc776c4352c941e8b6)](https://downloads.intercomcdn.com/i/o/327826370/704f1d2ed3ebb4164b020f66/image.png?expires=1619204400&signature=318ccd8469af814f121f59c599ecd3fdd804060e86c6cfcc776c4352c941e8b6)

- Open Oculus Platform Edit Settings from the tab and link the Oculus app and test user you just created from the above steps.

[![](https://downloads.intercomcdn.com/i/o/327826589/157340e53bf6f7f73d081a01/image.png?expires=1619204400&signature=155da2dea6516adcffda91ff7f670114b16ee7885c27fa993d3c0336c6d2e6bd)](https://downloads.intercomcdn.com/i/o/327826589/157340e53bf6f7f73d081a01/image.png?expires=1619204400&signature=155da2dea6516adcffda91ff7f670114b16ee7885c27fa993d3c0336c6d2e6bd)

- Create some UI elements if you want and initialize brainCloud and Oculus from your script.

[![](https://downloads.intercomcdn.com/i/o/327826976/ef992a41d159fc46b180aa24/image.png?expires=1619204400&signature=a5ddb7b0dc9d4f1cacb86b0235f325f9c03a15e382ffa010e2628398fc381737)](https://downloads.intercomcdn.com/i/o/327826976/ef992a41d159fc46b180aa24/image.png?expires=1619204400&signature=a5ddb7b0dc9d4f1cacb86b0235f325f9c03a15e382ffa010e2628398fc381737)

- Functions and its code that linked behind the hood [Oculus Login& bc Auth] are similar to below. Once the test-user is entitled into this Oculus app, from the success callback, retrieve the userId and nonce then pass them to brainCloud Oculus authentication method -- AuthenticateOculus
```js
    void Start()
    {
      try
      {
        if (!Oculus.Platform.Core.IsInitialized())
        {
          Oculus.Platform.Core.Initialize();
        }

        Entitlements.IsUserEntitledToApplication().OnComplete(EntitlementCheckCallback);
      }
      catch
      {
        HandleEntitlementCheckResult(false);
      }
    }
    
    void EntitlementCheckCallback(Message msg)
    {
        if (msg.IsError ==  false)
        {
            Users.GetLoggedInUser().OnComplete(LoggedInUserCallback);
        }
    }

    void LoggedInUserCallback(Message<User> msg)
    {
        if (msg.IsError == false)
        {
            oculusUserId = msg.Data.ID.ToString();
            Users.GetUserProof().OnComplete(UserProofCallback);
        }
    }
    
    void UserProofCallback(Message<UserProof> msg)
    {
        if (msg.IsError == false)
        {
            string oculusNonce = msg.Data.value;
            _bc.AuthenticateOculus(oculusUserId, oculusNonce, true, authSuccess_BCcall, authError_BCcall);
        }
    }
```
### Run Oculus client app on your device

- Navigate to the [Oculus device setup site](https://www.oculus.com/setup/), download Oculus App software, install and run it on your compatible gaming device.

- Run your Unity app on the local Unity editor or the device which is running Oculus App.
- Now, you should be successfully logged in to brainCloud with the tester credentials!
- Go back to brainCloud portal open your app, advance to the User Summary page and find the newly authenticated user, click the profiled to open it, you will find the user is logged in with an Oculus credential.

[![](https://downloads.intercomcdn.com/i/o/327827555/aa2efe7b98197533aceb87f8/image.png?expires=1619204400&signature=338ae4b72491b0816c0ef6c4cdbbb34fdda05e5152aac0166026e60fcb24696d)](https://downloads.intercomcdn.com/i/o/327827555/aa2efe7b98197533aceb87f8/image.png?expires=1619204400&signature=338ae4b72491b0816c0ef6c4cdbbb34fdda05e5152aac0166026e60fcb24696d)

- Check the user log, you should see the request as follow.

[![](https://downloads.intercomcdn.com/i/o/327827727/3ffd8678109fc394292146d3/image.png?expires=1619204400&signature=8fb758b6fc5333dfab7324bde73750b191ff5bdffd84fbe7022bf371901eb479)](https://downloads.intercomcdn.com/i/o/327827727/3ffd8678109fc394292146d3/image.png?expires=1619204400&signature=8fb758b6fc5333dfab7324bde73750b191ff5bdffd84fbe7022bf371901eb479)
