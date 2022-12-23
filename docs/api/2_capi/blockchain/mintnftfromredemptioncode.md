# MintNFTFromRedemptionCode
## Overview
Mints an NFT for the caller in response to the given redemption code.

<PartialServop service_name="blockchain" operation_name="MINT_NFT_FROM_REDEMPTION_CODE" / >

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
var redemptionCodeId = "a-redemptioncode-id";
var attempt = 1;
var codeType = "my-code-type";
var mintDataJson = {
  "guarantee": "in-block",
  "factoryId": 4,
  "amount": 1,
  "customData": "my custom data string"
};
var blockchainProxy = bridge.getBlockchainServiceProxy();

var postResult = blockchainProxy.mintNFTFromRedemptionCode(integrationId, redemptionCodeId, attempt, codeType, mintDataJson);
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
  "operation": "MINT_NFT_FROM_REDEMPTION_CODE",
  "data":
  {
    "integrationId": "default",
    "redemptionCodeId": "a-redemptioncode-id",
    "attempt": 1,
    "codeType": "my-code-type",
    "mintDataJson": {
      "guarantee": "in-block",
      "factoryId": 4,
      "amount": 1,
      "customData": "my custom data string"
    }
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
      "transaction_id": "__a_transaction_id__",
      "processed": {
        "id": "3f42fe4f892b04cda087247f0296b3bf93d16972ceff7a1509f9a6c8268e7df5",
        "block_num": 12345678,
        "block_time": "2022-05-10T15:29:27.500",
        "producer_block_id": null,
        "receipt": {
          "status": "executed",
          "cpu_usage_us": 648,
          "net_usage_words": 425
        },
        "elapsed": 648,
        "net_usage": 3400,
        "scheduled": false,
        "action_traces": [
          {
            "action_ordinal": 1,
            "creator_action_ordinal": 0,
            "closest_unnotified_ancestor_action_ordinal": 0,
            "receipt": {
              "receiver": "eosio.nft.ft",
              "act_digest": "aaaabbbbccccdddd",
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
            "receiver": "eosio.nft.ft",
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
                  "to": "vh1to2ko3wp4",
                  "token_configs": [
                    {
                      "token_factory_id": 4,
                      "amount": 1,
                      "custom_data": "my custom data string"
                    }
                  ],
                  "memo": "23713|a-redemptioncode-id|1|my-code-type"
                }
              },
              "hex_data": "012345555012344"
            },
            "context_free": false,
            "elapsed": 292,
            "console": "",
            "trx_id": "__a_transaction_id__",
            "block_num": 12345678,
            "block_time": "2022-05-10T15:29:27.500",
            "producer_block_id": null,
            "account_ram_deltas": [
              {
                "account": "eosio.nft.ft",
                "delta": 136
              }
            ],
            "except": null,
            "error_code": null,
            "inline_traces": []
          }
        ],
        "account_ram_delta": null,
        "except": null,
        "error_code": null
      }
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
redemptionCodeId | The internal id for the redemption code being redeemed.
attempt | The redemption attempt number.
codeType | The type of redemption code being redeemed.
mintDataJson | JSON object containing blockchain provider specific data for minting NFTs.


