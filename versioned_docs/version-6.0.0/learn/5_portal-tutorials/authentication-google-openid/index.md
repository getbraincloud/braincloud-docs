---
title: "Authentication - Google (OpenID)"
date: "2021-07-09"
---

This article elaborates on the basic steps of how to authenticate end-users with their Google credentials through `OpenID Connect` in a Unity Android app example. If you want to use `Google Play Game` to authenticate end-users with their Google credential, check out the [article -- `Authentication - Google (PlayGame)`](http://help.getbraincloud.com/en/articles/5363283-authentication-google-playgame) for detail.

### **Prerequisites**

- You have a Google account to create projects in GCP
- Your testing device with Android API level 19 and above

### **Step 1: Create an application on Unity editor**

- Open Unity hub and create a new project.
- Download and import the latest [brainCloud client Unity package](https://github.com/getbraincloud/braincloud-csharp/releases) to this project. Once imported the plugin correctly, you will find the brainCloud tab appears on the editor menu.

![image.png (1086×446)](https://downloads.intercomcdn.com/i/o/361191090/54fe2737fe8dbdf80062b782/image.png)

- [](https://downloads.intercomcdn.com/i/o/361191090/54fe2737fe8dbdf80062b782/image.png)Download and import the latest `Google Sign-In Unity Plugin` from repositories of [Google Samples](https://github.com/googlesamples). We will use it to require `server auth codes` that will be passed to brainCloud method [`AuthenticateGoogle`](https://internal.braincloudservers.com/s3/apiref/index.html?csharp#capi-authentication-authenticategoogle) in our code example.

:::info

Some files under `PlayServiceResover` might be obsolete, most likely, you will need to install the `unity-jar-resolver` plugin from Google Samples repositories to update the `PlayServiceResover`. Also, in case that you encounter duplicated `Task DLL` file error, just go ahead to delete the one that was installed with the plugin located under `Asset->Paese->Plugins` folder
:::
![](https://downloads.intercomcdn.com/i/o/361231381/71eb2508c3d9feadd7517023/image.png)

- [](https://downloads.intercomcdn.com/i/o/361231381/71eb2508c3d9feadd7517023/image.png)You should find these plugins imported folder under the asset.

![](https://downloads.intercomcdn.com/i/o/361231553/115a857dda9b1c9dae5f45a7/image.png)

- [](https://downloads.intercomcdn.com/i/o/361231553/115a857dda9b1c9dae5f45a7/image.png)Open `brainCloud setting` from the tab, select or create a brainCloud back-end app linked to your project.

![](https://downloads.intercomcdn.com/i/o/361231833/401996e1a0ae795afc816102/image.png)

- [](https://downloads.intercomcdn.com/i/o/361231833/401996e1a0ae795afc816102/image.png)Create some UI elements to invoke initialize brainCloud and Google SignIn from your script.

![](https://downloads.intercomcdn.com/i/o/355325945/fe9c9f3d1a77cf66f997468a/image.png)

- [](https://downloads.intercomcdn.com/i/o/355325945/fe9c9f3d1a77cf66f997468a/image.png)Functions and the code behind the buttons are similar to below. Once end-users login into their Google account with Google Play Games by setting `UseGameSignIn` as `false`, so we can get their `userId` via calling `GetUserId`() from success callback, and get their `server auth codes` from `Google Sign in` API, then pass them to brainCloud Google authentication method -- `AuthenticateGoogleOpenId`
```js
    public void GoogleAPISignIn()
    {
        bcreturn.GetComponent<Text>().text = "Google sign in......";
        GoogleSignIn.Configuration = configuration;
        //GoogleSignIn.Configuration.UseGameSignIn = true;
        GoogleSignIn.DefaultInstance.SignIn().ContinueWith(GoogleSinInCallback);
    }

    public void GoogleSinInCallback(Task<GoogleSignInUser> task)
    {
        if (task.IsFaulted)
        {
            using (IEnumerator<System.Exception> enumerator = task.Exception.InnerExceptions.GetEnumerator())
            {
                if (enumerator.MoveNext())
                {
                    GoogleSignIn.SignInException error = (GoogleSignIn.SignInException)enumerator.Current;
                    bcreturn.GetComponent<Text>().text = "Task Exception Error: " + error.Status + " " + error.Message;
                }
                else
                {
                    bcreturn.GetComponent<Text>().text = "Task Unexpected Exception" + task.Exception;
                }
            }
        }
        else if (task.IsCanceled)
        {
            bcreturn.GetComponent<Text>().text = "Canceled";
        }
        else
        {
            //serverAuthCode = task.Result.AuthCode;
            googleEmail = task.Result.Email;
            idToken = task.Result.IdToken;

            bcreturn.GetComponent<Text>().text = "Logged into google! \n Email: " + googleEmail + " \n IdToken: " + idToken;
            channelid.GetComponent<InputField>().text = "[" + googleEmail + "]" + idToken;
        }
    }
```
- Finish the rest callbacks code in your script. Check the completed code from our GitHub Google Authentication project [example](https://github.com/getbraincloud/examples-unity/tree/master/OpenIdGoogle) for reference. (_Note that, `GoogleSignInConfiguration` requires `WebClientId` to represent user in order to call Googel SignIn, we will need to config this in our code after the `client credential` created from `Google Cloud Console` later._)
- Now, click `Build Settings` from Unity `File` tab, switch platform to `Android`. Then, create a keystore from `Keystore Manager` and save it to your local if you don't have one.

![](https://downloads.intercomcdn.com/i/o/361233339/fc4363332baee44b9fac323a/image.png)

- [](https://downloads.intercomcdn.com/i/o/361233339/fc4363332baee44b9fac323a/image.png)Set up your app `package name` as well via `Player Settings`.

![](https://downloads.intercomcdn.com/i/o/361233585/03e756cbc8e7a6679e34c796/image.png)

- [](https://downloads.intercomcdn.com/i/o/361233585/03e756cbc8e7a6679e34c796/image.png)Now we can move to the next step to create a Google project.

### **Step 2: Create a Google project and configure it with OAuth 2.0 Client Credential**

- Before creating a project, let's generate a `SHA1` fingerprint by using the `keystore` and `package name` that we created from the previous step via the local terminal by using Java JDK `keytool` command `keytool -exportcert -alias your-keystore-alia -keystore path-to-your-keystore-file -list -v`. ( _if not set this command globally, to use this `keytool` command you might need to cd into your java JDK home folder)_

![](https://downloads.intercomcdn.com/i/o/361233828/7931db1cd0e1837f5d9857ae/image.png)

- [](https://downloads.intercomcdn.com/i/o/361233828/7931db1cd0e1837f5d9857ae/image.png)Then, instead of going to Google Cloud Console to create a project and add auth client credential manually, we can go to the android-developer `Google Sign In` page and create a project from there. (_by utilizing this, a Google project and Android client ID for OAuth 2.0 created in just one click_), paste your Android app `package name` and `SHA1` fingerprint accordingly when asked and create the project.

![](https://downloads.intercomcdn.com/i/o/361234143/f21c64af2b92b4da78c4aba3/image.png)

- [](https://downloads.intercomcdn.com/i/o/361234143/f21c64af2b92b4da78c4aba3/image.png)Now, open Google Cloud Platform, you should be able to see both project and OAuth 2.0 Client IDs created for you.

![](https://downloads.intercomcdn.com/i/o/361234774/7a56ac3704359cb8419011d0/image.png)

- [](https://downloads.intercomcdn.com/i/o/361234774/7a56ac3704359cb8419011d0/image.png)Now, we finished the configurations for our project from GCP, note down Client ID and its secret of Web client credential, also, the `project number`, we will need them to configure in brainCloud console. _(Note that you may already notice, the project number actually prefixed to Client ID)_


### **Step 3: Configure Google client credential on brainCloud**

- Open your corresponding brainCloud app from brainCloud development portal, navigate to **Design | Core App Info** page.

![](https://downloads.intercomcdn.com/i/o/361235476/c62e63024fdfcae04aced9b7/image.png)

- [](https://downloads.intercomcdn.com/i/o/361235476/c62e63024fdfcae04aced9b7/image.png)Click **Google** under Configure Platforms and paste your `Client ID` and its `secret of` Web client credential into Google configs fields respectively.

![](https://downloads.intercomcdn.com/i/o/361235890/d42bb6f584320d30ea0dd3f6/image.png)

- [](https://downloads.intercomcdn.com/i/o/361235890/d42bb6f584320d30ea0dd3f6/image.png)Make sure the `Google Android` platform is selected from the **Design | Core App Info | Platforms** page.

![](https://downloads.intercomcdn.com/i/o/355355598/9e21357f36fc027e3a2e2d4f/image.png)

- [](https://downloads.intercomcdn.com/i/o/355355598/9e21357f36fc027e3a2e2d4f/image.png)Now, we finished the settings from brainCloud, let us move to the next step to set up the client id to your code in Unity.

### **Step 4: Final set up for Android app in Unity and build a test app**

- Referencing this Client ID as Google SignIn config in your code.
```js
        configuration = new GoogleSignInConfiguration
        {
            WebClientId = "998140262691-eot4ico1t3qtb35ea1prbt9ilinekpnr.apps.googleusercontent.com",
            RequestEmail = true,
            RequestIdToken = true,
            RequestAuthCode = true
        };
```
- Go to the `Build Settings` screen to build APK for your test device.

### **Step 5: Test**

- Install APK which was built from the previous step to your device and test it. You may be asked to give some permissions to your test app, grant it, and continue.

![](https://downloads.intercomcdn.com/i/o/361238988/94711012a481ce69b7dc295f/image.png)

- [](https://downloads.intercomcdn.com/i/o/361238988/94711012a481ce69b7dc295f/image.png)Check the authenticated tester user from the brainCloud console.

![image.png (942×225)](images/image1.png)