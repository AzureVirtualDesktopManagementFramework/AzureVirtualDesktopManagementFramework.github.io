# Address Spaces
Address spaces are used to define the subnet ranges used by each virtual network and subnet.
It is a prime example for usage of "DeploymentStage" feature. <!-- TODO: Create document for this feature -->

**Path:** .\Network\AddressSpaces\\*.json

## Sample
The sample below shows configuration of two address spaces. Each has different values depending on deployment stage.
```json
[
    {
        "scope": "EnterpriseAccess",
        "AddressSpace": {
            "DeploymentStage": {
                "Development": "172.17.255.0/24",
                "GeneralAvailability": "172.17.64.0/19",
                "Preview": "172.17.251.0/24"
            }
        },
        "SubnetMask": {
            "DeploymentStage": {
                "Development": "27",
                "GeneralAvailability": "24",
                "Preview": "27"
            }
        }
    },
    {
        "scope": "VirtualNetwork",
        "AddressSpace": {
            "DeploymentStage": {
                "Development": "172.17.252.0/22",
                "GeneralAvailability": "172.17.0.0/17",
                "Preview": "172.17.248.0/22"
            }
        },
        "SubnetMask": null
    }
]
```
# Properties

| Property     | Required | Description                                                                                                   | Accepted Values                         |
| ------------ | -------- | ------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| Scope        | Yes      | Scope of the address space. *VirtualNetwork* is used for the Address Space of a virtual network.              | String                                  |
| AddressSpace | Yes      | CIDR for the address space. Usually configured using DeploymentStage feature.                                 | IPv4 CIDR                               |
| SubnetMask   | Yes      | Can be null for VirtualNetwork. Defines the subnet mask used for any subnet created under this address space. | Any mask than Address Space subnet mask |
