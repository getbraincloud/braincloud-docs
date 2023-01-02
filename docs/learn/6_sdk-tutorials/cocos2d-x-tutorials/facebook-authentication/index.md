---
title: "Facebook Authentication"
date: "2015-01-14"
---

This tutorial builds on the Getting Started with Cocos 2d-x tutorial by adding Facebook authentication. We use the Cocos 2d-x 3.3 built-in Facebook plugin to interact with the Facebook login and access dialogs.

## Assumptions

Before starting you should make sure you've done the following:

- Run through the steps in the [Getting Started with Cocos 2d-x tutorial](/learn/sdk-tutorials/cocos2d-x-tutorials/cocos-2dx-example-1-getting-started/ "Getting Started with Cocos2d-x") as we will build upon the code in the example project. This would include pointing the example project to your own brainCloud game id etc as described in the tutorial
- Have a current version of the example project from the [Getting Started with Cocos 2d-x tutorial](/learn/sdk-tutorials/cocos2d-x-tutorials/cocos-2dx-example-1-getting-started/ "Getting Started with Cocos2d-x")

## Links to Facebook Documentation

You will find the following links useful in understanding how to use Facebook in Cocos 2d-x:

- Facebook with Cocos 2d-x starting page  
    [https://developers.facebook.com/docs/cocos2d-x](https://developers.facebook.com/docs/cocos2d-x)
- Reference and setup guide  
    [http://cocos2d-x.org/wiki/Facebook\_Support\_for\_Cocos2d-x\_Beta](http://cocos2d-x.org/wiki/Facebook_Support_for_Cocos2d-x_Beta)  
    [http://www.cocos2d-x.org/wiki/Facebook\_API\_Reference\_for\_Cocos2d-x\_and\_Cocos2d-x-lua](http://www.cocos2d-x.org/wiki/Facebook_API_Reference_for_Cocos2d-x_and_Cocos2d-x-lua)

## Configure Project

First step is to follow the setup guide provided by Facebook/Cocos 2d-x:

[http://cocos2d-x.org/wiki/Facebook\_integration\_instruction\_for\_Cocos2d-x\_and\_Cocos2d-x-Lua\_on\_iOS](http://cocos2d-x.org/wiki/Facebook_integration_instruction_for_Cocos2d-x_and_Cocos2d-x-Lua_on_iOS)

Note that these steps have been already completed in the example project. You may wish to point to your own Facebook app however which is detailed in the link above.

## Add Facebook Configuration to brainCloud Portal

In order for brainCloud to authenticate your Facebook user, it will need to communicate with the Facebook servers. In order to do this, you will need to configure a few things in the brainCloud Portal. Log into the portal and navigate to the Core Game Info | Application Ids page in the Design tab. Click the Facebook icon to enable Facebook:

[![Enable Facebook](images/brainCloud_Dashboard_-_Simple_Example.png)](images/brainCloud_Dashboard_-_Simple_Example.png)

And then enter your Facebook App ID and Facebook Secret (both of which can be found on the Facebook developer portal):

[![Configure Facebook](images/brainCloud_Dashboard_-_Simple_Example-2.png)](images/brainCloud_Dashboard_-_Simple_Example-2.png)

## Get Facebook Auth Token

The code to log into Facebook and retrieve an authentication token is as follows:
```js
auto facebook = cocos2d::plugin::FacebookAgent::getInstance();
facebook->login(\[=\](int returnCode, std::string& jsonResponse) {
    if (returnCode == 0)
    {
        //handle success
        std::string = facebook->getAccessToken();
    }
    else
    {
         // handle error
     }
});
```
In the example project, we execute more or less the above steps in the ConnectFacebookLayer class under the onFacebookLoginPressed function.

## Authenticate with brainCloud

Once you've successfully logged into Facebook you'll have everything you need to authenticate with brainCloud. If you're using the BrainCloudWrapper class to do authentication you can authenticate by calling this function:
```js
auto facebook = cocos2d::plugin::FacebookAgent::getInstance();
std::string fbUserId = facebook->getUserID();
std::string fbToken = facebook->getAccessToken();

BrainCloudWrapper::getInstance()->authenticateFacebook(fbUserId.c\_str(), fbToken.c\_str(), this);
```
In the example project, we authenticate with brainCloud in the ConnectFacebookLayer class onConnectPressed function.

## Register Callback Handlers

As per the example project, you'll need to set up your callback handler functions to deal with success/errors from brainCloud. The ConnectFacebookLayer class handles callbacks in the functions listed below:
```js
virtual void serverCallback( BrainCloud::ServiceName serviceName, BrainCloud::ServiceOperation serviceOperation, std::string const & jsonData);
virtual void serverError( BrainCloud::ServiceName serviceName, BrainCloud::ServiceOperation serviceOperation, int returnCode, const std::string & jsonData);
virtual void serverWarning( BrainCloud::ServiceName serviceName, BrainCloud::ServiceOperation serviceOperation, int returnCode, int numRetries, const std::string & jsonData);
```
You can also find further documentation that describes the Authentication calls as well as return codes in [Authentication section of the API reference site](/api/capi/authentication "Authentication")
