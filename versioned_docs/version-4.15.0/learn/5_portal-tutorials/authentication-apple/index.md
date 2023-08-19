---
title: "Authentication - Apple"
date: "2021-01-11"
---

This article elaborates on the basic steps of how to authenticate end-users with their Apple credentials in a unity example.

**Prerequisites**

- You have an Apple developer account
- Your testing device with iOS 13 and above

**Step 1: Create an application on Unity editor**

- Open Unity hub and create a new project.
- Download and import the latest [brainCloud client Unity package](https://github.com/getbraincloud/braincloud-csharp/releases) to this project. Once imported the plugin correctly, you will find the brainCloud tab appears on the editor menu.

[![](images/Screen+Shot+2021-01-10+at+8.10.14+PM.png)](https://downloads.intercomcdn.com/i/o/285883197/aa601320a7757495ae3aed7e/Screen+Shot+2021-01-10+at+8.10.14+PM.png)

- Download and import the latest `Sign in with Apple` plugin (the left one on the picture below) to this project via the Asset store.

[![](images/Screen+Shot+2021-01-10+at+8.57.20+PM.png)](https://downloads.intercomcdn.com/i/o/285888536/bbe9af49fc4ec526bc9b5b4b/Screen+Shot+2021-01-10+at+8.57.20+PM.png)

- You should find the Unity Technologies folder under the asset after `SignInWithApple` plugin imported.

[![](images/Screen+Shot+2021-01-10+at+9.05.16+PM.png)](https://downloads.intercomcdn.com/i/o/285889108/1b7769afa90c43fe28b9e623/Screen+Shot+2021-01-10+at+9.05.16+PM.png)

- Open brainCloud setting from the tab, select or create a brainCloud back-end app linked to your project.

[![](images/Screen+Shot+2021-01-10+at+9.11.08+PM.png)](https://downloads.intercomcdn.com/i/o/285889725/1386428122ce5d7142643b2f/Screen+Shot+2021-01-10+at+9.11.08+PM.png)

- Create some UI elements and initialize brainCloud and Apple SignIn from your script. You can compare the differences between brainCloud universal authentication and Apple authentication by setting both of them to UI.

[![](images/Screen+Shot+2021-01-10+at+9.13.34+PM.png)](https://downloads.intercomcdn.com/i/o/285890084/51ad044d85db7a5ca2592e7b/Screen+Shot+2021-01-10+at+9.13.34+PM.png)

- Functions and its code that linked behind the button [Sign in with Apple] are similar to below. Once end-user login into their Apple account, from the success callback, retrieve the userId and id token and pass them to brainCloud Apple authentication method -- `AuthenticateApple`
```js
    void Start()

    {

        bcreturn = GameObject.Find("bcreturn").GetComponent<Text>();

        username = GameObject.Find("username").GetComponent<InputField>();

        password = GameObject.Find("password").GetComponent<InputField>();

        _bc.SetAlwaysAllowProfileSwitch(true);

        gameObject.AddComponent<SignInWithApple>();

    }
    //click authentication apple button

    public void AuthenticateApple()

    {
        var siwa = gameObject.GetComponent<SignInWithApple>();

        siwa.Login(OnLogin);

    }
    private void OnLogin(SignInWithApple.CallbackArgs args)
    {
        if (args.error != null)
        {
            Debug.Log("Errors occurred: " + args.error);
            return;
        }
        UserInfo userInfo = args.userInfo;
        // Save the userId so we can use it later for other operations.
        userId = userInfo.userId;
        idToken = userInfo.idToken;
        // Print out information about the user who logged in.
        Debug.Log(
            string.Format("Display Name: {0}\nEmail: {1}\nUser ID: {2}\nID Token: {3}", userInfo.displayName ?? "",
                userInfo.email ?? "", userInfo.userId ?? "", userInfo.idToken ?? ""));
        //authenticate user to bc
        _bc.AuthenticateApple(userId, idToken, true, authSuccess_BCcall, authError_BCcall);
    }
```
- Finish the rest callbacks code in your script.
- Click `Build Settings` from Unity `File` tab, switch platform to iOS.

[![](images/Screen+Shot+2021-01-10+at+9.44.33+PM.png)](https://downloads.intercomcdn.com/i/o/285894570/a762ccc8796ffd0f0e9c1df2/Screen+Shot+2021-01-10+at+9.44.33+PM.png)

- Set up project `Bundle Identifier` via `Player Settings` .

[![](images/Screen+Shot+2021-01-10+at+9.47.48+PM.png)](https://downloads.intercomcdn.com/i/o/285895068/44669e72e173434f0ddfbc00/Screen+Shot+2021-01-10+at+9.47.48+PM.png)

- Click `Build and Run`, then create a folder to save this Xcode project on your local storage.

[![](images/Screen+Shot+2021-01-10+at+9.55.52+PM.png)](https://downloads.intercomcdn.com/i/o/285896056/9744398043cd503cc7ffca22/Screen+Shot+2021-01-10+at+9.55.52+PM.png)

**Step 2: Configure bundle identifier on brainCloud**

- Open your app from brainCloud development portal, navigate to **Design | Core App Info** page.

[![](images/image.png)](https://downloads.intercomcdn.com/i/o/285908041/f165ca4a7d3aa1ce30c6c2e3/image.png)

- Click **Apple** under Configure Platforms and paste your `Bundle Identifier` to `Signin Client Id` field.

[![](images/Screen+Shot+2021-01-10+at+11.26.27+PM.png)](https://downloads.intercomcdn.com/i/o/285908913/c591b521a4616bbb5a1b743d/Screen+Shot+2021-01-10+at+11.26.27+PM.png)

- Make sure the `Apple iOS` platform is selected from the **Design | Core App Info | Platforms** page.

**Step 3: Configure authentication service on Xcode**

- Open the build Xcode project via Xcode editor, make sure `AuthenticationServices.framework` is added to `UnityFramework`

[![](images/Screen+Shot+2021-01-10+at+11.00.41+PM.png)](https://downloads.intercomcdn.com/i/o/285905752/c0386612eda45b59bb0149a5/Screen+Shot+2021-01-10+at+11.00.41+PM.png)

- Add `Sign in with Apple` capability to Unity-iPhone from `Signing & Capabilities` tab.
- Select `Automatically manage signing` checkbox, then login to your Apple developer team.

[![](images/Screen+Shot+2021-01-10+at+11.11.17+PM.png)](https://downloads.intercomcdn.com/i/o/285906760/d880662a000a2c03db1cac23/Screen+Shot+2021-01-10+at+11.11.17+PM.png)

- Once the above step is done, check the `Identifiers` is added to your Apple developer account under `Certificates, Identifiers & Profiles` section.

[![](images/Screen+Shot+2021-01-10+at+11.13.37+PM.png)](https://downloads.intercomcdn.com/i/o/285907595/c10ac4da92fa8fde99b72828/Screen+Shot+2021-01-10+at+11.13.37+PM.png)

- Connect your testing device to Xcode, then run this project on your testing device.

[![](images/Screen+Shot+2021-01-10+at+11.37.43+PM.png)](https://downloads.intercomcdn.com/i/o/285910469/c944f42a52608034397396aa/Screen+Shot+2021-01-10+at+11.37.43+PM.png)
