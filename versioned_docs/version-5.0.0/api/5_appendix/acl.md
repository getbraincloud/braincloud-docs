# ACL
## Overview
> ACL example - private to the owner

```json
{
    "other": 0
}
```

> ACL example - readable by all users, but only writeable by the owner

```json
{
    "other": 1
}
```

> ACL example - writable by all users

```json
{
    "other": 2
}
```

<%= data.branding.productName %> uses Access Control Lists to control permissions for Global Entities, User Entities and some statistics.

Permissions are specified by category. Currently <%= data.branding.productName %> only supports the category `other` (meaning access for anyone other than the owner)- but other categories may be added in the future.

The access levels for each category are defined as follows:

Access Level | Value
------------ | -----
none | 0
read-only | 1
read-write | 2

See the code pane (right) for ACL examples.

