# Including Shared Scripts

<%= data.branding.productName %> supports shared scripts, which means you can include another script 
within a script using the new `bridge.include()` operation:
```
bridge.include(“path/to/scriptname.ccjs”) 
```

> Script 1- *EntityTemplate* script (the data storage script)

```cfscript
var entityTemplate_01 = (function() {
  var goals = 0;
  var assists = 0;
  function addGloas(val) {
    goals += val;
    return goals;
  }
  function addAssists(val) {
    assists += val;
    return assists;
  }
  
  return {
    entityType: function() {
      return "athletes";
    },

    dataJson: function(goals, assists) {
      return {
        "firstName": "Super",
        "surName": "Star",
        "position": "forward",
        "goals": addGloas(goals),
        "assists": addAssists(assists)
      };
    }
  };
})();
...
```

> Script 2- *CreateCustomEntity* script (Executing entity create operation)

```cfscript
"use strict";
bridge.include("path/to/EntityTemplate.ccjs");

function main() {

    var response = {};
    
    //get the entityType from *EntityTemplate* script
    bridge.logDebug("check entityType value", entityTemplate_01.entityType());
    
    //get the dataJson from *EntityTemplate* script
    bridge.logDebugJson("check dataJson value", entityTemplate_01.dataJson(3,6));
    
    var entityType = entityTemplate_01.entityType();
    var dataJson = entityTemplate_01.dataJson(3,6);
    var acl = {
    "other": 1
    };
    var timeToLive = null;
    var isOwned = false;
    var customEntityProxy = bridge.getCustomEntityServiceProxy();

    var postResult = customEntityProxy.createEntity(entityType, dataJson, acl, timeToLive, isOwned);
    if (postResult.status == 200) {
        // Success!
    }
    return response;
}

main();
```

*Note:* 

* A script can import multiple scripts.
* The scripts must all be present within the app… (i.e. no including scripts from other apps)
* *bridge.include()* calls must come first in a script. The only lines allowed to be before *bridge.include()* are blank lines, //comments, and/or the *”use strict”;* directive
* The extension is ignored by the call - but we recommend you append .ccjs anyway ← this may be helpful in the future (we have plans!) 