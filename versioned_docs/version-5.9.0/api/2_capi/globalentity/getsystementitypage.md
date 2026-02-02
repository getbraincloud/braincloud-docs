# GetSystemEntityPage

Method uses a paging system to iterate through global system entities.

After retrieving a page of entities with this method use [getPageOffset](/api/capi/globalentity/getpageoffset) to retrieve previous or next pages.

See the [Generic Paged Queries](/api/appendix/genericpagedqueries) documentation for creating the context object.

<PartialServop service_name="globalEntity" operation_name="GET_SYSTEM_ENTITY_PAGE" />

## Method Parameters
Parameter | Description
--------- | -----------
context | The json context for the page request.

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
<TabItem value="dart" label="Dart">
```

```dart
// Cloud Code only. To view example, switch to the Cloud Code tab
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var context = {
    "pagination": {
        "rowsPerPage": 50,
        "pageNumber": 1
    },
    "searchCriteria": {
        "entityType": "address"
    },
    "sortCriteria": {
        "createdAt": 1,
        "updatedAt": -1
    }
};

var globalEntityProxy = bridge.getGlobalEntityServiceProxy();
var retVal = globalEntityProxy.getSystemEntityPage(context);
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
	"service": "globalEntity",
	"operation": "GET_SYSTEM_ENTITY_PAGE",
	"data": {
		"context": {
			"pagination": {
				"rowsPerPage": 50,
				"pageNumber": 1
			},
			"searchCriteria": {
				"entityType": "address"
			},
			"sortCriteria": {
				"createdAt": 1,
				"updatedAt": -1
			}
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
    "_serverTime": 1710189613837,
    "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJnYW1lSWQiOiIxMzIyOSIsIiRvciI6W3siYWNsLm90aGVyIjp7IiRuZSI6MH19XSwib3duZXJJZCI6bnVsbH0sInNvcnRDcml0ZXJpYSI6eyJjcmVhdGVkQXQiOjEsInVwZGF0ZWRBdCI6LTF9LCJwYWdpbmF0aW9uIjp7InJvd3NQZXJQYWdlIjoyLCJwYWdlTnVtYmVyIjoxLCJkb0NvdW50Ijp0cnVlLCJza2lwUmVjb3VudCI6ZmFsc2V9LCJvcHRpb25zIjpudWxsLCJyZXN1bHRDb3VudCI6MzE3MX0",
    "results": {
      "count": 120,
      "page": 1,
      "items": [
        {
          "gameId": "13229",
          "entityId": "f8f084bb-6dd9-432f-960c-76b2610267cc",
          "entityType": "cards",
          "entityIndexedId": "config",
          "version": 23,
          "data": {
            "cus_Rock5": {
              "isSpell": false,
              "Name": "Pebble",
              "Art": "Pebble",
              "Description": "2x vs Sharp. \nTaunt",
              "Suit": "ROCK",
              "SleepOnStartTurns": 1,
              "OnSpawn": "",
              "DivineShield": false,
              "Taunt": true,
              "Freezing": 0,
              "Cost": 1,
              "HP": 2,
              "Attack": 1,
              "DeathRattle": ""
            }
          },
          "acl": {
            "other": 1
          },
          "expiresAt": 9223372036854776000,
          "createdAt": 1518797248681,
          "updatedAt": 1519945858527
        },
        {
          "gameId": "13229",
          "entityId": "5c15dd53-d93c-4907-b905-8aa6591ccfc9",
          "entityType": "decks",
          "entityIndexedId": "config",
          "version": 10,
          "data": {
            "cus_Deck1": {
              "Name": "Standard",
              "Description": "",
              "PlayerHPBonus": 0,
              "Deck": {
                "Rock5": 2,
                "Rock7": 2,
                "Rock9": 2,
                "Rock11": 2,
                "Rock13": 2,
                "Rock15": 2,
                "Paper5": 2,
                "Paper7": 2,
                "Paper9": 2,
                "Paper11": 2,
                "Paper13": 2,
                "Paper15": 2,
                "Scissors5": 2,
                "Scissors7": 2,
                "Scissors9": 2,
                "Scissors11": 2,
                "Scissors13": 2,
                "Scissors15": 2
              }
            }
          },
          "acl": {
            "other": 1
          },
          "expiresAt": 9223372036854776000,
          "createdAt": 1518797268594,
          "updatedAt": 1519759306443
        }
      ],
      "moreAfter": true,
      "moreBefore": false
    }
  },
  "status": 200
}
```

</details>
