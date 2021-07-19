# Components
This sections explains the configuration of different components. All components are configured using simple JSON files.

At deployment, the components are deployed in the order they listed below. #TODO: This needs to move to a separate page.

## Resource Groups
You do not need to configure RGs, when configuration is loaded AVDMF calculates the names of all required resource groups.
All resource groups are created before deploying any components.


## Network
All network components, except Remote Peerings, are deployed into one resource group using a single
- [Virtual Networks](Documentation\Components\Network\VirtualNetworks.md)
- Network Security Groups
- Address Spaces

## Storage
- Storage Accounts

## Desktop Virtualization
- Host Pools
- VM Templates
- Workspaces

## Other Components
- Environment Variables
- General Configuration
- Global Tags
- Naming Conventions
- Name Mappings