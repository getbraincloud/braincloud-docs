---
title: "Wrappers, Clients and Inconvenient Singletons..."
date: "2017-12-12"
authors: paul
tags: 
  - "blog"
coverImage: "braincloud-client-api-architecture-overview.png"
---

With release 3.6.5, brainCloud is breaking away from the singletons that were previously a key aspect of our client libraries.

We thought we'd take a moment to discuss the pros and cons of the design, and explain where and why we are going a different route.

## Background

To start, lets review the purpose and design of the client library.

The goal of the client library is to _simplify development of brainCloud-based applications_. It does this by:

- providing local implementation of brainCloud client calls (instead of forcing the client app to use Raw REST calls)
- automating communications with the server (bundling of messages for efficiency, packet security, and more)
- performing standard error handling

The library is actually organized into two major components:

- the brainCloud Client Library - a pure, platform-independent wrapper of the brainCloud client-server protocol
- the brainCloud Wrapper - simplifies aspects of the API (especially authentication) by incorporating more client-side functionality, like saving and restoring anonymousIds and profileIds.

Use of the client library is required by apps. Use of the wrapper is highly recommended, but optional. _Note - originally we only had the client library. The wrapper was added later as an aid to app developers._ 

* * *

Delving deeper into the design, you can see that the client object maintains a list of services and internal components that work together to provide the client functionality. The wrapper on the other hand is quite simple, and merely adds an additional simplification layer to the API.

[![](images/braincloud-client-api-architecture-details.png)](images/braincloud-client-api-architecture-details.png)

Of significance here is the use of singletons. There are two singletons in play - one for the client, and one for the wrapper. Not only are the singletons used as the reference from the client to the wrapper and/or client library objects - but they are also used for communications between BrainCloudWrapper and BrainCloudClient.

In hindsight, although our intentions were good - this usage of singletons was a mistake.

The cons (as we now see them) are:

- Complicates the client code (calling the static class methods to retrieve a reference to the wrapper and or client object is more painful than using a direct global of some sort)
- Complicates the documented code examples
- Restricts a client to have one-and-only-one connection to the brainCloud server [ _this is a crippling restriction for some use cases - couch co-op anyone?_ ]

## The fix

And so, we are fixing this.

[![](images/braincloud-client-api-architecture-new.png)](images/braincloud-client-api-architecture-new.png)

The changes to the new client libraries are three-fold:

- `BrainCloudWrapper` objects now have their own reference to their associated `BrainCloudClient` companions
- `BrainCloudWrapper` objects also now provide direct methods for accessing the client services: you no longer have to call _wrapper → client → service → operation_, instead it is simply _wrapper → service → operation_

The result is that instead of your client code looking like this:

`BrainCloudWrapper.Instance.GetBC().LeaderboardService.ListAllLeaderboards( ApiSuccess, ApiError);`

It can look like this:

`_bc.LeaderboardService.ListAllLeaderboards( ApiSuccess, ApiError);`

## The Changes

So - more flexibility and clearer code? What's the catch?

The catch is that you need to make a few changes to your client to get this goodness. For new apps it's no big deal at all - this could be a pain for existing apps though, so we are still including a legacy singleton mode in the client libraries - but that needs to be specifically enabled.

_**Update: Legacy Singleton Mode has been removed from brainCloud client libraries beginning with 4.0.**_ 

Here are the steps to getting your app working using the updated libraries

1. Grab the latest brainCloud client library from the portal via the **Team | Client Libs** page.
2. Create an instance of `BrainCloudWrapper` and save it to a global accessible throughout your client app. In our documentation examples we use \_bc, but it can be anything
3. Adjust any client code to use this new reference - try searching and replacing
    1. "BrainCloudWrapper.Client." → "\_bc."
    2. "BrainCloudClient.Instance." → "\_bc."

And that's about it.

Note - you can optionally specify a \__wrapperName_ to use creating the wrapper. This name will be used as a key when storing data about the session, like the anonymousId and profileId.

You only need to specify the _\_wrapperName_ if you are implementing a client with multiple concurrent connections to the brainCloud server (to help keep the session data separate). _**In particular, if you are updating an existing app, do not specify a profile-name - this ensures that the user does not lose their saved profile references when they upgrade to the latest version of your app!**_

```csharp
_bc = new BrainCloudWrapper(); // optionally pass in a _wrapperName
_bc.initialize(_appId, _secret, _appVersion);
```


```csharp
_bc = go.AddComponent&lt;BrainCloudWrapper&gt;();
_bc.WrapperName = "_example"; // optionally set a wrapper-name
_bc.Init();
```

## Legacy Singleton Mode

_**Update: Legacy Singleton Mode has been removed from brainCloud client libraries beginning with 4.0.**_ 

Want to move to the new libraries, but change as little code as possible? No worries, we have you covered. Here's what you do:

1. Grab the latest brainCloud client library from the portal via the **Team | Client Libs** page.
2. Turn on legacy singleton mode via the `BrainCloudClient.EnableSingletonMode()` API call. Put the call in your code right before you initialize the library.
3. Unity only (and only if you were using the `Client` static class accessor): Adjust any calls to `BrainCloudWrapper.Client.aService().anOperation()` to use `BrainCloudWrapper.Instance.Client.aService().anOperation()` instead (Note the additional Instance step).

The following code snippet shows how to enable singleton mode in various languages:


```csharp
BrainCloudClient.EnableSingletonMode = true;  // Turn on legacy singleton mode
BrainCloudWrapper.getInstance().initialize(_appId, _secret, _appVersion);
```


```csharp
BrainCloudClient.EnableSingletonMode = true;  // Turn on legacy singleton mode
BrainCloudWrapper.getInstance().Init();
```


## Conclusion

Anyway, thats the summary of what we have changed, and why.

We hope you agree that the improvements to functionality and readability are worth it.

If you have any feedback or concerns, feel free to hit the chat link and let us know.

Cheers!
