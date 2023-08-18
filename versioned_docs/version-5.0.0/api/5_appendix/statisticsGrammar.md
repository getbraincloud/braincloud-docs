# Statistics Grammar
## Overview
*This section provides background for the **grammar** used by the `ProcessStatistics` operations of the [Global Statistics](/api/capi/globalstats/processstatistics) and [Player Statistics](/api/capi/playerstats/processstatistics) services.*

Statistics are passed around within <%= data.branding.productName %> as a keyed collection of name / value pairs. Semantically, a statistic looks like:

`{ "statName" : statValue }`

The supported data types for the values are long integer and double floating point. For every named statistic, the app also has a rule defined in reference data. This rule specifies a variety of attributes governing the treatment of that statistic. Among others, these attributes include:

- name
- initial value
- minimum value
- maximum value

An underlying grammar is used within <%= data.branding.productName %> to perform operations on statistics. Within this grammar, the # (octothorpe) acts as as separator between semantic elements.

The following discusses the various operations supported in our statistics grammar and provides examples.

### Reset Value

This operation resets the value of a statistic to the initial value defined by the associated rule.

`{ "statName": "RESET" }`

This is arithmetically equivalent to: `statValue = rule.initialValue`

### Increment Value

This operation performs a simple increment of the current value of the statistic and is equivalent to the legacy operation. The numeric attribute is added to the current value of the statistic.

`{ "statName" : "INC#9" }`

This is arithmetically equivalent to: `statValue = statValue + 9`

### Decrement Value

This operation performs a simple decrement of the current value of the statistic. The numeric attribute is subtracted from the current value of the statistic.

`{ "statName" : "DEC#9" }`

This is arithmetically equivalent to: `statValue = statValue - 9`

### Set Value

This operation sets a statistic to a value

`{ "statName" : "SET#9" }`

This is equivalent to: `statValue = 9`

### Increment Value with a Limit

This operation performs a simple increment of the current value of the statistic but sets a conditional limit. The first numeric attribute is added to the current value of the statistic but is limited to a value no higher than the second numeric attribute.

`{ "statName" : "INC_TO_LIMIT#9#30" }`

This is arithmetically equivalent to: `statValue = MIN(statValue + 9, 30)`

### Decrement Value with a Limit

This operation performs a simple decrement of the current value of the statistic but sets a conditional limit. The first numeric attribute is subtracted from the current value of the statistic but is limited to a value no lower than the second numeric attribute.

`{ "statName" : "DEC_TO_LIMIT#9#-30" }`

This is arithmetically equivalent to: `statValue = MAX(statValue - 9, -30)`

### Set to MAX of the two values



This operation updates the *stored* value of the stat to the *provided* value only if it is larger -- essentially keeping the MAX of the two values.

`{ "statName" : "MAX#99" }`

For example, if the currently saved value of the stat is 100, then sending in the above instruction will have no effect.

### Set to MIN of the two values



As would be expected, **MIN** works in the opposite way - updating the *stored* value of the stat only if the *provided* value is lower.

:::tip
<strong>MIN</strong> and <strong>MAX</strong> are really handy if your goal is to keep track of the highest-ever or lowest-ever value of a statistic.
:::

