/**
  * @module MerakiDashboardAPILib
  *
  * The Cisco Meraki Dashboard API is a modern REST API based on the OpenAPI specification.  > Date:
  * 07 April, 2021 > > [What's New](https://meraki.io/whats-new/)  ---  [API Documentation](https:
  * //meraki.io/api)  [Community Support](https://meraki.io/community)  [Meraki Homepage](https:
  * //www.meraki.com)
  */

'use strict';

const Configuration = require('./configuration');
const OrganizationsController = require('./Controllers/OrganizationsController');
const NetworksController = require('./Controllers/NetworksController');
const DevicesController = require('./Controllers/DevicesController');
const InsightController = require('./Controllers/InsightController');
const WirelessController = require('./Controllers/WirelessController');
const CameraController = require('./Controllers/CameraController');
const ApplianceController = require('./Controllers/ApplianceController');
const SwitchController = require('./Controllers/SwitchController');
const CellularGatewayController = require('./Controllers/CellularGatewayController');
const SmController = require('./Controllers/SmController');
const UpdateDevice = require('./Models/UpdateDevice');
const BlinkDeviceLeds = require('./Models/BlinkDeviceLeds');
const ObjectTypeEnum = require('./Models/ObjectTypeEnum');
const GenerateDeviceCameraSnapshot = require('./Models/GenerateDeviceCameraSnapshot');
const UpdateDeviceCameraQualityAndRetention =
  require('./Models/UpdateDeviceCameraQualityAndRetention');
const QualityEnum = require('./Models/QualityEnum');
const ResolutionEnum = require('./Models/ResolutionEnum');
const MotionDetectorVersionEnum = require('./Models/MotionDetectorVersionEnum');
const UpdateDeviceCameraSense = require('./Models/UpdateDeviceCameraSense');
const UpdateDeviceCameraVideoSettings = require('./Models/UpdateDeviceCameraVideoSettings');
const UpdateDeviceCellularGatewayLan = require('./Models/UpdateDeviceCellularGatewayLan');
const ReservedIpRange = require('./Models/ReservedIpRange');
const FixedIpAssignment = require('./Models/FixedIpAssignment');
const UpdateDeviceCellularGatewayPortForwardingRules =
  require('./Models/UpdateDeviceCellularGatewayPortForwardingRules');
const Rule = require('./Models/Rule');
const UplinkEnum = require('./Models/UplinkEnum');
const UpdateDeviceManagementInterface = require('./Models/UpdateDeviceManagementInterface');
const Wan1 = require('./Models/Wan1');
const WanEnabledEnum = require('./Models/WanEnabledEnum');
const Wan2 = require('./Models/Wan2');
const CycleDeviceSwitchPorts = require('./Models/CycleDeviceSwitchPorts');
const UpdateDeviceSwitchPort = require('./Models/UpdateDeviceSwitchPort');
const TypeEnum = require('./Models/TypeEnum');
const StpGuardEnum = require('./Models/StpGuardEnum');
const UdldEnum = require('./Models/UdldEnum');
const AccessPolicyTypeEnum = require('./Models/AccessPolicyTypeEnum');
const CreateDeviceSwitchRoutingInterface = require('./Models/CreateDeviceSwitchRoutingInterface');
const MulticastRoutingEnum = require('./Models/MulticastRoutingEnum');
const OspfSettings = require('./Models/OspfSettings');
const UpdateDeviceSwitchRoutingInterface = require('./Models/UpdateDeviceSwitchRoutingInterface');
const MulticastRouting1Enum = require('./Models/MulticastRouting1Enum');
const OspfSettings1 = require('./Models/OspfSettings1');
const UpdateDeviceSwitchRoutingInterfaceDhcp =
  require('./Models/UpdateDeviceSwitchRoutingInterfaceDhcp');
const DhcpModeEnum = require('./Models/DhcpModeEnum');
const DhcpLeaseTimeEnum = require('./Models/DhcpLeaseTimeEnum');
const DnsNameserversOptionEnum = require('./Models/DnsNameserversOptionEnum');
const DhcpOption = require('./Models/DhcpOption');
const Type1Enum = require('./Models/Type1Enum');
const ReservedIpRange1 = require('./Models/ReservedIpRange1');
const FixedIpAssignment1 = require('./Models/FixedIpAssignment1');
const CreateDeviceSwitchRoutingStaticRoute =
  require('./Models/CreateDeviceSwitchRoutingStaticRoute');
const UpdateDeviceSwitchRoutingStaticRoute =
  require('./Models/UpdateDeviceSwitchRoutingStaticRoute');
const UpdateDeviceSwitchWarmSpare = require('./Models/UpdateDeviceSwitchWarmSpare');
const UpdateDeviceWirelessBluetoothSettings =
  require('./Models/UpdateDeviceWirelessBluetoothSettings');
const BandEnum = require('./Models/BandEnum');
const UpdateDeviceWirelessRadioSettings = require('./Models/UpdateDeviceWirelessRadioSettings');
const TwoFourGhzSettings = require('./Models/TwoFourGhzSettings');
const ChannelEnum = require('./Models/ChannelEnum');
const FiveGhzSettings = require('./Models/FiveGhzSettings');
const Channel1Enum = require('./Models/Channel1Enum');
const ChannelWidthEnum = require('./Models/ChannelWidthEnum');
const UpdateNetwork = require('./Models/UpdateNetwork');
const UpdateNetworkAlertsSettings = require('./Models/UpdateNetworkAlertsSettings');
const DefaultDestinations = require('./Models/DefaultDestinations');
const Alert = require('./Models/Alert');
const AlertDestinations = require('./Models/AlertDestinations');
const SortOrderEnum = require('./Models/SortOrderEnum');
const UpdateNetworkApplianceConnectivityMonitoringDestinations =
  require('./Models/UpdateNetworkApplianceConnectivityMonitoringDestinations');
const Destination = require('./Models/Destination');
const UpdateNetworkApplianceContentFiltering =
  require('./Models/UpdateNetworkApplianceContentFiltering');
const UrlCategoryListSizeEnum = require('./Models/UrlCategoryListSizeEnum');
const UpdateNetworkApplianceFirewallCellularFirewallRules =
  require('./Models/UpdateNetworkApplianceFirewallCellularFirewallRules');
const Rule1 = require('./Models/Rule1');
const PolicyEnum = require('./Models/PolicyEnum');
const ProtocolEnum = require('./Models/ProtocolEnum');
const UpdateNetworkApplianceFirewallFirewalledService =
  require('./Models/UpdateNetworkApplianceFirewallFirewalledService');
const AccessEnum = require('./Models/AccessEnum');
const UpdateNetworkApplianceFirewallInboundFirewallRules =
  require('./Models/UpdateNetworkApplianceFirewallInboundFirewallRules');
const UpdateNetworkApplianceFirewallL3FirewallRules =
  require('./Models/UpdateNetworkApplianceFirewallL3FirewallRules');
const UpdateNetworkApplianceFirewallL7FirewallRules =
  require('./Models/UpdateNetworkApplianceFirewallL7FirewallRules');
const Rule4 = require('./Models/Rule4');
const Policy3Enum = require('./Models/Policy3Enum');
const Type2Enum = require('./Models/Type2Enum');
const UpdateNetworkApplianceFirewallOneToManyNatRules =
  require('./Models/UpdateNetworkApplianceFirewallOneToManyNatRules');
const Rule5 = require('./Models/Rule5');
const Uplink1Enum = require('./Models/Uplink1Enum');
const PortRule = require('./Models/PortRule');
const Protocol3Enum = require('./Models/Protocol3Enum');
const UpdateNetworkApplianceFirewallOneToOneNatRules =
  require('./Models/UpdateNetworkApplianceFirewallOneToOneNatRules');
const Rule6 = require('./Models/Rule6');
const AllowedInbound = require('./Models/AllowedInbound');
const Protocol4Enum = require('./Models/Protocol4Enum');
const UpdateNetworkApplianceFirewallPortForwardingRules =
  require('./Models/UpdateNetworkApplianceFirewallPortForwardingRules');
const Rule7 = require('./Models/Rule7');
const Uplink3Enum = require('./Models/Uplink3Enum');
const Protocol5Enum = require('./Models/Protocol5Enum');
const UpdateNetworkAppliancePort = require('./Models/UpdateNetworkAppliancePort');
const UpdateNetworkApplianceSecurityIntrusion =
  require('./Models/UpdateNetworkApplianceSecurityIntrusion');
const ModeEnum = require('./Models/ModeEnum');
const IdsRulesetsEnum = require('./Models/IdsRulesetsEnum');
const ProtectedNetworks = require('./Models/ProtectedNetworks');
const UpdateNetworkApplianceSecurityMalware =
  require('./Models/UpdateNetworkApplianceSecurityMalware');
const Mode1Enum = require('./Models/Mode1Enum');
const AllowedUrl = require('./Models/AllowedUrl');
const AllowedFile = require('./Models/AllowedFile');
const UpdateNetworkApplianceSingleLan = require('./Models/UpdateNetworkApplianceSingleLan');
const CreateNetworkApplianceStaticRoute = require('./Models/CreateNetworkApplianceStaticRoute');
const UpdateNetworkApplianceStaticRoute = require('./Models/UpdateNetworkApplianceStaticRoute');
const ReservedIpRange2 = require('./Models/ReservedIpRange2');
const UpdateNetworkApplianceTrafficShaping =
  require('./Models/UpdateNetworkApplianceTrafficShaping');
const GlobalBandwidthLimits = require('./Models/GlobalBandwidthLimits');
const CreateNetworkApplianceTrafficShapingCustomPerformanceClass =
  require('./Models/CreateNetworkApplianceTrafficShapingCustomPerformanceClass');
const UpdateNetworkApplianceTrafficShapingCustomPerformanceClass =
  require('./Models/UpdateNetworkApplianceTrafficShapingCustomPerformanceClass');
const UpdateNetworkApplianceTrafficShapingRules =
  require('./Models/UpdateNetworkApplianceTrafficShapingRules');
const Rule8 = require('./Models/Rule8');
const Definition = require('./Models/Definition');
const Type3Enum = require('./Models/Type3Enum');
const PerClientBandwidthLimits = require('./Models/PerClientBandwidthLimits');
const BandwidthLimits = require('./Models/BandwidthLimits');
const UpdateNetworkApplianceTrafficShapingUplinkBandwidth =
  require('./Models/UpdateNetworkApplianceTrafficShapingUplinkBandwidth');
const BandwidthLimits1 = require('./Models/BandwidthLimits1');
const Wan11 = require('./Models/Wan11');
const Wan21 = require('./Models/Wan21');
const Cellular = require('./Models/Cellular');
const UpdateNetworkApplianceTrafficShapingUplinkSelection =
  require('./Models/UpdateNetworkApplianceTrafficShapingUplinkSelection');
const DefaultUplinkEnum = require('./Models/DefaultUplinkEnum');
const WanTrafficUplinkPreference = require('./Models/WanTrafficUplinkPreference');
const TrafficFilter = require('./Models/TrafficFilter');
const Value = require('./Models/Value');
const Protocol6Enum = require('./Models/Protocol6Enum');
const Source = require('./Models/Source');
const Destination1 = require('./Models/Destination1');
const PreferredUplinkEnum = require('./Models/PreferredUplinkEnum');
const VpnTrafficUplinkPreference = require('./Models/VpnTrafficUplinkPreference');
const TrafficFilter1 = require('./Models/TrafficFilter1');
const Type4Enum = require('./Models/Type4Enum');
const Value1 = require('./Models/Value1');
const Protocol7Enum = require('./Models/Protocol7Enum');
const Source1 = require('./Models/Source1');
const Destination2 = require('./Models/Destination2');
const PreferredUplink1Enum = require('./Models/PreferredUplink1Enum');
const FailOverCriterionEnum = require('./Models/FailOverCriterionEnum');
const PerformanceClass = require('./Models/PerformanceClass');
const Type5Enum = require('./Models/Type5Enum');
const BuiltinPerformanceClassNameEnum = require('./Models/BuiltinPerformanceClassNameEnum');
const CreateNetworkApplianceVlan = require('./Models/CreateNetworkApplianceVlan');
const UpdateNetworkApplianceVlansSettings = require('./Models/UpdateNetworkApplianceVlansSettings');
const UpdateNetworkApplianceVlan = require('./Models/UpdateNetworkApplianceVlan');
const DhcpHandlingEnum = require('./Models/DhcpHandlingEnum');
const DhcpLeaseTime1Enum = require('./Models/DhcpLeaseTime1Enum');
const DhcpOption1 = require('./Models/DhcpOption1');
const Type6Enum = require('./Models/Type6Enum');
const UpdateNetworkApplianceVpnBgp = require('./Models/UpdateNetworkApplianceVpnBgp');
const Neighbor = require('./Models/Neighbor');
const UpdateNetworkApplianceVpnSiteToSiteVpn =
  require('./Models/UpdateNetworkApplianceVpnSiteToSiteVpn');
const Mode2Enum = require('./Models/Mode2Enum');
const Hub = require('./Models/Hub');
const Subnet = require('./Models/Subnet');
const UpdateNetworkApplianceWarmSpare = require('./Models/UpdateNetworkApplianceWarmSpare');
const BindNetwork = require('./Models/BindNetwork');
const CreateNetworkCameraQualityRetentionProfile =
  require('./Models/CreateNetworkCameraQualityRetentionProfile');
const VideoSettings = require('./Models/VideoSettings');
const MV21MV71 = require('./Models/MV21MV71');
const Quality1Enum = require('./Models/Quality1Enum');
const MV12MV22MV72 = require('./Models/MV12MV22MV72');
const Resolution1Enum = require('./Models/Resolution1Enum');
const MV32 = require('./Models/MV32');
const Resolution2Enum = require('./Models/Resolution2Enum');
const MV12WE = require('./Models/MV12WE');
const MV22XMV72X = require('./Models/MV22XMV72X');
const Resolution4Enum = require('./Models/Resolution4Enum');
const UpdateNetworkCameraQualityRetentionProfile =
  require('./Models/UpdateNetworkCameraQualityRetentionProfile');
const UpdateNetworkCellularGatewayConnectivityMonitoringDestinations =
  require('./Models/UpdateNetworkCellularGatewayConnectivityMonitoringDestinations');
const UpdateNetworkCellularGatewayDhcp = require('./Models/UpdateNetworkCellularGatewayDhcp');
const UpdateNetworkCellularGatewaySubnetPool =
  require('./Models/UpdateNetworkCellularGatewaySubnetPool');
const UpdateNetworkCellularGatewayUplink = require('./Models/UpdateNetworkCellularGatewayUplink');
const BandwidthLimits2 = require('./Models/BandwidthLimits2');
const SsidNumberEnum = require('./Models/SsidNumberEnum');
const ProvisionNetworkClients = require('./Models/ProvisionNetworkClients');
const Client = require('./Models/Client');
const DevicePolicyEnum = require('./Models/DevicePolicyEnum');
const PoliciesBySecurityAppliance = require('./Models/PoliciesBySecurityAppliance');
const DevicePolicy1Enum = require('./Models/DevicePolicy1Enum');
const GeneratedObject = require('./Models/GeneratedObject');
const DevicePolicy2Enum = require('./Models/DevicePolicy2Enum');
const M10 = require('./Models/M10');
const UpdateNetworkClientPolicy = require('./Models/UpdateNetworkClientPolicy');
const UpdateNetworkClientSplashAuthorizationStatus =
  require('./Models/UpdateNetworkClientSplashAuthorizationStatus');
const GeneratedObject10 = require('./Models/GeneratedObject10');
const GeneratedObject11 = require('./Models/GeneratedObject11');
const GeneratedObject12 = require('./Models/GeneratedObject12');
const GeneratedObject13 = require('./Models/GeneratedObject13');
const GeneratedObject14 = require('./Models/GeneratedObject14');
const GeneratedObject15 = require('./Models/GeneratedObject15');
const GeneratedObject16 = require('./Models/GeneratedObject16');
const GeneratedObject17 = require('./Models/GeneratedObject17');
const GeneratedObject18 = require('./Models/GeneratedObject18');
const GeneratedObject19 = require('./Models/GeneratedObject19');
const M101 = require('./Models/M101');
const M111 = require('./Models/M111');
const M121 = require('./Models/M121');
const M131 = require('./Models/M131');
const M141 = require('./Models/M141');
const ClaimNetworkDevices = require('./Models/ClaimNetworkDevices');
const RemoveNetworkDevices = require('./Models/RemoveNetworkDevices');
const UpdateNetworkFirmwareUpgrades = require('./Models/UpdateNetworkFirmwareUpgrades');
const UpgradeWindow = require('./Models/UpgradeWindow');
const DayOfWeekEnum = require('./Models/DayOfWeekEnum');
const HourOfDayEnum = require('./Models/HourOfDayEnum');
const Products = require('./Models/Products');
const Wireless = require('./Models/Wireless');
const NextUpgrade = require('./Models/NextUpgrade');
const ToVersion = require('./Models/ToVersion');
const Switch = require('./Models/Switch');
const Appliance = require('./Models/Appliance');
const Camera = require('./Models/Camera');
const VmxHost = require('./Models/VmxHost');
const Environmental = require('./Models/Environmental');
const CellularGateway = require('./Models/CellularGateway');
const CreateNetworkFirmwareUpgradesRollback =
  require('./Models/CreateNetworkFirmwareUpgradesRollback');
const ProductEnum = require('./Models/ProductEnum');
const Reason = require('./Models/Reason');
const CategoryEnum = require('./Models/CategoryEnum');
const ToVersion7 = require('./Models/ToVersion7');
const CreateNetworkFloorPlan = require('./Models/CreateNetworkFloorPlan');
const Center = require('./Models/Center');
const BottomLeftCorner = require('./Models/BottomLeftCorner');
const BottomRightCorner = require('./Models/BottomRightCorner');
const TopLeftCorner = require('./Models/TopLeftCorner');
const TopRightCorner = require('./Models/TopRightCorner');
const UpdateNetworkFloorPlan = require('./Models/UpdateNetworkFloorPlan');
const Center1 = require('./Models/Center1');
const CreateNetworkGroupPolicy = require('./Models/CreateNetworkGroupPolicy');
const Scheduling = require('./Models/Scheduling');
const Monday = require('./Models/Monday');
const Tuesday = require('./Models/Tuesday');
const Wednesday = require('./Models/Wednesday');
const Thursday = require('./Models/Thursday');
const Friday = require('./Models/Friday');
const Saturday = require('./Models/Saturday');
const Sunday = require('./Models/Sunday');
const Bandwidth = require('./Models/Bandwidth');
const SettingsEnum = require('./Models/SettingsEnum');
const BandwidthLimits3 = require('./Models/BandwidthLimits3');
const FirewallAndTrafficShaping = require('./Models/FirewallAndTrafficShaping');
const Settings1Enum = require('./Models/Settings1Enum');
const TrafficShapingRule = require('./Models/TrafficShapingRule');
const L3FirewallRule = require('./Models/L3FirewallRule');
const L7FirewallRule = require('./Models/L7FirewallRule');
const Policy4Enum = require('./Models/Policy4Enum');
const Type8Enum = require('./Models/Type8Enum');
const ContentFiltering = require('./Models/ContentFiltering');
const AllowedUrlPatterns = require('./Models/AllowedUrlPatterns');
const Settings2Enum = require('./Models/Settings2Enum');
const BlockedUrlPatterns = require('./Models/BlockedUrlPatterns');
const BlockedUrlCategories = require('./Models/BlockedUrlCategories');
const Settings4Enum = require('./Models/Settings4Enum');
const SplashAuthSettingsEnum = require('./Models/SplashAuthSettingsEnum');
const VlanTagging = require('./Models/VlanTagging');
const Settings5Enum = require('./Models/Settings5Enum');
const BonjourForwarding = require('./Models/BonjourForwarding');
const Settings6Enum = require('./Models/Settings6Enum');
const Rule9 = require('./Models/Rule9');
const ServiceEnum = require('./Models/ServiceEnum');
const UpdateNetworkGroupPolicy = require('./Models/UpdateNetworkGroupPolicy');
const CreateNetworkMerakiAuthUser = require('./Models/CreateNetworkMerakiAuthUser');
const AccountTypeEnum = require('./Models/AccountTypeEnum');
const Authorization = require('./Models/Authorization');
const UpdateNetworkMerakiAuthUser = require('./Models/UpdateNetworkMerakiAuthUser');
const Authorization1 = require('./Models/Authorization1');
const CreateNetworkMqttBroker = require('./Models/CreateNetworkMqttBroker');
const UpdateNetworkMqttBroker = require('./Models/UpdateNetworkMqttBroker');
const UpdateNetworkNetflow = require('./Models/UpdateNetworkNetflow');
const CreateNetworkPiiRequest = require('./Models/CreateNetworkPiiRequest');
const Type11Enum = require('./Models/Type11Enum');
const UpdateNetworkSettings = require('./Models/UpdateNetworkSettings');
const SecureConnect = require('./Models/SecureConnect');
const CreateNetworkSmBypassActivationLockAttempt =
  require('./Models/CreateNetworkSmBypassActivationLockAttempt');
const CheckinNetworkSmDevices = require('./Models/CheckinNetworkSmDevices');
const UpdateNetworkSmDevicesFields = require('./Models/UpdateNetworkSmDevicesFields');
const DeviceFields = require('./Models/DeviceFields');
const LockNetworkSmDevices = require('./Models/LockNetworkSmDevices');
const ModifyNetworkSmDevicesTags = require('./Models/ModifyNetworkSmDevicesTags');
const MoveNetworkSmDevices = require('./Models/MoveNetworkSmDevices');
const WipeNetworkSmDevices = require('./Models/WipeNetworkSmDevices');
const CreateNetworkSmTargetGroup = require('./Models/CreateNetworkSmTargetGroup');
const UpdateNetworkSmTargetGroup = require('./Models/UpdateNetworkSmTargetGroup');
const UpdateNetworkSnmp = require('./Models/UpdateNetworkSnmp');
const Access1Enum = require('./Models/Access1Enum');
const User = require('./Models/User');
const UpdateNetworkSwitchAccessControlLists =
  require('./Models/UpdateNetworkSwitchAccessControlLists');
const Rule11 = require('./Models/Rule11');
const Policy6Enum = require('./Models/Policy6Enum');
const IpVersionEnum = require('./Models/IpVersionEnum');
const Protocol8Enum = require('./Models/Protocol8Enum');
const CreateNetworkSwitchAccessPolicy = require('./Models/CreateNetworkSwitchAccessPolicy');
const RadiusServer = require('./Models/RadiusServer');
const RadiusAccountingServer = require('./Models/RadiusAccountingServer');
const HostModeEnum = require('./Models/HostModeEnum');
const AccessPolicyType1Enum = require('./Models/AccessPolicyType1Enum');
const UpdateNetworkSwitchAccessPolicy = require('./Models/UpdateNetworkSwitchAccessPolicy');
const UpdateNetworkSwitchAlternateManagementInterface =
  require('./Models/UpdateNetworkSwitchAlternateManagementInterface');
const Protocol9Enum = require('./Models/Protocol9Enum');
const Switch1 = require('./Models/Switch1');
const UpdateNetworkSwitchDhcpServerPolicy = require('./Models/UpdateNetworkSwitchDhcpServerPolicy');
const DefaultPolicyEnum = require('./Models/DefaultPolicyEnum');
const UpdateNetworkSwitchDscpToCosMappings =
  require('./Models/UpdateNetworkSwitchDscpToCosMappings');
const Mapping = require('./Models/Mapping');
const CreateNetworkSwitchLinkAggregation = require('./Models/CreateNetworkSwitchLinkAggregation');
const SwitchPort = require('./Models/SwitchPort');
const SwitchProfilePort = require('./Models/SwitchProfilePort');
const UpdateNetworkSwitchLinkAggregation = require('./Models/UpdateNetworkSwitchLinkAggregation');
const UpdateNetworkSwitchMtu = require('./Models/UpdateNetworkSwitchMtu');
const Override = require('./Models/Override');
const CreateNetworkSwitchPortSchedule = require('./Models/CreateNetworkSwitchPortSchedule');
const PortSchedule = require('./Models/PortSchedule');
const UpdateNetworkSwitchPortSchedule = require('./Models/UpdateNetworkSwitchPortSchedule');
const CreateNetworkSwitchQosRule = require('./Models/CreateNetworkSwitchQosRule');
const Protocol10Enum = require('./Models/Protocol10Enum');
const UpdateNetworkSwitchQosRulesOrder = require('./Models/UpdateNetworkSwitchQosRulesOrder');
const UpdateNetworkSwitchQosRule = require('./Models/UpdateNetworkSwitchQosRule');
const Protocol11Enum = require('./Models/Protocol11Enum');
const UpdateNetworkSwitchRoutingMulticast = require('./Models/UpdateNetworkSwitchRoutingMulticast');
const DefaultSettings = require('./Models/DefaultSettings');
const Override1 = require('./Models/Override1');
const CreateNetworkSwitchRoutingMulticastRendezvousPoint =
  require('./Models/CreateNetworkSwitchRoutingMulticastRendezvousPoint');
const UpdateNetworkSwitchRoutingMulticastRendezvousPoint =
  require('./Models/UpdateNetworkSwitchRoutingMulticastRendezvousPoint');
const UpdateNetworkSwitchRoutingOspf = require('./Models/UpdateNetworkSwitchRoutingOspf');
const Area = require('./Models/Area');
const AreaTypeEnum = require('./Models/AreaTypeEnum');
const Md5AuthenticationKey = require('./Models/Md5AuthenticationKey');
const UpdateNetworkSwitchSettings = require('./Models/UpdateNetworkSwitchSettings');
const PowerException = require('./Models/PowerException');
const PowerTypeEnum = require('./Models/PowerTypeEnum');
const CreateNetworkSwitchStack = require('./Models/CreateNetworkSwitchStack');
const AddNetworkSwitchStack = require('./Models/AddNetworkSwitchStack');
const RemoveNetworkSwitchStack = require('./Models/RemoveNetworkSwitchStack');
const CreateNetworkSwitchStackRoutingInterface =
  require('./Models/CreateNetworkSwitchStackRoutingInterface');
const UpdateNetworkSwitchStackRoutingInterface =
  require('./Models/UpdateNetworkSwitchStackRoutingInterface');
const UpdateNetworkSwitchStackRoutingInterfaceDhcp =
  require('./Models/UpdateNetworkSwitchStackRoutingInterfaceDhcp');
const DhcpMode1Enum = require('./Models/DhcpMode1Enum');
const DhcpLeaseTime2Enum = require('./Models/DhcpLeaseTime2Enum');
const DnsNameserversOption1Enum = require('./Models/DnsNameserversOption1Enum');
const CreateNetworkSwitchStackRoutingStaticRoute =
  require('./Models/CreateNetworkSwitchStackRoutingStaticRoute');
const UpdateNetworkSwitchStackRoutingStaticRoute =
  require('./Models/UpdateNetworkSwitchStackRoutingStaticRoute');
const UpdateNetworkSwitchStormControl = require('./Models/UpdateNetworkSwitchStormControl');
const UpdateNetworkSwitchStp = require('./Models/UpdateNetworkSwitchStp');
const StpBridgePriority = require('./Models/StpBridgePriority');
const UpdateNetworkSyslogServers = require('./Models/UpdateNetworkSyslogServers');
const Server = require('./Models/Server');
const DeviceTypeEnum = require('./Models/DeviceTypeEnum');
const UpdateNetworkTrafficAnalysis = require('./Models/UpdateNetworkTrafficAnalysis');
const Mode3Enum = require('./Models/Mode3Enum');
const CustomPieChartItem = require('./Models/CustomPieChartItem');
const Type13Enum = require('./Models/Type13Enum');
const CreateNetworkWebhooksHttpServer = require('./Models/CreateNetworkWebhooksHttpServer');
const UpdateNetworkWebhooksHttpServer = require('./Models/UpdateNetworkWebhooksHttpServer');
const CreateNetworkWebhooksWebhookTest = require('./Models/CreateNetworkWebhooksWebhookTest');
const UpdateNetworkWirelessAlternateManagementInterface =
  require('./Models/UpdateNetworkWirelessAlternateManagementInterface');
const Protocol12Enum = require('./Models/Protocol12Enum');
const AccessPoint = require('./Models/AccessPoint');
const UpdateNetworkWirelessBilling = require('./Models/UpdateNetworkWirelessBilling');
const Plan = require('./Models/Plan');
const BandwidthLimits7 = require('./Models/BandwidthLimits7');
const TimeLimitEnum = require('./Models/TimeLimitEnum');
const UpdateNetworkWirelessBluetoothSettings =
  require('./Models/UpdateNetworkWirelessBluetoothSettings');
const MajorMinorAssignmentModeEnum = require('./Models/MajorMinorAssignmentModeEnum');
const Type14Enum = require('./Models/Type14Enum');
const IncludedSeverityEnum = require('./Models/IncludedSeverityEnum');
const AccessCategoryEnum = require('./Models/AccessCategoryEnum');
const CreateNetworkWirelessRfProfile = require('./Models/CreateNetworkWirelessRfProfile');
const MinBitrateTypeEnum = require('./Models/MinBitrateTypeEnum');
const BandSelectionTypeEnum = require('./Models/BandSelectionTypeEnum');
const ApBandSettings = require('./Models/ApBandSettings');
const BandOperationModeEnum = require('./Models/BandOperationModeEnum');
const TwoFourGhzSettings1 = require('./Models/TwoFourGhzSettings1');
const FiveGhzSettings1 = require('./Models/FiveGhzSettings1');
const UpdateNetworkWirelessRfProfile = require('./Models/UpdateNetworkWirelessRfProfile');
const MinBitrateType1Enum = require('./Models/MinBitrateType1Enum');
const BandSelectionType1Enum = require('./Models/BandSelectionType1Enum');
const ApBandSettings1 = require('./Models/ApBandSettings1');
const BandOperationMode1Enum = require('./Models/BandOperationMode1Enum');
const TwoFourGhzSettings2 = require('./Models/TwoFourGhzSettings2');
const FiveGhzSettings2 = require('./Models/FiveGhzSettings2');
const UpdateNetworkWirelessSettings = require('./Models/UpdateNetworkWirelessSettings');
const UpgradeStrategyEnum = require('./Models/UpgradeStrategyEnum');
const UpdateNetworkWirelessSsid = require('./Models/UpdateNetworkWirelessSsid');
const AuthModeEnum = require('./Models/AuthModeEnum');
const EnterpriseAdminAccessEnum = require('./Models/EnterpriseAdminAccessEnum');
const EncryptionModeEnum = require('./Models/EncryptionModeEnum');
const WpaEncryptionModeEnum = require('./Models/WpaEncryptionModeEnum');
const Dot11w = require('./Models/Dot11w');
const Dot11r = require('./Models/Dot11r');
const SplashPageEnum = require('./Models/SplashPageEnum');
const Oauth = require('./Models/Oauth');
const LocalRadius = require('./Models/LocalRadius');
const PasswordAuthentication = require('./Models/PasswordAuthentication');
const CertificateAuthentication = require('./Models/CertificateAuthentication');
const ClientRootCaCertificate = require('./Models/ClientRootCaCertificate');
const Ldap = require('./Models/Ldap');
const Server1 = require('./Models/Server1');
const Credentials = require('./Models/Credentials');
const ServerCaCertificate = require('./Models/ServerCaCertificate');
const ActiveDirectory = require('./Models/ActiveDirectory');
const Server2 = require('./Models/Server2');
const Credentials1 = require('./Models/Credentials1');
const RadiusServer2 = require('./Models/RadiusServer2');
const RadiusFailoverPolicyEnum = require('./Models/RadiusFailoverPolicyEnum');
const RadiusLoadBalancingPolicyEnum = require('./Models/RadiusLoadBalancingPolicyEnum');
const RadiusAccountingServer2 = require('./Models/RadiusAccountingServer2');
const RadiusAttributeForGroupPoliciesEnum = require('./Models/RadiusAttributeForGroupPoliciesEnum');
const ApTagsAndVlanId = require('./Models/ApTagsAndVlanId');
const DnsRewrite = require('./Models/DnsRewrite');
const UpdateNetworkWirelessSsidBonjourForwarding =
  require('./Models/UpdateNetworkWirelessSsidBonjourForwarding');
const UpdateNetworkWirelessSsidDeviceTypeGroupPolicies =
  require('./Models/UpdateNetworkWirelessSsidDeviceTypeGroupPolicies');
const DeviceTypePolicy = require('./Models/DeviceTypePolicy');
const DeviceType1Enum = require('./Models/DeviceType1Enum');
const DevicePolicy17Enum = require('./Models/DevicePolicy17Enum');
const UpdateNetworkWirelessSsidFirewallL3FirewallRules =
  require('./Models/UpdateNetworkWirelessSsidFirewallL3FirewallRules');
const Rule13 = require('./Models/Rule13');
const UpdateNetworkWirelessSsidFirewallL7FirewallRules =
  require('./Models/UpdateNetworkWirelessSsidFirewallL7FirewallRules');
const Rule14 = require('./Models/Rule14');
const Type15Enum = require('./Models/Type15Enum');
const CreateNetworkWirelessSsidIdentityPsk =
  require('./Models/CreateNetworkWirelessSsidIdentityPsk');
const UpdateNetworkWirelessSsidIdentityPsk =
  require('./Models/UpdateNetworkWirelessSsidIdentityPsk');
const UpdateNetworkWirelessSsidSplashSettings =
  require('./Models/UpdateNetworkWirelessSsidSplashSettings');
const SplashLogo = require('./Models/SplashLogo');
const SplashImage = require('./Models/SplashImage');
const SplashPrepaidFront = require('./Models/SplashPrepaidFront');
const ControllerDisconnectionBehaviorEnum = require('./Models/ControllerDisconnectionBehaviorEnum');
const GuestSponsorship = require('./Models/GuestSponsorship');
const Billing = require('./Models/Billing');
const FreeAccess = require('./Models/FreeAccess');
const UpdateNetworkWirelessSsidTrafficShapingRules =
  require('./Models/UpdateNetworkWirelessSsidTrafficShapingRules');
const Rule15 = require('./Models/Rule15');
const UpdateNetworkWirelessSsidVpn = require('./Models/UpdateNetworkWirelessSsidVpn');
const SplitTunnel = require('./Models/SplitTunnel');
const Rule16 = require('./Models/Rule16');
const Protocol14Enum = require('./Models/Protocol14Enum');
const CreateOrganization = require('./Models/CreateOrganization');
const UpdateOrganization = require('./Models/UpdateOrganization');
const CreateOrganizationActionBatch = require('./Models/CreateOrganizationActionBatch');
const Action = require('./Models/Action');
const StatusEnum = require('./Models/StatusEnum');
const UpdateOrganizationActionBatch = require('./Models/UpdateOrganizationActionBatch');
const CreateOrganizationAdmin = require('./Models/CreateOrganizationAdmin');
const OrgAccessEnum = require('./Models/OrgAccessEnum');
const Tag = require('./Models/Tag');
const Access2Enum = require('./Models/Access2Enum');
const Network = require('./Models/Network');
const Access3Enum = require('./Models/Access3Enum');
const AuthenticationMethodEnum = require('./Models/AuthenticationMethodEnum');
const UpdateOrganizationAdmin = require('./Models/UpdateOrganizationAdmin');
const UpdateOrganizationApplianceSecurityIntrusion =
  require('./Models/UpdateOrganizationApplianceSecurityIntrusion');
const AllowedRule = require('./Models/AllowedRule');
const UpdateOrganizationApplianceVpnThirdPartyVPNPeers =
  require('./Models/UpdateOrganizationApplianceVpnThirdPartyVPNPeers');
const Peer = require('./Models/Peer');
const IpsecPolicies = require('./Models/IpsecPolicies');
const IkePrfAlgoEnum = require('./Models/IkePrfAlgoEnum');
const IkeVersionEnum = require('./Models/IkeVersionEnum');
const UpdateOrganizationApplianceVpnVpnFirewallRules =
  require('./Models/UpdateOrganizationApplianceVpnVpnFirewallRules');
const Rule17 = require('./Models/Rule17');
const CreateOrganizationBrandingPolicy = require('./Models/CreateOrganizationBrandingPolicy');
const AdminSettings = require('./Models/AdminSettings');
const AppliesToEnum = require('./Models/AppliesToEnum');
const HelpSettings = require('./Models/HelpSettings');
const HelpTabEnum = require('./Models/HelpTabEnum');
const GetHelpSubtabEnum = require('./Models/GetHelpSubtabEnum');
const CommunitySubtabEnum = require('./Models/CommunitySubtabEnum');
const CasesSubtabEnum = require('./Models/CasesSubtabEnum');
const DataProtectionRequestsSubtabEnum = require('./Models/DataProtectionRequestsSubtabEnum');
const UniversalSearchKnowledgeBaseSearchEnum =
  require('./Models/UniversalSearchKnowledgeBaseSearchEnum');
const NewFeaturesSubtabEnum = require('./Models/NewFeaturesSubtabEnum');
const FirewallInfoSubtabEnum = require('./Models/FirewallInfoSubtabEnum');
const ApiDocsSubtabEnum = require('./Models/ApiDocsSubtabEnum');
const HardwareReplacementsSubtabEnum = require('./Models/HardwareReplacementsSubtabEnum');
const SmForumsEnum = require('./Models/SmForumsEnum');
const UpdateOrganizationBrandingPoliciesPriorities =
  require('./Models/UpdateOrganizationBrandingPoliciesPriorities');
const UpdateOrganizationBrandingPolicy = require('./Models/UpdateOrganizationBrandingPolicy');
const HelpSettings1 = require('./Models/HelpSettings1');
const ClaimIntoOrganization = require('./Models/ClaimIntoOrganization');
const License = require('./Models/License');
const Mode4Enum = require('./Models/Mode4Enum');
const CloneOrganization = require('./Models/CloneOrganization');
const CreateOrganizationConfigTemplate = require('./Models/CreateOrganizationConfigTemplate');
const UpdateOrganizationConfigTemplate = require('./Models/UpdateOrganizationConfigTemplate');
const UpdateOrganizationConfigTemplateSwitchProfilePort =
  require('./Models/UpdateOrganizationConfigTemplateSwitchProfilePort');
const Type17Enum = require('./Models/Type17Enum');
const AccessPolicyType3Enum = require('./Models/AccessPolicyType3Enum');
const CreateOrganizationInsightMonitoredMediaServer =
  require('./Models/CreateOrganizationInsightMonitoredMediaServer');
const UpdateOrganizationInsightMonitoredMediaServer =
  require('./Models/UpdateOrganizationInsightMonitoredMediaServer');
const UsedStateEnum = require('./Models/UsedStateEnum');
const StateEnum = require('./Models/StateEnum');
const AssignOrganizationLicensesSeats = require('./Models/AssignOrganizationLicensesSeats');
const MoveOrganizationLicenses = require('./Models/MoveOrganizationLicenses');
const MoveOrganizationLicensesSeats = require('./Models/MoveOrganizationLicensesSeats');
const RenewOrganizationLicensesSeats = require('./Models/RenewOrganizationLicensesSeats');
const UpdateOrganizationLicense = require('./Models/UpdateOrganizationLicense');
const UpdateOrganizationLoginSecurity = require('./Models/UpdateOrganizationLoginSecurity');
const TagsFilterTypeEnum = require('./Models/TagsFilterTypeEnum');
const CreateOrganizationNetwork = require('./Models/CreateOrganizationNetwork');
const ProductTypeEnum = require('./Models/ProductTypeEnum');
const CombineOrganizationNetworks = require('./Models/CombineOrganizationNetworks');
const UpdateOrganizationSaml = require('./Models/UpdateOrganizationSaml');
const CreateOrganizationSamlIdp = require('./Models/CreateOrganizationSamlIdp');
const UpdateOrganizationSamlIdp = require('./Models/UpdateOrganizationSamlIdp');
const CreateOrganizationSamlRole = require('./Models/CreateOrganizationSamlRole');
const OrgAccess2Enum = require('./Models/OrgAccess2Enum');
const Tag2 = require('./Models/Tag2');
const Access6Enum = require('./Models/Access6Enum');
const Network2 = require('./Models/Network2');
const Access7Enum = require('./Models/Access7Enum');
const UpdateOrganizationSamlRole = require('./Models/UpdateOrganizationSamlRole');
const UpdateOrganizationSnmp = require('./Models/UpdateOrganizationSnmp');
const V3AuthModeEnum = require('./Models/V3AuthModeEnum');
const V3PrivModeEnum = require('./Models/V3PrivModeEnum');
const CloneOrganizationSwitchDevices = require('./Models/CloneOrganizationSwitchDevices');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of MerakiDashboardAPILib
    Configuration,
    // controllers of MerakiDashboardAPILib
    OrganizationsController,
    NetworksController,
    DevicesController,
    InsightController,
    WirelessController,
    CameraController,
    ApplianceController,
    SwitchController,
    CellularGatewayController,
    SmController,
    // models of MerakiDashboardAPILib
    UpdateDevice,
    BlinkDeviceLeds,
    ObjectTypeEnum,
    GenerateDeviceCameraSnapshot,
    UpdateDeviceCameraQualityAndRetention,
    QualityEnum,
    ResolutionEnum,
    MotionDetectorVersionEnum,
    UpdateDeviceCameraSense,
    UpdateDeviceCameraVideoSettings,
    UpdateDeviceCellularGatewayLan,
    ReservedIpRange,
    FixedIpAssignment,
    UpdateDeviceCellularGatewayPortForwardingRules,
    Rule,
    UplinkEnum,
    UpdateDeviceManagementInterface,
    Wan1,
    WanEnabledEnum,
    Wan2,
    CycleDeviceSwitchPorts,
    UpdateDeviceSwitchPort,
    TypeEnum,
    StpGuardEnum,
    UdldEnum,
    AccessPolicyTypeEnum,
    CreateDeviceSwitchRoutingInterface,
    MulticastRoutingEnum,
    OspfSettings,
    UpdateDeviceSwitchRoutingInterface,
    MulticastRouting1Enum,
    OspfSettings1,
    UpdateDeviceSwitchRoutingInterfaceDhcp,
    DhcpModeEnum,
    DhcpLeaseTimeEnum,
    DnsNameserversOptionEnum,
    DhcpOption,
    Type1Enum,
    ReservedIpRange1,
    FixedIpAssignment1,
    CreateDeviceSwitchRoutingStaticRoute,
    UpdateDeviceSwitchRoutingStaticRoute,
    UpdateDeviceSwitchWarmSpare,
    UpdateDeviceWirelessBluetoothSettings,
    BandEnum,
    UpdateDeviceWirelessRadioSettings,
    TwoFourGhzSettings,
    ChannelEnum,
    FiveGhzSettings,
    Channel1Enum,
    ChannelWidthEnum,
    UpdateNetwork,
    UpdateNetworkAlertsSettings,
    DefaultDestinations,
    Alert,
    AlertDestinations,
    SortOrderEnum,
    UpdateNetworkApplianceConnectivityMonitoringDestinations,
    Destination,
    UpdateNetworkApplianceContentFiltering,
    UrlCategoryListSizeEnum,
    UpdateNetworkApplianceFirewallCellularFirewallRules,
    Rule1,
    PolicyEnum,
    ProtocolEnum,
    UpdateNetworkApplianceFirewallFirewalledService,
    AccessEnum,
    UpdateNetworkApplianceFirewallInboundFirewallRules,
    UpdateNetworkApplianceFirewallL3FirewallRules,
    UpdateNetworkApplianceFirewallL7FirewallRules,
    Rule4,
    Policy3Enum,
    Type2Enum,
    UpdateNetworkApplianceFirewallOneToManyNatRules,
    Rule5,
    Uplink1Enum,
    PortRule,
    Protocol3Enum,
    UpdateNetworkApplianceFirewallOneToOneNatRules,
    Rule6,
    AllowedInbound,
    Protocol4Enum,
    UpdateNetworkApplianceFirewallPortForwardingRules,
    Rule7,
    Uplink3Enum,
    Protocol5Enum,
    UpdateNetworkAppliancePort,
    UpdateNetworkApplianceSecurityIntrusion,
    ModeEnum,
    IdsRulesetsEnum,
    ProtectedNetworks,
    UpdateNetworkApplianceSecurityMalware,
    Mode1Enum,
    AllowedUrl,
    AllowedFile,
    UpdateNetworkApplianceSingleLan,
    CreateNetworkApplianceStaticRoute,
    UpdateNetworkApplianceStaticRoute,
    ReservedIpRange2,
    UpdateNetworkApplianceTrafficShaping,
    GlobalBandwidthLimits,
    CreateNetworkApplianceTrafficShapingCustomPerformanceClass,
    UpdateNetworkApplianceTrafficShapingCustomPerformanceClass,
    UpdateNetworkApplianceTrafficShapingRules,
    Rule8,
    Definition,
    Type3Enum,
    PerClientBandwidthLimits,
    BandwidthLimits,
    UpdateNetworkApplianceTrafficShapingUplinkBandwidth,
    BandwidthLimits1,
    Wan11,
    Wan21,
    Cellular,
    UpdateNetworkApplianceTrafficShapingUplinkSelection,
    DefaultUplinkEnum,
    WanTrafficUplinkPreference,
    TrafficFilter,
    Value,
    Protocol6Enum,
    Source,
    Destination1,
    PreferredUplinkEnum,
    VpnTrafficUplinkPreference,
    TrafficFilter1,
    Type4Enum,
    Value1,
    Protocol7Enum,
    Source1,
    Destination2,
    PreferredUplink1Enum,
    FailOverCriterionEnum,
    PerformanceClass,
    Type5Enum,
    BuiltinPerformanceClassNameEnum,
    CreateNetworkApplianceVlan,
    UpdateNetworkApplianceVlansSettings,
    UpdateNetworkApplianceVlan,
    DhcpHandlingEnum,
    DhcpLeaseTime1Enum,
    DhcpOption1,
    Type6Enum,
    UpdateNetworkApplianceVpnBgp,
    Neighbor,
    UpdateNetworkApplianceVpnSiteToSiteVpn,
    Mode2Enum,
    Hub,
    Subnet,
    UpdateNetworkApplianceWarmSpare,
    BindNetwork,
    CreateNetworkCameraQualityRetentionProfile,
    VideoSettings,
    MV21MV71,
    Quality1Enum,
    MV12MV22MV72,
    Resolution1Enum,
    MV32,
    Resolution2Enum,
    MV12WE,
    MV22XMV72X,
    Resolution4Enum,
    UpdateNetworkCameraQualityRetentionProfile,
    UpdateNetworkCellularGatewayConnectivityMonitoringDestinations,
    UpdateNetworkCellularGatewayDhcp,
    UpdateNetworkCellularGatewaySubnetPool,
    UpdateNetworkCellularGatewayUplink,
    BandwidthLimits2,
    SsidNumberEnum,
    ProvisionNetworkClients,
    Client,
    DevicePolicyEnum,
    PoliciesBySecurityAppliance,
    DevicePolicy1Enum,
    GeneratedObject,
    DevicePolicy2Enum,
    M10,
    UpdateNetworkClientPolicy,
    UpdateNetworkClientSplashAuthorizationStatus,
    GeneratedObject10,
    GeneratedObject11,
    GeneratedObject12,
    GeneratedObject13,
    GeneratedObject14,
    GeneratedObject15,
    GeneratedObject16,
    GeneratedObject17,
    GeneratedObject18,
    GeneratedObject19,
    M101,
    M111,
    M121,
    M131,
    M141,
    ClaimNetworkDevices,
    RemoveNetworkDevices,
    UpdateNetworkFirmwareUpgrades,
    UpgradeWindow,
    DayOfWeekEnum,
    HourOfDayEnum,
    Products,
    Wireless,
    NextUpgrade,
    ToVersion,
    Switch,
    Appliance,
    Camera,
    VmxHost,
    Environmental,
    CellularGateway,
    CreateNetworkFirmwareUpgradesRollback,
    ProductEnum,
    Reason,
    CategoryEnum,
    ToVersion7,
    CreateNetworkFloorPlan,
    Center,
    BottomLeftCorner,
    BottomRightCorner,
    TopLeftCorner,
    TopRightCorner,
    UpdateNetworkFloorPlan,
    Center1,
    CreateNetworkGroupPolicy,
    Scheduling,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
    Bandwidth,
    SettingsEnum,
    BandwidthLimits3,
    FirewallAndTrafficShaping,
    Settings1Enum,
    TrafficShapingRule,
    L3FirewallRule,
    L7FirewallRule,
    Policy4Enum,
    Type8Enum,
    ContentFiltering,
    AllowedUrlPatterns,
    Settings2Enum,
    BlockedUrlPatterns,
    BlockedUrlCategories,
    Settings4Enum,
    SplashAuthSettingsEnum,
    VlanTagging,
    Settings5Enum,
    BonjourForwarding,
    Settings6Enum,
    Rule9,
    ServiceEnum,
    UpdateNetworkGroupPolicy,
    CreateNetworkMerakiAuthUser,
    AccountTypeEnum,
    Authorization,
    UpdateNetworkMerakiAuthUser,
    Authorization1,
    CreateNetworkMqttBroker,
    UpdateNetworkMqttBroker,
    UpdateNetworkNetflow,
    CreateNetworkPiiRequest,
    Type11Enum,
    UpdateNetworkSettings,
    SecureConnect,
    CreateNetworkSmBypassActivationLockAttempt,
    CheckinNetworkSmDevices,
    UpdateNetworkSmDevicesFields,
    DeviceFields,
    LockNetworkSmDevices,
    ModifyNetworkSmDevicesTags,
    MoveNetworkSmDevices,
    WipeNetworkSmDevices,
    CreateNetworkSmTargetGroup,
    UpdateNetworkSmTargetGroup,
    UpdateNetworkSnmp,
    Access1Enum,
    User,
    UpdateNetworkSwitchAccessControlLists,
    Rule11,
    Policy6Enum,
    IpVersionEnum,
    Protocol8Enum,
    CreateNetworkSwitchAccessPolicy,
    RadiusServer,
    RadiusAccountingServer,
    HostModeEnum,
    AccessPolicyType1Enum,
    UpdateNetworkSwitchAccessPolicy,
    UpdateNetworkSwitchAlternateManagementInterface,
    Protocol9Enum,
    Switch1,
    UpdateNetworkSwitchDhcpServerPolicy,
    DefaultPolicyEnum,
    UpdateNetworkSwitchDscpToCosMappings,
    Mapping,
    CreateNetworkSwitchLinkAggregation,
    SwitchPort,
    SwitchProfilePort,
    UpdateNetworkSwitchLinkAggregation,
    UpdateNetworkSwitchMtu,
    Override,
    CreateNetworkSwitchPortSchedule,
    PortSchedule,
    UpdateNetworkSwitchPortSchedule,
    CreateNetworkSwitchQosRule,
    Protocol10Enum,
    UpdateNetworkSwitchQosRulesOrder,
    UpdateNetworkSwitchQosRule,
    Protocol11Enum,
    UpdateNetworkSwitchRoutingMulticast,
    DefaultSettings,
    Override1,
    CreateNetworkSwitchRoutingMulticastRendezvousPoint,
    UpdateNetworkSwitchRoutingMulticastRendezvousPoint,
    UpdateNetworkSwitchRoutingOspf,
    Area,
    AreaTypeEnum,
    Md5AuthenticationKey,
    UpdateNetworkSwitchSettings,
    PowerException,
    PowerTypeEnum,
    CreateNetworkSwitchStack,
    AddNetworkSwitchStack,
    RemoveNetworkSwitchStack,
    CreateNetworkSwitchStackRoutingInterface,
    UpdateNetworkSwitchStackRoutingInterface,
    UpdateNetworkSwitchStackRoutingInterfaceDhcp,
    DhcpMode1Enum,
    DhcpLeaseTime2Enum,
    DnsNameserversOption1Enum,
    CreateNetworkSwitchStackRoutingStaticRoute,
    UpdateNetworkSwitchStackRoutingStaticRoute,
    UpdateNetworkSwitchStormControl,
    UpdateNetworkSwitchStp,
    StpBridgePriority,
    UpdateNetworkSyslogServers,
    Server,
    DeviceTypeEnum,
    UpdateNetworkTrafficAnalysis,
    Mode3Enum,
    CustomPieChartItem,
    Type13Enum,
    CreateNetworkWebhooksHttpServer,
    UpdateNetworkWebhooksHttpServer,
    CreateNetworkWebhooksWebhookTest,
    UpdateNetworkWirelessAlternateManagementInterface,
    Protocol12Enum,
    AccessPoint,
    UpdateNetworkWirelessBilling,
    Plan,
    BandwidthLimits7,
    TimeLimitEnum,
    UpdateNetworkWirelessBluetoothSettings,
    MajorMinorAssignmentModeEnum,
    Type14Enum,
    IncludedSeverityEnum,
    AccessCategoryEnum,
    CreateNetworkWirelessRfProfile,
    MinBitrateTypeEnum,
    BandSelectionTypeEnum,
    ApBandSettings,
    BandOperationModeEnum,
    TwoFourGhzSettings1,
    FiveGhzSettings1,
    UpdateNetworkWirelessRfProfile,
    MinBitrateType1Enum,
    BandSelectionType1Enum,
    ApBandSettings1,
    BandOperationMode1Enum,
    TwoFourGhzSettings2,
    FiveGhzSettings2,
    UpdateNetworkWirelessSettings,
    UpgradeStrategyEnum,
    UpdateNetworkWirelessSsid,
    AuthModeEnum,
    EnterpriseAdminAccessEnum,
    EncryptionModeEnum,
    WpaEncryptionModeEnum,
    Dot11w,
    Dot11r,
    SplashPageEnum,
    Oauth,
    LocalRadius,
    PasswordAuthentication,
    CertificateAuthentication,
    ClientRootCaCertificate,
    Ldap,
    Server1,
    Credentials,
    ServerCaCertificate,
    ActiveDirectory,
    Server2,
    Credentials1,
    RadiusServer2,
    RadiusFailoverPolicyEnum,
    RadiusLoadBalancingPolicyEnum,
    RadiusAccountingServer2,
    RadiusAttributeForGroupPoliciesEnum,
    ApTagsAndVlanId,
    DnsRewrite,
    UpdateNetworkWirelessSsidBonjourForwarding,
    UpdateNetworkWirelessSsidDeviceTypeGroupPolicies,
    DeviceTypePolicy,
    DeviceType1Enum,
    DevicePolicy17Enum,
    UpdateNetworkWirelessSsidFirewallL3FirewallRules,
    Rule13,
    UpdateNetworkWirelessSsidFirewallL7FirewallRules,
    Rule14,
    Type15Enum,
    CreateNetworkWirelessSsidIdentityPsk,
    UpdateNetworkWirelessSsidIdentityPsk,
    UpdateNetworkWirelessSsidSplashSettings,
    SplashLogo,
    SplashImage,
    SplashPrepaidFront,
    ControllerDisconnectionBehaviorEnum,
    GuestSponsorship,
    Billing,
    FreeAccess,
    UpdateNetworkWirelessSsidTrafficShapingRules,
    Rule15,
    UpdateNetworkWirelessSsidVpn,
    SplitTunnel,
    Rule16,
    Protocol14Enum,
    CreateOrganization,
    UpdateOrganization,
    CreateOrganizationActionBatch,
    Action,
    StatusEnum,
    UpdateOrganizationActionBatch,
    CreateOrganizationAdmin,
    OrgAccessEnum,
    Tag,
    Access2Enum,
    Network,
    Access3Enum,
    AuthenticationMethodEnum,
    UpdateOrganizationAdmin,
    UpdateOrganizationApplianceSecurityIntrusion,
    AllowedRule,
    UpdateOrganizationApplianceVpnThirdPartyVPNPeers,
    Peer,
    IpsecPolicies,
    IkePrfAlgoEnum,
    IkeVersionEnum,
    UpdateOrganizationApplianceVpnVpnFirewallRules,
    Rule17,
    CreateOrganizationBrandingPolicy,
    AdminSettings,
    AppliesToEnum,
    HelpSettings,
    HelpTabEnum,
    GetHelpSubtabEnum,
    CommunitySubtabEnum,
    CasesSubtabEnum,
    DataProtectionRequestsSubtabEnum,
    UniversalSearchKnowledgeBaseSearchEnum,
    NewFeaturesSubtabEnum,
    FirewallInfoSubtabEnum,
    ApiDocsSubtabEnum,
    HardwareReplacementsSubtabEnum,
    SmForumsEnum,
    UpdateOrganizationBrandingPoliciesPriorities,
    UpdateOrganizationBrandingPolicy,
    HelpSettings1,
    ClaimIntoOrganization,
    License,
    Mode4Enum,
    CloneOrganization,
    CreateOrganizationConfigTemplate,
    UpdateOrganizationConfigTemplate,
    UpdateOrganizationConfigTemplateSwitchProfilePort,
    Type17Enum,
    AccessPolicyType3Enum,
    CreateOrganizationInsightMonitoredMediaServer,
    UpdateOrganizationInsightMonitoredMediaServer,
    UsedStateEnum,
    StateEnum,
    AssignOrganizationLicensesSeats,
    MoveOrganizationLicenses,
    MoveOrganizationLicensesSeats,
    RenewOrganizationLicensesSeats,
    UpdateOrganizationLicense,
    UpdateOrganizationLoginSecurity,
    TagsFilterTypeEnum,
    CreateOrganizationNetwork,
    ProductTypeEnum,
    CombineOrganizationNetworks,
    UpdateOrganizationSaml,
    CreateOrganizationSamlIdp,
    UpdateOrganizationSamlIdp,
    CreateOrganizationSamlRole,
    OrgAccess2Enum,
    Tag2,
    Access6Enum,
    Network2,
    Access7Enum,
    UpdateOrganizationSamlRole,
    UpdateOrganizationSnmp,
    V3AuthModeEnum,
    V3PrivModeEnum,
    CloneOrganizationSwitchDevices,
    // exceptions of MerakiDashboardAPILib
    APIException,
};

module.exports = initializer;
