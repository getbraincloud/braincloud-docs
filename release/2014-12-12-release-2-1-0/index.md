---
title: "Release 2.1.0"
date: "2014-12-12"
tags: 
  - "release-history"
---

We're pleased to announce the full public availability of **brainCloud 2.1.0**!

New features in this release include:

API Features:

- Client library version and game version verification is now working properly
- Platform constants changed for Windows Phone and Mac - removed versioning
- C++ library now easier to integrate into your project (fixed 64 bit iOS targets and upgraded jsoncpp to 1.0.0)
- C++ and C# client libraries improved to use additional enums/structures for certain method calls
- Cocos 2d-x example posted to tutorials section
- Misc fixes and improvements

Portal/Server Features:

- Player monitoring - can now reset player's segments, promotions, and associated criteria data to facilitate easier testing
- Request / Response log now includes inner status codes
- Cloud code logger object added to allow easier debugging of scripts
- Authentication exceptions now log the profile id
- Anonymous identity segment criteria now applies to users who \*only\* have an anonymous identity
- Automated promotions improved
- Javascript/image/page caching issues fixed
- Misc fixes and improvements

Plus we've refreshed the look of our Apidocs portal, and continue to add new content.

Check it out at [brainCloud Docs](/learn/introduction/)
