# Route Tables
Route Tables are referenced in Host Pools.
When a host pool is registered it automatically adds a subnet and link it to the assign NSG and Route Table if any.

**Path:** .\Network\RouteTables\\*.json

## Sample

```json
{
    "ReferenceName": "RouteTable01",
    "AccessLevel": "All",
    "HostPoolType": "All",
    "Routes" : [
        {
            "name": "DefaultGateway",
            "properties":{
                "addressPrefix": "192.168.1.0/24",
                "nextHopType": "VirtualAppliance",
                "nextHopIpAddress": "10.172.20.4"
            }
        }
    ],
    "disableBgpRoutePropagation": false
}
```
# Properties

| Property                   | Required | Description                                                                            | Accepted Values            |
| -------------------------- | -------- | -------------------------------------------------------------------------------------- | -------------------------- |
| ReferenceName              | Yes      | Name used to refer to this route table in other components (Host Pools)                | String                     |
| AccessLevel                | Yes      | Used for resource name. Setting it to "All" skips the AccessLevel part of the name.    | "All" or Access Level name |
| HostPoolType               | Yes      | Used for resource name. Setting it to "All" skips the Host Pool Type part of the name. | "All", "Shared", "Pooled   |
| Routes                     | Yes      | Collection of routes contained within a route table.                                   | [Routes](#routes)          |
| disableBgpRoutePropagation | Yes      | Whether to disable the routes learned by BGP on that route table. True means disable.  | Boolean                    |

## Routes
An array routes.

| Property   | Required | Description      | Accepted Values                       |
| ---------- | -------- | ---------------- | ------------------------------------- |
| name       | Yes      | Route name       | String                                |
| properties | Yes      | Route properties | [Route Properties](#route-properties) |

### Route Properties

| Property         | Required | Description                                                                                                                              | Accepted Values                                                                   |
| ---------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| addressPrefix    | Yes      | Prefix of destination network                                                                                                            | CIDR notation                                                                     |
| nextHopType      | Yes      | "The type of Azure hop the packet should be sent to.                                                                                     | "VirtualNetworkGateway", "VnetLocal" , "Internet" , "VirtualAppliance", or "None" |
| nextHopIpAddress | Yes      | The IP address packets should be forwarded to. Next hop values are only allowed in routes where the next hop type is *VirtualAppliance*. | CIDR notation                                                                     |