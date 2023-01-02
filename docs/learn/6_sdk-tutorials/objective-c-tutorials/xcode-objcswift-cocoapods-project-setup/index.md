---
title: "Cocoapods Project Setup"
date: "2016-05-27"
---

The Objective-C/Swift brainCloud SDK is distributed through `CocoaPods`. In order to install the library, simply add the following to your `Podfile`.

pod 'BrainCloud'

If you're a newcomer to the `CocoaPods` world, you can find documentation on how to set up your Xcode project here:

[https://guides.cocoapods.org/](https://guides.cocoapods.org/)

Note that if you are using Swift or the "use\_frameworks!" flag and Cocoapods 1.0.0, you'll get an error about transitive dependencies when including brainCloud. To fix this update Cocoapods to version 1.1.0.
