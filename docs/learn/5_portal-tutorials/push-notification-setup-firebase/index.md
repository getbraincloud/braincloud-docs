---
title: "Push Notification Setup - Firebase"
date: "2017-07-31"
---

This tutorial will walk you through the steps to configure Firebase Cloud Messaging (FCM) with brainCloud.

### Prerequisites

- Must have created an app on the [Firebase console](https://console.firebase.google.com/)

### Step1: Configure FCM cloud messaging server-key to brainCloud

- Navigate your browser to the [Firebase console](https://console.firebase.google.com/) and select your project. Click the Settings Icon -> “Project settings” in the top left nav bar.

![](https://downloads.intercomcdn.com/i/o/363163268/df61c0644eed17b7c7720fdd/image.png)

- [](https://downloads.intercomcdn.com/i/o/363163268/df61c0644eed17b7c7720fdd/image.png)Select “Cloud Messaging” and copy the Server Key.

![](https://downloads.intercomcdn.com/i/o/363163674/9784d263d41547231f100d3f/image.png)

- [](https://downloads.intercomcdn.com/i/o/363163674/9784d263d41547231f100d3f/image.png)Navigate to the brainCloud development console Design | Notification | Settings page, click Edit Settings.

![](https://downloads.intercomcdn.com/i/o/363164687/0b9686fb11a02b479228e124/image.png)

- [](https://downloads.intercomcdn.com/i/o/363164687/0b9686fb11a02b479228e124/image.png)Paste this key into Google Play API key field, and set expiration days for this key.

![](images/image1.png)

### Step2: Register a notification token to your device via your app

- Use the Keystore file of your Android app to create a fingerprint SHA1 and add it to your Firebase project.

![](https://downloads.intercomcdn.com/i/o/363170155/8a1b3fd682b55062c117f921/image.png)

- [](https://downloads.intercomcdn.com/i/o/363170155/8a1b3fd682b55062c117f921/image.png)Download `google-services.json` file and add it to your app `root` folder (for Unity will under `Assets` folder). This file contains most of the credentials you’ll need to connect your app to Firebase.

![](https://downloads.intercomcdn.com/i/o/363171394/676a6832ba89d7e8c5d15600/image.png)

- [](https://downloads.intercomcdn.com/i/o/363171394/676a6832ba89d7e8c5d15600/image.png)Follow the `SDK Instruction` to finish settings for your app. (If you are using the Unity Firebase Messaging package, after importing, your `Assets` folder should similar to the structure below)

![](https://downloads.intercomcdn.com/i/o/363172566/c331289185689feda4332a47/image.png)

- [](https://downloads.intercomcdn.com/i/o/363172566/c331289185689feda4332a47/image.png)In your app, after authenticating a user with brainCloud, you will need to register the `Firebase Registration token` with brainCloud. Specifically, you’ll want to call the [RegisterPushNotificationDeviceToken()](/api/capi/pushnotification/registerpushnotificationdevicetoken) method to pass in the token.
- If you are using Unity SDK, your code should be similar to the following.
```js
    void InitializeFirebase()
    {
        Firebase.Messaging.FirebaseMessaging.MessageReceived += OnMessageReceived;
        Firebase.Messaging.FirebaseMessaging.TokenReceived += OnTokenReceived;
        Firebase.Messaging.FirebaseMessaging.SubscribeAsync(topic).ContinueWithOnMainThread(task => {
            LogTaskCompletion(task, "SubscribeAsync");
        });
        DebugLog("Firebase Messaging Initialized");
        Firebase.Messaging.FirebaseMessaging.RequestPermissionAsync().ContinueWithOnMainThread(
            task => {
                LogTaskCompletion(task, "RequestPermissionAsync");
            }
        );
        isFirebaseInitialized = true;
    } 

...
    public virtual void OnTokenReceived(object sender, Firebase.Messaging.TokenReceivedEventArgs token)
    {
        DebugLog("Received Registration Token: " + token.Token);
        firebaseToken = token.Token;
        AddStatusText("Received Registration Token: " + token.Token);
    }
...
    public void OnRegisterToken()
    {
        _bc.PushNotificationService.RegisterPushNotificationDeviceToken(Platform.GooglePlayAndroid, firebaseToken, authSuccess_BCcall, authError_BCcall);
    }
...
```
- If using Java Android studio
```js
  FirebaseInstanceId.getInstance().getInstanceId()
  .addOnCompleteListener(new OnCompleteListener<InstanceIdResult>() {
      @Override
      public void onComplete(@NonNull Task<InstanceIdResult> task) {
          if (!task.isSuccessful()) {
              Log.w(TAG, "getInstanceId failed", task.getException());
              return;
          }

          // Get new Instance ID token
          String token = task.getResult().getToken();
          _bc.GetWrapper().getPushNotificationService().registerPushNotificationToken(Platform.GooglePlayAndroid, token, theCallback);
      }
  });
```
### Step3: Test

- Run your app, authenticate an end-user to brainCloud and call RegisterPushNotificationDeviceToken() method to register device token.

![](https://downloads.intercomcdn.com/i/o/363178357/3c1e5a09827267caede11b8d/image.png)

- [](https://downloads.intercomcdn.com/i/o/363178357/3c1e5a09827267caede11b8d/image.png)Once your test device is registered the notification token to brainClound from your app, you can check it from the **User** **Monitoring | User Summary** page.

![](https://downloads.intercomcdn.com/i/o/363176360/1474feee11f5367407b4e4b1/image.png)

- [](https://downloads.intercomcdn.com/i/o/363176360/1474feee11f5367407b4e4b1/image.png)Hit `Send Notification` button from the above page will pop-up a `Send Notification` window, fill some text and Click `Send`. Your test device should receive this notification from brainCloud. You can always use brainCloud Push Notification [methods](/api/capi/pushnotification) to test push notifications too.

![](https://downloads.intercomcdn.com/i/o/363181329/3755b318ffa0dd79912cbb1f/image.png)

- [](https://downloads.intercomcdn.com/i/o/363181329/3755b318ffa0dd79912cbb1f/image.png)Note that the above example is the settings for Android, however, the configuration steps are almost the same, for detail of setting up iOS with FCM, please visit Firebase documentation.
