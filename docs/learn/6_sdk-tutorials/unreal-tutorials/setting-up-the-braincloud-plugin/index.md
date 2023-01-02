---
title: "Setting Up The brainCloud Plugin"
date: "2015-11-05"
---

This tutorial goes through the steps of installing the brainCloud Unreal plugin for use with C++, Blueprints, and the Online Subsystem.

## Prerequisites

- Unreal Engine 4.10.4 or newer
- A Code or Blueprint only project
- Created a [brainCloud Portal](https://sharedprod.braincloudservers.com/) account
- The latest version of the brainCloud Unreal plugin. You can download after logging in to the [brainCloud Portal](https://sharedprod.braincloudservers.com/).

## Installing the Plugin

Installing the brainCloud plugin is a very straightforward process.

1. Open the root folder of your Unreal project (where the \*.uproject file is)
2. Open the Plugins folder, or create it if it does not exist
3. Copy the BCClient folder from the downloaded Unreal plugin archive into the Plugins folder
4. If your project is NOT Blueprint only, be sure to regenerate your code project files now
5. And that's it, installation complete!

You can confirm the install from inside the Unreal Editor by opening the Plugins window (Edit>Plugins) and verifying that brainCloud is visible under the Project>Network category.

[![unreal_plugin](images/unreal_plugin.jpg)](/apidocs/wp-content/uploads/2015/10/unreal_plugin.jpg)

That's all that's required to start using brainCloud in Blueprints.  You can learn more about using brainCloud inside Blueprints in our [Getting Started With Blueprints tutorial](/apidocs/tutorials/unreal-tutorials/getting-started-with-blueprints/).

## brainCloud C++ Setup

If you plan on using brainCloud in C++ there are a few more steps required before you can begin coding.

1. Open your C++ project and find your project's Build.cs file.  It will be named after your project (ex. MyProject.Build.cs).
2. Look for the PublicDependencyModuleNames and add "BCClientPlugin" to the list. It should look something like this:

PublicDependencyModuleNames.AddRange(new string\[\] { "Core", "CoreUObject", "Engine", "InputCore", "BCClientPlugin" });

You should now be able to include the BrainCloudClient.h and compile your C++ code with brainCloud!

## Enabling the Online Subsystem

By default, the brainCloud Online Subsystem is not enabled.  These steps are only necessary if you wish to use the Unreal Online Subsystem with brainCloud.

1. Open the root folder of your Unreal project (where the \*.uproject file is)
2. Open the Config folder
3. Find the DefaultEngine.ini file and open it in a text editor
4. Add the following lines to the file and save:

\[OnlineSubsystem\]
DefaultPlatformService=BrainCloud
\[OnlineSubsystemBrainCloud\]
bEnabled=true

This will tell Unreal to load the brainCloud Online Subsystem by default.
