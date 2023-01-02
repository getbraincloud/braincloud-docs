---
title: "Getting Started With the Online Subsystem"
date: "2015-11-05"
---

**NOTE: ** OnlineSubsystem support is still in-development

### Prerequisites

- Created a brainCloud Portal account
- Created a game in the brainCloud Portal. If you need help with this step refer to the [Unity Tutorial #1 video](/apidocs/tutorials/unity-tutorials/unity-tutorial-1-getting-started/).
- An Unreal project with the brainCloud plugin installed as described [here](/apidocs/tutorials/unreal-tutorials/setting-up-the-braincloud-plugin/)
- Basic experience with Unreal C++, see the [Unreal documentation](https://docs.unrealengine.com/latest/INT/Programming/Introduction/index.html) for help

### Initialization

The first step is to create the BrainCloudConfig.ini file that the Subsystem will read in order to automatically initialize brainCloud. Note that this step is optional.  If you wish you can manually initialize the Client through Blueprint or native C++ instead by calling the [BrainCloudClient->Initialize](/apidocs/apiref/?cpp#capi-client-initialize) function.

1. Open the root folder of your Unreal project (where the \*.uproject file is)
2. Open the Config folder
3. Create a new text file and rename it to BrainCloudConfig.ini (ensure the extension is changed from .txt to .ini, not just named BrainCloudConfig.ini.txt)
4. Enter the following into the file, replacing the Secret and App ID and version with those of your App:

\[BrainCloud.Client\]
ServerURL = "https://sharedprod.braincloudservers.com/dispatcherv2"
Secret = YOUR-APP-SECRET-HERE
AppID = YOUR-APP-ID-HERE
Version = 1.0.0

### Using OnlineSubsystem

To learn more about using the Unreal Online Subsystem refer to the [official Unreal documentation](https://docs.unrealengine.com/latest/INT/Programming/Online/index.html).
