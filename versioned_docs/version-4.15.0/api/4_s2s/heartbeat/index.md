# Heartbeat
## Overview


Heartbeats are used to help keep the user's session alive. Sessions have a timeout (that is by default 20 minutes). 
If you game isn't generating enough API traffic, you might find that the session would terminate due to inactivity. The heartbeat prevents that from happening - so that if your app/game is still running, even if it isn't sending requests to braincloud, the client library will send a request every certain seconds to keep the session alive for you.

:::info
Note - the amount of seconds for a heartbeat is calculated at 85% of the session expiry. 
So if your session expiry is sent to 1200 seconds (which is the default = 20 minutes), the heartbeat would be set to 1,020 seconds, or about 17 minutes. 
:::


<DocCardList />