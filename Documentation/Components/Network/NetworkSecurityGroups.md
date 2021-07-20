# Network Security Groups
Network security groups are referenced in Host Pools.
When a host pool is registered it automatically adds a subnet and link it to the assign NSG and Route Table if any.

**Path:** .\Network\NetworkSecurityGroups\\*.json

## Sample
The sample below shows configuration of an NSG with two security rules.
```json
{
    "ReferenceName": "NSG02",
    "AccessLevel": "All",
    "HostPoolType": "All",
    "securityRules": [
        {
            "Source": "*",
            "SourcePort": "*",
            "Destination": "*",
            "DestinationPort": "8080",
            "direction": "Outbound",
            "Priority": 100,
            "Protocol": "*",
            "access": "Deny",
            "Name": "BlockPort8080Outbound"
        },
        {
            "Source": "*",
            "SourcePort": "*",
            "Destination": "*",
            "DestinationPort": "8081",
            "Direction": "Outbound",
            "Priority": 1000,
            "Protocol": "*",
            "Access": "Deny",
            "Name": "BlockPort8081Outbound"
        }
    ]
}
```
# Properties

| Property      | Required | Description                                                                            | Accepted Values                   |
| ------------- | -------- | -------------------------------------------------------------------------------------- | --------------------------------- |
| ReferenceName | Yes      | Name used to refer to this NSG in other components (Host Pools)                        | String                            |
| AccessLevel   | Yes      | Used for resource name. Setting it to "All" skips the AccessLevel part of the name.    | "All" or Access Level name        |
| HostPoolType  | Yes      | Used for resource name. Setting it to "All" skips the Host Pool Type part of the name. | "All", "Shared", "Pooled          |
| SecurityRules | Yes      | Array of filtering rules on the NSG.                                                   | [Security Rules](#security-rules) |

## Security Rules
This resembles the 5-tuple used by NSG on Azure. Can be an array to add as many rules as needed.

| Property        | Required | Description                           | Accepted Values              |
| --------------- | -------- | ------------------------------------- | ---------------------------- |
| Source          | Yes      | Source IP Address. "\*" for any.      | "*" or IP Address            |
| SourcePort      | Yes      | Source port range. "\*" for any.      | "*" or Port Number as string |
| Destination     | Yes      | Destination IP Address. "\*" for any. | "*" or IP Address            |
| DestinationPort | Yes      | Destination port range. "\*" for any. | "*" or Port Number as string |
| Direction       | Yes      | Traffic direction.                    | "Inbound" or "Outbound"      |
| Priority        | Yes      | Rule priority.                        | Any number larger than 100   |
| Access          | Yes      | Rule decision                         | "Allow" or "Deny"            |
| Name            | Yes      | Rule Name                             | String                       |
