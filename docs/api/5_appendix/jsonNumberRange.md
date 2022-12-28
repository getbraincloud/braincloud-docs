# Range In Json
## Overview
Some <%= data.branding.productName %> APIs take number as type **double** and store it in JSON object. 
This means that only numbers between -2^53 and 2^53 (i.e. -9007199254740992 and 9007199254740992) can be accurately defined as a JSON number. 
Anything outside this range will lose precision when parsed by our servers.

