---
title: "Warning: Unity 2019.X (iOS) issues"
date: "2019-06-17"
authors: paul
tags: 
  - "blog"
---

:::success Fixed!

Update - this issue was addressed in Unity 2019.3. All good now!
:::

Hi folks,

We are currently tracking some oddities in the reliability of the brainCloud libraries running in **Unity 2019.X** on **iOS devices**.

_Updates_:

1. **We have confirmed that this issue is limited to iOS only** (edit: also probably tvOS). It does not occur on Android, Mac, Windows or WebGL.
2. **A Unity Rep has confirmed the defect, and that they are working on a fix**. See this [Unity Forum thread](https://forum.unity.com/threads/ios-post-request-with-raw-data.690514/).
3. The defect now appears in Unity's Issue Tracker - click and add your +1 - https://issuetracker.unity3d.com/issues/ios-unitywebrequest-errors-large-packets-with-examples
4. Further updates in this [brainCloud Forum Post](https://forums.getbraincloud.com/topic/25/important-unity-2019-x-on-mobile-devices).

**_Executive Summary: We highly advise developers to stick with Unity 2018.X until further notice._**

## Symptoms

The symptom is that requests are being sent to brainCloud, and occasionally rejected with what brainCloud calls a **_signature error_**.

Signature errors are flagged if the content of the message that brainCloud receives doesn't match the MD5 that has been calculated for the message. They generally mean that either the client had the wrong secret (likely a hacking attempt) or the message content has been tampered with (also likely a man-in-the-middle hacking attempt).

In this case, neither of these has occurred - rather, the message content has been corrupted somehow by Unity's libraries (we suspect a combination of the `UnityWebRequest` and/or `UploadHandler` classes).

This doesn't happen all-the-time... (in fact, it very rarely occurs if requests are less than 2K). But we're seeing it happening quite often with requests that are **7K or greater in size**.

After enough of these errors occur, the `UnityWebRequest` class is locking up - causing the brainCloud client library to stop functioning properly - requiring the app to be terminated.

_Note - the good news is that brainCloud's servers catch this issue and prevent the bad message from corrupting your data. The bad news is that a client experiencing this issue might have to retry several times to send a request - impairing client performance._

## Reproducing the error

We have only been able to reproduce this error in **Unity 2019.1.X** _(as well as 2019.2.0b5 (alpha) and 2019.3.0a5 (beta))_ and only when running on iOS devices.

_We do have reason to suspect that Android devices may also be impacted (but we haven't had time to test + prove that yet). **Update: We have since tested on Android and cannot reproduce the problem. So this appears to be an iOS-only issue.**_

Certainly, the same code running from the editor on Mac and Windows workstations seems to run just fine.

And certainly, the same brainCloud libraries (with test code) running under Unity 2018.X runs fine as well. _Also, our C++/Objective-C libraries are still running_ _fine_ _under iOS - this issue is limited to Unity._

We have noted, as per their 2019 release notes, that Unity seems to be making significant changes to their iOS communications.

- 2019.1 Release notes
    - iOS: UnityWebRequest will use new backend based on NSURLSession. Old NSUrlConnection backed is still available (commented out in trampoline)
- 2019.1.4 Release notes:
    - iOS: Fixed larger than 2k payloads not sent by UnityWebRequest when HTTP/2 (1146305, 1152777)

## Recommendation

**_For now, we recommend that developers limit their production iOS builds to Unity 2018.X or earlier._**

We are constructing a limited function test app that we will submit to Unity when we report this defect. We will keep the community posted as to how that progresses.

_Update - you can see the_ **_brainCloud forum post_**_, with repro code and details,_ [_here_](https://forums.getbraincloud.com/topic/25/important-unity-2019-x-on-mobile-devices/2)_._

In the meantime, we thought it best that our community have a heads up regarding this potential problem.

We apologize for the inconvenience and hope that through working with Unity, we can get a solution to you ASAP!
