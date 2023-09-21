# Versioning
## Overview
Some data in <%= data.branding.productName %> has a 'version' attribute associated with it (Entites for example). This version is automatically incremented by the server each time an update is performed.

For a client to successfully modify data protected by versioning, the client must provide the current 'version' in the method that modifies the data,
and this version must match the current value stored in the database.
If the version match, the update is processed (automatically incrementing the version), and a copy of the
updated object is returned to the client. If the versions don’t match, an exception is triggered and an error returned.

### Bypassing The Version Check

If you are confident that the data is only being accessed by one user using a single device at a time, and thus the contention
that our version checking is designed to avoid shouldn't be happening, you can bypass the version check by passing -1 as the version parameter.

:::caution
Be absolutely sure of your decision when deciding to bypass version checking!
:::

