# GetPacketTimeouts
## Overview
Returns the list of packet timeouts.

<PartialServop service_name="event" operation_name="UPDATE_EVENT_DATA" / >

## Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
List<int> timeouts = <%= data.branding.codePrefix %>.GetPacketTimeouts();
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
std::vector<int> timeouts = <%= data.branding.codePrefix %>->getPacketTimeouts();
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Objective-C">
```

```objectivec
NSArray* timeouts = [<%= data.branding.codePrefix %> getPacketTimeouts];
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
ArrayList<Integer> timeouts = <%= data.branding.codePrefix %>.getPacketTimeouts();
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="cfs" label="Cloud Code">
```

```javascript
// N/A
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```javascript
// N/A
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

<details>
<summary>JSON Response</summary>

```javascript
// N/A
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
sendApiErrorCallbacks | If set to true API error callbacks will be called for every cached message with statusCode CLIENT_NETWORK_ERROR and reasonCode CLIENT_NETWORK_ERROR_TIMEOUT.


