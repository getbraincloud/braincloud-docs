# GetAllSegments
## Overview
Gets the end-user segments for your app.

Segments are manually created on the <%= data.branding.productName %> portal, on the **Design | Segmentation | Segments** page.

### Results
Name | Description
--------- | -----------
segmentId | Unique id for the segmentId
name | Readable name of the segmentId
testersOnly | If segement only applies to end-users flagged as testersOnly
description | Readable description of the segment

<PartialServop service_name="pushNotification" operation_name="GET_ALL_SEGMENTS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// S2S call: to view example, switch to the Cloud Code or Raw tab.
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var pushNotificationProxy = bridge.getPushNotificationServiceProxy();

var postResult = pushNotificationProxy.getAllSegments();
if (postResult.status == 200) {
    // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "pushNotification",
	"operation": "GET_ALL_SEGMENTS",
	"data": {}
}
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

<details>
<summary>JSON Response</summary>

```json
{
   "packetId":1,
   "messageResponses":[
      {
         "data":{
            "segments":[
               {
                  "segmentId":3,
                  "name":"New End-Users",
                  "testersOnly":false,
                  "description":"People that was started in the last 10 days."
               },
               {
                  "segmentId":4,
                  "name":"Recurring End-Users",
                  "testersOnly":false,
                  "description":"People that have been active and have an account older than 10 days."
               },
               {
                  "segmentId":5,
                  "name":"In-Active End-Users",
                  "testersOnly":false,
                  "description":"People that have been in-active and have an account older than 10 days."
               }
            ]
         },
         "status":200
      }
   ]
}
```
</details>

