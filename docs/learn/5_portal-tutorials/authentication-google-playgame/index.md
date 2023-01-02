---
title: "Authentication - Google (PlayGame)"
date: "2021-06-28"
---

This article elaborates on the basic steps of how to authenticate end-users with their Google credentials through Google Play Game in a Unity Android app example. If you want to use OpenID Connect to authenticate end-users with their Google credential, check out the [article -- `Authentication - Google (OpenID)`](http://help.getbraincloud.com/en/articles/5397633-authentication-google-openid) for detail.

### **Prerequisites**

- You have a Google Play developer account
- Your testing device with Android API level 19 and above

### **Step 1: Create an application on Unity editor**

- Open Unity hub and create a new project.
- Download and import the latest [brainCloud client Unity package](https://github.com/getbraincloud/braincloud-csharp/releases) to this project. Once imported the plugin correctly, you will find the brainCloud tab appears on the editor menu.

![image.png (1052×521)](https://downloads.intercomcdn.com/i/o/355313103/e394a1c7177d7d3e51497acb/image.png)

- [](https://downloads.intercomcdn.com/i/o/355313103/e394a1c7177d7d3e51497acb/image.png)Download and import the latest `Google Play Games plugin for Unity` from repositories of [Google Play Game Services](https://github.com/playgameservices). (_`for the time being, version is 0.10.12`_)

![image.png (827×593)](https://downloads.intercomcdn.com/i/o/355315375/577e6e22cf61d509c45d7637/image.png)

- [](https://downloads.intercomcdn.com/i/o/355315375/577e6e22cf61d509c45d7637/image.png)Download and import the latest `Google Sign-In Unity Plugin` from repositories of [Google Samples](https://github.com/googlesamples). We will use it to require `server auth codes` that will be passed to brainCloud method [`AuthenticateGoogle`](https://internal.braincloudservers.com/s3/apiref/index.html?csharp#capi-authentication-authenticategoogle) in our code example. (_Note that if you see some files already exist in your project, just uncheck them. Also, in some cases, the PlayServiceResover might cause errors in your project, you can uncheck them too_)

:::tip

**Note that this step is just used as an extra guarantee mechanism to assure your app can get `ServerAuthCode` from users Google login. It is ONLY necessary in the case that you cannot get `ServerAuthCode` from `PlayGamesPlatform` in certain versions of `Google Play Games plugin for Unity` that users reported, otherwise, totally ignore this step and its related code block**
:::
![image.png (848×661)](https://downloads.intercomcdn.com/i/o/355320733/dc3218b8e17e121f1964d6bc/image.png)

- [](https://downloads.intercomcdn.com/i/o/355320733/dc3218b8e17e121f1964d6bc/image.png)After plugins installed, you should be able to find `Google Play Games` menu appears under `Window` tab, we will use it to configure `Android setup` later afterward a game created on `Google Play Console`.

![image.png (852×544)](https://downloads.intercomcdn.com/i/o/355322200/5b700c7ff7f850897ea3381d/image.png)

- [](https://downloads.intercomcdn.com/i/o/355322200/5b700c7ff7f850897ea3381d/image.png)You should find these plugins imported folder under the asset.

![image.png (898×295)](https://downloads.intercomcdn.com/i/o/355325087/3c95f744da27876aad8523dc/image.png)

- [](https://downloads.intercomcdn.com/i/o/355325087/3c95f744da27876aad8523dc/image.png)Open `brainCloud setting` from the tab, select or create a brainCloud back-end app linked to your project.

![image.png (704×532)](https://downloads.intercomcdn.com/i/o/355325472/9206d341c511a08de57f41d1/image.png)

- [](https://downloads.intercomcdn.com/i/o/355325472/9206d341c511a08de57f41d1/image.png)Create some UI elements to invoke initialize brainCloud and Google SignIn from your script.


- Functions and the code that linked behind the buttons are similar to below. Once end-users login into their Google account with Google Play Games by setting `UseGameSignIn` as `true`, so we can get their `userId` via calling `GetUserId`() from success callback, and get their `server auth codes` from `Google Sign in` API, then pass them to brainCloud Google authentication method -- `AuthenticateGoogle`
```js
    public void RegisterDeviceToken()
    {
        GoogleSignIn.Configuration = configuration;
        GoogleSignIn.Configuration.UseGameSignIn = true;
        GoogleSignIn.DefaultInstance.SignIn().ContinueWith(GoogleSinInCallback);
    }

    public void GoogleSinInCallback(Task<GoogleSignInUser> task)
    {
        if (task.IsFaulted)
        {
            bcreturn.GetComponent<Text>().text = "Failed to call Google SignIn()";
        }
        else
        {
            serverAuthCode = task.Result.AuthCode;
        }
    }

    public void GetGoogleUserId()
    {
        PlayGamesClientConfiguration config = new PlayGamesClientConfiguration.Builder()
        .RequestIdToken()
        .RequestServerAuthCode(false)
        .Build();

        PlayGamesPlatform.InitializeInstance(config);
        PlayGamesPlatform.Activate();
        Social.localUser.Authenticate((bool success) => {
            if (success)
            {
                googleId = PlayGamesPlatform.Instance.GetUserId();
                channelid.GetComponent<InputField>().text = googleId;
            }
            else
            {
                bcreturn.GetComponent<Text>().text = "Failed to get Signed in user info";
            }
        });
    }

    public void AuthenticateBC()
    {
        if (!string.IsNullOrEmpty(googleId))
        {
            \_bc.AuthenticateGoogle(googleId, serverAuthCode, true, authSuccess\_BCcall, authError\_BCcall);
        }
        else
        {
            bcreturn.GetComponent<Text>().text = "log into your Google account first!";
        }
    }
```
- Finish the rest callbacks code in your script. Check the completed code from our GitHub Google Authentication project [example](https://github.com/getbraincloud/UnityExamples/tree/master/Authentication) for reference. (_Note that, `GoogleSignInConfiguration` requires `WebClientId` to represent user in order to call Googel SignIn, we will need to config this in our code after the `client credential` created from `Google Cloud Console` later._)
- Now, click `Build Settings` from Unity `File` tab, switch platform to `Android`. Then, create a keystore from `Keystore Manager` and save it to your local if you don't have one.


- Set up your app `package name` as well via `Player Settings`.

![image.png (767×680)](https://downloads.intercomcdn.com/i/o/355344432/f2f88e1f331816efb9871b7e/image.png)

- [](https://downloads.intercomcdn.com/i/o/355344432/f2f88e1f331816efb9871b7e/image.png)Now we can move to the next step to create a Google project.

### **Step 2: Create a Google project and configure it with OAuth 2.0 Client Credential**

- Before creating a project, let's generate a `SHA1` fingerprint by using the `keystore` and `package name` that we created from the previous step via the local terminal by using Java JDK `keytool` command `keytool -exportcert -alias your-keystore-alia -keystore path-to-your-keystore-file -list -v`. ( _if not set this command globally, to use this `keytool` command you might need to cd into your java JDK home folder)_

![image.png (1172×616)](https://downloads.intercomcdn.com/i/o/355344385/543db145f0ffabdf12632150/image.png)

- [](https://downloads.intercomcdn.com/i/o/355344385/543db145f0ffabdf12632150/image.png)Then, instead of going to Google Cloud Console to create a project and add auth client credential manually, we can go to the android-developer `Google Sign In` page and create a project from there. (_by utilizing this, a Google project and Android client ID for OAuth 2.0 created in just one click_), paste your Android app `package name` and `SHA1` fingerprint accordingly when asked and create the project.

![image.png (611×454)](https://downloads.intercomcdn.com/i/o/355349069/05bbe2e8ec56914cfca427b1/image.png)

- [](https://downloads.intercomcdn.com/i/o/355349069/05bbe2e8ec56914cfca427b1/image.png)Now, open Google Cloud Platform, you should be able to see both project and OAuth 2.0 Client IDs created for you.

![image.png (1621×489)](https://downloads.intercomcdn.com/i/o/355349656/30d02799eda487c19b2f423e/image.png)

- [](https://downloads.intercomcdn.com/i/o/355349656/30d02799eda487c19b2f423e/image.png)Click the `main navigation menu` open `APIs & Services` page from GCP console. Click `ENABLE APIS AND SERVICES` button, search `Google Play Game Services` and enable it, you should be able to see it listed on the dashboard after enabled. _(Note that after you tested your app when completed, you will be able to see several some request traffic generated like the picture shown below)_.

![image.png (1535×590)](https://downloads.intercomcdn.com/i/o/355351534/d699120c1d0b3ad40183e6dd/image.png)

- [](https://downloads.intercomcdn.com/i/o/355351534/d699120c1d0b3ad40183e6dd/image.png)Now, we finished the configurations for our project from GCP, note down Client ID and its secret of Web client credential, also, the `project number`, we will need them to configure in brainCloud console. _(Note that you may already notice, the project number actually prefixed to Client ID)_


### **Step 3: Configure Google client credential on brainCloud**

- Open your corresponding brainCloud app from brainCloud development portal, navigate to **Design | Core App Info** page.


- Click **Google** under Configure Platforms and paste your `Client ID` and its `secret of` Web client credential, also the Google `project number`, into Google configs fields respectively.


- Make sure the `Google Android` platform is selected from the **Design | Core App Info | Platforms** page.

![image.png (1085×556)](https://downloads.intercomcdn.com/i/o/355355598/9e21357f36fc027e3a2e2d4f/image.png)

- [](https://downloads.intercomcdn.com/i/o/355355598/9e21357f36fc027e3a2e2d4f/image.png)Now, we finished the settings from brainCloud, let us move to the next step to create a game in Google Play Console.

### **Step 4: Create a Google Play Game in Google Play Console**

- Log into your Google Play Console and create a new app.

![image.png (1253×673)](https://downloads.intercomcdn.com/i/o/355356946/060a7650e542c50a6ea5a74a/image.png)

- [](https://downloads.intercomcdn.com/i/o/355356946/060a7650e542c50a6ea5a74a/image.png)Go to the Configuration page under `Play Games Services` link your GCP project to this new game by selecting the project from the `cloud project` dropdown menu and click `Use`.

![image.png (1278×698)](https://downloads.intercomcdn.com/i/o/355358298/eefb8a393478be0f5f396c10/image.png)

- [](https://downloads.intercomcdn.com/i/o/355358298/eefb8a393478be0f5f396c10/image.png)After that, click `Add credential`, select GCP project's `OAuth client`, click `Save chagnges`, now, you should see the Android client credential is added to this game.

![image.png (1060×673)](https://downloads.intercomcdn.com/i/o/355520782/60dfec6942a0061b35dcc0c2/image.png)

- [](https://downloads.intercomcdn.com/i/o/355520782/60dfec6942a0061b35dcc0c2/image.png)The screen of `Play Games Services configuration` should be like below.

![image.png (1165×491)](https://downloads.intercomcdn.com/i/o/355359004/30c2c4f65e442ddd6f6e821a/image.png)

- [](https://downloads.intercomcdn.com/i/o/355359004/30c2c4f65e442ddd6f6e821a/image.png)Go ahead to create several testers for your game (_since we will not publish this game to the public, for demonstration purposes, you have to create testers to test Google sign in with their Google accounts_) by selecting the Testers menu.

![image.png (982×556)](https://downloads.intercomcdn.com/i/o/355359414/7a139d5f531c38d7d110baae/image.png)

- [](https://downloads.intercomcdn.com/i/o/355359414/7a139d5f531c38d7d110baae/image.png)Create one dummy game resource from any resources ( _Achievements, Events, or Leaderboards_) listed under Play Games Services, we will use it to set up Google Play Game connection from Unity editor, the leftover setting from step 1. (_for this example, we will create an Achievements resource)_

![image.png (1246×735)](https://downloads.intercomcdn.com/i/o/355360463/7ff3749592c12a2eaf23722d/image.png)

- [](https://downloads.intercomcdn.com/i/o/355360463/7ff3749592c12a2eaf23722d/image.png)Click `Get resources` button from Achievements list, copy down the `Android (XML)`format content.


### **Step 5: Final set up for Android app in Unity and build test app**

- Go back to your Unity editor, click Android setup from the Google Play Games menu, paste the resource content from the previous step and GCP Web client ID respectively to pop-up setting window as shown following.

![image.png (1151×848)](https://downloads.intercomcdn.com/i/o/355361103/41883728586bae6a9f2a35a4/image.png)

- [](https://downloads.intercomcdn.com/i/o/355361103/41883728586bae6a9f2a35a4/image.png)Referencing this Client ID as Google SignIn config in your code too.
- Go to the `Build Settings` screen and build APK for your test device.


### **Step 6: Test**

- Install APK which built from the previous step to your device and test it. You may be asked to install Google Play Games if it did not exist in your test Android device. Install it and login into one of your Play Game Services tester account.

![image.png (948×227)](https://downloads.intercomcdn.com/i/o/355363451/f1d96d71264fc30f05d84f6a/image.png)

- [](https://downloads.intercomcdn.com/i/o/355363451/f1d96d71264fc30f05d84f6a/image.png)Grant test app permission to your test account.

![image.png (942×225)](https://downloads.intercomcdn.com/i/o/355363901/9a12dd817fa2fce7870a9c89/image.png)

- [](https://downloads.intercomcdn.com/i/o/355363901/9a12dd817fa2fce7870a9c89/image.png)Log into brainCloud after successfully logged in Google account.

![image.png (1047×244)](https://downloads.intercomcdn.com/i/o/355364033/b48225d8c969942cf0f2b587/image.png)

- [](https://downloads.intercomcdn.com/i/o/355364033/b48225d8c969942cf0f2b587/image.png)Check the authenticated tester user from the brainCloud console.

![image.png (942×225)](images/image1.png)
