# SysUpdateCollectionOptions
## Overview
Updates the collection options for the custom collection.

<PartialServop service_name="customEntity" operation_name="SYS_UPDATE_COLLECTION_OPTIONS" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var entityType = "athletes";
var collectionOptsJson = {
  "migrate": true,
  "identifier": "playerName"
};
var customEntityProxy = bridge.getCustomEntityServiceProxy();

var postResult = customEntityProxy.sysUpdateCollectionOptions(entityType, collectionOptsJson);
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
  "service": "customEntity",
  "operation": "SYS_UPDATE_COLLECTION_OPTIONS",
  "data":
  {
    "entityType": "athletes",
    "collectionOptsJson": {
      "migrate": true,
      "identifier": "playerName"
    }
  }
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
  "data": {
    "options": {
      "isOwned": false,
      "migrate": true,
      "identifier": "playerName",
      "dataTemplateJson": {
        "playerName": "Randy Traywick",
        "playerId": 123456,
        "teamName": "Super Stars",
        "jerseyNum": 44
      },
      "dataTemplateText": "**Important** notes go here..."
    },
    "name": "athletes",
    "customIndexes": {
      "jerseyNum": {
        "name": "jerseyNum",
        "keysJson": "{\n    \"data.jerseyNum\":1\n}",
        "optionsJson": "{\"name\":\"jerseyNum\",\"background\":true}",
        "options": {
          "name": "jerseyNum",
          "background": true
        }
      },
      "playerName": {
        "name": "playerName",
        "keysJson": "{\n    \"data.playerName\": \"text\"\n}",
        "optionsJson": "{\"name\":\"playerName\",\"background\":true}",
        "options": {
          "name": "playerName",
          "background": true
        }
      },
      "playernameindex": {
        "name": "playernameindex",
        "keysJson": "{\"data.playerName\":1.0}",
        "optionsJson": "{\"name\":\"playernameindex\",\"background\":true}",
        "options": {
          "name": "playernameindex",
          "background": true
        }
      }
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
entityType | The type of the custom entity collection to update.
collectionOptsJson | The collection options updates, as JSON object.


