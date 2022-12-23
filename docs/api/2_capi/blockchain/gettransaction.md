# GetTransaction
## Overview
Retrieves the transaction details for the given transaction id.

<PartialServop service_name="blockchain" operation_name="GET_TRANSACTION" / >

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
<TabItem value="cfs" label="Cloud Code">
```

```cfscript
var integrationId = "default";
var transactionId = "the-transaction-id";
var blockchainProxy = bridge.getBlockchainServiceProxy();

var postResult = blockchainProxy.getTransaction(integrationId, transactionId);
if (postResult.status == 200) {
  // Success!
}
```

```mdx-code-block
</TabItem>
<TabItem value="r" label="Raw">
```

```r
{
  "service": "blockchain",
  "operation": "GET_TRANSACTION",
  "data":
  {
    "integrationId": "default",
    "transactionId": "the-transaction-id"
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
    "success": true,
    "response": {
      "transaction_status": "executed",
      "id": "__a_transaction_id__",
      "transaction": {
        "expiration": "2022-05-10T15:31:19",
        "ref_block_num": 33087,
        "ref_block_prefix": 632015951,
        "max_net_usage_words": 0,
        "max_cpu_usage_ms": 0,
        "delay_sec": 0,
        "context_free_actions": null,
        "actions": [
          {
            "account": "eosio.nft.ft",
            "name": "issue",
            "authorization": [
              {
                "actor": "ultra.nft.ft",
                "permission": "issue"
              }
            ],
            "hex_data": "aaabbbcccddd"
          }
        ],
        "transaction_extensions": null,
        "signatures": [
          "aaabbbcccddd"
        ],
        "context_free_data": []
      },
      "execution_trace": {
        "id": "--id--",
        "block_num": 35946833,
        "block_time": "2022-05-10T15:29:27.500",
        "producer_block_id": "--producer-block-id--",
        "receipt": {
          "status": "executed",
          "cpu_usage_us": 759,
          "net_usage_words": 498
        },
        "elapsed": 1784,
        "net_usage": 3984,
        "scheduled": false,
        "action_traces": [
          {
            "action_ordinal": 1,
            "creator_action_ordinal": 0,
            "closest_unnotified_ancestor_action_ordinal": 0,
            "receipt": {
              "receiver": "eosio.nft.ft",
              "act_digest": "---act-digest---",
              "global_sequence": 35962179,
              "recv_sequence": 599,
              "auth_sequence": [
                [
                  "ultra.nft.ft",
                  444
                ]
              ],
              "code_sequence": 1,
              "abi_sequence": 1
            },
            "act": {
              "account": "eosio.nft.ft",
              "name": "issue",
              "authorization": [
                {
                  "actor": "ultra.nft.ft",
                  "permission": "issue"
                }
              ],
              "data": {
                "issue": {
                  "memo": "23713|a-redemptioncode-id|1|my-code-type",
                  "to": "vh1to2ko3wp4",
                  "token_configs": [
                    {
                      "amount": 1,
                      "custom_data": "my custom data string",
                      "token_factory_id": 4
                    }
                  ]
                }
              },
              "hex_data": "--hex-data--"
            },
            "context_free": false,
            "elapsed": 1242,
            "console": "",
            "trx_id": "--trx-id---",
            "block_num": 35946833,
            "block_time": "2022-05-10T15:29:27.500",
            "producer_block_id": "--producer-block-id--",
            "account_ram_deltas": [
              {
                "account": "eosio.nft.ft",
                "delta": 136
              }
            ],
            "except": null,
            "receiver": "eosio.nft.ft",
            "inline_traces": []
          }
        ],
        "failed_dtrx_trace": null,
        "except": null
      },
      "execution_block_header": {
        "timestamp": "2022-05-10T15:29:27.500",
        "producer": "produceracc1",
        "confirmed": 0,
        "previous": "--previous--",
        "transaction_mroot": "--transaction-mroot--",
        "action_mroot": "--action-mroot--",
        "schedule_version": 1,
        "header_extensions": null
      },
      "dtrxops": null,
      "creation_tree": [
        [
          0,
          -1,
          0
        ]
      ],
      "dbops": [
        {
          "op": "UPD",
          "action_idx": 0,
          "account": "eosio.nft.ft",
          "table": "next.token",
          "key": "next.token",
          "old": {
            "payer": "eosio.nft.ft",
            "hex": "5901000000000000"
          },
          "new": {
            "payer": "eosio.nft.ft",
            "hex": "5a01000000000000"
          }
        },
        {
          "op": "INS",
          "action_idx": 0,
          "account": "eosio.nft.ft",
          "table": "token.a",
          "scope": "vh1to2ko3wp4",
          "key": "...........pd",
          "old": {},
          "new": {
            "payer": "eosio.nft.ft",
            "hex": "--hex--"
          }
        },
        {
          "op": "UPD",
          "action_idx": 0,
          "account": "eosio.nft.ft",
          "table": "factory.a",
          "scope": "eosio.nft.ft",
          "key": "............4",
          "old": {
            "payer": "ultra.nft.ft",
            "hex": "--hex--"
          },
          "new": {
            "payer": "ultra.nft.ft",
            "hex": "--hex--"
          }
        }
      ],
      "ramops": [
        {
          "op": "primary_index_add",
          "action_idx": 0,
          "payer": "eosio.nft.ft",
          "delta": 136,
          "usage": 1033932
        }
      ],
      "tableops": null,
      "pub_keys": [
        "--pub-keys--"
      ],
      "created_by": null,
      "canceled_by": null,
      "execution_irreversible": true,
      "dtrx_creation_irreversible": false,
      "dtrx_cancelation_irreversible": false
    }
  },
  "status": 200
}
```
</details>

## Method Parameters
Parameter | Description
--------- | -----------
integrationId | The blockchain integration id. Currently only 'default' is supported.
transactionId | The target transaction id.


