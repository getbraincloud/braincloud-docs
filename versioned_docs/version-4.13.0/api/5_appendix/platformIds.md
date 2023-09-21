# Platform IDs
## Overview
The <%= data.branding.productName %> client libraries automatically determine the platform they're running upon, and provide the appropriate platform id when performing authentication.

If you're using the API Explorer, you may want to override the default platform id.

The following platform IDs are currently supported:

Platform | ID
-------- | ---
Amazon | "AMAZON"
Apple iOS Phone/Tablet | "IOS"
Apple Mac Desktop | "MAC"
Apple TV | "APPLE_TV_OS"
Apple watchOS | "WATCH_OS"
BlackBerry | "BB"
Facebook | "FB"
Google Play Android | "ANG"
Linux | "Linux"
Oculus | "Oculus"
Playstation 3 | "PS3"
Playstation 4 | "PS4"
Playstation Vita | "PS_VITA"
Roku | "ROKU"
Tizen | "TIZEN"
Wii | "WII"
Windows Desktop | "WINDOWS"
Windows Phone | "WINP"
Xbox 360 | "XBOX_360"
Xbox One | "XBOX_ONE"

Note that the client libraries contain a `Platform` class or enum that represents the platform strings. You can use these classes directly when calling API methods which require a platform to be passed in.


## Store Platform IDs

Below are the Store Platform IDs. These values are used within the Product module for identifying the third party store that you are integrating with.

Platform | ID
-------- | ---
Amazon Store | "amazon"
Apple iTunes | "itunes"
BlackBerry AppWorld | "appworld"
Facebook | "facebook"
Google Play | "googlePlay"
Steam | "steam"
Windows Store | "windows"
Windows Phone | "windowsPhone"

