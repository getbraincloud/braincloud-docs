---
title: "Getting Started with Cocos2d-x"
date: "2014-11-28"
---

This tutorial will get you started with integrating the brainCloud library in your Cocos2d-x game. We've included an example project that runs through some basic brainCloud operations. Please excuse the lackluster UI.

The example project has been tested using the iOS simulator and device (32 and 64-bit architectures) as well as the Android simulator and device (using a mac build environment). The rest of the platforms (windows etc) haven't been tested at all so likely they will fail to compile and/or run. We will be updating the example project soon to provide support for these additional platforms.

## Assumptions

Before starting you should make sure you've done the following:

- Created a brainCloud Portal account
- Created a game in the brainCloud Portal. If you need help with this step refer to the Unity tutorial #1 video.

Onwards!

## Download the Example Project

[Download the example](http://d28b58vufdqdih.cloudfront.net/brainCloudExamples/cpp/brainCloudExample_Cocos2dx_0.11.3_165242.zip)

Version History

- 0.11.3 - Updated to latest 2.14 brainCloud library
- 0.11.2 - Minor update
- 0.11.1 - Added support for Android
- 0.10.1 - Integrated Cocos2d-x 3.3 and added Facebook authentication support
- 0.9.2 - Integrated Cocos2d-x 3.3 rc1 which fixed 32-bit targets failing to link.
- 0.9.1 - Fixed hardcoded library path
- 0.9.0 - Initial Release

## Create initial Cocos2d-x project

If you haven't already created your basic game folder structure, follow the Cocos2d-x steps to do so. See the "How To Start A New Game" section here:

[https://github.com/cocos2d/cocos2d-x](https://github.com/cocos2d/cocos2d-x)

In our examples below we will assume our game is called "MyGame".

## Download the latest brainCloud libraries

Log into the brainCloud portal and grab the latest brainCloud client libraries. When you first log in you will see a link to the client libraries in the left hand nav bar. Click this link and grab the appropriate library for your development platform.

[![brainCloud_Dashboard_Project_Cyber](images/brainCloud_Dashboard_Project_Cyber.png)](images/brainCloud_Dashboard_Project_Cyber.png)

Note that if you are already logged into the portal you can return to the Home page/Administration area by clicking the gear icon in the upper right.

## Project Configuration

### 

![1423795127_16-apple-64](images/1423795127_16-apple-64.png)

### iOS

#### Add brainCloud library to the project

- Open the XCode project in _proj.ios\_mac/MyGame.xcodeproj_
- Because I'm paranoid I hit run just to make sure the project Cocos2d-x generated actually compiles and runs
- Unzip the brainCloud libraries into a platform specific folder in your game project. I ended up creating a path that looks like this:_MyGame/libs/ios/brainCloud._Underneath this folder would be include, libs, src and thirdparty.
- Add the brainCloud folder to the project by right clicking on the project and select "Add Files to MyGame..."

    [![Fullscreen_2014-12-02__9_02_AM](images/Fullscreen_2014-12-02__9_02_AM.png)](images/Fullscreen_2014-12-02__9_02_AM.png)

- Point to the libs folder you just created and make sure the "Create Groups" option is selected. You should now see a folder structure like the image below:

    [![MyGame_xcodeproj](images/MyGame_xcodeproj.png)](images/MyGame_xcodeproj.png)

#### Build Settings

In order to compile we need to set up a few include and link paths. Open up build settings and execute the following steps:

- In "Header Search Paths", add the following include:__$(SRCROOT)/../libs/ios/brainCloud/thirdparty/jsoncpp-1.0.0__
    
    [![MyGame_xcodeproj 2](images/MyGame_xcodeproj-2.png)](images/MyGame_xcodeproj-2.png)
    

#### Build Phases

Execute the following steps under the "Build Phases" menu:

- Under "Link Binary With Libraries" add the following Frameworks:
    - GameKit.framework
    - Security.framework

Your iOS project is now setup!

## 

![1423795117_android-64](images/1423795117_android-64.png)

## Android

### Prerequisites

- Install Android Studio (the important part is the [SDK manager](http://developer.android.com/tools/help/sdk-manager.html))
- Install the Android SDK using the SDK Manager. I used 4.0 aka android-14
- Install the [Android NDK](https://developer.android.com/tools/sdk/ndk/index.html) \- I used r10d
- Install [Eclipse](https://eclipse.org/)
- Install the Eclipse [ADT Plugin](http://developer.android.com/tools/sdk/eclipse-adt.html)
- Set your NDK path in Eclipse properties

### Quickstart guide to running the example Android project

The example project needs a few extra steps before you can run it properly. Namely you will need to:

- Open Eclipse and import the project using the "Existing Projects into Workspace" option.

    [![Import_and_Java_EE_-_Eclipse_-__Users_prestonjennings_Documents_workspace](images/Import_and_Java_EE_-_Eclipse_-__Users_prestonjennings_Documents_workspace.png)](images/Import_and_Java_EE_-_Eclipse_-__Users_prestonjennings_Documents_workspace.png)

- Select the "brainCloudExample/proj.android" folder

    [![Import_and_Java_EE_-_Eclipse_-__Users_prestonjennings_Documents_workspace 2](images/Import_and_Java_EE_-_Eclipse_-__Users_prestonjennings_Documents_workspace-2.png)](images/Import_and_Java_EE_-_Eclipse_-__Users_prestonjennings_Documents_workspace-2.png)

- Once the project is imported, right click on the project and select properties
- In the Android section, select the appropriate Build Target. I'm using Google API 4.0

    [![Properties_for_brainCloudExample](images/Properties_for_brainCloudExample.png)](images/Properties_for_brainCloudExample.png)

- Next, go to C/C++ Build | Environment. Add a new environment variable "NDK\_ROOT" and point it to your NDK folder. Make sure to check "Add to all configurations".

    [![New_variable_and_Properties_for_brainCloudExample](images/New_variable_and_Properties_for_brainCloudExample.png)](images/New_variable_and_Properties_for_brainCloudExample.png)

You should now be setup to build the example project. To test things out, try setting the active build target to debug and doing a "Debug As | Android Native Application"

### Setting up your own Android project

After creating the cocos2d-x project skeleton, you can add brainCloud to your project by doing the following:

- Unzip the Android library into a libs folder. I chose to put them in a top level folder (same level as the Classes directory). My folder structure looks like the following:
    
    [![libs](images/libs.png)](images/libs.png)
    

- Add the static library modules to your jni/Android.mk file. Note these should be before your main project definition (ie before the CLEAR\_VARS)
```js
include $(CLEAR\_VARS)
LOCAL\_MODULE := braincloud
LOCAL\_SRC\_FILES := ../../libs/android/brainCloud/libs/$(TARGET\_ARCH\_ABI)/libbraincloud.a
include $(PREBUILT\_STATIC\_LIBRARY)

include $(CLEAR\_VARS)
LOCAL\_MODULE := curl
LOCAL\_SRC\_FILES := ../../cocos2d/external/curl/prebuilt/android/$(TARGET\_ARCH\_ABI)/libcurl.a
include $(PREBUILT\_STATIC\_LIBRARY)

include $(CLEAR\_VARS)
LOCAL\_MODULE := crypto
LOCAL\_SRC\_FILES := ../../cocos2d/external/curl/prebuilt/android/$(TARGET\_ARCH\_ABI)/libcrypto.a
include $(PREBUILT\_STATIC\_LIBRARY)

include $(CLEAR\_VARS)
LOCAL\_MODULE := ssl
LOCAL\_SRC\_FILES := ../../cocos2d/external/curl/prebuilt/android/$(TARGET\_ARCH\_ABI)/libssl.a
include $(PREBUILT\_STATIC\_LIBRARY)
```
- Add the includes to jni/Android.mk:
```js
LOCAL\_C\_INCLUDES += $(LOCAL\_PATH)/../../libs/android/brainCloud/include
LOCAL\_C\_INCLUDES += $(LOCAL\_PATH)/../../libs/android/brainCloud/src
LOCAL\_C\_INCLUDES += $(LOCAL\_PATH)/../../libs/android/brainCloud/thirdparty/jsoncpp-1.0.0
```
- Add the source files to jni/Android.mk:
```js
define all-cpp-files-under
$(patsubst ./%,%, \\
  $(shell cd $(LOCAL\_PATH) ; \\
    find $(1) -name "\*.cpp" -and -not -name ".\*") \\
 )
endef

define all-subdir-braincloud-cpp-files
$(call all-cpp-files-under,../../libs/android/brainCloud/src)
endef

define all-subdir-json-cpp-files
$(call all-cpp-files-under,../../libs/android/brainCloud/thirdparty/jsoncpp-1.0.0)
endef

LOCAL\_SRC\_FILES += $(call all-subdir-braincloud-cpp-files)
```
- Add the static library and c++ exception rule to jni/Android.mk:
```js
LOCAL\_STATIC\_LIBRARIES := cocos2dx\_static braincloud curl crypto ssl

LOCAL\_CPP\_FEATURES += exceptions
```
- Copy the AndroidBridge.java file from the brainCloud javasrc directory into your project's java source code directory
- In the AppActivity.java file of your cocos project, add a call to AndroidBridge.initializeLocale(). We override the init method to accomplish this:  
```js

@Override
public void init() 
{
	super.init();	
	AndroidBridge.initializeLocale();
}
```
#### Optional -  if you're creating a project from scratch you will probably need to do the following extra steps:

- Add the NDK\_ROOT variable to your Project properties (C/C++ Build | Environment)
- Add the minimum Android SDK variable to your AndroidManifest.xml file (we used 14 in the example project)
- Add the minimum Android SDK to your Application.mk (APP\_PLATFORM := android-14)
- Set the minimum Android SDK in your Project properties (Android | Project Build Target)
- Add the ABI to your Application.mk (APP\_ABI := x86 armeabi)

#### Windows 8.1 (TBD)

#### Windows Phone (TBD)

#### Windows 32 (TBD)

## Initialize brainCloud

Now that you have your project setup, you will need to initialize the brainCloud client with your game id/secret and a few other items. For this we'll use the included "BrainCloudWrapper" class (in the src directory of the brainCloud client).

There are a number of places where this can be done. We're going to use the AppDelegate class but you're welcome to put this initialization code wherever makes the most sense for your project.

- Open AppDelegate.cpp
- Add an include for BrainCloudWrapper to the top of the file:  
```js

#include "BrainCloudWrapper.h"
```
- Initialize BrainCloudWrapper with the appropriate parameters.
```js
const char \* url = "https://sharedprod.braincloudservers.com/dispatcher"; 
const char \* secretKey = "7014fb94-41e6-49cd-9a77-e50233d40133"; 
const char \* gameId = "10068"; 
const char \* gameVersion = "2.0"; 
const char \* companyName = "bitHeads"; 
const char \* gameName = "cocosExample"; 

BrainCloudWrapper::getInstance()->initialize(url, secretKey, gameId, gameVersion, companyName, gameName);
```

You will want to substitute the correct parameters for your game. The secretKey and gameId need to correspond to the values for your game in the portal (see the Unity Tutorial #1 video for more details).

The gameVersion, companyName, and gameName are up to you.

### Hook up the Callback

The next step is to ensure that the BrainCloudWrapper update method is being called regularly. This method is what triggers the brainCloud callback methods to execute (and sends/reads from the network pipe). In the cocos 2d-x example, you'll notice that the "MainScene" class includes an "update(float)" method which calls the BrainCloudWrapper update method:
```js
void MainScene::update(float dt)
{
    BrainCloudWrapper::getInstance()->update(dt);
}
```
MainScene kicks off the update method using this code in the init function:
```js
Director::getInstance()->getScheduler()->schedule(schedule\_selector(MainScene::update), this, 0.1f, false);
```
So in the example, there is nothing to add. However it is important to note that when implementing brainCloud for your game you will have to ensure the BrainCloudWrapper update method is being called regularly.

## Authentication

Now that the brainCloud client library is initialized and the callback routine is hooked up, you can begin authentication with the server. There are various authentication methods available but for this simple example, we will use Universal authentication. This allows us to specify a username and password and automatically have the account created if it doesn't already exist.

[See more details on Authentication here](/api/capi/authentication "BrainCloudAuthentication")

In our example project, you can navigate to "ConnectUniversalLayer.h/cpp" to follow along.

### Universal Authenticate

In order to authenticate we use the following code:
```js
// grab the username and password from the cocos edit box
const char \* user = m\_usernameDisplay->getEditBox()->getText();
const char \* pwd = m\_pwdDisplay->getEditBox()->getText();

// and the call authenticate passing in this pointer as the callback object
BrainCloudWrapper::getInstance()->authenticateUniversal(user, pwd, this);
```
Note that we pass in a this variable as our callback handler. The callback interface is defined in BrainCloud::IServerCallback

### Handling Callbacks (IServerCallback)
```js
IServerCallback is the interface used for all requests to the server. You'll notice there are three methods to implement (see IServerCallback.h in the brainCloud include directory):

virtual void serverCallback( ServiceName serviceName, ServiceOperation serviceOperation, std::string const & jsonData) = 0;

virtual void serverError( ServiceName serviceName, ServiceOperation serviceOperation, int returnCode, const std::string & jsonData) = 0;

virtual void serverWarning( ServiceName serviceName, ServiceOperation serviceOperation, int returnCode, int numRetries, const std::string & jsonData) = 0;
```
**serverCallback** is called when a request is processed successfully. **serverError** is called when an error occurs, and **serverWarning** is called primarily when requests are retried due to a timeout (you can safely ignore this one).

**ServiceName** defines the server-side service that was invoked

**ServiceOperation** defines the server-side operation that was invoked

**ServiceName** and **ServiceOperation** come into significance when you have a single callback handler for multiple operations. You'll notice in the brainCloud method documentation (and in the brainCloud apidocs website) that all methods describe their **ServiceName** and **ServiceOperation**.

So in order to implement the handler we do the following in our ConnectUniversalLayer class:

- Implement the public interface

class ConnectUniversalLayer : public Layer, public BrainCloud::IServerCallback

- Implement the success callback
```js
void ConnectUniversalLayer::serverCallback( BrainCloud::ServiceName serviceName, BrainCloud::ServiceOperation serviceOperation, std::string const & jsonData)
{
    if (serviceName == BrainCloud::ServiceName::AuthenticateV2 && serviceOperation == BrainCloud::ServiceOperation::Authenticate)
    {
        m\_logBox->addText("Authenticate was successful!");
        if (m\_mainScene != NULL)
        {
            // add short delay before switching scenes
            Action \*sequence = Sequence::createWithTwoActions(DelayTime::create(0.7f), CallFunc::create( CC\_CALLBACK\_0(MainScene::switchToMainLayer, m\_mainScene)));
            runAction(sequence);
        }
    }
}
```
- Implement the failure and warning callbacks
```js
void ConnectUniversalLayer::serverError( BrainCloud::ServiceName serviceName, BrainCloud::ServiceOperation serviceOperation, int returnCode, const std::string & jsonData)
{
    \_\_String\* errorString = String::createWithFormat("Server Error: %d  %s", returnCode, jsonData.c\_str());
    m\_logBox->addText(errorString->getCString());
}

void ConnectUniversalLayer::serverWarning( BrainCloud::ServiceName serviceName, BrainCloud::ServiceOperation serviceOperation, int returnCode, int numRetries, const std::string & jsonData)
{
    \_\_String\* warningString = String::createWithFormat("Server Warning: %d  %s  attempt %d", returnCode, jsonData.c\_str(), numRetries);
    m\_logBox->addText(warningString->getCString());
}
```
## Player Statistics

brainCloud allows you to store statistics for a player. Below we show you how to set this up.

### Add Statistics to the brainCloud Portal

The first step is to add your player statistics to your game in the brainCloud Portal. Navigate to the Player Statistics section

[![brainCloud_Dashboard_-_Simple_Example](images/brainCloud_Dashboard_-_Simple_Example.png)](images/brainCloud_Dashboard_-_Simple_Example.png)

Click the + icon on the right hand of the screen to add a Player Statistic

[![brainCloud_Dashboard_-_Simple_Example 4](images/brainCloud_Dashboard_-_Simple_Example-4.png)](images/brainCloud_Dashboard_-_Simple_Example-4.png)

In this case I've added a statistic called "gamesWon".

### Incrementing Player Statistics

Now we can add the code which increments and retrieves statistics. In this case refer to the "PlayerStatsLayer" class in the example project.
```js
Json::Value stats;
stats\[statName\] = valueString;
                
Json::FastWriter fastWriter;
string jsonToSend = fastWriter.write(stats);
                
BrainCloudWrapper::getInstance()->getBCClient()->getPlayerStatisticsService()->incrementPlayerStats(jsonToSend, this);
```
A success message will be returned in the callback handler if everything is ok.

### Retrieving Player Statistics

To retrieve player statistics we first call ReadAllPlayerStatistics:
```js
BrainCloudWrapper::getInstance()->getBCClient()->getPlayerStatisticsService()->readAllPlayerStats(this);

And then in our callback handler we can iterate through the player statistics as follows:

Json::Value jsonValue = BrainCloudWrapper::getInstance()->getBCClient()->jsonStringToValue(jsonData);
Json::Value statMap = jsonValue\["data"\]\["statistics"\];
	
auto memberNames = statMap.getMemberNames();
for (int i = 0; i < memberNames.size(); i++)
{
    const char \* statName = memberNames\[i\].c\_str();
    long statValue = statMap\[memberNames\[i\]\].asInt64();
}
```
## Conclusion

There are many brainCloud APIs available to use. This guide should have familiarized you with the basic callback flow we use in the brainCloud client, as well as basic authentication and player statistics. As always, if you have any support questions, log into the brainCloud portal and click the green help icon on the bottom right. We will be glad to point you in the right direction!
