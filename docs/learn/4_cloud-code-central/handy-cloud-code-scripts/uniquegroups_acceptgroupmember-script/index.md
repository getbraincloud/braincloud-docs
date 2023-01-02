---
title: "UniqueGroups_AcceptGroupMember script"
date: "2018-08-28"
---

### Purpose

This script allows the app to accept a group join request while enforcing that new group member is only added to the current group.

If the user is already in a group, this script will throw a failure message that the user is already in a group.

If the user has more group join requests, this script will clean up the remaining requests.

### Script

Click [UniqueGroups_AcceptGroupMember](script/UniqueGroups_AcceptGroupMember.ccjs.zip) to download the file.

### Usage / Setup

To configure this script, simply import it into your app.

The script is expected to be called from the over of the group owner after they have viewed join requests of potential new group members.

You call the script in the app via the [RunScript()](/api/capi/script/runscript) API call.

The script takes the following parameters:

- profileId - profileId of the (potential) new member requesting to join the group
- groupId - groupId of the group that the (potential) new member is requesting to join

_Example script parameters:_
```js
{
    "profileId" : "808e7a08-d5b2-4524-964e-9af80d6a6c41",
    "groupId" : "be195271-657e-4372-a107-23679047e7b6"
}
```
### Debug

Click [UTest\_UniqueGroups\_AcceptGroupMember.cloudcode.js](images/Test_UniqueGroups_AcceptGroupMember.cloudcode.js) to view the optional debug script. Right-click to download it.

#### Example success response
```js
// Example Success Response
{
 "data": {
  "response": {
   "data": {
    "status": 200,
    "message": "User has joined your group!",
    "debug": {
     "approvedRequest": {
      "data": null,
      "status": 200
     },
     "rejectedRequests": \[
      {
       "data": null,
       "status": 200,
       "requestedOwnerId": "c2c32dfe-f9f0-488a-b9b8-88b2ae06f774",
       "requestedGroupId": "cc448c05-42d6-461a-9144-7e6a299be553"
      }
     \]
    }
   }
  },
  "success": true
 },
 "status": 200
}
```
#### Example failure response
```js
// Example Failure Response  
{
 "data": {
  "response": {
   "data": {
    "status": 400,
    "message": "User is already in group TopTheCharts."
   }
  },
  "success": true
 },
 "status": 200
}
```