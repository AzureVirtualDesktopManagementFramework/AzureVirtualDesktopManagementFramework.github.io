# Virtual Networks
You can create as many virtual networks as needed. The recommended is a single vNET for all host pools.
A host pool will always create a subnet for itself in virtual network.

**Path:** .\Network\VirtualNetwork\*.json

## Sample
```json
{
    "ReferenceName": "DefaultVirtualNetwork",
    "DNSServers": [
        "10.0.0.4",
        "10.0.0.5"
    ],
    "VirtualNetworkPeerings": [
        {
            "RemoteVnetId": "/subscriptions/XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX/resourceGroups/SharedServices/providers/Microsoft.Network/virtualNetworks/ShareVLAN",
            "UseRemoteGateways": false,
            "CreateRemotePeering": true
        }
    ],
    "DefaultSubnets": [
        {
            "Scope": "Management",
            "NamePrefix": "PrivateLinks",
            "PrivateLink": true
        }
    ]
}
```
## Properties

| Property               | Required | Description                                                                                                                                                                                                            | Accepted Values                                       |
| ---------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| ReferenceName          | Yes      | Name used to refer to this vNET in other components                                                                                                                                                                    | String                                                |
| DNSServers             | Yes      | IP Address of DNS servers to use. Typically Azure based DCs for domain join.                                                                                                                                           | Array of IP Addresses                                 |
| VirtualNetworkPeerings | No       | List of peerings to create with other virtual networks. Although not required, connectivity to other resources on Azure might be impossible without peerings.                                                          | [Virtual Network Peerings](#virtual-network-peerings) |
| DefaultSubnets         | No       | List of subnets to create by default for this subnet. Use it for other components like storage accounts that use Private Links. Remember that each host pool will create its own subnet, no need to configure it here. | [Default Sunbnets](#default-subnets)                  |

### Virtual Network Peerings

| Property            | Required | Description                                                                                                                                                                                                     | Accepted Values |
| ------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- |
| RemoteVnetId        | Yes      | Resource ID of hub vNET                                                                                                                                                                                         | Resource ID     |
| UseRemoteGateways   | No       | Default is false. Set to true if the hub network has a VPN Gateway and you wish to utilize it from the hostpool. deployment will fail if value is set to true when no gateway is in the remote virtual network. | Boolean         |
| CreateRemotePeering | No       | Default is false. Set to true if you wish to automatically create a peering in the remote network. If this is not configured you must manually create the peering for connectivity to work as expected.         | Boolean         |

### Default Subnets

| Property    | Required | Description                                                                                                      | Accepted Values    |
| ----------- | -------- | ---------------------------------------------------------------------------------------------------------------- | ------------------ |
| Scope       | Yes      | Scope of the subnet. This is used to point to the proper Address Space <!-- #TODO: Add link to address space.--> | Address Space name |
| NamePrefix  | Yes      | All subnets use a "Prefix_Subnet" naming convention. You must define the prefix here.                            | String             |
| PrivateLink | No       | Default is false. Set to true for subnets used for private links. <!-- #TODO: Explain why-->                     | Boolean            |
