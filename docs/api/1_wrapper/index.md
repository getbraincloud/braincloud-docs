# BrainCloudWrapper

The <%= data.branding.codeWrapper %> class provides an easier way for developers to handle user authentication when they are getting started with the authentication system. This includes persisting authentication data between application runs.

By using the wrapper authentication methods, the anonymous and profile IDs will be automatically persisted upon successful authentication. When authenticating, any stored anonymous/profile IDs will be sent to the server. This strategy is useful when using Anonymous authentication.

:::tip
_Note - you should [initialize the wrapper](/api/wrapper/initialize) before using it. It will in turn initialize the <%= data.branding.productName %> client for you_ - **don't do both!**
:::

### Method Parameters

| Parameter   | Description                                                                                             |
| ----------- | ------------------------------------------------------------------------------------------------------- |
| wrapperName | Distincts saved wrapper data. Use when using more than one instance of <%= data.branding.productName %> |

### Usage

```mdx-code-block
<BrowserWindow>
<Tabs>
<TabItem value="csharp" label="C#">
```

```csharp
// Unity

//Note: Ensure of have selected your app using the <%= data.branding.productName %> Unity Plugin

using UnityEngine;

public class BCConfig : MonoBehaviour {

    private <%= data.branding.codeWrapper %> <%= data.branding.codePrefix %>;

    public <%= data.branding.codeWrapper %> Get()
    {
        return <%= data.branding.codePrefix %>;
    }

    void Awake ()
    {
        DontDestroyOnLoad(gameObject);
        <%= data.branding.codePrefix %> = gameObject.AddComponent<<%= data.branding.codeWrapper %>>();

        <%= data.branding.codePrefix %>.WrapperName = gameObject.name;    // Optional: Set a wrapper name
        <%= data.branding.codePrefix %>.Init();      // Init data is taken from the <%= data.branding.productName %> Unity Plugin
    }
}


// C#
<%= data.branding.codePrefix %> = new <%= data.branding.codeWrapper %>("_mainWrapper");
```

```mdx-code-block
</TabItem>
<TabItem value="cpp" label="C++">
```

```cpp
<%= data.branding.codePrefix %> = new <%= data.branding.codeWrapper %>("_mainWrapper");
```

```mdx-code-block
</TabItem>
<TabItem value="objectivec" label="Obj-C">
```

```objective_c
<%= data.branding.codePrefix %> = [[<%= data.branding.codeWrapper %> alloc] init: @"_mainWrapper"]
```

```mdx-code-block
</TabItem>
<TabItem value="java" label="Java">
```

```java
<%= data.branding.codePrefix %> = new <%= data.branding.codeWrapper %>("_mainWrapper");
```

```mdx-code-block
</TabItem>
<TabItem value="js" label="JavaScript">
```

```javascript
<%= data.branding.codePrefix %> = new <%= data.branding.codeWrapper %>("_mainWrapper");
```

```mdx-code-block
</TabItem>
<TabItem value="dart" label="Dart">
```

```dart
BrainCloudWrapper <%= data.branding.codePrefix %> = <%= data.branding.codeWrapper %>(wrapperName: "_mainWrapper");
```

```mdx-code-block
</TabItem>
<TabItem value="roblox" label="Roblox">
```

```lua
-- Server Script. Set the app ID and secret with the brainCloud Studio plugin.
local ServerScriptService = game:GetService("ServerScriptService")
local brainCloudWrapper = require(
    ServerScriptService:WaitForChild("brainCloudClient")
        :WaitForChild("brainCloudClient-serverScriptService")
        :WaitForChild("brainCloudWrapper")
)
local wrapper = brainCloudWrapper.new("_mainWrapper")

-- The wrapper creates a client for each player who joins.
-- Wrapper calls take the player's UserId first, for example:
--   wrapper:authenticateUniversal(player.UserId, username, password, forceCreate, callback)
-- Other calls use the player's client, which the API examples call <%= data.branding.codePrefix %>.
-- Get it where you have the player, such as a RemoteEvent handler:
local requestEvent = game:GetService("ReplicatedStorage"):WaitForChild("MyRequest")
requestEvent.OnServerEvent:Connect(function(player)
    local <%= data.branding.codePrefix %> = wrapper:getClient(player.UserId)
    if not <%= data.branding.codePrefix %> then
        return -- the player's client hasn't been created yet
    end
    -- <%= data.branding.codePrefix %>.leaderboard:getGlobalLeaderboardPage(...)
end)
```

```mdx-code-block
</TabItem>
<TabItem value="lua" label="Lua">
```

```lua
-- LÖVE: main.lua
local BrainCloud = require("braincloud")
local <%= data.branding.codePrefix %> = BrainCloud.new("_mainWrapper")

function love.load()
    <%= data.branding.codePrefix %>:init() -- reads braincloud_config.lua, written by the brainCloud setup tool
end

function love.update(dt)
    <%= data.branding.codePrefix %>:update() -- required: sends requests and fires callbacks
end
```

```mdx-code-block
</TabItem>
</Tabs>
</BrowserWindow>
```

<DocCardList />
