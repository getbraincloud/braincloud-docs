# Authentication Types
## Overview
This is a list of all valid Authentication Types for <%= data.branding.productName %>.  The following authentication types are currently supported:

Type | ID
-------- | ---
Anonymous | Anonymous
Apple | Apple
Email | Email
External | External
Facebook | Facebook
FacebookLimited | FacebookLimited
GameCenter | GameCenter
Google | Google
GoogleOpenId | GoogleOpenId
Handoff | HandOff
Nintendo | Nintendo
Oculus | Oculus
Parse | Parse
PlaystationNetwork5 | PlaystationNetwork5
PlaystationNetwork | PlaystationNetwork
SettopHandoff | SettopHandoff
Steam | Steam
Twitter | Twitter
Ultra | Ultra
Universal | Universal

Note that the client libraries contain an `AuthenticationType` class that represents the authentication type strings. You can use these classes directly when calling API methods which require an authentication type to be passed in.

