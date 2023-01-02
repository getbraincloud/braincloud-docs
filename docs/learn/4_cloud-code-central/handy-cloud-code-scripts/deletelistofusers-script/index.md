---
title: "DeleteListOfUsers script"
date: "2019-09-12"
---

### Purpose

This script deletes a list of users based on a provided list of profileIds and universalIds.

### Script

Click [DeleteListOfUsers.ccjs.zip](script/BlockIfBanned.ccjs.zip) to download the file.

### Usage / Setup

To configure this script, simply import it into your app.  
Compile a list of users you wish to delete and pass it into the script.  

_Example script parameters_
```js
{
	"profileIds": ["the-profile-id", "a8d86270-c95b-4ea7-a545-46bf27e7f94e"],
	"universalIds": ["the-universal-id", "tester_12", "admin_42"]
}
```