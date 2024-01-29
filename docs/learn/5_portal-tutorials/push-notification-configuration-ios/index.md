---
title: "Push notification configuration - iOS"
date: "2021-01-19"
---

This article will walk you through the steps of setting up push notifications (iOS) with brainCloud.

#### **Prerequisites**

- You have an Apple developer account
- You have a physical iOS 10 and above testing device

#### **Step 1: Create an application on Unity editor**

- Open Unity hub and create a new project.
- Download and import the latest [brainCloud client Unity package](https://github.com/getbraincloud/braincloud-csharp/releases) to this project. Once imported the plugin correctly, you will find the brainCloud tab appears on the editor menu.

![](images/1.png)

- Download and import the latest `Mobile Notifications` package from package manager to your project.

![](images/2.png)

- Set up mobile notifications for iOS from edit->project settings

![](images/3.png)

- Open brainCloud setting from the tab, select or create a brainCloud back-end app linked to your project.

![](images/4.png)

- Create some basic functional UI elements in your project and link the code behind them as the following image.

![](images/5.png)

- Functions and its code that linked behind the button [Register device token] are similar to below. Once authenticate end-user with their brainCloud account, from the Authorization request, retrieve the device token and pass it to brainCloud device token register method -- `RegisterPushNotificationDeviceToken`()

```js
    IEnumerator RequestAuthorization()  
    {  
        var authorizationOption = AuthorizationOption.Alert | AuthorizationOption.Badge;  
        using (var req = new AuthorizationRequest(authorizationOption, true))  
        {  
            while (!req.IsFinished)  
            {  
                yield return null;  
            };  
            string res = "\n RequestAuthorization:";  
            res += "\n finished: " + req.IsFinished;  
            res += "\n granted:  " + req.Granted;  
            res += "\n error:  " + req.Error;  
            res += "\n deviceToken:  " + req.DeviceToken;  
            Debug.Log("debug inside ienumerator the res: "+ res);  
            _bc.PushNotificationService.RegisterPushNotificationDeviceToken(req.DeviceToken, authSuccess_BCcall, authError_BCcall);  
        }  
    }  
  
    //click register token button  
    public void RegisterDeviceToken()
  
    {
  
        StartCoroutine(RequestAuthorization());  
    }
```

- Finish the rest methods and callbacks code in your script.
- Click `Build Settings` from Unity `File` tab, switch platform to iOS.

![](images/6.png)

- Set up project `Bundle Identifier` and `target SDK` via `Player Settings` .

![](images/7.png)

- Click `Build and Run`, then create a folder to save this Xcode project on your local storage.

![](images/8.png)

#### **Step 2: Setup your project on Xcode editor**

- Once Xcode is opened from the above step, open `Signing & Capabilities` from your target device in the project panel.

![](images/9.png)

- Click `Automatically manage signing` checkbox and enable it.

![](images/10.png)

- Then, login into your team and provisioning profile.

![](images/11.png)

#### **Step 3: Create and download a notification p12 file from your apple account**

- You should find your project identifier is created from the above step on the list of Identifiers under the `Certificates, Identifiers & Profiles` section of your apple developer account.

![](images/12.png)

- Click it and scroll down to `Pushnotification` row, then click `configure`.

![](images/13.png)

- Click `create certificate` under an environment type ( you will use the same environment type when configuring push notification settings on brainCloud), then click `continue` to create a CSR file.

![](images/14.png)

- You will be asked to upload a certificate then.

![](images/15.png)

- Open Keychain from your Mac, click the `Certificate Assistant` menu and select `Request a Certificate From a Certificate Authority` under the `Keychain Access` tab.

![](images/16.png)

- Fill out the fields and select `Saved` to disk, then click Continue.

![](images/image.png)

- Choose a folder to save this cert.

![](images/17.png)

- This cert file will be saved to your local folder.

![](images/18.png)

- Go back to your apple account page, upload this signing request file there, and hit `Continue`.

![](images/19.png)

- Click download to save this certificate.

![](images/20.png)

- Go back to your Keychain app again, drag this certificate file from the above step to the `certificates` section of the `login` keychains

![](images/21.png)

- You will find the `push services certificate` is added to the `certificates` list.

![](images/22.png)

- Right-click the `push services certificate` and export it to local storage.

![](images/23.png)

- Enter your login password and click `continue`

![](images/image.png)

- Click `Save`.

![](images/24.png)

- Leave a password for this file, you will need this password later when configuring push notification on your brainCloud portal.

![](images/25.png)

#### **Step 4: Upload a p12 certificate file to your app on brainCloud portal**

- Go to `Design | Notifications | Settings` page, click `edit settings` under the `Actions` column of `Apple`, upload the p12 certificate you get from the previous steps.

![](images/26.png)

- Enter the p12 file protect-password and select the certificate environment accordingly. It should match the type when you created this certificate from your apple account.

![](images/27.png)

- Set an expiration day.

![](images/28.png)

#### **Step 5: Run app via Xcode**

- Go back to Xcode editor

![](images/29.png)

- Connect your test device to Xcode and run this project.

![](images/30.png)

- Click `Allow` when asking for notification authorization.

![](images/IMG_0596.PNG)

- Authenticate an end-user and register device token with brainCloud.

![](images/IMG_0597.PNG)

- Check the sent notification.

![](images/IMG_0598.PNG)

- Check the registered device token of the end-user from brainCloud portal.

![](images/31.png)
