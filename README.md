# Getting started

The Cisco Meraki Dashboard API is a modern REST API based on the OpenAPI specification.

> Date: 07 April, 2021
>
> [What's New](https://meraki.io/whats-new/)

---

[API Documentation](https://meraki.io/api)

[Community Support](https://meraki.io/community)

[Meraki Homepage](https://www.meraki.com)


## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Meraki%20Dashboard%20API-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=Meraki%20Dashboard%20API-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `MerakiDashboardAPILib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=Meraki%20Dashboard%20API-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=Meraki%20Dashboard%20API-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=Meraki%20Dashboard%20API-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=Meraki%20Dashboard%20API-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  Meraki Dashboard APIController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=Meraki%20Dashboard%20APIController)

## Initialization

### Authentication
In order to setup authentication in the API client, you need the following information.

| Parameter | Description |
|-----------|-------------|
| xCiscoMerakiAPIKey | TODO: add a description |



API client can be initialized as following:

```JavaScript
const lib = require('lib');

// Configuration parameters and credentials
lib.Configuration.xCiscoMerakiAPIKey = "xCiscoMerakiAPIKey";

```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [OrganizationsController](#organizations_controller)
* [NetworksController](#networks_controller)
* [DevicesController](#devices_controller)
* [InsightController](#insight_controller)
* [WirelessController](#wireless_controller)
* [CameraController](#camera_controller)
* [ApplianceController](#appliance_controller)
* [SwitchController](#switch_controller)
* [CellularGatewayController](#cellular_gateway_controller)
* [SmController](#sm_controller)

## <a name="organizations_controller"></a>![Class: ](https://apidocs.io/img/class.png ".OrganizationsController") OrganizationsController

### Get singleton instance

The singleton instance of the ``` OrganizationsController ``` class can be accessed from the API Client.

```javascript
var controller = lib.OrganizationsController;
```

### <a name="get_organizations"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizations") getOrganizations

> List the organizations that the user has privileges on


```javascript
function getOrganizations(callback)
```

#### Example Usage

```javascript


    controller.getOrganizations(function(error, response, context) {

    
    });
```



### <a name="create_organization"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.createOrganization") createOrganization

> Create a new organization


```javascript
function createOrganization(createOrganization, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| createOrganization |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var createOrganization = new CreateOrganization({"key":"value"});

    controller.createOrganization(createOrganization, function(error, response, context) {

    
    });
```



### <a name="get_organization"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganization") getOrganization

> Return an organization


```javascript
function getOrganization(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.getOrganization(organizationId, function(error, response, context) {

    
    });
```



### <a name="update_organization"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.updateOrganization") updateOrganization

> Update an organization


```javascript
function updateOrganization(organizationId, updateOrganization, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| updateOrganization |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var updateOrganization = new UpdateOrganization({"key":"value"});

    controller.updateOrganization(organizationId, updateOrganization, function(error, response, context) {

    
    });
```



### <a name="delete_organization"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.deleteOrganization") deleteOrganization

> Delete an organization


```javascript
function deleteOrganization(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.deleteOrganization(organizationId, function(error, response, context) {

    
    });
```



### <a name="create_organization_action_batch"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.createOrganizationActionBatch") createOrganizationActionBatch

> Create an action batch


```javascript
function createOrganizationActionBatch(organizationId, createOrganizationActionBatch, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| createOrganizationActionBatch |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var createOrganizationActionBatch = new CreateOrganizationActionBatch({"key":"value"});

    controller.createOrganizationActionBatch(organizationId, createOrganizationActionBatch, function(error, response, context) {

    
    });
```



### <a name="get_organization_action_batches"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationActionBatches") getOrganizationActionBatches

> Return the list of action batches in the organization


```javascript
function getOrganizationActionBatches(organizationId, status, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| status |  ``` Optional ```  | Filter batches by status. Valid types are pending, completed, and failed. |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var status = Object.keys(status)[0];

    controller.getOrganizationActionBatches(organizationId, status, function(error, response, context) {

    
    });
```



### <a name="get_organization_action_batch"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationActionBatch") getOrganizationActionBatch

> Return an action batch


```javascript
function getOrganizationActionBatch(organizationId, actionBatchId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| actionBatchId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var actionBatchId = 'actionBatchId';

    controller.getOrganizationActionBatch(organizationId, actionBatchId, function(error, response, context) {

    
    });
```



### <a name="delete_organization_action_batch"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.deleteOrganizationActionBatch") deleteOrganizationActionBatch

> Delete an action batch


```javascript
function deleteOrganizationActionBatch(organizationId, actionBatchId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| actionBatchId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var actionBatchId = 'actionBatchId';

    controller.deleteOrganizationActionBatch(organizationId, actionBatchId, function(error, response, context) {

    
    });
```



### <a name="update_organization_action_batch"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.updateOrganizationActionBatch") updateOrganizationActionBatch

> Update an action batch


```javascript
function updateOrganizationActionBatch(organizationId, actionBatchId, updateOrganizationActionBatch, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| actionBatchId |  ``` Required ```  | TODO: Add a parameter description |
| updateOrganizationActionBatch |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var actionBatchId = 'actionBatchId';
    var updateOrganizationActionBatch = new UpdateOrganizationActionBatch({"key":"value"});

    controller.updateOrganizationActionBatch(organizationId, actionBatchId, updateOrganizationActionBatch, function(error, response, context) {

    
    });
```



### <a name="get_organization_admins"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationAdmins") getOrganizationAdmins

> List the dashboard administrators in this organization


```javascript
function getOrganizationAdmins(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.getOrganizationAdmins(organizationId, function(error, response, context) {

    
    });
```



### <a name="create_organization_admin"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.createOrganizationAdmin") createOrganizationAdmin

> Create a new dashboard administrator


```javascript
function createOrganizationAdmin(organizationId, createOrganizationAdmin, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| createOrganizationAdmin |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var createOrganizationAdmin = new CreateOrganizationAdmin({"key":"value"});

    controller.createOrganizationAdmin(organizationId, createOrganizationAdmin, function(error, response, context) {

    
    });
```



### <a name="update_organization_admin"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.updateOrganizationAdmin") updateOrganizationAdmin

> Update an administrator


```javascript
function updateOrganizationAdmin(organizationId, adminId, updateOrganizationAdmin, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| adminId |  ``` Required ```  | TODO: Add a parameter description |
| updateOrganizationAdmin |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var adminId = 'adminId';
    var updateOrganizationAdmin = new UpdateOrganizationAdmin({"key":"value"});

    controller.updateOrganizationAdmin(organizationId, adminId, updateOrganizationAdmin, function(error, response, context) {

    
    });
```



### <a name="delete_organization_admin"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.deleteOrganizationAdmin") deleteOrganizationAdmin

> Revoke all access for a dashboard administrator within this organization


```javascript
function deleteOrganizationAdmin(organizationId, adminId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| adminId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var adminId = 'adminId';

    controller.deleteOrganizationAdmin(organizationId, adminId, function(error, response, context) {

    
    });
```



### <a name="get_organization_api_requests"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationApiRequests") getOrganizationApiRequests

> List the API requests made by an organization


```javascript
function getOrganizationApiRequests(organizationId, t0, t1, timespan, perPage, startingAfter, endingBefore, adminId, path, method, responseCode, sourceIp, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days. |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| adminId |  ``` Optional ```  | Filter the results by the ID of the admin who made the API requests |
| path |  ``` Optional ```  | Filter the results by the path of the API requests |
| method |  ``` Optional ```  | Filter the results by the method of the API requests (must be 'GET', 'PUT', 'POST' or 'DELETE') |
| responseCode |  ``` Optional ```  | Filter the results by the response code of the API requests |
| sourceIp |  ``` Optional ```  | Filter the results by the IP address of the originating API request |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 70.0068599544498;
    var perPage = 70;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';
    var adminId = 'adminId';
    var path = 'path';
    var method = 'method';
    var responseCode = 70;
    var sourceIp = 'sourceIp';

    controller.getOrganizationApiRequests(organizationId, t0, t1, timespan, perPage, startingAfter, endingBefore, adminId, path, method, responseCode, sourceIp, function(error, response, context) {

    
    });
```



### <a name="get_organization_api_requests_overview"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationApiRequestsOverview") getOrganizationApiRequestsOverview

> Return an aggregated overview of API requests data


```javascript
function getOrganizationApiRequestsOverview(organizationId, t0, t1, timespan, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 31 days. |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 70.0068599544498;

    controller.getOrganizationApiRequestsOverview(organizationId, t0, t1, timespan, function(error, response, context) {

    
    });
```



### <a name="get_organization_branding_policies"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationBrandingPolicies") getOrganizationBrandingPolicies

> List the branding policies of an organization


```javascript
function getOrganizationBrandingPolicies(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.getOrganizationBrandingPolicies(organizationId, function(error, response, context) {

    
    });
```



### <a name="create_organization_branding_policy"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.createOrganizationBrandingPolicy") createOrganizationBrandingPolicy

> Add a new branding policy to an organization


```javascript
function createOrganizationBrandingPolicy(organizationId, createOrganizationBrandingPolicy, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| createOrganizationBrandingPolicy |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var createOrganizationBrandingPolicy = new CreateOrganizationBrandingPolicy({"key":"value"});

    controller.createOrganizationBrandingPolicy(organizationId, createOrganizationBrandingPolicy, function(error, response, context) {

    
    });
```



### <a name="get_organization_branding_policies_priorities"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationBrandingPoliciesPriorities") getOrganizationBrandingPoliciesPriorities

> Return the branding policy IDs of an organization in priority order. IDs are ordered in ascending order of priority (IDs later in the array have higher priority).


```javascript
function getOrganizationBrandingPoliciesPriorities(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.getOrganizationBrandingPoliciesPriorities(organizationId, function(error, response, context) {

    
    });
```



### <a name="update_organization_branding_policies_priorities"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.updateOrganizationBrandingPoliciesPriorities") updateOrganizationBrandingPoliciesPriorities

> Update the priority ordering of an organization's branding policies.


```javascript
function updateOrganizationBrandingPoliciesPriorities(organizationId, updateOrganizationBrandingPoliciesPriorities, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| updateOrganizationBrandingPoliciesPriorities |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var updateOrganizationBrandingPoliciesPriorities = new UpdateOrganizationBrandingPoliciesPriorities({"key":"value"});

    controller.updateOrganizationBrandingPoliciesPriorities(organizationId, updateOrganizationBrandingPoliciesPriorities, function(error, response, context) {

    
    });
```



### <a name="get_organization_branding_policy"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationBrandingPolicy") getOrganizationBrandingPolicy

> Return a branding policy


```javascript
function getOrganizationBrandingPolicy(organizationId, brandingPolicyId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| brandingPolicyId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var brandingPolicyId = 'brandingPolicyId';

    controller.getOrganizationBrandingPolicy(organizationId, brandingPolicyId, function(error, response, context) {

    
    });
```



### <a name="update_organization_branding_policy"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.updateOrganizationBrandingPolicy") updateOrganizationBrandingPolicy

> Update a branding policy


```javascript
function updateOrganizationBrandingPolicy(organizationId, brandingPolicyId, updateOrganizationBrandingPolicy, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| brandingPolicyId |  ``` Required ```  | TODO: Add a parameter description |
| updateOrganizationBrandingPolicy |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var brandingPolicyId = 'brandingPolicyId';
    var updateOrganizationBrandingPolicy = new UpdateOrganizationBrandingPolicy({"key":"value"});

    controller.updateOrganizationBrandingPolicy(organizationId, brandingPolicyId, updateOrganizationBrandingPolicy, function(error, response, context) {

    
    });
```



### <a name="delete_organization_branding_policy"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.deleteOrganizationBrandingPolicy") deleteOrganizationBrandingPolicy

> Delete a branding policy


```javascript
function deleteOrganizationBrandingPolicy(organizationId, brandingPolicyId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| brandingPolicyId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var brandingPolicyId = 'brandingPolicyId';

    controller.deleteOrganizationBrandingPolicy(organizationId, brandingPolicyId, function(error, response, context) {

    
    });
```



### <a name="claim_into_organization"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.claimIntoOrganization") claimIntoOrganization

> Claim a list of devices, licenses, and/or orders into an organization. When claiming by order, all devices and licenses in the order will be claimed; licenses will be added to the organization and devices will be placed in the organization's inventory.


```javascript
function claimIntoOrganization(organizationId, claimIntoOrganization, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| claimIntoOrganization |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var claimIntoOrganization = new ClaimIntoOrganization({"key":"value"});

    controller.claimIntoOrganization(organizationId, claimIntoOrganization, function(error, response, context) {

    
    });
```



### <a name="clone_organization"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.cloneOrganization") cloneOrganization

> Create a new organization by cloning the addressed organization


```javascript
function cloneOrganization(organizationId, cloneOrganization, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| cloneOrganization |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var cloneOrganization = new CloneOrganization({"key":"value"});

    controller.cloneOrganization(organizationId, cloneOrganization, function(error, response, context) {

    
    });
```



### <a name="get_organization_config_templates"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationConfigTemplates") getOrganizationConfigTemplates

> List the configuration templates for this organization


```javascript
function getOrganizationConfigTemplates(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.getOrganizationConfigTemplates(organizationId, function(error, response, context) {

    
    });
```



### <a name="create_organization_config_template"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.createOrganizationConfigTemplate") createOrganizationConfigTemplate

> Create a new configuration template


```javascript
function createOrganizationConfigTemplate(organizationId, createOrganizationConfigTemplate, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| createOrganizationConfigTemplate |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var createOrganizationConfigTemplate = new CreateOrganizationConfigTemplate({"key":"value"});

    controller.createOrganizationConfigTemplate(organizationId, createOrganizationConfigTemplate, function(error, response, context) {

    
    });
```



### <a name="update_organization_config_template"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.updateOrganizationConfigTemplate") updateOrganizationConfigTemplate

> Update a configuration template


```javascript
function updateOrganizationConfigTemplate(organizationId, configTemplateId, updateOrganizationConfigTemplate, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| configTemplateId |  ``` Required ```  | TODO: Add a parameter description |
| updateOrganizationConfigTemplate |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var configTemplateId = 'configTemplateId';
    var updateOrganizationConfigTemplate = new UpdateOrganizationConfigTemplate({"key":"value"});

    controller.updateOrganizationConfigTemplate(organizationId, configTemplateId, updateOrganizationConfigTemplate, function(error, response, context) {

    
    });
```



### <a name="delete_organization_config_template"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.deleteOrganizationConfigTemplate") deleteOrganizationConfigTemplate

> Remove a configuration template


```javascript
function deleteOrganizationConfigTemplate(organizationId, configTemplateId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| configTemplateId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var configTemplateId = 'configTemplateId';

    controller.deleteOrganizationConfigTemplate(organizationId, configTemplateId, function(error, response, context) {

    
    });
```



### <a name="get_organization_config_template"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationConfigTemplate") getOrganizationConfigTemplate

> Return a single configuration template


```javascript
function getOrganizationConfigTemplate(organizationId, configTemplateId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| configTemplateId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var configTemplateId = 'configTemplateId';

    controller.getOrganizationConfigTemplate(organizationId, configTemplateId, function(error, response, context) {

    
    });
```



### <a name="get_organization_configuration_changes"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationConfigurationChanges") getOrganizationConfigurationChanges

> View the Change Log for your organization


```javascript
function getOrganizationConfigurationChanges(organizationId, t0, t1, timespan, perPage, startingAfter, endingBefore, networkId, adminId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 365 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 365 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 365 days. |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 5000. Default is 5000. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| networkId |  ``` Optional ```  | Filters on the given network |
| adminId |  ``` Optional ```  | Filters on the given Admin |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 70.0068599544498;
    var perPage = 70;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';
    var networkId = 'networkId';
    var adminId = 'adminId';

    controller.getOrganizationConfigurationChanges(organizationId, t0, t1, timespan, perPage, startingAfter, endingBefore, networkId, adminId, function(error, response, context) {

    
    });
```



### <a name="get_organization_devices"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationDevices") getOrganizationDevices

> List the devices in an organization


```javascript
function getOrganizationDevices(organizationId, perPage, startingAfter, endingBefore, configurationUpdatedAfter, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| configurationUpdatedAfter |  ``` Optional ```  | Filter results by whether or not the device's configuration has been updated after the given timestamp |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var perPage = 70;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';
    var configurationUpdatedAfter = 'configurationUpdatedAfter';

    controller.getOrganizationDevices(organizationId, perPage, startingAfter, endingBefore, configurationUpdatedAfter, function(error, response, context) {

    
    });
```



### <a name="get_organization_devices_statuses"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationDevicesStatuses") getOrganizationDevicesStatuses

> List the status of every Meraki device in the organization


```javascript
function getOrganizationDevicesStatuses(organizationId, perPage, startingAfter, endingBefore, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var perPage = 70;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';

    controller.getOrganizationDevicesStatuses(organizationId, perPage, startingAfter, endingBefore, function(error, response, context) {

    
    });
```



### <a name="get_organization_devices_uplinks_loss_and_latency"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationDevicesUplinksLossAndLatency") getOrganizationDevicesUplinksLossAndLatency

> Return the uplink loss and latency for every MX in the organization from at latest 2 minutes ago


```javascript
function getOrganizationDevicesUplinksLossAndLatency(organizationId, t0, t1, timespan, uplink, ip, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 365 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 5 minutes after t0. The latest possible time that t1 can be is 2 minutes into the past. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 5 minutes. The default is 5 minutes. |
| uplink |  ``` Optional ```  | Optional filter for a specific WAN uplink. Valid uplinks are wan1, wan2, cellular. Default will return all uplinks. |
| ip |  ``` Optional ```  | Optional filter for a specific destination IP. Default will return all destination IPs. |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 70.0068599544498;
    var uplink = Object.keys(uplink)[0];
    var ip = 'ip';

    controller.getOrganizationDevicesUplinksLossAndLatency(organizationId, t0, t1, timespan, uplink, ip, function(error, response, context) {

    
    });
```



### <a name="get_organization_inventory_devices"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationInventoryDevices") getOrganizationInventoryDevices

> Return the device inventory for an organization


```javascript
function getOrganizationInventoryDevices(organizationId, perPage, startingAfter, endingBefore, usedState, search, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| usedState |  ``` Optional ```  | Filter results by used or unused inventory. Accepted values are "used" or "unused". |
| search |  ``` Optional ```  | Search for devices in inventory based on serial number, mac address, or model. |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var perPage = 70;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';
    var usedState = Object.keys(usedState)[0];
    var search = 'search';

    controller.getOrganizationInventoryDevices(organizationId, perPage, startingAfter, endingBefore, usedState, search, function(error, response, context) {

    
    });
```



### <a name="get_organization_inventory_device"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationInventoryDevice") getOrganizationInventoryDevice

> Return a single device from the inventory of an organization


```javascript
function getOrganizationInventoryDevice(organizationId, serial, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var serial = 'serial';

    controller.getOrganizationInventoryDevice(organizationId, serial, function(error, response, context) {

    
    });
```



### <a name="get_organization_licenses"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationLicenses") getOrganizationLicenses

> List the licenses for an organization


```javascript
function getOrganizationLicenses(organizationId, perPage, startingAfter, endingBefore, deviceSerial, networkId, state, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| deviceSerial |  ``` Optional ```  | Filter the licenses to those assigned to a particular device |
| networkId |  ``` Optional ```  | Filter the licenses to those assigned in a particular network |
| state |  ``` Optional ```  | Filter the licenses to those in a particular state. Can be one of 'active', 'expired', 'expiring', 'unused', 'unusedActive' or 'recentlyQueued' |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var perPage = 70;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';
    var deviceSerial = 'deviceSerial';
    var networkId = 'networkId';
    var state = Object.keys(state)[0];

    controller.getOrganizationLicenses(organizationId, perPage, startingAfter, endingBefore, deviceSerial, networkId, state, function(error, response, context) {

    
    });
```



### <a name="assign_organization_licenses_seats"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.assignOrganizationLicensesSeats") assignOrganizationLicensesSeats

> Assign SM seats to a network. This will increase the managed SM device limit of the network


```javascript
function assignOrganizationLicensesSeats(organizationId, assignOrganizationLicensesSeats, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| assignOrganizationLicensesSeats |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var assignOrganizationLicensesSeats = new AssignOrganizationLicensesSeats({"key":"value"});

    controller.assignOrganizationLicensesSeats(organizationId, assignOrganizationLicensesSeats, function(error, response, context) {

    
    });
```



### <a name="move_organization_licenses"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.moveOrganizationLicenses") moveOrganizationLicenses

> Move licenses to another organization. This will also move any devices that the licenses are assigned to


```javascript
function moveOrganizationLicenses(organizationId, moveOrganizationLicenses, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| moveOrganizationLicenses |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var moveOrganizationLicenses = new MoveOrganizationLicenses({"key":"value"});

    controller.moveOrganizationLicenses(organizationId, moveOrganizationLicenses, function(error, response, context) {

    
    });
```



### <a name="move_organization_licenses_seats"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.moveOrganizationLicensesSeats") moveOrganizationLicensesSeats

> Move SM seats to another organization


```javascript
function moveOrganizationLicensesSeats(organizationId, moveOrganizationLicensesSeats, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| moveOrganizationLicensesSeats |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var moveOrganizationLicensesSeats = new MoveOrganizationLicensesSeats({"key":"value"});

    controller.moveOrganizationLicensesSeats(organizationId, moveOrganizationLicensesSeats, function(error, response, context) {

    
    });
```



### <a name="get_organization_licenses_overview"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationLicensesOverview") getOrganizationLicensesOverview

> Return an overview of the license state for an organization


```javascript
function getOrganizationLicensesOverview(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.getOrganizationLicensesOverview(organizationId, function(error, response, context) {

    
    });
```



### <a name="renew_organization_licenses_seats"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.renewOrganizationLicensesSeats") renewOrganizationLicensesSeats

> Renew SM seats of a license. This will extend the license expiration date of managed SM devices covered by this license


```javascript
function renewOrganizationLicensesSeats(organizationId, renewOrganizationLicensesSeats, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| renewOrganizationLicensesSeats |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var renewOrganizationLicensesSeats = new RenewOrganizationLicensesSeats({"key":"value"});

    controller.renewOrganizationLicensesSeats(organizationId, renewOrganizationLicensesSeats, function(error, response, context) {

    
    });
```



### <a name="get_organization_license"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationLicense") getOrganizationLicense

> Display a license


```javascript
function getOrganizationLicense(organizationId, licenseId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| licenseId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var licenseId = 'licenseId';

    controller.getOrganizationLicense(organizationId, licenseId, function(error, response, context) {

    
    });
```



### <a name="update_organization_license"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.updateOrganizationLicense") updateOrganizationLicense

> Update a license


```javascript
function updateOrganizationLicense(organizationId, licenseId, updateOrganizationLicense, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| licenseId |  ``` Required ```  | TODO: Add a parameter description |
| updateOrganizationLicense |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var licenseId = 'licenseId';
    var updateOrganizationLicense = new UpdateOrganizationLicense({"key":"value"});

    controller.updateOrganizationLicense(organizationId, licenseId, updateOrganizationLicense, function(error, response, context) {

    
    });
```



### <a name="get_organization_login_security"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationLoginSecurity") getOrganizationLoginSecurity

> Returns the login security settings for an organization.


```javascript
function getOrganizationLoginSecurity(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.getOrganizationLoginSecurity(organizationId, function(error, response, context) {

    
    });
```



### <a name="update_organization_login_security"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.updateOrganizationLoginSecurity") updateOrganizationLoginSecurity

> Update the login security settings for an organization


```javascript
function updateOrganizationLoginSecurity(organizationId, updateOrganizationLoginSecurity, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| updateOrganizationLoginSecurity |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var updateOrganizationLoginSecurity = new UpdateOrganizationLoginSecurity({"key":"value"});

    controller.updateOrganizationLoginSecurity(organizationId, updateOrganizationLoginSecurity, function(error, response, context) {

    
    });
```



### <a name="get_organization_networks"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationNetworks") getOrganizationNetworks

> List the networks that the user has privileges on in an organization


```javascript
function getOrganizationNetworks(organizationId, configTemplateId, tags, tagsFilterType, perPage, startingAfter, endingBefore, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| configTemplateId |  ``` Optional ```  | An optional parameter that is the ID of a config template. Will return all networks bound to that template. |
| tags |  ``` Optional ```  ``` Collection ```  | An optional parameter to filter networks by tags. The filtering is case-sensitive. If tags are included, 'tagsFilterType' should also be included (see below). |
| tagsFilterType |  ``` Optional ```  | An optional parameter of value 'withAnyTags' or 'withAllTags' to indicate whether to return networks which contain ANY or ALL of the included tags. If no type is included, 'withAnyTags' will be selected. |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 100000. Default is 1000. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var configTemplateId = 'configTemplateId';
    var tags = ['tags'];
    var tagsFilterType = Object.keys(tagsFilterType)[0];
    var perPage = 70;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';

    controller.getOrganizationNetworks(organizationId, configTemplateId, tags, tagsFilterType, perPage, startingAfter, endingBefore, function(error, response, context) {

    
    });
```



### <a name="create_organization_network"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.createOrganizationNetwork") createOrganizationNetwork

> Create a network


```javascript
function createOrganizationNetwork(organizationId, createOrganizationNetwork, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| createOrganizationNetwork |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var createOrganizationNetwork = new CreateOrganizationNetwork({"key":"value"});

    controller.createOrganizationNetwork(organizationId, createOrganizationNetwork, function(error, response, context) {

    
    });
```



### <a name="combine_organization_networks"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.combineOrganizationNetworks") combineOrganizationNetworks

> Combine multiple networks into a single network


```javascript
function combineOrganizationNetworks(organizationId, combineOrganizationNetworks, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| combineOrganizationNetworks |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var combineOrganizationNetworks = new CombineOrganizationNetworks({"key":"value"});

    controller.combineOrganizationNetworks(organizationId, combineOrganizationNetworks, function(error, response, context) {

    
    });
```



### <a name="get_organization_openapi_spec"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationOpenapiSpec") getOrganizationOpenapiSpec

> Return the OpenAPI 2.0 Specification of the organization's API documentation in JSON


```javascript
function getOrganizationOpenapiSpec(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.getOrganizationOpenapiSpec(organizationId, function(error, response, context) {

    
    });
```



### <a name="get_organization_saml"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationSaml") getOrganizationSaml

> Returns the SAML SSO enabled settings for an organization.


```javascript
function getOrganizationSaml(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.getOrganizationSaml(organizationId, function(error, response, context) {

    
    });
```



### <a name="update_organization_saml"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.updateOrganizationSaml") updateOrganizationSaml

> Updates the SAML SSO enabled settings for an organization.


```javascript
function updateOrganizationSaml(organizationId, updateOrganizationSaml, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| updateOrganizationSaml |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var updateOrganizationSaml = new UpdateOrganizationSaml({"key":"value"});

    controller.updateOrganizationSaml(organizationId, updateOrganizationSaml, function(error, response, context) {

    
    });
```



### <a name="get_organization_saml_idps"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationSamlIdps") getOrganizationSamlIdps

> List the SAML IdPs in your organization.


```javascript
function getOrganizationSamlIdps(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.getOrganizationSamlIdps(organizationId, function(error, response, context) {

    
    });
```



### <a name="create_organization_saml_idp"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.createOrganizationSamlIdp") createOrganizationSamlIdp

> Create a SAML IdP for your organization.


```javascript
function createOrganizationSamlIdp(organizationId, createOrganizationSamlIdp, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| createOrganizationSamlIdp |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var createOrganizationSamlIdp = new CreateOrganizationSamlIdp({"key":"value"});

    controller.createOrganizationSamlIdp(organizationId, createOrganizationSamlIdp, function(error, response, context) {

    
    });
```



### <a name="update_organization_saml_idp"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.updateOrganizationSamlIdp") updateOrganizationSamlIdp

> Update a SAML IdP in your organization


```javascript
function updateOrganizationSamlIdp(organizationId, idpId, updateOrganizationSamlIdp, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| idpId |  ``` Required ```  | TODO: Add a parameter description |
| updateOrganizationSamlIdp |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var idpId = 'idpId';
    var updateOrganizationSamlIdp = new UpdateOrganizationSamlIdp({"key":"value"});

    controller.updateOrganizationSamlIdp(organizationId, idpId, updateOrganizationSamlIdp, function(error, response, context) {

    
    });
```



### <a name="get_organization_saml_idp"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationSamlIdp") getOrganizationSamlIdp

> Get a SAML IdP from your organization.


```javascript
function getOrganizationSamlIdp(organizationId, idpId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| idpId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var idpId = 'idpId';

    controller.getOrganizationSamlIdp(organizationId, idpId, function(error, response, context) {

    
    });
```



### <a name="delete_organization_saml_idp"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.deleteOrganizationSamlIdp") deleteOrganizationSamlIdp

> Remove a SAML IdP in your organization.


```javascript
function deleteOrganizationSamlIdp(organizationId, idpId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| idpId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var idpId = 'idpId';

    controller.deleteOrganizationSamlIdp(organizationId, idpId, function(error, response, context) {

    
    });
```



### <a name="get_organization_saml_roles"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationSamlRoles") getOrganizationSamlRoles

> List the SAML roles for this organization


```javascript
function getOrganizationSamlRoles(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.getOrganizationSamlRoles(organizationId, function(error, response, context) {

    
    });
```



### <a name="create_organization_saml_role"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.createOrganizationSamlRole") createOrganizationSamlRole

> Create a SAML role


```javascript
function createOrganizationSamlRole(organizationId, createOrganizationSamlRole, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| createOrganizationSamlRole |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var createOrganizationSamlRole = new CreateOrganizationSamlRole({"key":"value"});

    controller.createOrganizationSamlRole(organizationId, createOrganizationSamlRole, function(error, response, context) {

    
    });
```



### <a name="get_organization_saml_role"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationSamlRole") getOrganizationSamlRole

> Return a SAML role


```javascript
function getOrganizationSamlRole(organizationId, samlRoleId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| samlRoleId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var samlRoleId = 'samlRoleId';

    controller.getOrganizationSamlRole(organizationId, samlRoleId, function(error, response, context) {

    
    });
```



### <a name="update_organization_saml_role"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.updateOrganizationSamlRole") updateOrganizationSamlRole

> Update a SAML role


```javascript
function updateOrganizationSamlRole(organizationId, samlRoleId, updateOrganizationSamlRole, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| samlRoleId |  ``` Required ```  | TODO: Add a parameter description |
| updateOrganizationSamlRole |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var samlRoleId = 'samlRoleId';
    var updateOrganizationSamlRole = new UpdateOrganizationSamlRole({"key":"value"});

    controller.updateOrganizationSamlRole(organizationId, samlRoleId, updateOrganizationSamlRole, function(error, response, context) {

    
    });
```



### <a name="delete_organization_saml_role"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.deleteOrganizationSamlRole") deleteOrganizationSamlRole

> Remove a SAML role


```javascript
function deleteOrganizationSamlRole(organizationId, samlRoleId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| samlRoleId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var samlRoleId = 'samlRoleId';

    controller.deleteOrganizationSamlRole(organizationId, samlRoleId, function(error, response, context) {

    
    });
```



### <a name="get_organization_snmp"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationSnmp") getOrganizationSnmp

> Return the SNMP settings for an organization


```javascript
function getOrganizationSnmp(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.getOrganizationSnmp(organizationId, function(error, response, context) {

    
    });
```



### <a name="update_organization_snmp"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.updateOrganizationSnmp") updateOrganizationSnmp

> Update the SNMP settings for an organization


```javascript
function updateOrganizationSnmp(organizationId, updateOrganizationSnmp, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| updateOrganizationSnmp |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var updateOrganizationSnmp = new UpdateOrganizationSnmp({"key":"value"});

    controller.updateOrganizationSnmp(organizationId, updateOrganizationSnmp, function(error, response, context) {

    
    });
```



### <a name="get_organization_uplinks_statuses"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationUplinksStatuses") getOrganizationUplinksStatuses

> List the uplink status of every Meraki MX, MG and Z series devices in the organization


```javascript
function getOrganizationUplinksStatuses(organizationId, perPage, startingAfter, endingBefore, networkIds, serials, iccids, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| networkIds |  ``` Optional ```  ``` Collection ```  | A list of network IDs. The returned devices will be filtered to only include these networks. |
| serials |  ``` Optional ```  ``` Collection ```  | A list of serial numbers. The returned devices will be filtered to only include these serials. |
| iccids |  ``` Optional ```  ``` Collection ```  | A list of ICCIDs. The returned devices will be filtered to only include these ICCIDs. |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var perPage = 70;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';
    var networkIds = ['networkIds'];
    var serials = ['serials'];
    var iccids = ['iccids'];

    controller.getOrganizationUplinksStatuses(organizationId, perPage, startingAfter, endingBefore, networkIds, serials, iccids, function(error, response, context) {

    
    });
```



### <a name="get_organization_webhooks_alert_types"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationWebhooksAlertTypes") getOrganizationWebhooksAlertTypes

> Return a list of alert types to be used with managing webhook alerts


```javascript
function getOrganizationWebhooksAlertTypes(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.getOrganizationWebhooksAlertTypes(organizationId, function(error, response, context) {

    
    });
```



### <a name="get_organization_webhooks_logs"></a>![Method: ](https://apidocs.io/img/method.png ".OrganizationsController.getOrganizationWebhooksLogs") getOrganizationWebhooksLogs

> Return the log of webhook POSTs sent


```javascript
function getOrganizationWebhooksLogs(organizationId, t0, t1, timespan, perPage, startingAfter, endingBefore, url, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 90 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 50. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| url |  ``` Optional ```  | The URL the webhook was sent to |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 70.0068599544498;
    var perPage = 70;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';
    var url = 'url';

    controller.getOrganizationWebhooksLogs(organizationId, t0, t1, timespan, perPage, startingAfter, endingBefore, url, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="networks_controller"></a>![Class: ](https://apidocs.io/img/class.png ".NetworksController") NetworksController

### Get singleton instance

The singleton instance of the ``` NetworksController ``` class can be accessed from the API Client.

```javascript
var controller = lib.NetworksController;
```

### <a name="get_network"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetwork") getNetwork

> Return a network


```javascript
function getNetwork(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetwork(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.updateNetwork") updateNetwork

> Update a network


```javascript
function updateNetwork(networkId, updateNetwork, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetwork |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetwork = new UpdateNetwork({"key":"value"});

    controller.updateNetwork(networkId, updateNetwork, function(error, response, context) {

    
    });
```



### <a name="delete_network"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.deleteNetwork") deleteNetwork

> Delete a network


```javascript
function deleteNetwork(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.deleteNetwork(networkId, function(error, response, context) {

    
    });
```



### <a name="get_network_alerts_settings"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkAlertsSettings") getNetworkAlertsSettings

> Return the alert configuration for this network


```javascript
function getNetworkAlertsSettings(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkAlertsSettings(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_alerts_settings"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.updateNetworkAlertsSettings") updateNetworkAlertsSettings

> Update the alert configuration for this network


```javascript
function updateNetworkAlertsSettings(networkId, updateNetworkAlertsSettings, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkAlertsSettings |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkAlertsSettings = new UpdateNetworkAlertsSettings({"key":"value"});

    controller.updateNetworkAlertsSettings(networkId, updateNetworkAlertsSettings, function(error, response, context) {

    
    });
```



### <a name="bind_network"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.bindNetwork") bindNetwork

> Bind a network to a template.


```javascript
function bindNetwork(networkId, bindNetwork, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| bindNetwork |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var bindNetwork = new BindNetwork({"key":"value"});

    controller.bindNetwork(networkId, bindNetwork, function(error, response, context) {

    
    });
```



### <a name="get_network_bluetooth_clients"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkBluetoothClients") getNetworkBluetoothClients

> List the Bluetooth clients seen by APs in this network


```javascript
function getNetworkBluetoothClients(networkId, t0, timespan, perPage, startingAfter, endingBefore, includeConnectivityHistory, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 7 days from today. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 7 days. The default is 1 day. |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 5 - 1000. Default is 10. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| includeConnectivityHistory |  ``` Optional ```  | Include the connectivity history for this client |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var t0 = 't0';
    var timespan = 70.0068599544498;
    var perPage = 70;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';
    var includeConnectivityHistory = false;

    controller.getNetworkBluetoothClients(networkId, t0, timespan, perPage, startingAfter, endingBefore, includeConnectivityHistory, function(error, response, context) {

    
    });
```



### <a name="get_network_bluetooth_client"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkBluetoothClient") getNetworkBluetoothClient

> Return a Bluetooth client. Bluetooth clients can be identified by their ID or their MAC.


```javascript
function getNetworkBluetoothClient(networkId, bluetoothClientId, includeConnectivityHistory, connectivityHistoryTimespan, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| bluetoothClientId |  ``` Required ```  | TODO: Add a parameter description |
| includeConnectivityHistory |  ``` Optional ```  | Include the connectivity history for this client |
| connectivityHistoryTimespan |  ``` Optional ```  | The timespan, in seconds, for the connectivityHistory data. By default 1 day, 86400, will be used. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var bluetoothClientId = 'bluetoothClientId';
    var includeConnectivityHistory = false;
    var connectivityHistoryTimespan = 70;

    controller.getNetworkBluetoothClient(networkId, bluetoothClientId, includeConnectivityHistory, connectivityHistoryTimespan, function(error, response, context) {

    
    });
```



### <a name="get_network_clients"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkClients") getNetworkClients

> List the clients that have used this network in the timespan


```javascript
function getNetworkClients(networkId, t0, timespan, perPage, startingAfter, endingBefore, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var t0 = 't0';
    var timespan = 70.0068599544498;
    var perPage = 70;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';

    controller.getNetworkClients(networkId, t0, timespan, perPage, startingAfter, endingBefore, function(error, response, context) {

    
    });
```



### <a name="get_network_clients_application_usage"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkClientsApplicationUsage") getNetworkClientsApplicationUsage

> Return the application usage data for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.


```javascript
function getNetworkClientsApplicationUsage(networkId, clients, ssidNumber, perPage, startingAfter, endingBefore, t0, t1, timespan, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| clients |  ``` Required ```  | A list of client keys, MACs or IPs separated by comma. |
| ssidNumber |  ``` Optional ```  | An SSID number to include. If not specified, eveusage histories application usagents for all SSIDs will be returned. |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 1000. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var clients = 'clients';
    var ssidNumber = Object.keys(ssidNumber)[0];
    var perPage = 70;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 70.0068599544498;

    controller.getNetworkClientsApplicationUsage(networkId, clients, ssidNumber, perPage, startingAfter, endingBefore, t0, t1, timespan, function(error, response, context) {

    
    });
```



### <a name="provision_network_clients"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.provisionNetworkClients") provisionNetworkClients

> Provisions a client with a name and policy. Clients can be provisioned before they associate to the network.


```javascript
function provisionNetworkClients(networkId, provisionNetworkClients, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| provisionNetworkClients |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var provisionNetworkClients = new ProvisionNetworkClients({"key":"value"});

    controller.provisionNetworkClients(networkId, provisionNetworkClients, function(error, response, context) {

    
    });
```



### <a name="get_network_clients_usage_histories"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkClientsUsageHistories") getNetworkClientsUsageHistories

> Return the usage histories for clients. Usage data is in kilobytes. Clients can be identified by client keys or either the MACs or IPs depending on whether the network uses Track-by-IP.


```javascript
function getNetworkClientsUsageHistories(networkId, clients, ssidNumber, perPage, startingAfter, endingBefore, t0, t1, timespan, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| clients |  ``` Required ```  | A list of client keys, MACs or IPs separated by comma. |
| ssidNumber |  ``` Optional ```  | An SSID number to include. If not specified, events for all SSIDs will be returned. |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 1000. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var clients = 'clients';
    var ssidNumber = Object.keys(ssidNumber)[0];
    var perPage = 70;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 70.0068599544498;

    controller.getNetworkClientsUsageHistories(networkId, clients, ssidNumber, perPage, startingAfter, endingBefore, t0, t1, timespan, function(error, response, context) {

    
    });
```



### <a name="get_network_client"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkClient") getNetworkClient

> Return the client associated with the given identifier. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.


```javascript
function getNetworkClient(networkId, clientId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| clientId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var clientId = 'clientId';

    controller.getNetworkClient(networkId, clientId, function(error, response, context) {

    
    });
```



### <a name="get_network_client_policy"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkClientPolicy") getNetworkClientPolicy

> Return the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.


```javascript
function getNetworkClientPolicy(networkId, clientId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| clientId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var clientId = 'clientId';

    controller.getNetworkClientPolicy(networkId, clientId, function(error, response, context) {

    
    });
```



### <a name="update_network_client_policy"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.updateNetworkClientPolicy") updateNetworkClientPolicy

> Update the policy assigned to a client on the network. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.


```javascript
function updateNetworkClientPolicy(networkId, clientId, updateNetworkClientPolicy, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| clientId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkClientPolicy |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var clientId = 'clientId';
    var updateNetworkClientPolicy = new UpdateNetworkClientPolicy({"key":"value"});

    controller.updateNetworkClientPolicy(networkId, clientId, updateNetworkClientPolicy, function(error, response, context) {

    
    });
```



### <a name="get_network_client_splash_authorization_status"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkClientSplashAuthorizationStatus") getNetworkClientSplashAuthorizationStatus

> Return the splash authorization for a client, for each SSID they've associated with through splash. Only enabled SSIDs with Click-through splash enabled will be included. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.


```javascript
function getNetworkClientSplashAuthorizationStatus(networkId, clientId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| clientId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var clientId = 'clientId';

    controller.getNetworkClientSplashAuthorizationStatus(networkId, clientId, function(error, response, context) {

    
    });
```



### <a name="update_network_client_splash_authorization_status"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.updateNetworkClientSplashAuthorizationStatus") updateNetworkClientSplashAuthorizationStatus

> Update a client's splash authorization. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.


```javascript
function updateNetworkClientSplashAuthorizationStatus(networkId, clientId, updateNetworkClientSplashAuthorizationStatus, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| clientId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkClientSplashAuthorizationStatus |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var clientId = 'clientId';
    var updateNetworkClientSplashAuthorizationStatus = new UpdateNetworkClientSplashAuthorizationStatus({"key":"value"});

    controller.updateNetworkClientSplashAuthorizationStatus(networkId, clientId, updateNetworkClientSplashAuthorizationStatus, function(error, response, context) {

    
    });
```



### <a name="get_network_client_traffic_history"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkClientTrafficHistory") getNetworkClientTrafficHistory

> Return the client's network traffic data over time. Usage data is in kilobytes. This endpoint requires detailed traffic analysis to be enabled on the Network-wide > General page. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.


```javascript
function getNetworkClientTrafficHistory(networkId, clientId, perPage, startingAfter, endingBefore, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| clientId |  ``` Required ```  | TODO: Add a parameter description |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 1000. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var clientId = 'clientId';
    var perPage = 161;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';

    controller.getNetworkClientTrafficHistory(networkId, clientId, perPage, startingAfter, endingBefore, function(error, response, context) {

    
    });
```



### <a name="get_network_client_usage_history"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkClientUsageHistory") getNetworkClientUsageHistory

> Return the client's daily usage history. Usage data is in kilobytes. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.


```javascript
function getNetworkClientUsageHistory(networkId, clientId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| clientId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var clientId = 'clientId';

    controller.getNetworkClientUsageHistory(networkId, clientId, function(error, response, context) {

    
    });
```



### <a name="get_network_devices"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkDevices") getNetworkDevices

> List the devices in a network


```javascript
function getNetworkDevices(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkDevices(networkId, function(error, response, context) {

    
    });
```



### <a name="claim_network_devices"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.claimNetworkDevices") claimNetworkDevices

> Claim devices into a network. (Note: for recently claimed devices, it may take a few minutes for API requsts against that device to succeed)


```javascript
function claimNetworkDevices(networkId, claimNetworkDevices, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| claimNetworkDevices |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var claimNetworkDevices = new ClaimNetworkDevices({"key":"value"});

    controller.claimNetworkDevices(networkId, claimNetworkDevices, function(error, response, context) {

    
    });
```



### <a name="remove_network_devices"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.removeNetworkDevices") removeNetworkDevices

> Remove a single device


```javascript
function removeNetworkDevices(networkId, removeNetworkDevices, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| removeNetworkDevices |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var removeNetworkDevices = new RemoveNetworkDevices({"key":"value"});

    controller.removeNetworkDevices(networkId, removeNetworkDevices, function(error, response, context) {

    
    });
```



### <a name="get_network_events"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkEvents") getNetworkEvents

> List the events for the network


```javascript
function getNetworkEvents(networkId, productType, includedEventTypes, excludedEventTypes, deviceMac, deviceSerial, deviceName, clientIp, clientMac, clientName, smDeviceMac, smDeviceName, perPage, startingAfter, endingBefore, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| productType |  ``` Optional ```  | The product type to fetch events for. This parameter is required for networks with multiple device types. Valid types are wireless, appliance, switch, systemsManager, camera, cellularGateway, and environmental |
| includedEventTypes |  ``` Optional ```  ``` Collection ```  | A list of event types. The returned events will be filtered to only include events with these types. |
| excludedEventTypes |  ``` Optional ```  ``` Collection ```  | A list of event types. The returned events will be filtered to exclude events with these types. |
| deviceMac |  ``` Optional ```  | The MAC address of the Meraki device which the list of events will be filtered with |
| deviceSerial |  ``` Optional ```  | The serial of the Meraki device which the list of events will be filtered with |
| deviceName |  ``` Optional ```  | The name of the Meraki device which the list of events will be filtered with |
| clientIp |  ``` Optional ```  | The IP of the client which the list of events will be filtered with. Only supported for track-by-IP networks. |
| clientMac |  ``` Optional ```  | The MAC address of the client which the list of events will be filtered with. Only supported for track-by-MAC networks. |
| clientName |  ``` Optional ```  | The name, or partial name, of the client which the list of events will be filtered with |
| smDeviceMac |  ``` Optional ```  | The MAC address of the Systems Manager device which the list of events will be filtered with |
| smDeviceName |  ``` Optional ```  | The name of the Systems Manager device which the list of events will be filtered with |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 10. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var productType = 'productType';
    var includedEventTypes = ['includedEventTypes'];
    var excludedEventTypes = ['excludedEventTypes'];
    var deviceMac = 'deviceMac';
    var deviceSerial = 'deviceSerial';
    var deviceName = 'deviceName';
    var clientIp = 'clientIp';
    var clientMac = 'clientMac';
    var clientName = 'clientName';
    var smDeviceMac = 'smDeviceMac';
    var smDeviceName = 'smDeviceName';
    var perPage = 161;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';

    controller.getNetworkEvents(networkId, productType, includedEventTypes, excludedEventTypes, deviceMac, deviceSerial, deviceName, clientIp, clientMac, clientName, smDeviceMac, smDeviceName, perPage, startingAfter, endingBefore, function(error, response, context) {

    
    });
```



### <a name="get_network_events_event_types"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkEventsEventTypes") getNetworkEventsEventTypes

> List the event type to human-readable description


```javascript
function getNetworkEventsEventTypes(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkEventsEventTypes(networkId, function(error, response, context) {

    
    });
```



### <a name="get_network_firmware_upgrades"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkFirmwareUpgrades") getNetworkFirmwareUpgrades

> Get firmware upgrade information for a network


```javascript
function getNetworkFirmwareUpgrades(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkFirmwareUpgrades(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_firmware_upgrades"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.updateNetworkFirmwareUpgrades") updateNetworkFirmwareUpgrades

> Update firmware upgrade information for a network


```javascript
function updateNetworkFirmwareUpgrades(networkId, updateNetworkFirmwareUpgrades, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkFirmwareUpgrades |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkFirmwareUpgrades = new UpdateNetworkFirmwareUpgrades({"key":"value"});

    controller.updateNetworkFirmwareUpgrades(networkId, updateNetworkFirmwareUpgrades, function(error, response, context) {

    
    });
```



### <a name="create_network_firmware_upgrades_rollback"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.createNetworkFirmwareUpgradesRollback") createNetworkFirmwareUpgradesRollback

> Rollback a Firmware Upgrade For A Network


```javascript
function createNetworkFirmwareUpgradesRollback(networkId, createNetworkFirmwareUpgradesRollback, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkFirmwareUpgradesRollback |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var createNetworkFirmwareUpgradesRollback = new CreateNetworkFirmwareUpgradesRollback({"key":"value"});

    controller.createNetworkFirmwareUpgradesRollback(networkId, createNetworkFirmwareUpgradesRollback, function(error, response, context) {

    
    });
```



### <a name="get_network_floor_plans"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkFloorPlans") getNetworkFloorPlans

> List the floor plans that belong to your network


```javascript
function getNetworkFloorPlans(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkFloorPlans(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_floor_plan"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.createNetworkFloorPlan") createNetworkFloorPlan

> Upload a floor plan


```javascript
function createNetworkFloorPlan(networkId, createNetworkFloorPlan, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkFloorPlan |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var createNetworkFloorPlan = new CreateNetworkFloorPlan({"key":"value"});

    controller.createNetworkFloorPlan(networkId, createNetworkFloorPlan, function(error, response, context) {

    
    });
```



### <a name="get_network_floor_plan"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkFloorPlan") getNetworkFloorPlan

> Find a floor plan by ID


```javascript
function getNetworkFloorPlan(networkId, floorPlanId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| floorPlanId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var floorPlanId = 'floorPlanId';

    controller.getNetworkFloorPlan(networkId, floorPlanId, function(error, response, context) {

    
    });
```



### <a name="update_network_floor_plan"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.updateNetworkFloorPlan") updateNetworkFloorPlan

> Update a floor plan's geolocation and other meta data


```javascript
function updateNetworkFloorPlan(networkId, floorPlanId, updateNetworkFloorPlan, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| floorPlanId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkFloorPlan |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var floorPlanId = 'floorPlanId';
    var updateNetworkFloorPlan = new UpdateNetworkFloorPlan({"key":"value"});

    controller.updateNetworkFloorPlan(networkId, floorPlanId, updateNetworkFloorPlan, function(error, response, context) {

    
    });
```



### <a name="delete_network_floor_plan"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.deleteNetworkFloorPlan") deleteNetworkFloorPlan

> Destroy a floor plan


```javascript
function deleteNetworkFloorPlan(networkId, floorPlanId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| floorPlanId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var floorPlanId = 'floorPlanId';

    controller.deleteNetworkFloorPlan(networkId, floorPlanId, function(error, response, context) {

    
    });
```



### <a name="get_network_group_policies"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkGroupPolicies") getNetworkGroupPolicies

> List the group policies in a network


```javascript
function getNetworkGroupPolicies(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkGroupPolicies(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_group_policy"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.createNetworkGroupPolicy") createNetworkGroupPolicy

> Create a group policy


```javascript
function createNetworkGroupPolicy(networkId, createNetworkGroupPolicy, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkGroupPolicy |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var createNetworkGroupPolicy = new CreateNetworkGroupPolicy({"key":"value"});

    controller.createNetworkGroupPolicy(networkId, createNetworkGroupPolicy, function(error, response, context) {

    
    });
```



### <a name="get_network_group_policy"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkGroupPolicy") getNetworkGroupPolicy

> Display a group policy


```javascript
function getNetworkGroupPolicy(networkId, groupPolicyId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| groupPolicyId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var groupPolicyId = 'groupPolicyId';

    controller.getNetworkGroupPolicy(networkId, groupPolicyId, function(error, response, context) {

    
    });
```



### <a name="update_network_group_policy"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.updateNetworkGroupPolicy") updateNetworkGroupPolicy

> Update a group policy


```javascript
function updateNetworkGroupPolicy(networkId, groupPolicyId, updateNetworkGroupPolicy, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| groupPolicyId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkGroupPolicy |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var groupPolicyId = 'groupPolicyId';
    var updateNetworkGroupPolicy = new UpdateNetworkGroupPolicy({"key":"value"});

    controller.updateNetworkGroupPolicy(networkId, groupPolicyId, updateNetworkGroupPolicy, function(error, response, context) {

    
    });
```



### <a name="delete_network_group_policy"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.deleteNetworkGroupPolicy") deleteNetworkGroupPolicy

> Delete a group policy


```javascript
function deleteNetworkGroupPolicy(networkId, groupPolicyId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| groupPolicyId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var groupPolicyId = 'groupPolicyId';

    controller.deleteNetworkGroupPolicy(networkId, groupPolicyId, function(error, response, context) {

    
    });
```



### <a name="get_network_meraki_auth_users"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkMerakiAuthUsers") getNetworkMerakiAuthUsers

> List the users configured under Meraki Authentication for a network (splash guest or RADIUS users for a wireless network, or client VPN users for a wired network)


```javascript
function getNetworkMerakiAuthUsers(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkMerakiAuthUsers(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_meraki_auth_user"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.createNetworkMerakiAuthUser") createNetworkMerakiAuthUser

> Authorize a user configured with Meraki Authentication for a network (currently supports 802.1X, splash guest, and client VPN users, and currently, organizations have a 50,000 user cap)


```javascript
function createNetworkMerakiAuthUser(networkId, createNetworkMerakiAuthUser, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkMerakiAuthUser |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var createNetworkMerakiAuthUser = new CreateNetworkMerakiAuthUser({"key":"value"});

    controller.createNetworkMerakiAuthUser(networkId, createNetworkMerakiAuthUser, function(error, response, context) {

    
    });
```



### <a name="get_network_meraki_auth_user"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkMerakiAuthUser") getNetworkMerakiAuthUser

> Return the Meraki Auth splash guest, RADIUS, or client VPN user


```javascript
function getNetworkMerakiAuthUser(networkId, merakiAuthUserId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| merakiAuthUserId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var merakiAuthUserId = 'merakiAuthUserId';

    controller.getNetworkMerakiAuthUser(networkId, merakiAuthUserId, function(error, response, context) {

    
    });
```



### <a name="delete_network_meraki_auth_user"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.deleteNetworkMerakiAuthUser") deleteNetworkMerakiAuthUser

> Deauthorize a user. To reauthorize a user after deauthorizing them, POST to this endpoint. (Currently, 802.1X RADIUS, splash guest, and client VPN users can be deauthorized.)


```javascript
function deleteNetworkMerakiAuthUser(networkId, merakiAuthUserId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| merakiAuthUserId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var merakiAuthUserId = 'merakiAuthUserId';

    controller.deleteNetworkMerakiAuthUser(networkId, merakiAuthUserId, function(error, response, context) {

    
    });
```



### <a name="update_network_meraki_auth_user"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.updateNetworkMerakiAuthUser") updateNetworkMerakiAuthUser

> Update a user configured with Meraki Authentication (currently, 802.1X RADIUS, splash guest, and client VPN users can be updated)


```javascript
function updateNetworkMerakiAuthUser(networkId, merakiAuthUserId, updateNetworkMerakiAuthUser, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| merakiAuthUserId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkMerakiAuthUser |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var merakiAuthUserId = 'merakiAuthUserId';
    var updateNetworkMerakiAuthUser = new UpdateNetworkMerakiAuthUser({"key":"value"});

    controller.updateNetworkMerakiAuthUser(networkId, merakiAuthUserId, updateNetworkMerakiAuthUser, function(error, response, context) {

    
    });
```



### <a name="get_network_mqtt_brokers"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkMqttBrokers") getNetworkMqttBrokers

> List the MQTT brokers for this network


```javascript
function getNetworkMqttBrokers(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkMqttBrokers(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_mqtt_broker"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.createNetworkMqttBroker") createNetworkMqttBroker

> Add an MQTT broker


```javascript
function createNetworkMqttBroker(networkId, createNetworkMqttBroker, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkMqttBroker |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var createNetworkMqttBroker = new CreateNetworkMqttBroker({"key":"value"});

    controller.createNetworkMqttBroker(networkId, createNetworkMqttBroker, function(error, response, context) {

    
    });
```



### <a name="get_network_mqtt_broker"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkMqttBroker") getNetworkMqttBroker

> Return an MQTT broker


```javascript
function getNetworkMqttBroker(networkId, mqttBrokerId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| mqttBrokerId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var mqttBrokerId = 'mqttBrokerId';

    controller.getNetworkMqttBroker(networkId, mqttBrokerId, function(error, response, context) {

    
    });
```



### <a name="update_network_mqtt_broker"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.updateNetworkMqttBroker") updateNetworkMqttBroker

> Update an MQTT broker


```javascript
function updateNetworkMqttBroker(networkId, mqttBrokerId, updateNetworkMqttBroker, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| mqttBrokerId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkMqttBroker |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var mqttBrokerId = 'mqttBrokerId';
    var updateNetworkMqttBroker = new UpdateNetworkMqttBroker({"key":"value"});

    controller.updateNetworkMqttBroker(networkId, mqttBrokerId, updateNetworkMqttBroker, function(error, response, context) {

    
    });
```



### <a name="delete_network_mqtt_broker"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.deleteNetworkMqttBroker") deleteNetworkMqttBroker

> Delete an MQTT broker


```javascript
function deleteNetworkMqttBroker(networkId, mqttBrokerId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| mqttBrokerId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var mqttBrokerId = 'mqttBrokerId';

    controller.deleteNetworkMqttBroker(networkId, mqttBrokerId, function(error, response, context) {

    
    });
```



### <a name="get_network_netflow"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkNetflow") getNetworkNetflow

> Return the NetFlow traffic reporting settings for a network


```javascript
function getNetworkNetflow(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkNetflow(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_netflow"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.updateNetworkNetflow") updateNetworkNetflow

> Update the NetFlow traffic reporting settings for a network


```javascript
function updateNetworkNetflow(networkId, updateNetworkNetflow, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkNetflow |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkNetflow = new UpdateNetworkNetflow({"key":"value"});

    controller.updateNetworkNetflow(networkId, updateNetworkNetflow, function(error, response, context) {

    
    });
```



### <a name="get_network_network_health_channel_utilization"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkNetworkHealthChannelUtilization") getNetworkNetworkHealthChannelUtilization

> Get the channel utilization over each radio for all APs in a network.


```javascript
function getNetworkNetworkHealthChannelUtilization(networkId, t0, t1, timespan, resolution, perPage, startingAfter, endingBefore, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. |
| resolution |  ``` Optional ```  | The time resolution in seconds for returned data. The valid resolutions are: 600. The default is 600. |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 100. Default is 10. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 161.502141846112;
    var resolution = 161;
    var perPage = 161;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';

    controller.getNetworkNetworkHealthChannelUtilization(networkId, t0, t1, timespan, resolution, perPage, startingAfter, endingBefore, function(error, response, context) {

    
    });
```



### <a name="get_network_pii_pii_keys"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkPiiPiiKeys") getNetworkPiiPiiKeys

> List the keys required to access Personally Identifiable Information (PII) for a given identifier. Exactly one identifier will be accepted. If the organization contains org-wide Systems Manager users matching the key provided then there will be an entry with the key "0" containing the applicable keys.
> 
> ## ALTERNATE PATH
> 
> ```
> /organizations/{organizationId}/pii/piiKeys
> ```


```javascript
function getNetworkPiiPiiKeys(networkId, username, email, mac, serial, imei, bluetoothMac, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| username |  ``` Optional ```  | The username of a Systems Manager user |
| email |  ``` Optional ```  | The email of a network user account or a Systems Manager device |
| mac |  ``` Optional ```  | The MAC of a network client device or a Systems Manager device |
| serial |  ``` Optional ```  | The serial of a Systems Manager device |
| imei |  ``` Optional ```  | The IMEI of a Systems Manager device |
| bluetoothMac |  ``` Optional ```  | The MAC of a Bluetooth client |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var username = 'username';
    var email = 'email';
    var mac = 'mac';
    var serial = 'serial';
    var imei = 'imei';
    var bluetoothMac = 'bluetoothMac';

    controller.getNetworkPiiPiiKeys(networkId, username, email, mac, serial, imei, bluetoothMac, function(error, response, context) {

    
    });
```



### <a name="get_network_pii_requests"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkPiiRequests") getNetworkPiiRequests

> List the PII requests for this network or organization
> 
> ## ALTERNATE PATH
> 
> ```
> /organizations/{organizationId}/pii/requests
> ```


```javascript
function getNetworkPiiRequests(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkPiiRequests(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_pii_request"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.createNetworkPiiRequest") createNetworkPiiRequest

> Submit a new delete or restrict processing PII request
> 
> ## ALTERNATE PATH
> 
> ```
> /organizations/{organizationId}/pii/requests
> ```


```javascript
function createNetworkPiiRequest(networkId, createNetworkPiiRequest, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkPiiRequest |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var createNetworkPiiRequest = new CreateNetworkPiiRequest({"key":"value"});

    controller.createNetworkPiiRequest(networkId, createNetworkPiiRequest, function(error, response, context) {

    
    });
```



### <a name="get_network_pii_request"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkPiiRequest") getNetworkPiiRequest

> Return a PII request
> 
> ## ALTERNATE PATH
> 
> ```
> /organizations/{organizationId}/pii/requests/{requestId}
> ```


```javascript
function getNetworkPiiRequest(networkId, requestId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| requestId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var requestId = 'requestId';

    controller.getNetworkPiiRequest(networkId, requestId, function(error, response, context) {

    
    });
```



### <a name="delete_network_pii_request"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.deleteNetworkPiiRequest") deleteNetworkPiiRequest

> Delete a restrict processing PII request
> 
> ## ALTERNATE PATH
> 
> ```
> /organizations/{organizationId}/pii/requests/{requestId}
> ```


```javascript
function deleteNetworkPiiRequest(networkId, requestId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| requestId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var requestId = 'requestId';

    controller.deleteNetworkPiiRequest(networkId, requestId, function(error, response, context) {

    
    });
```



### <a name="get_network_pii_sm_devices_for_key"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkPiiSmDevicesForKey") getNetworkPiiSmDevicesForKey

> Given a piece of Personally Identifiable Information (PII), return the Systems Manager device ID(s) associated with that identifier. These device IDs can be used with the Systems Manager API endpoints to retrieve device details. Exactly one identifier will be accepted.
> 
> ## ALTERNATE PATH
> 
> ```
> /organizations/{organizationId}/pii/smDevicesForKey
> ```


```javascript
function getNetworkPiiSmDevicesForKey(networkId, username, email, mac, serial, imei, bluetoothMac, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| username |  ``` Optional ```  | The username of a Systems Manager user |
| email |  ``` Optional ```  | The email of a network user account or a Systems Manager device |
| mac |  ``` Optional ```  | The MAC of a network client device or a Systems Manager device |
| serial |  ``` Optional ```  | The serial of a Systems Manager device |
| imei |  ``` Optional ```  | The IMEI of a Systems Manager device |
| bluetoothMac |  ``` Optional ```  | The MAC of a Bluetooth client |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var username = 'username';
    var email = 'email';
    var mac = 'mac';
    var serial = 'serial';
    var imei = 'imei';
    var bluetoothMac = 'bluetoothMac';

    controller.getNetworkPiiSmDevicesForKey(networkId, username, email, mac, serial, imei, bluetoothMac, function(error, response, context) {

    
    });
```



### <a name="get_network_pii_sm_owners_for_key"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkPiiSmOwnersForKey") getNetworkPiiSmOwnersForKey

> Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.
> 
> ## ALTERNATE PATH
> 
> ```
> /organizations/{organizationId}/pii/smOwnersForKey
> ```


```javascript
function getNetworkPiiSmOwnersForKey(networkId, username, email, mac, serial, imei, bluetoothMac, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| username |  ``` Optional ```  | The username of a Systems Manager user |
| email |  ``` Optional ```  | The email of a network user account or a Systems Manager device |
| mac |  ``` Optional ```  | The MAC of a network client device or a Systems Manager device |
| serial |  ``` Optional ```  | The serial of a Systems Manager device |
| imei |  ``` Optional ```  | The IMEI of a Systems Manager device |
| bluetoothMac |  ``` Optional ```  | The MAC of a Bluetooth client |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var username = 'username';
    var email = 'email';
    var mac = 'mac';
    var serial = 'serial';
    var imei = 'imei';
    var bluetoothMac = 'bluetoothMac';

    controller.getNetworkPiiSmOwnersForKey(networkId, username, email, mac, serial, imei, bluetoothMac, function(error, response, context) {

    
    });
```



### <a name="get_network_settings"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkSettings") getNetworkSettings

> Return the settings for a network


```javascript
function getNetworkSettings(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSettings(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_settings"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.updateNetworkSettings") updateNetworkSettings

> Update the settings for a network


```javascript
function updateNetworkSettings(networkId, updateNetworkSettings, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSettings |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkSettings = new UpdateNetworkSettings({"key":"value"});

    controller.updateNetworkSettings(networkId, updateNetworkSettings, function(error, response, context) {

    
    });
```



### <a name="get_network_snmp"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkSnmp") getNetworkSnmp

> Return the SNMP settings for a network


```javascript
function getNetworkSnmp(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSnmp(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_snmp"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.updateNetworkSnmp") updateNetworkSnmp

> Update the SNMP settings for a network


```javascript
function updateNetworkSnmp(networkId, updateNetworkSnmp, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSnmp |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkSnmp = new UpdateNetworkSnmp({"key":"value"});

    controller.updateNetworkSnmp(networkId, updateNetworkSnmp, function(error, response, context) {

    
    });
```



### <a name="get_network_splash_login_attempts"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkSplashLoginAttempts") getNetworkSplashLoginAttempts

> List the splash login attempts for a network


```javascript
function getNetworkSplashLoginAttempts(networkId, ssidNumber, loginIdentifier, timespan, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| ssidNumber |  ``` Optional ```  | Only return the login attempts for the specified SSID |
| loginIdentifier |  ``` Optional ```  | The username, email, or phone number used during login |
| timespan |  ``` Optional ```  | The timespan, in seconds, for the login attempts. The period will be from [timespan] seconds ago until now. The maximum timespan is 3 months |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var ssidNumber = Object.keys(ssidNumber)[0];
    var loginIdentifier = 'loginIdentifier';
    var timespan = 161;

    controller.getNetworkSplashLoginAttempts(networkId, ssidNumber, loginIdentifier, timespan, function(error, response, context) {

    
    });
```



### <a name="split_network"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.splitNetwork") splitNetwork

> Split a combined network into individual networks for each type of device


```javascript
function splitNetwork(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.splitNetwork(networkId, function(error, response, context) {

    
    });
```



### <a name="get_network_syslog_servers"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkSyslogServers") getNetworkSyslogServers

> List the syslog servers for a network


```javascript
function getNetworkSyslogServers(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSyslogServers(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_syslog_servers"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.updateNetworkSyslogServers") updateNetworkSyslogServers

> Update the syslog servers for a network


```javascript
function updateNetworkSyslogServers(networkId, updateNetworkSyslogServers, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSyslogServers |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkSyslogServers = new UpdateNetworkSyslogServers({"key":"value"});

    controller.updateNetworkSyslogServers(networkId, updateNetworkSyslogServers, function(error, response, context) {

    
    });
```



### <a name="get_network_traffic"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkTraffic") getNetworkTraffic

> Return the traffic analysis data for this network. Traffic analysis with hostname visibility must be enabled on the network.


```javascript
function getNetworkTraffic(networkId, t0, timespan, deviceType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 30 days from today. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 30 days. |
| deviceType |  ``` Optional ```  | Filter the data by device type: 'combined', 'wireless', 'switch' or 'appliance'. Defaults to 'combined'. When using 'combined', for each rule the data will come from the device type with the most usage. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var t0 = 't0';
    var timespan = 161.502141846112;
    var deviceType = Object.keys(deviceType)[0];

    controller.getNetworkTraffic(networkId, t0, timespan, deviceType, function(error, response, context) {

    
    });
```



### <a name="get_network_traffic_analysis"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkTrafficAnalysis") getNetworkTrafficAnalysis

> Return the traffic analysis settings for a network


```javascript
function getNetworkTrafficAnalysis(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkTrafficAnalysis(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_traffic_analysis"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.updateNetworkTrafficAnalysis") updateNetworkTrafficAnalysis

> Update the traffic analysis settings for a network


```javascript
function updateNetworkTrafficAnalysis(networkId, updateNetworkTrafficAnalysis, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkTrafficAnalysis |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkTrafficAnalysis = new UpdateNetworkTrafficAnalysis({"key":"value"});

    controller.updateNetworkTrafficAnalysis(networkId, updateNetworkTrafficAnalysis, function(error, response, context) {

    
    });
```



### <a name="get_network_traffic_shaping_application_categories"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkTrafficShapingApplicationCategories") getNetworkTrafficShapingApplicationCategories

> Returns the application categories for traffic shaping rules.


```javascript
function getNetworkTrafficShapingApplicationCategories(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkTrafficShapingApplicationCategories(networkId, function(error, response, context) {

    
    });
```



### <a name="get_network_traffic_shaping_dscp_tagging_options"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkTrafficShapingDscpTaggingOptions") getNetworkTrafficShapingDscpTaggingOptions

> Returns the available DSCP tagging options for your traffic shaping rules.


```javascript
function getNetworkTrafficShapingDscpTaggingOptions(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkTrafficShapingDscpTaggingOptions(networkId, function(error, response, context) {

    
    });
```



### <a name="unbind_network"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.unbindNetwork") unbindNetwork

> Unbind a network from a template.


```javascript
function unbindNetwork(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.unbindNetwork(networkId, function(error, response, context) {

    
    });
```



### <a name="get_network_webhooks_http_servers"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkWebhooksHttpServers") getNetworkWebhooksHttpServers

> List the HTTP servers for a network


```javascript
function getNetworkWebhooksHttpServers(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkWebhooksHttpServers(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_webhooks_http_server"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.createNetworkWebhooksHttpServer") createNetworkWebhooksHttpServer

> Add an HTTP server to a network


```javascript
function createNetworkWebhooksHttpServer(networkId, createNetworkWebhooksHttpServer, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkWebhooksHttpServer |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var createNetworkWebhooksHttpServer = new CreateNetworkWebhooksHttpServer({"key":"value"});

    controller.createNetworkWebhooksHttpServer(networkId, createNetworkWebhooksHttpServer, function(error, response, context) {

    
    });
```



### <a name="get_network_webhooks_http_server"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkWebhooksHttpServer") getNetworkWebhooksHttpServer

> Return an HTTP server for a network


```javascript
function getNetworkWebhooksHttpServer(networkId, httpServerId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| httpServerId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var httpServerId = 'httpServerId';

    controller.getNetworkWebhooksHttpServer(networkId, httpServerId, function(error, response, context) {

    
    });
```



### <a name="update_network_webhooks_http_server"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.updateNetworkWebhooksHttpServer") updateNetworkWebhooksHttpServer

> Update an HTTP server


```javascript
function updateNetworkWebhooksHttpServer(networkId, httpServerId, updateNetworkWebhooksHttpServer, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| httpServerId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkWebhooksHttpServer |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var httpServerId = 'httpServerId';
    var updateNetworkWebhooksHttpServer = new UpdateNetworkWebhooksHttpServer({"key":"value"});

    controller.updateNetworkWebhooksHttpServer(networkId, httpServerId, updateNetworkWebhooksHttpServer, function(error, response, context) {

    
    });
```



### <a name="delete_network_webhooks_http_server"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.deleteNetworkWebhooksHttpServer") deleteNetworkWebhooksHttpServer

> Delete an HTTP server from a network


```javascript
function deleteNetworkWebhooksHttpServer(networkId, httpServerId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| httpServerId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var httpServerId = 'httpServerId';

    controller.deleteNetworkWebhooksHttpServer(networkId, httpServerId, function(error, response, context) {

    
    });
```



### <a name="create_network_webhooks_webhook_test"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.createNetworkWebhooksWebhookTest") createNetworkWebhooksWebhookTest

> Send a test webhook for a network


```javascript
function createNetworkWebhooksWebhookTest(networkId, createNetworkWebhooksWebhookTest, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkWebhooksWebhookTest |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var createNetworkWebhooksWebhookTest = new CreateNetworkWebhooksWebhookTest({"key":"value"});

    controller.createNetworkWebhooksWebhookTest(networkId, createNetworkWebhooksWebhookTest, function(error, response, context) {

    
    });
```



### <a name="get_network_webhooks_webhook_test"></a>![Method: ](https://apidocs.io/img/method.png ".NetworksController.getNetworkWebhooksWebhookTest") getNetworkWebhooksWebhookTest

> Return the status of a webhook test for a network


```javascript
function getNetworkWebhooksWebhookTest(networkId, webhookTestId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| webhookTestId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var webhookTestId = 'webhookTestId';

    controller.getNetworkWebhooksWebhookTest(networkId, webhookTestId, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="devices_controller"></a>![Class: ](https://apidocs.io/img/class.png ".DevicesController") DevicesController

### Get singleton instance

The singleton instance of the ``` DevicesController ``` class can be accessed from the API Client.

```javascript
var controller = lib.DevicesController;
```

### <a name="get_device"></a>![Method: ](https://apidocs.io/img/method.png ".DevicesController.getDevice") getDevice

> Return a single device


```javascript
function getDevice(serial, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';

    controller.getDevice(serial, function(error, response, context) {

    
    });
```



### <a name="update_device"></a>![Method: ](https://apidocs.io/img/method.png ".DevicesController.updateDevice") updateDevice

> Update the attributes of a device


```javascript
function updateDevice(serial, updateDevice, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| updateDevice |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';
    var updateDevice = new UpdateDevice({"key":"value"});

    controller.updateDevice(serial, updateDevice, function(error, response, context) {

    
    });
```



### <a name="blink_device_leds"></a>![Method: ](https://apidocs.io/img/method.png ".DevicesController.blinkDeviceLeds") blinkDeviceLeds

> Blink the LEDs on a device


```javascript
function blinkDeviceLeds(serial, blinkDeviceLeds, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| blinkDeviceLeds |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';
    var blinkDeviceLeds = new BlinkDeviceLeds({"key":"value"});

    controller.blinkDeviceLeds(serial, blinkDeviceLeds, function(error, response, context) {

    
    });
```



### <a name="get_device_clients"></a>![Method: ](https://apidocs.io/img/method.png ".DevicesController.getDeviceClients") getDeviceClients

> List the clients of a device, up to a maximum of a month ago. The usage of each client is returned in kilobytes. If the device is a switch, the switchport is returned; otherwise the switchport field is null.


```javascript
function getDeviceClients(serial, t0, timespan, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. |



#### Example Usage

```javascript

    var serial = 'serial';
    var t0 = 't0';
    var timespan = 161.502141846112;

    controller.getDeviceClients(serial, t0, timespan, function(error, response, context) {

    
    });
```



### <a name="get_device_lldp_cdp"></a>![Method: ](https://apidocs.io/img/method.png ".DevicesController.getDeviceLldpCdp") getDeviceLldpCdp

> List LLDP and CDP information for a device


```javascript
function getDeviceLldpCdp(serial, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';

    controller.getDeviceLldpCdp(serial, function(error, response, context) {

    
    });
```



### <a name="get_device_loss_and_latency_history"></a>![Method: ](https://apidocs.io/img/method.png ".DevicesController.getDeviceLossAndLatencyHistory") getDeviceLossAndLatencyHistory

> Get the uplink loss percentage and latency in milliseconds, and goodput in kilobits per second for a wired network device.


```javascript
function getDeviceLossAndLatencyHistory(serial, ip, t0, t1, timespan, resolution, uplink, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| ip |  ``` Required ```  | The destination IP used to obtain the requested stats. This is required. |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 365 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. |
| resolution |  ``` Optional ```  | The time resolution in seconds for returned data. The valid resolutions are: 60, 600, 3600, 86400. The default is 60. |
| uplink |  ``` Optional ```  | The WAN uplink used to obtain the requested stats. Valid uplinks are wan1, wan2, cellular. The default is wan1. |



#### Example Usage

```javascript

    var serial = 'serial';
    var ip = 'ip';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 161.502141846112;
    var resolution = 161;
    var uplink = Object.keys(uplink)[0];

    controller.getDeviceLossAndLatencyHistory(serial, ip, t0, t1, timespan, resolution, uplink, function(error, response, context) {

    
    });
```



### <a name="get_device_management_interface"></a>![Method: ](https://apidocs.io/img/method.png ".DevicesController.getDeviceManagementInterface") getDeviceManagementInterface

> Return the management interface settings for a device


```javascript
function getDeviceManagementInterface(serial, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';

    controller.getDeviceManagementInterface(serial, function(error, response, context) {

    
    });
```



### <a name="update_device_management_interface"></a>![Method: ](https://apidocs.io/img/method.png ".DevicesController.updateDeviceManagementInterface") updateDeviceManagementInterface

> Update the management interface settings for a device


```javascript
function updateDeviceManagementInterface(serial, updateDeviceManagementInterface, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| updateDeviceManagementInterface |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';
    var updateDeviceManagementInterface = new UpdateDeviceManagementInterface({"key":"value"});

    controller.updateDeviceManagementInterface(serial, updateDeviceManagementInterface, function(error, response, context) {

    
    });
```



### <a name="reboot_device"></a>![Method: ](https://apidocs.io/img/method.png ".DevicesController.rebootDevice") rebootDevice

> Reboot a device


```javascript
function rebootDevice(serial, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';

    controller.rebootDevice(serial, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="insight_controller"></a>![Class: ](https://apidocs.io/img/class.png ".InsightController") InsightController

### Get singleton instance

The singleton instance of the ``` InsightController ``` class can be accessed from the API Client.

```javascript
var controller = lib.InsightController;
```

### <a name="get_organization_insight_monitored_media_servers"></a>![Method: ](https://apidocs.io/img/method.png ".InsightController.getOrganizationInsightMonitoredMediaServers") getOrganizationInsightMonitoredMediaServers

> List the monitored media servers for this organization. Only valid for organizations with Meraki Insight.


```javascript
function getOrganizationInsightMonitoredMediaServers(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.getOrganizationInsightMonitoredMediaServers(organizationId, function(error, response, context) {

    
    });
```



### <a name="create_organization_insight_monitored_media_server"></a>![Method: ](https://apidocs.io/img/method.png ".InsightController.createOrganizationInsightMonitoredMediaServer") createOrganizationInsightMonitoredMediaServer

> Add a media server to be monitored for this organization. Only valid for organizations with Meraki Insight.


```javascript
function createOrganizationInsightMonitoredMediaServer(organizationId, createOrganizationInsightMonitoredMediaServer, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| createOrganizationInsightMonitoredMediaServer |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var createOrganizationInsightMonitoredMediaServer = new CreateOrganizationInsightMonitoredMediaServer({"key":"value"});

    controller.createOrganizationInsightMonitoredMediaServer(organizationId, createOrganizationInsightMonitoredMediaServer, function(error, response, context) {

    
    });
```



### <a name="get_organization_insight_monitored_media_server"></a>![Method: ](https://apidocs.io/img/method.png ".InsightController.getOrganizationInsightMonitoredMediaServer") getOrganizationInsightMonitoredMediaServer

> Return a monitored media server for this organization. Only valid for organizations with Meraki Insight.


```javascript
function getOrganizationInsightMonitoredMediaServer(organizationId, monitoredMediaServerId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| monitoredMediaServerId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var monitoredMediaServerId = 'monitoredMediaServerId';

    controller.getOrganizationInsightMonitoredMediaServer(organizationId, monitoredMediaServerId, function(error, response, context) {

    
    });
```



### <a name="update_organization_insight_monitored_media_server"></a>![Method: ](https://apidocs.io/img/method.png ".InsightController.updateOrganizationInsightMonitoredMediaServer") updateOrganizationInsightMonitoredMediaServer

> Update a monitored media server for this organization. Only valid for organizations with Meraki Insight.


```javascript
function updateOrganizationInsightMonitoredMediaServer(organizationId, monitoredMediaServerId, updateOrganizationInsightMonitoredMediaServer, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| monitoredMediaServerId |  ``` Required ```  | TODO: Add a parameter description |
| updateOrganizationInsightMonitoredMediaServer |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var monitoredMediaServerId = 'monitoredMediaServerId';
    var updateOrganizationInsightMonitoredMediaServer = new UpdateOrganizationInsightMonitoredMediaServer({"key":"value"});

    controller.updateOrganizationInsightMonitoredMediaServer(organizationId, monitoredMediaServerId, updateOrganizationInsightMonitoredMediaServer, function(error, response, context) {

    
    });
```



### <a name="delete_organization_insight_monitored_media_server"></a>![Method: ](https://apidocs.io/img/method.png ".InsightController.deleteOrganizationInsightMonitoredMediaServer") deleteOrganizationInsightMonitoredMediaServer

> Delete a monitored media server from this organization. Only valid for organizations with Meraki Insight.


```javascript
function deleteOrganizationInsightMonitoredMediaServer(organizationId, monitoredMediaServerId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| monitoredMediaServerId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var monitoredMediaServerId = 'monitoredMediaServerId';

    controller.deleteOrganizationInsightMonitoredMediaServer(organizationId, monitoredMediaServerId, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="wireless_controller"></a>![Class: ](https://apidocs.io/img/class.png ".WirelessController") WirelessController

### Get singleton instance

The singleton instance of the ``` WirelessController ``` class can be accessed from the API Client.

```javascript
var controller = lib.WirelessController;
```

### <a name="get_device_wireless_bluetooth_settings"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getDeviceWirelessBluetoothSettings") getDeviceWirelessBluetoothSettings

> Return the bluetooth settings for a wireless device


```javascript
function getDeviceWirelessBluetoothSettings(serial, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';

    controller.getDeviceWirelessBluetoothSettings(serial, function(error, response, context) {

    
    });
```



### <a name="update_device_wireless_bluetooth_settings"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.updateDeviceWirelessBluetoothSettings") updateDeviceWirelessBluetoothSettings

> Update the bluetooth settings for a wireless device


```javascript
function updateDeviceWirelessBluetoothSettings(serial, updateDeviceWirelessBluetoothSettings, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| updateDeviceWirelessBluetoothSettings |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';
    var updateDeviceWirelessBluetoothSettings = new UpdateDeviceWirelessBluetoothSettings({"key":"value"});

    controller.updateDeviceWirelessBluetoothSettings(serial, updateDeviceWirelessBluetoothSettings, function(error, response, context) {

    
    });
```



### <a name="get_device_wireless_connection_stats"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getDeviceWirelessConnectionStats") getDeviceWirelessConnectionStats

> Aggregated connectivity info for a given AP on this network


```javascript
function getDeviceWirelessConnectionStats(serial, t0, t1, timespan, band, ssid, vlan, apTag, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 180 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. |
| band |  ``` Optional ```  | Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information. |
| ssid |  ``` Optional ```  | Filter results by SSID |
| vlan |  ``` Optional ```  | Filter results by VLAN |
| apTag |  ``` Optional ```  | Filter results by AP Tag |



#### Example Usage

```javascript

    var serial = 'serial';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 161.502141846112;
    var band = Object.keys(band)[0];
    var ssid = 161;
    var vlan = 161;
    var apTag = 'apTag';

    controller.getDeviceWirelessConnectionStats(serial, t0, t1, timespan, band, ssid, vlan, apTag, function(error, response, context) {

    
    });
```



### <a name="get_device_wireless_latency_stats"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getDeviceWirelessLatencyStats") getDeviceWirelessLatencyStats

> Aggregated latency info for a given AP on this network


```javascript
function getDeviceWirelessLatencyStats(serial, t0, t1, timespan, band, ssid, vlan, apTag, fields, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 180 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. |
| band |  ``` Optional ```  | Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information. |
| ssid |  ``` Optional ```  | Filter results by SSID |
| vlan |  ``` Optional ```  | Filter results by VLAN |
| apTag |  ``` Optional ```  | Filter results by AP Tag |
| fields |  ``` Optional ```  | Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string. |



#### Example Usage

```javascript

    var serial = 'serial';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 161.502141846112;
    var band = Object.keys(band)[0];
    var ssid = 161;
    var vlan = 161;
    var apTag = 'apTag';
    var fields = 'fields';

    controller.getDeviceWirelessLatencyStats(serial, t0, t1, timespan, band, ssid, vlan, apTag, fields, function(error, response, context) {

    
    });
```



### <a name="get_device_wireless_radio_settings"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getDeviceWirelessRadioSettings") getDeviceWirelessRadioSettings

> Return the radio settings of a device


```javascript
function getDeviceWirelessRadioSettings(serial, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';

    controller.getDeviceWirelessRadioSettings(serial, function(error, response, context) {

    
    });
```



### <a name="update_device_wireless_radio_settings"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.updateDeviceWirelessRadioSettings") updateDeviceWirelessRadioSettings

> Update the radio settings of a device


```javascript
function updateDeviceWirelessRadioSettings(serial, updateDeviceWirelessRadioSettings, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| updateDeviceWirelessRadioSettings |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';
    var updateDeviceWirelessRadioSettings = new UpdateDeviceWirelessRadioSettings({"key":"value"});

    controller.updateDeviceWirelessRadioSettings(serial, updateDeviceWirelessRadioSettings, function(error, response, context) {

    
    });
```



### <a name="get_device_wireless_status"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getDeviceWirelessStatus") getDeviceWirelessStatus

> Return the SSID statuses of an access point


```javascript
function getDeviceWirelessStatus(serial, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';

    controller.getDeviceWirelessStatus(serial, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_air_marshal"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessAirMarshal") getNetworkWirelessAirMarshal

> List Air Marshal scan results from a network


```javascript
function getNetworkWirelessAirMarshal(networkId, t0, timespan, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var t0 = 't0';
    var timespan = 161.502141846112;

    controller.getNetworkWirelessAirMarshal(networkId, t0, timespan, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_alternate_management_interface"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessAlternateManagementInterface") getNetworkWirelessAlternateManagementInterface

> Return alternate management interface and devices with IP assigned


```javascript
function getNetworkWirelessAlternateManagementInterface(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkWirelessAlternateManagementInterface(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_wireless_alternate_management_interface"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.updateNetworkWirelessAlternateManagementInterface") updateNetworkWirelessAlternateManagementInterface

> Update alternate management interface and device static IP


```javascript
function updateNetworkWirelessAlternateManagementInterface(networkId, updateNetworkWirelessAlternateManagementInterface, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkWirelessAlternateManagementInterface |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkWirelessAlternateManagementInterface = new UpdateNetworkWirelessAlternateManagementInterface({"key":"value"});

    controller.updateNetworkWirelessAlternateManagementInterface(networkId, updateNetworkWirelessAlternateManagementInterface, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_billing"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessBilling") getNetworkWirelessBilling

> Return the billing settings of this network


```javascript
function getNetworkWirelessBilling(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkWirelessBilling(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_wireless_billing"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.updateNetworkWirelessBilling") updateNetworkWirelessBilling

> Update the billing settings


```javascript
function updateNetworkWirelessBilling(networkId, updateNetworkWirelessBilling, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkWirelessBilling |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkWirelessBilling = new UpdateNetworkWirelessBilling({"key":"value"});

    controller.updateNetworkWirelessBilling(networkId, updateNetworkWirelessBilling, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_bluetooth_settings"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessBluetoothSettings") getNetworkWirelessBluetoothSettings

> Return the Bluetooth settings for a network. <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a> must be enabled on the network.


```javascript
function getNetworkWirelessBluetoothSettings(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkWirelessBluetoothSettings(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_wireless_bluetooth_settings"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.updateNetworkWirelessBluetoothSettings") updateNetworkWirelessBluetoothSettings

> Update the Bluetooth settings for a network. See the docs page for <a href="https://documentation.meraki.com/MR/Bluetooth/Bluetooth_Low_Energy_(BLE)">Bluetooth settings</a>.


```javascript
function updateNetworkWirelessBluetoothSettings(networkId, updateNetworkWirelessBluetoothSettings, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkWirelessBluetoothSettings |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkWirelessBluetoothSettings = new UpdateNetworkWirelessBluetoothSettings({"key":"value"});

    controller.updateNetworkWirelessBluetoothSettings(networkId, updateNetworkWirelessBluetoothSettings, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_channel_utilization_history"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessChannelUtilizationHistory") getNetworkWirelessChannelUtilizationHistory

> Return AP channel utilization over time for a device or network client


```javascript
function getNetworkWirelessChannelUtilizationHistory(networkId, t0, t1, timespan, resolution, autoResolution, clientId, deviceSerial, apTag, band, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. |
| resolution |  ``` Optional ```  | The time resolution in seconds for returned data. The valid resolutions are: 600, 1200, 3600, 14400, 86400. The default is 86400. |
| autoResolution |  ``` Optional ```  | Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false. |
| clientId |  ``` Optional ```  | Filter results by network client to return per-device, per-band AP channel utilization metrics inner joined by the queried client's connection history. |
| deviceSerial |  ``` Optional ```  | Filter results by device to return AP channel utilization metrics for the queried device; either :band or :clientId must be jointly specified. |
| apTag |  ``` Optional ```  | Filter results by AP tag to return AP channel utilization metrics for devices labeled with the given tag; either :clientId or :deviceSerial must be jointly specified. |
| band |  ``` Optional ```  | Filter results by band (either '2.4' or '5'). |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 161.502141846112;
    var resolution = 161;
    var autoResolution = true;
    var clientId = 'clientId';
    var deviceSerial = 'deviceSerial';
    var apTag = 'apTag';
    var band = Object.keys(band)[0];

    controller.getNetworkWirelessChannelUtilizationHistory(networkId, t0, t1, timespan, resolution, autoResolution, clientId, deviceSerial, apTag, band, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_client_count_history"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessClientCountHistory") getNetworkWirelessClientCountHistory

> Return wireless client counts over time for a network, device, or network client


```javascript
function getNetworkWirelessClientCountHistory(networkId, t0, t1, timespan, resolution, autoResolution, clientId, deviceSerial, apTag, band, ssid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. |
| resolution |  ``` Optional ```  | The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400. |
| autoResolution |  ``` Optional ```  | Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false. |
| clientId |  ``` Optional ```  | Filter results by network client to return per-device client counts over time inner joined by the queried client's connection history. |
| deviceSerial |  ``` Optional ```  | Filter results by device. |
| apTag |  ``` Optional ```  | Filter results by AP tag. |
| band |  ``` Optional ```  | Filter results by band (either '2.4' or '5'). |
| ssid |  ``` Optional ```  | Filter results by SSID number. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 161.502141846112;
    var resolution = 161;
    var autoResolution = true;
    var clientId = 'clientId';
    var deviceSerial = 'deviceSerial';
    var apTag = 'apTag';
    var band = Object.keys(band)[0];
    var ssid = 161;

    controller.getNetworkWirelessClientCountHistory(networkId, t0, t1, timespan, resolution, autoResolution, clientId, deviceSerial, apTag, band, ssid, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_clients_connection_stats"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessClientsConnectionStats") getNetworkWirelessClientsConnectionStats

> Aggregated connectivity info for this network, grouped by clients


```javascript
function getNetworkWirelessClientsConnectionStats(networkId, t0, t1, timespan, band, ssid, vlan, apTag, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 180 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. |
| band |  ``` Optional ```  | Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information. |
| ssid |  ``` Optional ```  | Filter results by SSID |
| vlan |  ``` Optional ```  | Filter results by VLAN |
| apTag |  ``` Optional ```  | Filter results by AP Tag |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 161.502141846112;
    var band = Object.keys(band)[0];
    var ssid = 161;
    var vlan = 161;
    var apTag = 'apTag';

    controller.getNetworkWirelessClientsConnectionStats(networkId, t0, t1, timespan, band, ssid, vlan, apTag, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_clients_latency_stats"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessClientsLatencyStats") getNetworkWirelessClientsLatencyStats

> Aggregated latency info for this network, grouped by clients


```javascript
function getNetworkWirelessClientsLatencyStats(networkId, t0, t1, timespan, band, ssid, vlan, apTag, fields, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 180 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. |
| band |  ``` Optional ```  | Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information. |
| ssid |  ``` Optional ```  | Filter results by SSID |
| vlan |  ``` Optional ```  | Filter results by VLAN |
| apTag |  ``` Optional ```  | Filter results by AP Tag |
| fields |  ``` Optional ```  | Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 161.502141846112;
    var band = Object.keys(band)[0];
    var ssid = 161;
    var vlan = 161;
    var apTag = 'apTag';
    var fields = 'fields';

    controller.getNetworkWirelessClientsLatencyStats(networkId, t0, t1, timespan, band, ssid, vlan, apTag, fields, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_client_connection_stats"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessClientConnectionStats") getNetworkWirelessClientConnectionStats

> Aggregated connectivity info for a given client on this network. Clients are identified by their MAC.


```javascript
function getNetworkWirelessClientConnectionStats(networkId, clientId, t0, t1, timespan, band, ssid, vlan, apTag, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| clientId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 180 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. |
| band |  ``` Optional ```  | Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information. |
| ssid |  ``` Optional ```  | Filter results by SSID |
| vlan |  ``` Optional ```  | Filter results by VLAN |
| apTag |  ``` Optional ```  | Filter results by AP Tag |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var clientId = 'clientId';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 161.502141846112;
    var band = Object.keys(band)[0];
    var ssid = 161;
    var vlan = 161;
    var apTag = 'apTag';

    controller.getNetworkWirelessClientConnectionStats(networkId, clientId, t0, t1, timespan, band, ssid, vlan, apTag, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_client_connectivity_events"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessClientConnectivityEvents") getNetworkWirelessClientConnectivityEvents

> List the wireless connectivity events for a client within a network in the timespan.


```javascript
function getNetworkWirelessClientConnectivityEvents(networkId, clientId, perPage, startingAfter, endingBefore, t0, t1, timespan, types, includedSeverities, band, ssidNumber, deviceSerial, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| clientId |  ``` Required ```  | TODO: Add a parameter description |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 1000. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. |
| types |  ``` Optional ```  ``` Collection ```  | A list of event types to include. If not specified, events of all types will be returned. Valid types are 'assoc', 'disassoc', 'auth', 'deauth', 'dns', 'dhcp', 'roam', 'connection' and/or 'sticky'. |
| includedSeverities |  ``` Optional ```  ``` Collection ```  | A list of severities to include. If not specified, events of all severities will be returned. Valid severities are 'good', 'info', 'warn' and/or 'bad'. |
| band |  ``` Optional ```  | Filter results by band (either '2.4' or '5'). |
| ssidNumber |  ``` Optional ```  | An SSID number to include. If not specified, events for all SSIDs will be returned. |
| deviceSerial |  ``` Optional ```  | Filter results by an AP's serial number. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var clientId = 'clientId';
    var perPage = 161;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 161.502141846112;
    var types = [ Object.keys(type14)[0] ];
    var includedSeverities = [ Object.keys(includedSeverity)[0] ];
    var band = Object.keys(band)[0];
    var ssidNumber = Object.keys(ssidNumber)[0];
    var deviceSerial = 'deviceSerial';

    controller.getNetworkWirelessClientConnectivityEvents(networkId, clientId, perPage, startingAfter, endingBefore, t0, t1, timespan, types, includedSeverities, band, ssidNumber, deviceSerial, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_client_latency_history"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessClientLatencyHistory") getNetworkWirelessClientLatencyHistory

> Return the latency history for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP. The latency data is from a sample of 2% of packets and is grouped into 4 traffic categories: background, best effort, video, voice. Within these categories the sampled packet counters are bucketed by latency in milliseconds.


```javascript
function getNetworkWirelessClientLatencyHistory(networkId, clientId, t0, t1, timespan, resolution, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| clientId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 791 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 791 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 1 day. |
| resolution |  ``` Optional ```  | The time resolution in seconds for returned data. The valid resolutions are: 86400. The default is 86400. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var clientId = 'clientId';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 161.502141846112;
    var resolution = 161;

    controller.getNetworkWirelessClientLatencyHistory(networkId, clientId, t0, t1, timespan, resolution, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_client_latency_stats"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessClientLatencyStats") getNetworkWirelessClientLatencyStats

> Aggregated latency info for a given client on this network. Clients are identified by their MAC.


```javascript
function getNetworkWirelessClientLatencyStats(networkId, clientId, t0, t1, timespan, band, ssid, vlan, apTag, fields, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| clientId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 180 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. |
| band |  ``` Optional ```  | Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information. |
| ssid |  ``` Optional ```  | Filter results by SSID |
| vlan |  ``` Optional ```  | Filter results by VLAN |
| apTag |  ``` Optional ```  | Filter results by AP Tag |
| fields |  ``` Optional ```  | Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var clientId = 'clientId';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 161.502141846112;
    var band = Object.keys(band)[0];
    var ssid = 161;
    var vlan = 161;
    var apTag = 'apTag';
    var fields = 'fields';

    controller.getNetworkWirelessClientLatencyStats(networkId, clientId, t0, t1, timespan, band, ssid, vlan, apTag, fields, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_connection_stats"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessConnectionStats") getNetworkWirelessConnectionStats

> Aggregated connectivity info for this network


```javascript
function getNetworkWirelessConnectionStats(networkId, t0, t1, timespan, band, ssid, vlan, apTag, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 180 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. |
| band |  ``` Optional ```  | Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information. |
| ssid |  ``` Optional ```  | Filter results by SSID |
| vlan |  ``` Optional ```  | Filter results by VLAN |
| apTag |  ``` Optional ```  | Filter results by AP Tag |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 161.502141846112;
    var band = Object.keys(band)[0];
    var ssid = 161;
    var vlan = 161;
    var apTag = 'apTag';

    controller.getNetworkWirelessConnectionStats(networkId, t0, t1, timespan, band, ssid, vlan, apTag, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_data_rate_history"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessDataRateHistory") getNetworkWirelessDataRateHistory

> Return PHY data rates over time for a network, device, or network client


```javascript
function getNetworkWirelessDataRateHistory(networkId, t0, t1, timespan, resolution, autoResolution, clientId, deviceSerial, apTag, band, ssid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. |
| resolution |  ``` Optional ```  | The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400. |
| autoResolution |  ``` Optional ```  | Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false. |
| clientId |  ``` Optional ```  | Filter results by network client. |
| deviceSerial |  ``` Optional ```  | Filter results by device. |
| apTag |  ``` Optional ```  | Filter results by AP tag. |
| band |  ``` Optional ```  | Filter results by band (either '2.4' or '5'). |
| ssid |  ``` Optional ```  | Filter results by SSID number. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 161.502141846112;
    var resolution = 161;
    var autoResolution = true;
    var clientId = 'clientId';
    var deviceSerial = 'deviceSerial';
    var apTag = 'apTag';
    var band = Object.keys(band)[0];
    var ssid = 161;

    controller.getNetworkWirelessDataRateHistory(networkId, t0, t1, timespan, resolution, autoResolution, clientId, deviceSerial, apTag, band, ssid, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_devices_connection_stats"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessDevicesConnectionStats") getNetworkWirelessDevicesConnectionStats

> Aggregated connectivity info for this network, grouped by node


```javascript
function getNetworkWirelessDevicesConnectionStats(networkId, t0, t1, timespan, band, ssid, vlan, apTag, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 180 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. |
| band |  ``` Optional ```  | Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information. |
| ssid |  ``` Optional ```  | Filter results by SSID |
| vlan |  ``` Optional ```  | Filter results by VLAN |
| apTag |  ``` Optional ```  | Filter results by AP Tag |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 161.502141846112;
    var band = Object.keys(band)[0];
    var ssid = 161;
    var vlan = 161;
    var apTag = 'apTag';

    controller.getNetworkWirelessDevicesConnectionStats(networkId, t0, t1, timespan, band, ssid, vlan, apTag, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_devices_latency_stats"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessDevicesLatencyStats") getNetworkWirelessDevicesLatencyStats

> Aggregated latency info for this network, grouped by node


```javascript
function getNetworkWirelessDevicesLatencyStats(networkId, t0, t1, timespan, band, ssid, vlan, apTag, fields, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 180 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. |
| band |  ``` Optional ```  | Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information. |
| ssid |  ``` Optional ```  | Filter results by SSID |
| vlan |  ``` Optional ```  | Filter results by VLAN |
| apTag |  ``` Optional ```  | Filter results by AP Tag |
| fields |  ``` Optional ```  | Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 161.502141846112;
    var band = Object.keys(band)[0];
    var ssid = 161;
    var vlan = 161;
    var apTag = 'apTag';
    var fields = 'fields';

    controller.getNetworkWirelessDevicesLatencyStats(networkId, t0, t1, timespan, band, ssid, vlan, apTag, fields, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_failed_connections"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessFailedConnections") getNetworkWirelessFailedConnections

> List of all failed client connection events on this network in a given time range


```javascript
function getNetworkWirelessFailedConnections(networkId, t0, t1, timespan, band, ssid, vlan, apTag, serial, clientId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 180 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. |
| band |  ``` Optional ```  | Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information. |
| ssid |  ``` Optional ```  | Filter results by SSID |
| vlan |  ``` Optional ```  | Filter results by VLAN |
| apTag |  ``` Optional ```  | Filter results by AP Tag |
| serial |  ``` Optional ```  | Filter by AP |
| clientId |  ``` Optional ```  | Filter by client MAC |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 161.502141846112;
    var band = Object.keys(band)[0];
    var ssid = 161;
    var vlan = 161;
    var apTag = 'apTag';
    var serial = 'serial';
    var clientId = 'clientId';

    controller.getNetworkWirelessFailedConnections(networkId, t0, t1, timespan, band, ssid, vlan, apTag, serial, clientId, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_latency_history"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessLatencyHistory") getNetworkWirelessLatencyHistory

> Return average wireless latency over time for a network, device, or network client


```javascript
function getNetworkWirelessLatencyHistory(networkId, t0, t1, timespan, resolution, autoResolution, clientId, deviceSerial, apTag, band, ssid, accessCategory, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. |
| resolution |  ``` Optional ```  | The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400. |
| autoResolution |  ``` Optional ```  | Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false. |
| clientId |  ``` Optional ```  | Filter results by network client. |
| deviceSerial |  ``` Optional ```  | Filter results by device. |
| apTag |  ``` Optional ```  | Filter results by AP tag. |
| band |  ``` Optional ```  | Filter results by band (either '2.4' or '5'). |
| ssid |  ``` Optional ```  | Filter results by SSID number. |
| accessCategory |  ``` Optional ```  | Filter by access category. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 161.502141846112;
    var resolution = 161;
    var autoResolution = true;
    var clientId = 'clientId';
    var deviceSerial = 'deviceSerial';
    var apTag = 'apTag';
    var band = Object.keys(band)[0];
    var ssid = 161;
    var accessCategory = Object.keys(accessCategory)[0];

    controller.getNetworkWirelessLatencyHistory(networkId, t0, t1, timespan, resolution, autoResolution, clientId, deviceSerial, apTag, band, ssid, accessCategory, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_latency_stats"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessLatencyStats") getNetworkWirelessLatencyStats

> Aggregated latency info for this network


```javascript
function getNetworkWirelessLatencyStats(networkId, t0, t1, timespan, band, ssid, vlan, apTag, fields, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 180 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. |
| band |  ``` Optional ```  | Filter results by band (either '2.4' or '5'). Note that data prior to February 2020 will not have band information. |
| ssid |  ``` Optional ```  | Filter results by SSID |
| vlan |  ``` Optional ```  | Filter results by VLAN |
| apTag |  ``` Optional ```  | Filter results by AP Tag |
| fields |  ``` Optional ```  | Partial selection: If present, this call will return only the selected fields of ["rawDistribution", "avg"]. All fields will be returned by default. Selected fields must be entered as a comma separated string. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 161.502141846112;
    var band = Object.keys(band)[0];
    var ssid = 161;
    var vlan = 161;
    var apTag = 'apTag';
    var fields = 'fields';

    controller.getNetworkWirelessLatencyStats(networkId, t0, t1, timespan, band, ssid, vlan, apTag, fields, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_mesh_statuses"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessMeshStatuses") getNetworkWirelessMeshStatuses

> List wireless mesh statuses for repeaters


```javascript
function getNetworkWirelessMeshStatuses(networkId, perPage, startingAfter, endingBefore, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 500. Default is 50. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var perPage = 161;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';

    controller.getNetworkWirelessMeshStatuses(networkId, perPage, startingAfter, endingBefore, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_rf_profiles"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessRfProfiles") getNetworkWirelessRfProfiles

> List the non-basic RF profiles for this network


```javascript
function getNetworkWirelessRfProfiles(networkId, includeTemplateProfiles, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| includeTemplateProfiles |  ``` Optional ```  | If the network is bound to a template, this parameter controls whether or not the non-basic RF profiles defined on the template should be included in the response alongside the non-basic profiles defined on the bound network. Defaults to false. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var includeTemplateProfiles = true;

    controller.getNetworkWirelessRfProfiles(networkId, includeTemplateProfiles, function(error, response, context) {

    
    });
```



### <a name="create_network_wireless_rf_profile"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.createNetworkWirelessRfProfile") createNetworkWirelessRfProfile

> Creates new RF profile for this network


```javascript
function createNetworkWirelessRfProfile(networkId, createNetworkWirelessRfProfile, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkWirelessRfProfile |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var createNetworkWirelessRfProfile = new CreateNetworkWirelessRfProfile({"key":"value"});

    controller.createNetworkWirelessRfProfile(networkId, createNetworkWirelessRfProfile, function(error, response, context) {

    
    });
```



### <a name="update_network_wireless_rf_profile"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.updateNetworkWirelessRfProfile") updateNetworkWirelessRfProfile

> Updates specified RF profile for this network


```javascript
function updateNetworkWirelessRfProfile(networkId, rfProfileId, updateNetworkWirelessRfProfile, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| rfProfileId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkWirelessRfProfile |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var rfProfileId = 'rfProfileId';
    var updateNetworkWirelessRfProfile = new UpdateNetworkWirelessRfProfile({"key":"value"});

    controller.updateNetworkWirelessRfProfile(networkId, rfProfileId, updateNetworkWirelessRfProfile, function(error, response, context) {

    
    });
```



### <a name="delete_network_wireless_rf_profile"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.deleteNetworkWirelessRfProfile") deleteNetworkWirelessRfProfile

> Delete a RF Profile


```javascript
function deleteNetworkWirelessRfProfile(networkId, rfProfileId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| rfProfileId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var rfProfileId = 'rfProfileId';

    controller.deleteNetworkWirelessRfProfile(networkId, rfProfileId, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_rf_profile"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessRfProfile") getNetworkWirelessRfProfile

> Return a RF profile


```javascript
function getNetworkWirelessRfProfile(networkId, rfProfileId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| rfProfileId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var rfProfileId = 'rfProfileId';

    controller.getNetworkWirelessRfProfile(networkId, rfProfileId, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_settings"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessSettings") getNetworkWirelessSettings

> Return the wireless settings for a network


```javascript
function getNetworkWirelessSettings(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkWirelessSettings(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_wireless_settings"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.updateNetworkWirelessSettings") updateNetworkWirelessSettings

> Update the wireless settings for a network


```javascript
function updateNetworkWirelessSettings(networkId, updateNetworkWirelessSettings, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkWirelessSettings |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkWirelessSettings = new UpdateNetworkWirelessSettings({"key":"value"});

    controller.updateNetworkWirelessSettings(networkId, updateNetworkWirelessSettings, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_signal_quality_history"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessSignalQualityHistory") getNetworkWirelessSignalQualityHistory

> Return signal quality (SNR/RSSI) over time for a device or network client


```javascript
function getNetworkWirelessSignalQualityHistory(networkId, t0, t1, timespan, resolution, autoResolution, clientId, deviceSerial, apTag, band, ssid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. |
| resolution |  ``` Optional ```  | The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400. |
| autoResolution |  ``` Optional ```  | Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false. |
| clientId |  ``` Optional ```  | Filter results by network client. |
| deviceSerial |  ``` Optional ```  | Filter results by device. |
| apTag |  ``` Optional ```  | Filter results by AP tag; either :clientId or :deviceSerial must be jointly specified. |
| band |  ``` Optional ```  | Filter results by band (either '2.4' or '5'). |
| ssid |  ``` Optional ```  | Filter results by SSID number. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 161.502141846112;
    var resolution = 161;
    var autoResolution = true;
    var clientId = 'clientId';
    var deviceSerial = 'deviceSerial';
    var apTag = 'apTag';
    var band = Object.keys(band)[0];
    var ssid = 161;

    controller.getNetworkWirelessSignalQualityHistory(networkId, t0, t1, timespan, resolution, autoResolution, clientId, deviceSerial, apTag, band, ssid, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_ssids"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessSsids") getNetworkWirelessSsids

> List the MR SSIDs in a network


```javascript
function getNetworkWirelessSsids(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkWirelessSsids(networkId, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_ssid"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessSsid") getNetworkWirelessSsid

> Return a single MR SSID


```javascript
function getNetworkWirelessSsid(networkId, number, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var number = 'number';

    controller.getNetworkWirelessSsid(networkId, number, function(error, response, context) {

    
    });
```



### <a name="update_network_wireless_ssid"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.updateNetworkWirelessSsid") updateNetworkWirelessSsid

> Update the attributes of an MR SSID


```javascript
function updateNetworkWirelessSsid(networkId, number, updateNetworkWirelessSsid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkWirelessSsid |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var number = 'number';
    var updateNetworkWirelessSsid = new UpdateNetworkWirelessSsid({"key":"value"});

    controller.updateNetworkWirelessSsid(networkId, number, updateNetworkWirelessSsid, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_ssid_bonjour_forwarding"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessSsidBonjourForwarding") getNetworkWirelessSsidBonjourForwarding

> List the Bonjour forwarding setting and rules for the SSID


```javascript
function getNetworkWirelessSsidBonjourForwarding(networkId, number, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var number = 'number';

    controller.getNetworkWirelessSsidBonjourForwarding(networkId, number, function(error, response, context) {

    
    });
```



### <a name="update_network_wireless_ssid_bonjour_forwarding"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.updateNetworkWirelessSsidBonjourForwarding") updateNetworkWirelessSsidBonjourForwarding

> Update the bonjour forwarding setting and rules for the SSID


```javascript
function updateNetworkWirelessSsidBonjourForwarding(networkId, number, updateNetworkWirelessSsidBonjourForwarding, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkWirelessSsidBonjourForwarding |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var number = 'number';
    var updateNetworkWirelessSsidBonjourForwarding = new UpdateNetworkWirelessSsidBonjourForwarding({"key":"value"});

    controller.updateNetworkWirelessSsidBonjourForwarding(networkId, number, updateNetworkWirelessSsidBonjourForwarding, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_ssid_device_type_group_policies"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessSsidDeviceTypeGroupPolicies") getNetworkWirelessSsidDeviceTypeGroupPolicies

> List the device type group policies for the SSID


```javascript
function getNetworkWirelessSsidDeviceTypeGroupPolicies(networkId, number, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var number = 'number';

    controller.getNetworkWirelessSsidDeviceTypeGroupPolicies(networkId, number, function(error, response, context) {

    
    });
```



### <a name="update_network_wireless_ssid_device_type_group_policies"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.updateNetworkWirelessSsidDeviceTypeGroupPolicies") updateNetworkWirelessSsidDeviceTypeGroupPolicies

> Update the device type group policies for the SSID


```javascript
function updateNetworkWirelessSsidDeviceTypeGroupPolicies(networkId, number, updateNetworkWirelessSsidDeviceTypeGroupPolicies, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkWirelessSsidDeviceTypeGroupPolicies |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var number = 'number';
    var updateNetworkWirelessSsidDeviceTypeGroupPolicies = new UpdateNetworkWirelessSsidDeviceTypeGroupPolicies({"key":"value"});

    controller.updateNetworkWirelessSsidDeviceTypeGroupPolicies(networkId, number, updateNetworkWirelessSsidDeviceTypeGroupPolicies, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_ssid_firewall_l3_firewall_rules"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessSsidFirewallL3FirewallRules") getNetworkWirelessSsidFirewallL3FirewallRules

> Return the L3 firewall rules for an SSID on an MR network


```javascript
function getNetworkWirelessSsidFirewallL3FirewallRules(networkId, number, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var number = 'number';

    controller.getNetworkWirelessSsidFirewallL3FirewallRules(networkId, number, function(error, response, context) {

    
    });
```



### <a name="update_network_wireless_ssid_firewall_l3_firewall_rules"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.updateNetworkWirelessSsidFirewallL3FirewallRules") updateNetworkWirelessSsidFirewallL3FirewallRules

> Update the L3 firewall rules of an SSID on an MR network


```javascript
function updateNetworkWirelessSsidFirewallL3FirewallRules(networkId, number, updateNetworkWirelessSsidFirewallL3FirewallRules, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkWirelessSsidFirewallL3FirewallRules |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var number = 'number';
    var updateNetworkWirelessSsidFirewallL3FirewallRules = new UpdateNetworkWirelessSsidFirewallL3FirewallRules({"key":"value"});

    controller.updateNetworkWirelessSsidFirewallL3FirewallRules(networkId, number, updateNetworkWirelessSsidFirewallL3FirewallRules, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_ssid_firewall_l7_firewall_rules"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessSsidFirewallL7FirewallRules") getNetworkWirelessSsidFirewallL7FirewallRules

> Return the L7 firewall rules for an SSID on an MR network


```javascript
function getNetworkWirelessSsidFirewallL7FirewallRules(networkId, number, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var number = 'number';

    controller.getNetworkWirelessSsidFirewallL7FirewallRules(networkId, number, function(error, response, context) {

    
    });
```



### <a name="update_network_wireless_ssid_firewall_l7_firewall_rules"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.updateNetworkWirelessSsidFirewallL7FirewallRules") updateNetworkWirelessSsidFirewallL7FirewallRules

> Update the L7 firewall rules of an SSID on an MR network


```javascript
function updateNetworkWirelessSsidFirewallL7FirewallRules(networkId, number, updateNetworkWirelessSsidFirewallL7FirewallRules, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkWirelessSsidFirewallL7FirewallRules |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var number = 'number';
    var updateNetworkWirelessSsidFirewallL7FirewallRules = new UpdateNetworkWirelessSsidFirewallL7FirewallRules({"key":"value"});

    controller.updateNetworkWirelessSsidFirewallL7FirewallRules(networkId, number, updateNetworkWirelessSsidFirewallL7FirewallRules, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_ssid_identity_psks"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessSsidIdentityPsks") getNetworkWirelessSsidIdentityPsks

> List all Identity PSKs in a wireless network


```javascript
function getNetworkWirelessSsidIdentityPsks(networkId, number, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var number = 'number';

    controller.getNetworkWirelessSsidIdentityPsks(networkId, number, function(error, response, context) {

    
    });
```



### <a name="create_network_wireless_ssid_identity_psk"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.createNetworkWirelessSsidIdentityPsk") createNetworkWirelessSsidIdentityPsk

> Create an Identity PSK


```javascript
function createNetworkWirelessSsidIdentityPsk(networkId, number, createNetworkWirelessSsidIdentityPsk, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkWirelessSsidIdentityPsk |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var number = 'number';
    var createNetworkWirelessSsidIdentityPsk = new CreateNetworkWirelessSsidIdentityPsk({"key":"value"});

    controller.createNetworkWirelessSsidIdentityPsk(networkId, number, createNetworkWirelessSsidIdentityPsk, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_ssid_identity_psk"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessSsidIdentityPsk") getNetworkWirelessSsidIdentityPsk

> Return an Identity PSK


```javascript
function getNetworkWirelessSsidIdentityPsk(networkId, number, identityPskId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |
| identityPskId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var number = 'number';
    var identityPskId = 'identityPskId';

    controller.getNetworkWirelessSsidIdentityPsk(networkId, number, identityPskId, function(error, response, context) {

    
    });
```



### <a name="update_network_wireless_ssid_identity_psk"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.updateNetworkWirelessSsidIdentityPsk") updateNetworkWirelessSsidIdentityPsk

> Update an Identity PSK


```javascript
function updateNetworkWirelessSsidIdentityPsk(networkId, number, identityPskId, updateNetworkWirelessSsidIdentityPsk, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |
| identityPskId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkWirelessSsidIdentityPsk |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var number = 'number';
    var identityPskId = 'identityPskId';
    var updateNetworkWirelessSsidIdentityPsk = new UpdateNetworkWirelessSsidIdentityPsk({"key":"value"});

    controller.updateNetworkWirelessSsidIdentityPsk(networkId, number, identityPskId, updateNetworkWirelessSsidIdentityPsk, function(error, response, context) {

    
    });
```



### <a name="delete_network_wireless_ssid_identity_psk"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.deleteNetworkWirelessSsidIdentityPsk") deleteNetworkWirelessSsidIdentityPsk

> Delete an Identity PSK


```javascript
function deleteNetworkWirelessSsidIdentityPsk(networkId, number, identityPskId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |
| identityPskId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var number = 'number';
    var identityPskId = 'identityPskId';

    controller.deleteNetworkWirelessSsidIdentityPsk(networkId, number, identityPskId, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_ssid_splash_settings"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessSsidSplashSettings") getNetworkWirelessSsidSplashSettings

> Display the splash page settings for the given SSID


```javascript
function getNetworkWirelessSsidSplashSettings(networkId, number, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var number = 'number';

    controller.getNetworkWirelessSsidSplashSettings(networkId, number, function(error, response, context) {

    
    });
```



### <a name="update_network_wireless_ssid_splash_settings"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.updateNetworkWirelessSsidSplashSettings") updateNetworkWirelessSsidSplashSettings

> Modify the splash page settings for the given SSID


```javascript
function updateNetworkWirelessSsidSplashSettings(networkId, number, updateNetworkWirelessSsidSplashSettings, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkWirelessSsidSplashSettings |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var number = 'number';
    var updateNetworkWirelessSsidSplashSettings = new UpdateNetworkWirelessSsidSplashSettings({"key":"value"});

    controller.updateNetworkWirelessSsidSplashSettings(networkId, number, updateNetworkWirelessSsidSplashSettings, function(error, response, context) {

    
    });
```



### <a name="update_network_wireless_ssid_traffic_shaping_rules"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.updateNetworkWirelessSsidTrafficShapingRules") updateNetworkWirelessSsidTrafficShapingRules

> Update the traffic shaping settings for an SSID on an MR network


```javascript
function updateNetworkWirelessSsidTrafficShapingRules(networkId, number, updateNetworkWirelessSsidTrafficShapingRules, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkWirelessSsidTrafficShapingRules |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var number = 'number';
    var updateNetworkWirelessSsidTrafficShapingRules = new UpdateNetworkWirelessSsidTrafficShapingRules({"key":"value"});

    controller.updateNetworkWirelessSsidTrafficShapingRules(networkId, number, updateNetworkWirelessSsidTrafficShapingRules, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_ssid_traffic_shaping_rules"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessSsidTrafficShapingRules") getNetworkWirelessSsidTrafficShapingRules

> Display the traffic shaping settings for a SSID on an MR network


```javascript
function getNetworkWirelessSsidTrafficShapingRules(networkId, number, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var number = 'number';

    controller.getNetworkWirelessSsidTrafficShapingRules(networkId, number, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_ssid_vpn"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessSsidVpn") getNetworkWirelessSsidVpn

> List the VPN settings for the SSID.


```javascript
function getNetworkWirelessSsidVpn(networkId, number, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var number = 'number';

    controller.getNetworkWirelessSsidVpn(networkId, number, function(error, response, context) {

    
    });
```



### <a name="update_network_wireless_ssid_vpn"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.updateNetworkWirelessSsidVpn") updateNetworkWirelessSsidVpn

> Update the VPN settings for the SSID


```javascript
function updateNetworkWirelessSsidVpn(networkId, number, updateNetworkWirelessSsidVpn, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| number |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkWirelessSsidVpn |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var number = 'number';
    var updateNetworkWirelessSsidVpn = new UpdateNetworkWirelessSsidVpn({"key":"value"});

    controller.updateNetworkWirelessSsidVpn(networkId, number, updateNetworkWirelessSsidVpn, function(error, response, context) {

    
    });
```



### <a name="get_network_wireless_usage_history"></a>![Method: ](https://apidocs.io/img/method.png ".WirelessController.getNetworkWirelessUsageHistory") getNetworkWirelessUsageHistory

> Return AP usage over time for a device or network client


```javascript
function getNetworkWirelessUsageHistory(networkId, t0, t1, timespan, resolution, autoResolution, clientId, deviceSerial, apTag, band, ssid, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 7 days. |
| resolution |  ``` Optional ```  | The time resolution in seconds for returned data. The valid resolutions are: 300, 600, 1200, 3600, 14400, 86400. The default is 86400. |
| autoResolution |  ``` Optional ```  | Automatically select a data resolution based on the given timespan; this overrides the value specified by the 'resolution' parameter. The default setting is false. |
| clientId |  ``` Optional ```  | Filter results by network client to return per-device AP usage over time inner joined by the queried client's connection history. |
| deviceSerial |  ``` Optional ```  | Filter results by device. Requires :band. |
| apTag |  ``` Optional ```  | Filter results by AP tag; either :clientId or :deviceSerial must be jointly specified. |
| band |  ``` Optional ```  | Filter results by band (either '2.4' or '5'). |
| ssid |  ``` Optional ```  | Filter results by SSID number. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 119.778968619545;
    var resolution = 119;
    var autoResolution = false;
    var clientId = 'clientId';
    var deviceSerial = 'deviceSerial';
    var apTag = 'apTag';
    var band = Object.keys(band)[0];
    var ssid = 119;

    controller.getNetworkWirelessUsageHistory(networkId, t0, t1, timespan, resolution, autoResolution, clientId, deviceSerial, apTag, band, ssid, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="camera_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CameraController") CameraController

### Get singleton instance

The singleton instance of the ``` CameraController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CameraController;
```

### <a name="get_device_camera_analytics_live"></a>![Method: ](https://apidocs.io/img/method.png ".CameraController.getDeviceCameraAnalyticsLive") getDeviceCameraAnalyticsLive

> Returns live state from camera of analytics zones


```javascript
function getDeviceCameraAnalyticsLive(serial, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';

    controller.getDeviceCameraAnalyticsLive(serial, function(error, response, context) {

    
    });
```



### <a name="get_device_camera_analytics_overview"></a>![Method: ](https://apidocs.io/img/method.png ".CameraController.getDeviceCameraAnalyticsOverview") getDeviceCameraAnalyticsOverview

> Returns an overview of aggregate analytics data for a timespan


```javascript
function getDeviceCameraAnalyticsOverview(serial, t0, t1, timespan, objectType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 365 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 7 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 7 days. The default is 1 hour. |
| objectType |  ``` Optional ```  | [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. |



#### Example Usage

```javascript

    var serial = 'serial';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 119.778968619545;
    var objectType = Object.keys(objectType)[0];

    controller.getDeviceCameraAnalyticsOverview(serial, t0, t1, timespan, objectType, function(error, response, context) {

    
    });
```



### <a name="get_device_camera_analytics_recent"></a>![Method: ](https://apidocs.io/img/method.png ".CameraController.getDeviceCameraAnalyticsRecent") getDeviceCameraAnalyticsRecent

> Returns most recent record for analytics zones


```javascript
function getDeviceCameraAnalyticsRecent(serial, objectType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| objectType |  ``` Optional ```  | [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. |



#### Example Usage

```javascript

    var serial = 'serial';
    var objectType = Object.keys(objectType)[0];

    controller.getDeviceCameraAnalyticsRecent(serial, objectType, function(error, response, context) {

    
    });
```



### <a name="get_device_camera_analytics_zones"></a>![Method: ](https://apidocs.io/img/method.png ".CameraController.getDeviceCameraAnalyticsZones") getDeviceCameraAnalyticsZones

> Returns all configured analytic zones for this camera


```javascript
function getDeviceCameraAnalyticsZones(serial, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';

    controller.getDeviceCameraAnalyticsZones(serial, function(error, response, context) {

    
    });
```



### <a name="get_device_camera_analytics_zone_history"></a>![Method: ](https://apidocs.io/img/method.png ".CameraController.getDeviceCameraAnalyticsZoneHistory") getDeviceCameraAnalyticsZoneHistory

> Return historical records for analytic zones


```javascript
function getDeviceCameraAnalyticsZoneHistory(serial, zoneId, t0, t1, timespan, resolution, objectType, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| zoneId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 365 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 14 hours after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 14 hours. The default is 1 hour. |
| resolution |  ``` Optional ```  | The time resolution in seconds for returned data. The valid resolutions are: 60. The default is 60. |
| objectType |  ``` Optional ```  | [optional] The object type for which analytics will be retrieved. The default object type is person. The available types are [person, vehicle]. |



#### Example Usage

```javascript

    var serial = 'serial';
    var zoneId = 'zoneId';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 119.778968619545;
    var resolution = 119;
    var objectType = Object.keys(objectType)[0];

    controller.getDeviceCameraAnalyticsZoneHistory(serial, zoneId, t0, t1, timespan, resolution, objectType, function(error, response, context) {

    
    });
```



### <a name="generate_device_camera_snapshot"></a>![Method: ](https://apidocs.io/img/method.png ".CameraController.generateDeviceCameraSnapshot") generateDeviceCameraSnapshot

> Generate a snapshot of what the camera sees at the specified time and return a link to that image.


```javascript
function generateDeviceCameraSnapshot(serial, generateDeviceCameraSnapshot, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| generateDeviceCameraSnapshot |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';
    var generateDeviceCameraSnapshot = new GenerateDeviceCameraSnapshot({"key":"value"});

    controller.generateDeviceCameraSnapshot(serial, generateDeviceCameraSnapshot, function(error, response, context) {

    
    });
```



### <a name="get_device_camera_quality_and_retention"></a>![Method: ](https://apidocs.io/img/method.png ".CameraController.getDeviceCameraQualityAndRetention") getDeviceCameraQualityAndRetention

> Returns quality and retention settings for the given camera


```javascript
function getDeviceCameraQualityAndRetention(serial, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';

    controller.getDeviceCameraQualityAndRetention(serial, function(error, response, context) {

    
    });
```



### <a name="update_device_camera_quality_and_retention"></a>![Method: ](https://apidocs.io/img/method.png ".CameraController.updateDeviceCameraQualityAndRetention") updateDeviceCameraQualityAndRetention

> Update quality and retention settings for the given camera


```javascript
function updateDeviceCameraQualityAndRetention(serial, updateDeviceCameraQualityAndRetention, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| updateDeviceCameraQualityAndRetention |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';
    var updateDeviceCameraQualityAndRetention = new UpdateDeviceCameraQualityAndRetention({"key":"value"});

    controller.updateDeviceCameraQualityAndRetention(serial, updateDeviceCameraQualityAndRetention, function(error, response, context) {

    
    });
```



### <a name="get_device_camera_sense"></a>![Method: ](https://apidocs.io/img/method.png ".CameraController.getDeviceCameraSense") getDeviceCameraSense

> Returns sense settings for a given camera


```javascript
function getDeviceCameraSense(serial, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';

    controller.getDeviceCameraSense(serial, function(error, response, context) {

    
    });
```



### <a name="update_device_camera_sense"></a>![Method: ](https://apidocs.io/img/method.png ".CameraController.updateDeviceCameraSense") updateDeviceCameraSense

> Update sense settings for the given camera


```javascript
function updateDeviceCameraSense(serial, updateDeviceCameraSense, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| updateDeviceCameraSense |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';
    var updateDeviceCameraSense = new UpdateDeviceCameraSense({"key":"value"});

    controller.updateDeviceCameraSense(serial, updateDeviceCameraSense, function(error, response, context) {

    
    });
```



### <a name="get_device_camera_sense_object_detection_models"></a>![Method: ](https://apidocs.io/img/method.png ".CameraController.getDeviceCameraSenseObjectDetectionModels") getDeviceCameraSenseObjectDetectionModels

> Returns the MV Sense object detection model list for the given camera


```javascript
function getDeviceCameraSenseObjectDetectionModels(serial, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';

    controller.getDeviceCameraSenseObjectDetectionModels(serial, function(error, response, context) {

    
    });
```



### <a name="get_device_camera_video_settings"></a>![Method: ](https://apidocs.io/img/method.png ".CameraController.getDeviceCameraVideoSettings") getDeviceCameraVideoSettings

> Returns video settings for the given camera


```javascript
function getDeviceCameraVideoSettings(serial, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';

    controller.getDeviceCameraVideoSettings(serial, function(error, response, context) {

    
    });
```



### <a name="update_device_camera_video_settings"></a>![Method: ](https://apidocs.io/img/method.png ".CameraController.updateDeviceCameraVideoSettings") updateDeviceCameraVideoSettings

> Update video settings for the given camera


```javascript
function updateDeviceCameraVideoSettings(serial, updateDeviceCameraVideoSettings, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| updateDeviceCameraVideoSettings |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';
    var updateDeviceCameraVideoSettings = new UpdateDeviceCameraVideoSettings({"key":"value"});

    controller.updateDeviceCameraVideoSettings(serial, updateDeviceCameraVideoSettings, function(error, response, context) {

    
    });
```



### <a name="get_device_camera_video_link"></a>![Method: ](https://apidocs.io/img/method.png ".CameraController.getDeviceCameraVideoLink") getDeviceCameraVideoLink

> Returns video link to the specified camera. If a timestamp is supplied, it links to that timestamp.


```javascript
function getDeviceCameraVideoLink(serial, timestamp, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| timestamp |  ``` Optional ```  | [optional] The video link will start at this time. The timestamp should be a string in ISO8601 format. If no timestamp is specified, we will assume current time. |



#### Example Usage

```javascript

    var serial = 'serial';
    var timestamp = date("D M d, Y G:i");

    controller.getDeviceCameraVideoLink(serial, timestamp, function(error, response, context) {

    
    });
```



### <a name="get_network_camera_quality_retention_profiles"></a>![Method: ](https://apidocs.io/img/method.png ".CameraController.getNetworkCameraQualityRetentionProfiles") getNetworkCameraQualityRetentionProfiles

> List the quality retention profiles for this network


```javascript
function getNetworkCameraQualityRetentionProfiles(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkCameraQualityRetentionProfiles(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_camera_quality_retention_profile"></a>![Method: ](https://apidocs.io/img/method.png ".CameraController.createNetworkCameraQualityRetentionProfile") createNetworkCameraQualityRetentionProfile

> Creates new quality retention profile for this network.


```javascript
function createNetworkCameraQualityRetentionProfile(networkId, createNetworkCameraQualityRetentionProfile, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkCameraQualityRetentionProfile |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var createNetworkCameraQualityRetentionProfile = new CreateNetworkCameraQualityRetentionProfile({"key":"value"});

    controller.createNetworkCameraQualityRetentionProfile(networkId, createNetworkCameraQualityRetentionProfile, function(error, response, context) {

    
    });
```



### <a name="get_network_camera_quality_retention_profile"></a>![Method: ](https://apidocs.io/img/method.png ".CameraController.getNetworkCameraQualityRetentionProfile") getNetworkCameraQualityRetentionProfile

> Retrieve a single quality retention profile


```javascript
function getNetworkCameraQualityRetentionProfile(networkId, qualityRetentionProfileId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| qualityRetentionProfileId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var qualityRetentionProfileId = 'qualityRetentionProfileId';

    controller.getNetworkCameraQualityRetentionProfile(networkId, qualityRetentionProfileId, function(error, response, context) {

    
    });
```



### <a name="update_network_camera_quality_retention_profile"></a>![Method: ](https://apidocs.io/img/method.png ".CameraController.updateNetworkCameraQualityRetentionProfile") updateNetworkCameraQualityRetentionProfile

> Update an existing quality retention profile for this network.


```javascript
function updateNetworkCameraQualityRetentionProfile(networkId, qualityRetentionProfileId, updateNetworkCameraQualityRetentionProfile, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| qualityRetentionProfileId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkCameraQualityRetentionProfile |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var qualityRetentionProfileId = 'qualityRetentionProfileId';
    var updateNetworkCameraQualityRetentionProfile = new UpdateNetworkCameraQualityRetentionProfile({"key":"value"});

    controller.updateNetworkCameraQualityRetentionProfile(networkId, qualityRetentionProfileId, updateNetworkCameraQualityRetentionProfile, function(error, response, context) {

    
    });
```



### <a name="delete_network_camera_quality_retention_profile"></a>![Method: ](https://apidocs.io/img/method.png ".CameraController.deleteNetworkCameraQualityRetentionProfile") deleteNetworkCameraQualityRetentionProfile

> Delete an existing quality retention profile for this network.


```javascript
function deleteNetworkCameraQualityRetentionProfile(networkId, qualityRetentionProfileId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| qualityRetentionProfileId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var qualityRetentionProfileId = 'qualityRetentionProfileId';

    controller.deleteNetworkCameraQualityRetentionProfile(networkId, qualityRetentionProfileId, function(error, response, context) {

    
    });
```



### <a name="get_network_camera_schedules"></a>![Method: ](https://apidocs.io/img/method.png ".CameraController.getNetworkCameraSchedules") getNetworkCameraSchedules

> Returns a list of all camera recording schedules.


```javascript
function getNetworkCameraSchedules(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkCameraSchedules(networkId, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="appliance_controller"></a>![Class: ](https://apidocs.io/img/class.png ".ApplianceController") ApplianceController

### Get singleton instance

The singleton instance of the ``` ApplianceController ``` class can be accessed from the API Client.

```javascript
var controller = lib.ApplianceController;
```

### <a name="get_device_appliance_dhcp_subnets"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getDeviceApplianceDhcpSubnets") getDeviceApplianceDhcpSubnets

> Return the DHCP subnet information for an appliance


```javascript
function getDeviceApplianceDhcpSubnets(serial, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';

    controller.getDeviceApplianceDhcpSubnets(serial, function(error, response, context) {

    
    });
```



### <a name="get_device_appliance_performance"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getDeviceAppliancePerformance") getDeviceAppliancePerformance

> Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.


```javascript
function getDeviceAppliancePerformance(serial, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';

    controller.getDeviceAppliancePerformance(serial, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_client_security_events"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceClientSecurityEvents") getNetworkApplianceClientSecurityEvents

> List the security events for a client. Clients can be identified by a client key or either the MAC or IP depending on whether the network uses Track-by-IP.


```javascript
function getNetworkApplianceClientSecurityEvents(networkId, clientId, t0, t1, timespan, perPage, startingAfter, endingBefore, sortOrder, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| clientId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 791 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 791 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 791 days. The default is 31 days. |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| sortOrder |  ``` Optional ```  | Sorted order of security events based on event detection time. Order options are 'ascending' or 'descending'. Default is ascending order. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var clientId = 'clientId';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 119.778968619545;
    var perPage = 119;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';
    var sortOrder = Object.keys(sortOrder)[0];

    controller.getNetworkApplianceClientSecurityEvents(networkId, clientId, t0, t1, timespan, perPage, startingAfter, endingBefore, sortOrder, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_connectivity_monitoring_destinations"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceConnectivityMonitoringDestinations") getNetworkApplianceConnectivityMonitoringDestinations

> Return the connectivity testing destinations for an MX network


```javascript
function getNetworkApplianceConnectivityMonitoringDestinations(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkApplianceConnectivityMonitoringDestinations(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_appliance_connectivity_monitoring_destinations"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateNetworkApplianceConnectivityMonitoringDestinations") updateNetworkApplianceConnectivityMonitoringDestinations

> Update the connectivity testing destinations for an MX network


```javascript
function updateNetworkApplianceConnectivityMonitoringDestinations(networkId, updateNetworkApplianceConnectivityMonitoringDestinations, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkApplianceConnectivityMonitoringDestinations |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkApplianceConnectivityMonitoringDestinations = new UpdateNetworkApplianceConnectivityMonitoringDestinations({"key":"value"});

    controller.updateNetworkApplianceConnectivityMonitoringDestinations(networkId, updateNetworkApplianceConnectivityMonitoringDestinations, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_content_filtering"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceContentFiltering") getNetworkApplianceContentFiltering

> Return the content filtering settings for an MX network


```javascript
function getNetworkApplianceContentFiltering(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkApplianceContentFiltering(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_appliance_content_filtering"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateNetworkApplianceContentFiltering") updateNetworkApplianceContentFiltering

> Update the content filtering settings for an MX network


```javascript
function updateNetworkApplianceContentFiltering(networkId, updateNetworkApplianceContentFiltering, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkApplianceContentFiltering |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkApplianceContentFiltering = new UpdateNetworkApplianceContentFiltering({"key":"value"});

    controller.updateNetworkApplianceContentFiltering(networkId, updateNetworkApplianceContentFiltering, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_content_filtering_categories"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceContentFilteringCategories") getNetworkApplianceContentFilteringCategories

> List all available content filtering categories for an MX network


```javascript
function getNetworkApplianceContentFilteringCategories(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkApplianceContentFilteringCategories(networkId, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_firewall_cellular_firewall_rules"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceFirewallCellularFirewallRules") getNetworkApplianceFirewallCellularFirewallRules

> Return the cellular firewall rules for an MX network


```javascript
function getNetworkApplianceFirewallCellularFirewallRules(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkApplianceFirewallCellularFirewallRules(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_appliance_firewall_cellular_firewall_rules"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateNetworkApplianceFirewallCellularFirewallRules") updateNetworkApplianceFirewallCellularFirewallRules

> Update the cellular firewall rules of an MX network


```javascript
function updateNetworkApplianceFirewallCellularFirewallRules(networkId, updateNetworkApplianceFirewallCellularFirewallRules, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkApplianceFirewallCellularFirewallRules |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkApplianceFirewallCellularFirewallRules = new UpdateNetworkApplianceFirewallCellularFirewallRules({"key":"value"});

    controller.updateNetworkApplianceFirewallCellularFirewallRules(networkId, updateNetworkApplianceFirewallCellularFirewallRules, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_firewall_firewalled_services"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceFirewallFirewalledServices") getNetworkApplianceFirewallFirewalledServices

> List the appliance services and their accessibility rules


```javascript
function getNetworkApplianceFirewallFirewalledServices(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkApplianceFirewallFirewalledServices(networkId, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_firewall_firewalled_service"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceFirewallFirewalledService") getNetworkApplianceFirewallFirewalledService

> Return the accessibility settings of the given service ('ICMP', 'web', or 'SNMP')


```javascript
function getNetworkApplianceFirewallFirewalledService(networkId, service, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| service |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var service = 'service';

    controller.getNetworkApplianceFirewallFirewalledService(networkId, service, function(error, response, context) {

    
    });
```



### <a name="update_network_appliance_firewall_firewalled_service"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateNetworkApplianceFirewallFirewalledService") updateNetworkApplianceFirewallFirewalledService

> Updates the accessibility settings for the given service ('ICMP', 'web', or 'SNMP')


```javascript
function updateNetworkApplianceFirewallFirewalledService(networkId, service, updateNetworkApplianceFirewallFirewalledService, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| service |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkApplianceFirewallFirewalledService |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var service = 'service';
    var updateNetworkApplianceFirewallFirewalledService = new UpdateNetworkApplianceFirewallFirewalledService({"key":"value"});

    controller.updateNetworkApplianceFirewallFirewalledService(networkId, service, updateNetworkApplianceFirewallFirewalledService, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_firewall_inbound_firewall_rules"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceFirewallInboundFirewallRules") getNetworkApplianceFirewallInboundFirewallRules

> Return the inbound firewall rules for an MX network


```javascript
function getNetworkApplianceFirewallInboundFirewallRules(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkApplianceFirewallInboundFirewallRules(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_appliance_firewall_inbound_firewall_rules"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateNetworkApplianceFirewallInboundFirewallRules") updateNetworkApplianceFirewallInboundFirewallRules

> Update the inbound firewall rules of an MX network


```javascript
function updateNetworkApplianceFirewallInboundFirewallRules(networkId, updateNetworkApplianceFirewallInboundFirewallRules, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkApplianceFirewallInboundFirewallRules |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkApplianceFirewallInboundFirewallRules = new UpdateNetworkApplianceFirewallInboundFirewallRules({"key":"value"});

    controller.updateNetworkApplianceFirewallInboundFirewallRules(networkId, updateNetworkApplianceFirewallInboundFirewallRules, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_firewall_l3_firewall_rules"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceFirewallL3FirewallRules") getNetworkApplianceFirewallL3FirewallRules

> Return the L3 firewall rules for an MX network


```javascript
function getNetworkApplianceFirewallL3FirewallRules(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkApplianceFirewallL3FirewallRules(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_appliance_firewall_l3_firewall_rules"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateNetworkApplianceFirewallL3FirewallRules") updateNetworkApplianceFirewallL3FirewallRules

> Update the L3 firewall rules of an MX network


```javascript
function updateNetworkApplianceFirewallL3FirewallRules(networkId, updateNetworkApplianceFirewallL3FirewallRules, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkApplianceFirewallL3FirewallRules |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkApplianceFirewallL3FirewallRules = new UpdateNetworkApplianceFirewallL3FirewallRules({"key":"value"});

    controller.updateNetworkApplianceFirewallL3FirewallRules(networkId, updateNetworkApplianceFirewallL3FirewallRules, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_firewall_l7_firewall_rules"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceFirewallL7FirewallRules") getNetworkApplianceFirewallL7FirewallRules

> List the MX L7 firewall rules for an MX network


```javascript
function getNetworkApplianceFirewallL7FirewallRules(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkApplianceFirewallL7FirewallRules(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_appliance_firewall_l7_firewall_rules"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateNetworkApplianceFirewallL7FirewallRules") updateNetworkApplianceFirewallL7FirewallRules

> Update the MX L7 firewall rules for an MX network


```javascript
function updateNetworkApplianceFirewallL7FirewallRules(networkId, updateNetworkApplianceFirewallL7FirewallRules, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkApplianceFirewallL7FirewallRules |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkApplianceFirewallL7FirewallRules = new UpdateNetworkApplianceFirewallL7FirewallRules({"key":"value"});

    controller.updateNetworkApplianceFirewallL7FirewallRules(networkId, updateNetworkApplianceFirewallL7FirewallRules, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_firewall_l7_firewall_rules_application_categories"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceFirewallL7FirewallRulesApplicationCategories") getNetworkApplianceFirewallL7FirewallRulesApplicationCategories

> Return the L7 firewall application categories and their associated applications for an MX network


```javascript
function getNetworkApplianceFirewallL7FirewallRulesApplicationCategories(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkApplianceFirewallL7FirewallRulesApplicationCategories(networkId, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_firewall_one_to_many_nat_rules"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceFirewallOneToManyNatRules") getNetworkApplianceFirewallOneToManyNatRules

> Return the 1:Many NAT mapping rules for an MX network


```javascript
function getNetworkApplianceFirewallOneToManyNatRules(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkApplianceFirewallOneToManyNatRules(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_appliance_firewall_one_to_many_nat_rules"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateNetworkApplianceFirewallOneToManyNatRules") updateNetworkApplianceFirewallOneToManyNatRules

> Set the 1:Many NAT mapping rules for an MX network


```javascript
function updateNetworkApplianceFirewallOneToManyNatRules(networkId, updateNetworkApplianceFirewallOneToManyNatRules, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkApplianceFirewallOneToManyNatRules |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkApplianceFirewallOneToManyNatRules = new UpdateNetworkApplianceFirewallOneToManyNatRules({"key":"value"});

    controller.updateNetworkApplianceFirewallOneToManyNatRules(networkId, updateNetworkApplianceFirewallOneToManyNatRules, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_firewall_one_to_one_nat_rules"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceFirewallOneToOneNatRules") getNetworkApplianceFirewallOneToOneNatRules

> Return the 1:1 NAT mapping rules for an MX network


```javascript
function getNetworkApplianceFirewallOneToOneNatRules(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkApplianceFirewallOneToOneNatRules(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_appliance_firewall_one_to_one_nat_rules"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateNetworkApplianceFirewallOneToOneNatRules") updateNetworkApplianceFirewallOneToOneNatRules

> Set the 1:1 NAT mapping rules for an MX network


```javascript
function updateNetworkApplianceFirewallOneToOneNatRules(networkId, updateNetworkApplianceFirewallOneToOneNatRules, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkApplianceFirewallOneToOneNatRules |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkApplianceFirewallOneToOneNatRules = new UpdateNetworkApplianceFirewallOneToOneNatRules({"key":"value"});

    controller.updateNetworkApplianceFirewallOneToOneNatRules(networkId, updateNetworkApplianceFirewallOneToOneNatRules, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_firewall_port_forwarding_rules"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceFirewallPortForwardingRules") getNetworkApplianceFirewallPortForwardingRules

> Return the port forwarding rules for an MX network


```javascript
function getNetworkApplianceFirewallPortForwardingRules(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkApplianceFirewallPortForwardingRules(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_appliance_firewall_port_forwarding_rules"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateNetworkApplianceFirewallPortForwardingRules") updateNetworkApplianceFirewallPortForwardingRules

> Update the port forwarding rules for an MX network


```javascript
function updateNetworkApplianceFirewallPortForwardingRules(networkId, updateNetworkApplianceFirewallPortForwardingRules, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkApplianceFirewallPortForwardingRules |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkApplianceFirewallPortForwardingRules = new UpdateNetworkApplianceFirewallPortForwardingRules({"key":"value"});

    controller.updateNetworkApplianceFirewallPortForwardingRules(networkId, updateNetworkApplianceFirewallPortForwardingRules, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_ports"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkAppliancePorts") getNetworkAppliancePorts

> List per-port VLAN settings for all ports of a MX.


```javascript
function getNetworkAppliancePorts(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkAppliancePorts(networkId, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_port"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkAppliancePort") getNetworkAppliancePort

> Return per-port VLAN settings for a single MX port.


```javascript
function getNetworkAppliancePort(networkId, portId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| portId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var portId = 'portId';

    controller.getNetworkAppliancePort(networkId, portId, function(error, response, context) {

    
    });
```



### <a name="update_network_appliance_port"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateNetworkAppliancePort") updateNetworkAppliancePort

> Update the per-port VLAN settings for a single MX port.


```javascript
function updateNetworkAppliancePort(networkId, portId, updateNetworkAppliancePort, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| portId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkAppliancePort |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var portId = 'portId';
    var updateNetworkAppliancePort = new UpdateNetworkAppliancePort({"key":"value"});

    controller.updateNetworkAppliancePort(networkId, portId, updateNetworkAppliancePort, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_security_events"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceSecurityEvents") getNetworkApplianceSecurityEvents

> List the security events for a network


```javascript
function getNetworkApplianceSecurityEvents(networkId, t0, t1, timespan, perPage, startingAfter, endingBefore, sortOrder, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 365 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days. |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| sortOrder |  ``` Optional ```  | Sorted order of security events based on event detection time. Order options are 'ascending' or 'descending'. Default is ascending order. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 119.778968619545;
    var perPage = 119;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';
    var sortOrder = Object.keys(sortOrder)[0];

    controller.getNetworkApplianceSecurityEvents(networkId, t0, t1, timespan, perPage, startingAfter, endingBefore, sortOrder, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_security_intrusion"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceSecurityIntrusion") getNetworkApplianceSecurityIntrusion

> Returns all supported intrusion settings for an MX network


```javascript
function getNetworkApplianceSecurityIntrusion(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkApplianceSecurityIntrusion(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_appliance_security_intrusion"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateNetworkApplianceSecurityIntrusion") updateNetworkApplianceSecurityIntrusion

> Set the supported intrusion settings for an MX network


```javascript
function updateNetworkApplianceSecurityIntrusion(networkId, updateNetworkApplianceSecurityIntrusion, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkApplianceSecurityIntrusion |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkApplianceSecurityIntrusion = new UpdateNetworkApplianceSecurityIntrusion({"key":"value"});

    controller.updateNetworkApplianceSecurityIntrusion(networkId, updateNetworkApplianceSecurityIntrusion, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_security_malware"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceSecurityMalware") getNetworkApplianceSecurityMalware

> Returns all supported malware settings for an MX network


```javascript
function getNetworkApplianceSecurityMalware(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkApplianceSecurityMalware(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_appliance_security_malware"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateNetworkApplianceSecurityMalware") updateNetworkApplianceSecurityMalware

> Set the supported malware settings for an MX network


```javascript
function updateNetworkApplianceSecurityMalware(networkId, updateNetworkApplianceSecurityMalware, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkApplianceSecurityMalware |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkApplianceSecurityMalware = new UpdateNetworkApplianceSecurityMalware({"key":"value"});

    controller.updateNetworkApplianceSecurityMalware(networkId, updateNetworkApplianceSecurityMalware, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_settings"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceSettings") getNetworkApplianceSettings

> Return the appliance settings for a network


```javascript
function getNetworkApplianceSettings(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkApplianceSettings(networkId, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_single_lan"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceSingleLan") getNetworkApplianceSingleLan

> Return single LAN configuration


```javascript
function getNetworkApplianceSingleLan(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkApplianceSingleLan(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_appliance_single_lan"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateNetworkApplianceSingleLan") updateNetworkApplianceSingleLan

> Update single LAN configuration


```javascript
function updateNetworkApplianceSingleLan(networkId, updateNetworkApplianceSingleLan, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkApplianceSingleLan |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkApplianceSingleLan = new UpdateNetworkApplianceSingleLan({"key":"value"});

    controller.updateNetworkApplianceSingleLan(networkId, updateNetworkApplianceSingleLan, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_static_routes"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceStaticRoutes") getNetworkApplianceStaticRoutes

> List the static routes for an MX or teleworker network


```javascript
function getNetworkApplianceStaticRoutes(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkApplianceStaticRoutes(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_appliance_static_route"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.createNetworkApplianceStaticRoute") createNetworkApplianceStaticRoute

> Add a static route for an MX or teleworker network


```javascript
function createNetworkApplianceStaticRoute(networkId, createNetworkApplianceStaticRoute, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkApplianceStaticRoute |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var createNetworkApplianceStaticRoute = new CreateNetworkApplianceStaticRoute({"key":"value"});

    controller.createNetworkApplianceStaticRoute(networkId, createNetworkApplianceStaticRoute, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_static_route"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceStaticRoute") getNetworkApplianceStaticRoute

> Return a static route for an MX or teleworker network


```javascript
function getNetworkApplianceStaticRoute(networkId, staticRouteId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| staticRouteId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var staticRouteId = 'staticRouteId';

    controller.getNetworkApplianceStaticRoute(networkId, staticRouteId, function(error, response, context) {

    
    });
```



### <a name="update_network_appliance_static_route"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateNetworkApplianceStaticRoute") updateNetworkApplianceStaticRoute

> Update a static route for an MX or teleworker network


```javascript
function updateNetworkApplianceStaticRoute(networkId, staticRouteId, updateNetworkApplianceStaticRoute, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| staticRouteId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkApplianceStaticRoute |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var staticRouteId = 'staticRouteId';
    var updateNetworkApplianceStaticRoute = new UpdateNetworkApplianceStaticRoute({"key":"value"});

    controller.updateNetworkApplianceStaticRoute(networkId, staticRouteId, updateNetworkApplianceStaticRoute, function(error, response, context) {

    
    });
```



### <a name="delete_network_appliance_static_route"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.deleteNetworkApplianceStaticRoute") deleteNetworkApplianceStaticRoute

> Delete a static route from an MX or teleworker network


```javascript
function deleteNetworkApplianceStaticRoute(networkId, staticRouteId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| staticRouteId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var staticRouteId = 'staticRouteId';

    controller.deleteNetworkApplianceStaticRoute(networkId, staticRouteId, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_traffic_shaping"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceTrafficShaping") getNetworkApplianceTrafficShaping

> Display the traffic shaping settings for an MX network


```javascript
function getNetworkApplianceTrafficShaping(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkApplianceTrafficShaping(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_appliance_traffic_shaping"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateNetworkApplianceTrafficShaping") updateNetworkApplianceTrafficShaping

> Update the traffic shaping settings for an MX network


```javascript
function updateNetworkApplianceTrafficShaping(networkId, updateNetworkApplianceTrafficShaping, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkApplianceTrafficShaping |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkApplianceTrafficShaping = new UpdateNetworkApplianceTrafficShaping({"key":"value"});

    controller.updateNetworkApplianceTrafficShaping(networkId, updateNetworkApplianceTrafficShaping, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_traffic_shaping_custom_performance_classes"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceTrafficShapingCustomPerformanceClasses") getNetworkApplianceTrafficShapingCustomPerformanceClasses

> List all custom performance classes for an MX network


```javascript
function getNetworkApplianceTrafficShapingCustomPerformanceClasses(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkApplianceTrafficShapingCustomPerformanceClasses(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_appliance_traffic_shaping_custom_performance_class"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.createNetworkApplianceTrafficShapingCustomPerformanceClass") createNetworkApplianceTrafficShapingCustomPerformanceClass

> Add a custom performance class for an MX network


```javascript
function createNetworkApplianceTrafficShapingCustomPerformanceClass(networkId, createNetworkApplianceTrafficShapingCustomPerformanceClass, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkApplianceTrafficShapingCustomPerformanceClass |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var createNetworkApplianceTrafficShapingCustomPerformanceClass = new CreateNetworkApplianceTrafficShapingCustomPerformanceClass({"key":"value"});

    controller.createNetworkApplianceTrafficShapingCustomPerformanceClass(networkId, createNetworkApplianceTrafficShapingCustomPerformanceClass, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_traffic_shaping_custom_performance_class"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceTrafficShapingCustomPerformanceClass") getNetworkApplianceTrafficShapingCustomPerformanceClass

> Return a custom performance class for an MX network


```javascript
function getNetworkApplianceTrafficShapingCustomPerformanceClass(networkId, customPerformanceClassId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| customPerformanceClassId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var customPerformanceClassId = 'customPerformanceClassId';

    controller.getNetworkApplianceTrafficShapingCustomPerformanceClass(networkId, customPerformanceClassId, function(error, response, context) {

    
    });
```



### <a name="update_network_appliance_traffic_shaping_custom_performance_class"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateNetworkApplianceTrafficShapingCustomPerformanceClass") updateNetworkApplianceTrafficShapingCustomPerformanceClass

> Update a custom performance class for an MX network


```javascript
function updateNetworkApplianceTrafficShapingCustomPerformanceClass(networkId, customPerformanceClassId, updateNetworkApplianceTrafficShapingCustomPerformanceClass, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| customPerformanceClassId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkApplianceTrafficShapingCustomPerformanceClass |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var customPerformanceClassId = 'customPerformanceClassId';
    var updateNetworkApplianceTrafficShapingCustomPerformanceClass = new UpdateNetworkApplianceTrafficShapingCustomPerformanceClass({"key":"value"});

    controller.updateNetworkApplianceTrafficShapingCustomPerformanceClass(networkId, customPerformanceClassId, updateNetworkApplianceTrafficShapingCustomPerformanceClass, function(error, response, context) {

    
    });
```



### <a name="delete_network_appliance_traffic_shaping_custom_performance_class"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.deleteNetworkApplianceTrafficShapingCustomPerformanceClass") deleteNetworkApplianceTrafficShapingCustomPerformanceClass

> Delete a custom performance class from an MX network


```javascript
function deleteNetworkApplianceTrafficShapingCustomPerformanceClass(networkId, customPerformanceClassId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| customPerformanceClassId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var customPerformanceClassId = 'customPerformanceClassId';

    controller.deleteNetworkApplianceTrafficShapingCustomPerformanceClass(networkId, customPerformanceClassId, function(error, response, context) {

    
    });
```



### <a name="update_network_appliance_traffic_shaping_rules"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateNetworkApplianceTrafficShapingRules") updateNetworkApplianceTrafficShapingRules

> Update the traffic shaping settings rules for an MX network


```javascript
function updateNetworkApplianceTrafficShapingRules(networkId, updateNetworkApplianceTrafficShapingRules, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkApplianceTrafficShapingRules |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkApplianceTrafficShapingRules = new UpdateNetworkApplianceTrafficShapingRules({"key":"value"});

    controller.updateNetworkApplianceTrafficShapingRules(networkId, updateNetworkApplianceTrafficShapingRules, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_traffic_shaping_rules"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceTrafficShapingRules") getNetworkApplianceTrafficShapingRules

> Display the traffic shaping settings rules for an MX network


```javascript
function getNetworkApplianceTrafficShapingRules(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkApplianceTrafficShapingRules(networkId, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_traffic_shaping_uplink_bandwidth"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceTrafficShapingUplinkBandwidth") getNetworkApplianceTrafficShapingUplinkBandwidth

> Returns the uplink bandwidth settings for your MX network.


```javascript
function getNetworkApplianceTrafficShapingUplinkBandwidth(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkApplianceTrafficShapingUplinkBandwidth(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_appliance_traffic_shaping_uplink_bandwidth"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateNetworkApplianceTrafficShapingUplinkBandwidth") updateNetworkApplianceTrafficShapingUplinkBandwidth

> Updates the uplink bandwidth settings for your MX network.


```javascript
function updateNetworkApplianceTrafficShapingUplinkBandwidth(networkId, updateNetworkApplianceTrafficShapingUplinkBandwidth, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkApplianceTrafficShapingUplinkBandwidth |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkApplianceTrafficShapingUplinkBandwidth = new UpdateNetworkApplianceTrafficShapingUplinkBandwidth({"key":"value"});

    controller.updateNetworkApplianceTrafficShapingUplinkBandwidth(networkId, updateNetworkApplianceTrafficShapingUplinkBandwidth, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_traffic_shaping_uplink_selection"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceTrafficShapingUplinkSelection") getNetworkApplianceTrafficShapingUplinkSelection

> Show uplink selection settings for an MX network


```javascript
function getNetworkApplianceTrafficShapingUplinkSelection(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkApplianceTrafficShapingUplinkSelection(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_appliance_traffic_shaping_uplink_selection"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateNetworkApplianceTrafficShapingUplinkSelection") updateNetworkApplianceTrafficShapingUplinkSelection

> Update uplink selection settings for an MX network


```javascript
function updateNetworkApplianceTrafficShapingUplinkSelection(networkId, updateNetworkApplianceTrafficShapingUplinkSelection, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkApplianceTrafficShapingUplinkSelection |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkApplianceTrafficShapingUplinkSelection = new UpdateNetworkApplianceTrafficShapingUplinkSelection({"key":"value"});

    controller.updateNetworkApplianceTrafficShapingUplinkSelection(networkId, updateNetworkApplianceTrafficShapingUplinkSelection, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_vlans"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceVlans") getNetworkApplianceVlans

> List the VLANs for an MX network


```javascript
function getNetworkApplianceVlans(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkApplianceVlans(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_appliance_vlan"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.createNetworkApplianceVlan") createNetworkApplianceVlan

> Add a VLAN


```javascript
function createNetworkApplianceVlan(networkId, createNetworkApplianceVlan, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkApplianceVlan |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var createNetworkApplianceVlan = new CreateNetworkApplianceVlan({"key":"value"});

    controller.createNetworkApplianceVlan(networkId, createNetworkApplianceVlan, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_vlans_settings"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceVlansSettings") getNetworkApplianceVlansSettings

> Returns the enabled status of VLANs for the network


```javascript
function getNetworkApplianceVlansSettings(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkApplianceVlansSettings(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_appliance_vlans_settings"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateNetworkApplianceVlansSettings") updateNetworkApplianceVlansSettings

> Enable/Disable VLANs for the given network


```javascript
function updateNetworkApplianceVlansSettings(networkId, updateNetworkApplianceVlansSettings, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkApplianceVlansSettings |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkApplianceVlansSettings = new UpdateNetworkApplianceVlansSettings({"key":"value"});

    controller.updateNetworkApplianceVlansSettings(networkId, updateNetworkApplianceVlansSettings, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_vlan"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceVlan") getNetworkApplianceVlan

> Return a VLAN


```javascript
function getNetworkApplianceVlan(networkId, vlanId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| vlanId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var vlanId = 'vlanId';

    controller.getNetworkApplianceVlan(networkId, vlanId, function(error, response, context) {

    
    });
```



### <a name="update_network_appliance_vlan"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateNetworkApplianceVlan") updateNetworkApplianceVlan

> Update a VLAN


```javascript
function updateNetworkApplianceVlan(networkId, vlanId, updateNetworkApplianceVlan, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| vlanId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkApplianceVlan |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var vlanId = 'vlanId';
    var updateNetworkApplianceVlan = new UpdateNetworkApplianceVlan({"key":"value"});

    controller.updateNetworkApplianceVlan(networkId, vlanId, updateNetworkApplianceVlan, function(error, response, context) {

    
    });
```



### <a name="delete_network_appliance_vlan"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.deleteNetworkApplianceVlan") deleteNetworkApplianceVlan

> Delete a VLAN from a network


```javascript
function deleteNetworkApplianceVlan(networkId, vlanId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| vlanId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var vlanId = 'vlanId';

    controller.deleteNetworkApplianceVlan(networkId, vlanId, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_vpn_bgp"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceVpnBgp") getNetworkApplianceVpnBgp

> Return a Hub BGP Configuration


```javascript
function getNetworkApplianceVpnBgp(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkApplianceVpnBgp(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_appliance_vpn_bgp"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateNetworkApplianceVpnBgp") updateNetworkApplianceVpnBgp

> Update a Hub BGP Configuration


```javascript
function updateNetworkApplianceVpnBgp(networkId, updateNetworkApplianceVpnBgp, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkApplianceVpnBgp |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkApplianceVpnBgp = new UpdateNetworkApplianceVpnBgp({"key":"value"});

    controller.updateNetworkApplianceVpnBgp(networkId, updateNetworkApplianceVpnBgp, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_vpn_site_to_site_vpn"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceVpnSiteToSiteVpn") getNetworkApplianceVpnSiteToSiteVpn

> Return the site-to-site VPN settings of a network. Only valid for MX networks.


```javascript
function getNetworkApplianceVpnSiteToSiteVpn(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkApplianceVpnSiteToSiteVpn(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_appliance_vpn_site_to_site_vpn"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateNetworkApplianceVpnSiteToSiteVpn") updateNetworkApplianceVpnSiteToSiteVpn

> Update the site-to-site VPN settings of a network. Only valid for MX networks in NAT mode.


```javascript
function updateNetworkApplianceVpnSiteToSiteVpn(networkId, updateNetworkApplianceVpnSiteToSiteVpn, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkApplianceVpnSiteToSiteVpn |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkApplianceVpnSiteToSiteVpn = new UpdateNetworkApplianceVpnSiteToSiteVpn({"key":"value"});

    controller.updateNetworkApplianceVpnSiteToSiteVpn(networkId, updateNetworkApplianceVpnSiteToSiteVpn, function(error, response, context) {

    
    });
```



### <a name="get_network_appliance_warm_spare"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getNetworkApplianceWarmSpare") getNetworkApplianceWarmSpare

> Return MX warm spare settings


```javascript
function getNetworkApplianceWarmSpare(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkApplianceWarmSpare(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_appliance_warm_spare"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateNetworkApplianceWarmSpare") updateNetworkApplianceWarmSpare

> Update MX warm spare settings


```javascript
function updateNetworkApplianceWarmSpare(networkId, updateNetworkApplianceWarmSpare, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkApplianceWarmSpare |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkApplianceWarmSpare = new UpdateNetworkApplianceWarmSpare({"key":"value"});

    controller.updateNetworkApplianceWarmSpare(networkId, updateNetworkApplianceWarmSpare, function(error, response, context) {

    
    });
```



### <a name="swap_network_appliance_warm_spare"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.swapNetworkApplianceWarmSpare") swapNetworkApplianceWarmSpare

> Swap MX primary and warm spare appliances


```javascript
function swapNetworkApplianceWarmSpare(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.swapNetworkApplianceWarmSpare(networkId, function(error, response, context) {

    
    });
```



### <a name="get_organization_appliance_security_events"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getOrganizationApplianceSecurityEvents") getOrganizationApplianceSecurityEvents

> List the security events for an organization


```javascript
function getOrganizationApplianceSecurityEvents(organizationId, t0, t1, timespan, perPage, startingAfter, endingBefore, sortOrder, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. Data is gathered after the specified t0 value. The maximum lookback period is 365 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 365 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 365 days. The default is 31 days. |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| sortOrder |  ``` Optional ```  | Sorted order of security events based on event detection time. Order options are 'ascending' or 'descending'. Default is ascending order. |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 119.778968619545;
    var perPage = 119;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';
    var sortOrder = Object.keys(sortOrder)[0];

    controller.getOrganizationApplianceSecurityEvents(organizationId, t0, t1, timespan, perPage, startingAfter, endingBefore, sortOrder, function(error, response, context) {

    
    });
```



### <a name="get_organization_appliance_security_intrusion"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getOrganizationApplianceSecurityIntrusion") getOrganizationApplianceSecurityIntrusion

> Returns all supported intrusion settings for an organization


```javascript
function getOrganizationApplianceSecurityIntrusion(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.getOrganizationApplianceSecurityIntrusion(organizationId, function(error, response, context) {

    
    });
```



### <a name="update_organization_appliance_security_intrusion"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateOrganizationApplianceSecurityIntrusion") updateOrganizationApplianceSecurityIntrusion

> Sets supported intrusion settings for an organization


```javascript
function updateOrganizationApplianceSecurityIntrusion(organizationId, updateOrganizationApplianceSecurityIntrusion, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| updateOrganizationApplianceSecurityIntrusion |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var updateOrganizationApplianceSecurityIntrusion = new UpdateOrganizationApplianceSecurityIntrusion({"key":"value"});

    controller.updateOrganizationApplianceSecurityIntrusion(organizationId, updateOrganizationApplianceSecurityIntrusion, function(error, response, context) {

    
    });
```



### <a name="get_organization_appliance_uplink_statuses"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getOrganizationApplianceUplinkStatuses") getOrganizationApplianceUplinkStatuses

> List the uplink status of every Meraki MX and Z series appliances in the organization


```javascript
function getOrganizationApplianceUplinkStatuses(organizationId, perPage, startingAfter, endingBefore, networkIds, serials, iccids, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| networkIds |  ``` Optional ```  ``` Collection ```  | A list of network IDs. The returned devices will be filtered to only include these networks. |
| serials |  ``` Optional ```  ``` Collection ```  | A list of serial numbers. The returned devices will be filtered to only include these serials. |
| iccids |  ``` Optional ```  ``` Collection ```  | A list of ICCIDs. The returned devices will be filtered to only include these ICCIDs. |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var perPage = 119;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';
    var networkIds = ['networkIds'];
    var serials = ['serials'];
    var iccids = ['iccids'];

    controller.getOrganizationApplianceUplinkStatuses(organizationId, perPage, startingAfter, endingBefore, networkIds, serials, iccids, function(error, response, context) {

    
    });
```



### <a name="get_organization_appliance_vpn_stats"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getOrganizationApplianceVpnStats") getOrganizationApplianceVpnStats

> Show VPN history stat for networks in an organization


```javascript
function getOrganizationApplianceVpnStats(organizationId, perPage, startingAfter, endingBefore, networkIds, t0, t1, timespan, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 300. Default is 300. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| networkIds |  ``` Optional ```  ``` Collection ```  | A list of Meraki network IDs to filter results to contain only specified networks. E.g.: networkIds[]=N_12345678&networkIds[]=L_3456 |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. |
| t1 |  ``` Optional ```  | The end of the timespan for the data. t1 can be a maximum of 31 days after t0. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameters t0 and t1. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var perPage = 119;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';
    var networkIds = ['networkIds'];
    var t0 = 't0';
    var t1 = 't1';
    var timespan = 119.778968619545;

    controller.getOrganizationApplianceVpnStats(organizationId, perPage, startingAfter, endingBefore, networkIds, t0, t1, timespan, function(error, response, context) {

    
    });
```



### <a name="get_organization_appliance_vpn_statuses"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getOrganizationApplianceVpnStatuses") getOrganizationApplianceVpnStatuses

> Show VPN status for networks in an organization


```javascript
function getOrganizationApplianceVpnStatuses(organizationId, perPage, startingAfter, endingBefore, networkIds, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 300. Default is 300. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| networkIds |  ``` Optional ```  ``` Collection ```  | A list of Meraki network IDs to filter results to contain only specified networks. E.g.: networkIds[]=N_12345678&networkIds[]=L_3456 |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var perPage = 119;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';
    var networkIds = ['networkIds'];

    controller.getOrganizationApplianceVpnStatuses(organizationId, perPage, startingAfter, endingBefore, networkIds, function(error, response, context) {

    
    });
```



### <a name="get_organization_appliance_vpn_third_party_vpn_peers"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getOrganizationApplianceVpnThirdPartyVPNPeers") getOrganizationApplianceVpnThirdPartyVPNPeers

> Return the third party VPN peers for an organization


```javascript
function getOrganizationApplianceVpnThirdPartyVPNPeers(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.getOrganizationApplianceVpnThirdPartyVPNPeers(organizationId, function(error, response, context) {

    
    });
```



### <a name="update_organization_appliance_vpn_third_party_vpn_peers"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateOrganizationApplianceVpnThirdPartyVPNPeers") updateOrganizationApplianceVpnThirdPartyVPNPeers

> Update the third party VPN peers for an organization


```javascript
function updateOrganizationApplianceVpnThirdPartyVPNPeers(organizationId, updateOrganizationApplianceVpnThirdPartyVPNPeers, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| updateOrganizationApplianceVpnThirdPartyVPNPeers |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var updateOrganizationApplianceVpnThirdPartyVPNPeers = new UpdateOrganizationApplianceVpnThirdPartyVPNPeers({"key":"value"});

    controller.updateOrganizationApplianceVpnThirdPartyVPNPeers(organizationId, updateOrganizationApplianceVpnThirdPartyVPNPeers, function(error, response, context) {

    
    });
```



### <a name="get_organization_appliance_vpn_vpn_firewall_rules"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.getOrganizationApplianceVpnVpnFirewallRules") getOrganizationApplianceVpnVpnFirewallRules

> Return the firewall rules for an organization's site-to-site VPN


```javascript
function getOrganizationApplianceVpnVpnFirewallRules(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.getOrganizationApplianceVpnVpnFirewallRules(organizationId, function(error, response, context) {

    
    });
```



### <a name="update_organization_appliance_vpn_vpn_firewall_rules"></a>![Method: ](https://apidocs.io/img/method.png ".ApplianceController.updateOrganizationApplianceVpnVpnFirewallRules") updateOrganizationApplianceVpnVpnFirewallRules

> Update the firewall rules of an organization's site-to-site VPN


```javascript
function updateOrganizationApplianceVpnVpnFirewallRules(organizationId, updateOrganizationApplianceVpnVpnFirewallRules, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| updateOrganizationApplianceVpnVpnFirewallRules |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var updateOrganizationApplianceVpnVpnFirewallRules = new UpdateOrganizationApplianceVpnVpnFirewallRules({"key":"value"});

    controller.updateOrganizationApplianceVpnVpnFirewallRules(organizationId, updateOrganizationApplianceVpnVpnFirewallRules, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="switch_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SwitchController") SwitchController

### Get singleton instance

The singleton instance of the ``` SwitchController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SwitchController;
```

### <a name="get_device_switch_ports"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getDeviceSwitchPorts") getDeviceSwitchPorts

> List the switch ports for a switch


```javascript
function getDeviceSwitchPorts(serial, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';

    controller.getDeviceSwitchPorts(serial, function(error, response, context) {

    
    });
```



### <a name="cycle_device_switch_ports"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.cycleDeviceSwitchPorts") cycleDeviceSwitchPorts

> Cycle a set of switch ports


```javascript
function cycleDeviceSwitchPorts(serial, cycleDeviceSwitchPorts, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| cycleDeviceSwitchPorts |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';
    var cycleDeviceSwitchPorts = new CycleDeviceSwitchPorts({"key":"value"});

    controller.cycleDeviceSwitchPorts(serial, cycleDeviceSwitchPorts, function(error, response, context) {

    
    });
```



### <a name="get_device_switch_ports_statuses"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getDeviceSwitchPortsStatuses") getDeviceSwitchPortsStatuses

> Return the status for all the ports of a switch


```javascript
function getDeviceSwitchPortsStatuses(serial, t0, timespan, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 31 days from today. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 31 days. The default is 1 day. |



#### Example Usage

```javascript

    var serial = 'serial';
    var t0 = 't0';
    var timespan = 119.778968619545;

    controller.getDeviceSwitchPortsStatuses(serial, t0, timespan, function(error, response, context) {

    
    });
```



### <a name="get_device_switch_ports_statuses_packets"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getDeviceSwitchPortsStatusesPackets") getDeviceSwitchPortsStatusesPackets

> Return the packet counters for all the ports of a switch


```javascript
function getDeviceSwitchPortsStatusesPackets(serial, t0, timespan, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| t0 |  ``` Optional ```  | The beginning of the timespan for the data. The maximum lookback period is 1 day from today. |
| timespan |  ``` Optional ```  | The timespan for which the information will be fetched. If specifying timespan, do not specify parameter t0. The value must be in seconds and be less than or equal to 1 day. The default is 1 day. |



#### Example Usage

```javascript

    var serial = 'serial';
    var t0 = 't0';
    var timespan = 119.778968619545;

    controller.getDeviceSwitchPortsStatusesPackets(serial, t0, timespan, function(error, response, context) {

    
    });
```



### <a name="get_device_switch_port"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getDeviceSwitchPort") getDeviceSwitchPort

> Return a switch port


```javascript
function getDeviceSwitchPort(serial, portId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| portId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';
    var portId = 'portId';

    controller.getDeviceSwitchPort(serial, portId, function(error, response, context) {

    
    });
```



### <a name="update_device_switch_port"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.updateDeviceSwitchPort") updateDeviceSwitchPort

> Update a switch port


```javascript
function updateDeviceSwitchPort(serial, portId, updateDeviceSwitchPort, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| portId |  ``` Required ```  | TODO: Add a parameter description |
| updateDeviceSwitchPort |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';
    var portId = 'portId';
    var updateDeviceSwitchPort = new UpdateDeviceSwitchPort({"key":"value"});

    controller.updateDeviceSwitchPort(serial, portId, updateDeviceSwitchPort, function(error, response, context) {

    
    });
```



### <a name="get_device_switch_routing_interfaces"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getDeviceSwitchRoutingInterfaces") getDeviceSwitchRoutingInterfaces

> List layer 3 interfaces for a switch


```javascript
function getDeviceSwitchRoutingInterfaces(serial, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';

    controller.getDeviceSwitchRoutingInterfaces(serial, function(error, response, context) {

    
    });
```



### <a name="create_device_switch_routing_interface"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.createDeviceSwitchRoutingInterface") createDeviceSwitchRoutingInterface

> Create a layer 3 interface for a switch


```javascript
function createDeviceSwitchRoutingInterface(serial, createDeviceSwitchRoutingInterface, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| createDeviceSwitchRoutingInterface |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';
    var createDeviceSwitchRoutingInterface = new CreateDeviceSwitchRoutingInterface({"key":"value"});

    controller.createDeviceSwitchRoutingInterface(serial, createDeviceSwitchRoutingInterface, function(error, response, context) {

    
    });
```



### <a name="get_device_switch_routing_interface"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getDeviceSwitchRoutingInterface") getDeviceSwitchRoutingInterface

> Return a layer 3 interface for a switch


```javascript
function getDeviceSwitchRoutingInterface(serial, interfaceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| interfaceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';
    var interfaceId = 'interfaceId';

    controller.getDeviceSwitchRoutingInterface(serial, interfaceId, function(error, response, context) {

    
    });
```



### <a name="update_device_switch_routing_interface"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.updateDeviceSwitchRoutingInterface") updateDeviceSwitchRoutingInterface

> Update a layer 3 interface for a switch


```javascript
function updateDeviceSwitchRoutingInterface(serial, interfaceId, updateDeviceSwitchRoutingInterface, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| interfaceId |  ``` Required ```  | TODO: Add a parameter description |
| updateDeviceSwitchRoutingInterface |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';
    var interfaceId = 'interfaceId';
    var updateDeviceSwitchRoutingInterface = new UpdateDeviceSwitchRoutingInterface({"key":"value"});

    controller.updateDeviceSwitchRoutingInterface(serial, interfaceId, updateDeviceSwitchRoutingInterface, function(error, response, context) {

    
    });
```



### <a name="delete_device_switch_routing_interface"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.deleteDeviceSwitchRoutingInterface") deleteDeviceSwitchRoutingInterface

> Delete a layer 3 interface from the switch


```javascript
function deleteDeviceSwitchRoutingInterface(serial, interfaceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| interfaceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';
    var interfaceId = 'interfaceId';

    controller.deleteDeviceSwitchRoutingInterface(serial, interfaceId, function(error, response, context) {

    
    });
```



### <a name="get_device_switch_routing_interface_dhcp"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getDeviceSwitchRoutingInterfaceDhcp") getDeviceSwitchRoutingInterfaceDhcp

> Return a layer 3 interface DHCP configuration for a switch


```javascript
function getDeviceSwitchRoutingInterfaceDhcp(serial, interfaceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| interfaceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';
    var interfaceId = 'interfaceId';

    controller.getDeviceSwitchRoutingInterfaceDhcp(serial, interfaceId, function(error, response, context) {

    
    });
```



### <a name="update_device_switch_routing_interface_dhcp"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.updateDeviceSwitchRoutingInterfaceDhcp") updateDeviceSwitchRoutingInterfaceDhcp

> Update a layer 3 interface DHCP configuration for a switch


```javascript
function updateDeviceSwitchRoutingInterfaceDhcp(serial, interfaceId, updateDeviceSwitchRoutingInterfaceDhcp, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| interfaceId |  ``` Required ```  | TODO: Add a parameter description |
| updateDeviceSwitchRoutingInterfaceDhcp |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';
    var interfaceId = 'interfaceId';
    var updateDeviceSwitchRoutingInterfaceDhcp = new UpdateDeviceSwitchRoutingInterfaceDhcp({"key":"value"});

    controller.updateDeviceSwitchRoutingInterfaceDhcp(serial, interfaceId, updateDeviceSwitchRoutingInterfaceDhcp, function(error, response, context) {

    
    });
```



### <a name="get_device_switch_routing_static_routes"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getDeviceSwitchRoutingStaticRoutes") getDeviceSwitchRoutingStaticRoutes

> List layer 3 static routes for a switch


```javascript
function getDeviceSwitchRoutingStaticRoutes(serial, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';

    controller.getDeviceSwitchRoutingStaticRoutes(serial, function(error, response, context) {

    
    });
```



### <a name="create_device_switch_routing_static_route"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.createDeviceSwitchRoutingStaticRoute") createDeviceSwitchRoutingStaticRoute

> Create a layer 3 static route for a switch


```javascript
function createDeviceSwitchRoutingStaticRoute(serial, createDeviceSwitchRoutingStaticRoute, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| createDeviceSwitchRoutingStaticRoute |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';
    var createDeviceSwitchRoutingStaticRoute = new CreateDeviceSwitchRoutingStaticRoute({"key":"value"});

    controller.createDeviceSwitchRoutingStaticRoute(serial, createDeviceSwitchRoutingStaticRoute, function(error, response, context) {

    
    });
```



### <a name="get_device_switch_routing_static_route"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getDeviceSwitchRoutingStaticRoute") getDeviceSwitchRoutingStaticRoute

> Return a layer 3 static route for a switch


```javascript
function getDeviceSwitchRoutingStaticRoute(serial, staticRouteId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| staticRouteId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';
    var staticRouteId = 'staticRouteId';

    controller.getDeviceSwitchRoutingStaticRoute(serial, staticRouteId, function(error, response, context) {

    
    });
```



### <a name="update_device_switch_routing_static_route"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.updateDeviceSwitchRoutingStaticRoute") updateDeviceSwitchRoutingStaticRoute

> Update a layer 3 static route for a switch


```javascript
function updateDeviceSwitchRoutingStaticRoute(serial, staticRouteId, updateDeviceSwitchRoutingStaticRoute, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| staticRouteId |  ``` Required ```  | TODO: Add a parameter description |
| updateDeviceSwitchRoutingStaticRoute |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';
    var staticRouteId = 'staticRouteId';
    var updateDeviceSwitchRoutingStaticRoute = new UpdateDeviceSwitchRoutingStaticRoute({"key":"value"});

    controller.updateDeviceSwitchRoutingStaticRoute(serial, staticRouteId, updateDeviceSwitchRoutingStaticRoute, function(error, response, context) {

    
    });
```



### <a name="delete_device_switch_routing_static_route"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.deleteDeviceSwitchRoutingStaticRoute") deleteDeviceSwitchRoutingStaticRoute

> Delete a layer 3 static route for a switch


```javascript
function deleteDeviceSwitchRoutingStaticRoute(serial, staticRouteId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| staticRouteId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';
    var staticRouteId = 'staticRouteId';

    controller.deleteDeviceSwitchRoutingStaticRoute(serial, staticRouteId, function(error, response, context) {

    
    });
```



### <a name="get_device_switch_warm_spare"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getDeviceSwitchWarmSpare") getDeviceSwitchWarmSpare

> Return warm spare configuration for a switch


```javascript
function getDeviceSwitchWarmSpare(serial, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';

    controller.getDeviceSwitchWarmSpare(serial, function(error, response, context) {

    
    });
```



### <a name="update_device_switch_warm_spare"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.updateDeviceSwitchWarmSpare") updateDeviceSwitchWarmSpare

> Update warm spare configuration for a switch. The spare will use the same L3 configuration as the primary. Note that this will irreversibly destroy any existing L3 configuration on the spare.


```javascript
function updateDeviceSwitchWarmSpare(serial, updateDeviceSwitchWarmSpare, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| updateDeviceSwitchWarmSpare |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';
    var updateDeviceSwitchWarmSpare = new UpdateDeviceSwitchWarmSpare({"key":"value"});

    controller.updateDeviceSwitchWarmSpare(serial, updateDeviceSwitchWarmSpare, function(error, response, context) {

    
    });
```



### <a name="get_network_switch_access_control_lists"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getNetworkSwitchAccessControlLists") getNetworkSwitchAccessControlLists

> Return the access control lists for a MS network


```javascript
function getNetworkSwitchAccessControlLists(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSwitchAccessControlLists(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_switch_access_control_lists"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.updateNetworkSwitchAccessControlLists") updateNetworkSwitchAccessControlLists

> Update the access control lists for a MS network


```javascript
function updateNetworkSwitchAccessControlLists(networkId, updateNetworkSwitchAccessControlLists, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSwitchAccessControlLists |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkSwitchAccessControlLists = new UpdateNetworkSwitchAccessControlLists({"key":"value"});

    controller.updateNetworkSwitchAccessControlLists(networkId, updateNetworkSwitchAccessControlLists, function(error, response, context) {

    
    });
```



### <a name="get_network_switch_access_policies"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getNetworkSwitchAccessPolicies") getNetworkSwitchAccessPolicies

> List the access policies for a switch network. Only returns access policies with 'my RADIUS server' as authentication method


```javascript
function getNetworkSwitchAccessPolicies(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSwitchAccessPolicies(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_switch_access_policy"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.createNetworkSwitchAccessPolicy") createNetworkSwitchAccessPolicy

> Create an access policy for a switch network. This endpoint only supports access policies with 'My RADIUS server' as authentication method.


```javascript
function createNetworkSwitchAccessPolicy(networkId, createNetworkSwitchAccessPolicy, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkSwitchAccessPolicy |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var createNetworkSwitchAccessPolicy = new CreateNetworkSwitchAccessPolicy({"key":"value"});

    controller.createNetworkSwitchAccessPolicy(networkId, createNetworkSwitchAccessPolicy, function(error, response, context) {

    
    });
```



### <a name="get_network_switch_access_policy"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getNetworkSwitchAccessPolicy") getNetworkSwitchAccessPolicy

> Return a specific access policy for a switch network


```javascript
function getNetworkSwitchAccessPolicy(networkId, accessPolicyNumber, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| accessPolicyNumber |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var accessPolicyNumber = 'accessPolicyNumber';

    controller.getNetworkSwitchAccessPolicy(networkId, accessPolicyNumber, function(error, response, context) {

    
    });
```



### <a name="update_network_switch_access_policy"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.updateNetworkSwitchAccessPolicy") updateNetworkSwitchAccessPolicy

> Update an access policy for a switch network. This endpoint only supports access policies with 'My RADIUS server' as authentication method.


```javascript
function updateNetworkSwitchAccessPolicy(networkId, accessPolicyNumber, updateNetworkSwitchAccessPolicy, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| accessPolicyNumber |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSwitchAccessPolicy |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var accessPolicyNumber = 'accessPolicyNumber';
    var updateNetworkSwitchAccessPolicy = new UpdateNetworkSwitchAccessPolicy({"key":"value"});

    controller.updateNetworkSwitchAccessPolicy(networkId, accessPolicyNumber, updateNetworkSwitchAccessPolicy, function(error, response, context) {

    
    });
```



### <a name="delete_network_switch_access_policy"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.deleteNetworkSwitchAccessPolicy") deleteNetworkSwitchAccessPolicy

> Delete an access policy for a switch network


```javascript
function deleteNetworkSwitchAccessPolicy(networkId, accessPolicyNumber, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| accessPolicyNumber |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var accessPolicyNumber = 'accessPolicyNumber';

    controller.deleteNetworkSwitchAccessPolicy(networkId, accessPolicyNumber, function(error, response, context) {

    
    });
```



### <a name="get_network_switch_alternate_management_interface"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getNetworkSwitchAlternateManagementInterface") getNetworkSwitchAlternateManagementInterface

> Return the switch alternate management interface for the network


```javascript
function getNetworkSwitchAlternateManagementInterface(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSwitchAlternateManagementInterface(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_switch_alternate_management_interface"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.updateNetworkSwitchAlternateManagementInterface") updateNetworkSwitchAlternateManagementInterface

> Update the switch alternate management interface for the network


```javascript
function updateNetworkSwitchAlternateManagementInterface(networkId, updateNetworkSwitchAlternateManagementInterface, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSwitchAlternateManagementInterface |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkSwitchAlternateManagementInterface = new UpdateNetworkSwitchAlternateManagementInterface({"key":"value"});

    controller.updateNetworkSwitchAlternateManagementInterface(networkId, updateNetworkSwitchAlternateManagementInterface, function(error, response, context) {

    
    });
```



### <a name="get_network_switch_dhcp_server_policy"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getNetworkSwitchDhcpServerPolicy") getNetworkSwitchDhcpServerPolicy

> Return the DHCP server policy


```javascript
function getNetworkSwitchDhcpServerPolicy(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSwitchDhcpServerPolicy(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_switch_dhcp_server_policy"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.updateNetworkSwitchDhcpServerPolicy") updateNetworkSwitchDhcpServerPolicy

> Update the DHCP server policy


```javascript
function updateNetworkSwitchDhcpServerPolicy(networkId, updateNetworkSwitchDhcpServerPolicy, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSwitchDhcpServerPolicy |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkSwitchDhcpServerPolicy = new UpdateNetworkSwitchDhcpServerPolicy({"key":"value"});

    controller.updateNetworkSwitchDhcpServerPolicy(networkId, updateNetworkSwitchDhcpServerPolicy, function(error, response, context) {

    
    });
```



### <a name="get_network_switch_dscp_to_cos_mappings"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getNetworkSwitchDscpToCosMappings") getNetworkSwitchDscpToCosMappings

> Return the DSCP to CoS mappings


```javascript
function getNetworkSwitchDscpToCosMappings(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSwitchDscpToCosMappings(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_switch_dscp_to_cos_mappings"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.updateNetworkSwitchDscpToCosMappings") updateNetworkSwitchDscpToCosMappings

> Update the DSCP to CoS mappings


```javascript
function updateNetworkSwitchDscpToCosMappings(networkId, updateNetworkSwitchDscpToCosMappings, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSwitchDscpToCosMappings |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkSwitchDscpToCosMappings = new UpdateNetworkSwitchDscpToCosMappings({"key":"value"});

    controller.updateNetworkSwitchDscpToCosMappings(networkId, updateNetworkSwitchDscpToCosMappings, function(error, response, context) {

    
    });
```



### <a name="get_network_switch_link_aggregations"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getNetworkSwitchLinkAggregations") getNetworkSwitchLinkAggregations

> List link aggregation groups


```javascript
function getNetworkSwitchLinkAggregations(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSwitchLinkAggregations(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_switch_link_aggregation"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.createNetworkSwitchLinkAggregation") createNetworkSwitchLinkAggregation

> Create a link aggregation group


```javascript
function createNetworkSwitchLinkAggregation(networkId, createNetworkSwitchLinkAggregation, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkSwitchLinkAggregation |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var createNetworkSwitchLinkAggregation = new CreateNetworkSwitchLinkAggregation({"key":"value"});

    controller.createNetworkSwitchLinkAggregation(networkId, createNetworkSwitchLinkAggregation, function(error, response, context) {

    
    });
```



### <a name="update_network_switch_link_aggregation"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.updateNetworkSwitchLinkAggregation") updateNetworkSwitchLinkAggregation

> Update a link aggregation group


```javascript
function updateNetworkSwitchLinkAggregation(networkId, linkAggregationId, updateNetworkSwitchLinkAggregation, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| linkAggregationId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSwitchLinkAggregation |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var linkAggregationId = 'linkAggregationId';
    var updateNetworkSwitchLinkAggregation = new UpdateNetworkSwitchLinkAggregation({"key":"value"});

    controller.updateNetworkSwitchLinkAggregation(networkId, linkAggregationId, updateNetworkSwitchLinkAggregation, function(error, response, context) {

    
    });
```



### <a name="delete_network_switch_link_aggregation"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.deleteNetworkSwitchLinkAggregation") deleteNetworkSwitchLinkAggregation

> Split a link aggregation group into separate ports


```javascript
function deleteNetworkSwitchLinkAggregation(networkId, linkAggregationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| linkAggregationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var linkAggregationId = 'linkAggregationId';

    controller.deleteNetworkSwitchLinkAggregation(networkId, linkAggregationId, function(error, response, context) {

    
    });
```



### <a name="get_network_switch_mtu"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getNetworkSwitchMtu") getNetworkSwitchMtu

> Return the MTU configuration


```javascript
function getNetworkSwitchMtu(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSwitchMtu(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_switch_mtu"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.updateNetworkSwitchMtu") updateNetworkSwitchMtu

> Update the MTU configuration


```javascript
function updateNetworkSwitchMtu(networkId, updateNetworkSwitchMtu, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSwitchMtu |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkSwitchMtu = new UpdateNetworkSwitchMtu({"key":"value"});

    controller.updateNetworkSwitchMtu(networkId, updateNetworkSwitchMtu, function(error, response, context) {

    
    });
```



### <a name="get_network_switch_port_schedules"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getNetworkSwitchPortSchedules") getNetworkSwitchPortSchedules

> List switch port schedules


```javascript
function getNetworkSwitchPortSchedules(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSwitchPortSchedules(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_switch_port_schedule"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.createNetworkSwitchPortSchedule") createNetworkSwitchPortSchedule

> Add a switch port schedule


```javascript
function createNetworkSwitchPortSchedule(networkId, createNetworkSwitchPortSchedule, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkSwitchPortSchedule |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var createNetworkSwitchPortSchedule = new CreateNetworkSwitchPortSchedule({"key":"value"});

    controller.createNetworkSwitchPortSchedule(networkId, createNetworkSwitchPortSchedule, function(error, response, context) {

    
    });
```



### <a name="delete_network_switch_port_schedule"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.deleteNetworkSwitchPortSchedule") deleteNetworkSwitchPortSchedule

> Delete a switch port schedule


```javascript
function deleteNetworkSwitchPortSchedule(networkId, portScheduleId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| portScheduleId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var portScheduleId = 'portScheduleId';

    controller.deleteNetworkSwitchPortSchedule(networkId, portScheduleId, function(error, response, context) {

    
    });
```



### <a name="update_network_switch_port_schedule"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.updateNetworkSwitchPortSchedule") updateNetworkSwitchPortSchedule

> Update a switch port schedule


```javascript
function updateNetworkSwitchPortSchedule(networkId, portScheduleId, updateNetworkSwitchPortSchedule, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| portScheduleId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSwitchPortSchedule |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var portScheduleId = 'portScheduleId';
    var updateNetworkSwitchPortSchedule = new UpdateNetworkSwitchPortSchedule({"key":"value"});

    controller.updateNetworkSwitchPortSchedule(networkId, portScheduleId, updateNetworkSwitchPortSchedule, function(error, response, context) {

    
    });
```



### <a name="get_network_switch_qos_rules"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getNetworkSwitchQosRules") getNetworkSwitchQosRules

> List quality of service rules


```javascript
function getNetworkSwitchQosRules(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSwitchQosRules(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_switch_qos_rule"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.createNetworkSwitchQosRule") createNetworkSwitchQosRule

> Add a quality of service rule


```javascript
function createNetworkSwitchQosRule(networkId, createNetworkSwitchQosRule, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkSwitchQosRule |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var createNetworkSwitchQosRule = new CreateNetworkSwitchQosRule({"key":"value"});

    controller.createNetworkSwitchQosRule(networkId, createNetworkSwitchQosRule, function(error, response, context) {

    
    });
```



### <a name="get_network_switch_qos_rules_order"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getNetworkSwitchQosRulesOrder") getNetworkSwitchQosRulesOrder

> Return the quality of service rule IDs by order in which they will be processed by the switch


```javascript
function getNetworkSwitchQosRulesOrder(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSwitchQosRulesOrder(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_switch_qos_rules_order"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.updateNetworkSwitchQosRulesOrder") updateNetworkSwitchQosRulesOrder

> Update the order in which the rules should be processed by the switch


```javascript
function updateNetworkSwitchQosRulesOrder(networkId, updateNetworkSwitchQosRulesOrder, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSwitchQosRulesOrder |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkSwitchQosRulesOrder = new UpdateNetworkSwitchQosRulesOrder({"key":"value"});

    controller.updateNetworkSwitchQosRulesOrder(networkId, updateNetworkSwitchQosRulesOrder, function(error, response, context) {

    
    });
```



### <a name="get_network_switch_qos_rule"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getNetworkSwitchQosRule") getNetworkSwitchQosRule

> Return a quality of service rule


```javascript
function getNetworkSwitchQosRule(networkId, qosRuleId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| qosRuleId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var qosRuleId = 'qosRuleId';

    controller.getNetworkSwitchQosRule(networkId, qosRuleId, function(error, response, context) {

    
    });
```



### <a name="delete_network_switch_qos_rule"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.deleteNetworkSwitchQosRule") deleteNetworkSwitchQosRule

> Delete a quality of service rule


```javascript
function deleteNetworkSwitchQosRule(networkId, qosRuleId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| qosRuleId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var qosRuleId = 'qosRuleId';

    controller.deleteNetworkSwitchQosRule(networkId, qosRuleId, function(error, response, context) {

    
    });
```



### <a name="update_network_switch_qos_rule"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.updateNetworkSwitchQosRule") updateNetworkSwitchQosRule

> Update a quality of service rule


```javascript
function updateNetworkSwitchQosRule(networkId, qosRuleId, updateNetworkSwitchQosRule, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| qosRuleId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSwitchQosRule |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var qosRuleId = 'qosRuleId';
    var updateNetworkSwitchQosRule = new UpdateNetworkSwitchQosRule({"key":"value"});

    controller.updateNetworkSwitchQosRule(networkId, qosRuleId, updateNetworkSwitchQosRule, function(error, response, context) {

    
    });
```



### <a name="get_network_switch_routing_multicast"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getNetworkSwitchRoutingMulticast") getNetworkSwitchRoutingMulticast

> Return multicast settings for a network


```javascript
function getNetworkSwitchRoutingMulticast(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSwitchRoutingMulticast(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_switch_routing_multicast"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.updateNetworkSwitchRoutingMulticast") updateNetworkSwitchRoutingMulticast

> Update multicast settings for a network


```javascript
function updateNetworkSwitchRoutingMulticast(networkId, updateNetworkSwitchRoutingMulticast, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSwitchRoutingMulticast |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkSwitchRoutingMulticast = new UpdateNetworkSwitchRoutingMulticast({"key":"value"});

    controller.updateNetworkSwitchRoutingMulticast(networkId, updateNetworkSwitchRoutingMulticast, function(error, response, context) {

    
    });
```



### <a name="get_network_switch_routing_multicast_rendezvous_points"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getNetworkSwitchRoutingMulticastRendezvousPoints") getNetworkSwitchRoutingMulticastRendezvousPoints

> List multicast rendezvous points


```javascript
function getNetworkSwitchRoutingMulticastRendezvousPoints(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSwitchRoutingMulticastRendezvousPoints(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_switch_routing_multicast_rendezvous_point"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.createNetworkSwitchRoutingMulticastRendezvousPoint") createNetworkSwitchRoutingMulticastRendezvousPoint

> Create a multicast rendezvous point


```javascript
function createNetworkSwitchRoutingMulticastRendezvousPoint(networkId, createNetworkSwitchRoutingMulticastRendezvousPoint, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkSwitchRoutingMulticastRendezvousPoint |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var createNetworkSwitchRoutingMulticastRendezvousPoint = new CreateNetworkSwitchRoutingMulticastRendezvousPoint({"key":"value"});

    controller.createNetworkSwitchRoutingMulticastRendezvousPoint(networkId, createNetworkSwitchRoutingMulticastRendezvousPoint, function(error, response, context) {

    
    });
```



### <a name="get_network_switch_routing_multicast_rendezvous_point"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getNetworkSwitchRoutingMulticastRendezvousPoint") getNetworkSwitchRoutingMulticastRendezvousPoint

> Return a multicast rendezvous point


```javascript
function getNetworkSwitchRoutingMulticastRendezvousPoint(networkId, rendezvousPointId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| rendezvousPointId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var rendezvousPointId = 'rendezvousPointId';

    controller.getNetworkSwitchRoutingMulticastRendezvousPoint(networkId, rendezvousPointId, function(error, response, context) {

    
    });
```



### <a name="delete_network_switch_routing_multicast_rendezvous_point"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.deleteNetworkSwitchRoutingMulticastRendezvousPoint") deleteNetworkSwitchRoutingMulticastRendezvousPoint

> Delete a multicast rendezvous point


```javascript
function deleteNetworkSwitchRoutingMulticastRendezvousPoint(networkId, rendezvousPointId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| rendezvousPointId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var rendezvousPointId = 'rendezvousPointId';

    controller.deleteNetworkSwitchRoutingMulticastRendezvousPoint(networkId, rendezvousPointId, function(error, response, context) {

    
    });
```



### <a name="update_network_switch_routing_multicast_rendezvous_point"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.updateNetworkSwitchRoutingMulticastRendezvousPoint") updateNetworkSwitchRoutingMulticastRendezvousPoint

> Update a multicast rendezvous point


```javascript
function updateNetworkSwitchRoutingMulticastRendezvousPoint(networkId, rendezvousPointId, updateNetworkSwitchRoutingMulticastRendezvousPoint, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| rendezvousPointId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSwitchRoutingMulticastRendezvousPoint |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var rendezvousPointId = 'rendezvousPointId';
    var updateNetworkSwitchRoutingMulticastRendezvousPoint = new UpdateNetworkSwitchRoutingMulticastRendezvousPoint({"key":"value"});

    controller.updateNetworkSwitchRoutingMulticastRendezvousPoint(networkId, rendezvousPointId, updateNetworkSwitchRoutingMulticastRendezvousPoint, function(error, response, context) {

    
    });
```



### <a name="get_network_switch_routing_ospf"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getNetworkSwitchRoutingOspf") getNetworkSwitchRoutingOspf

> Return layer 3 OSPF routing configuration


```javascript
function getNetworkSwitchRoutingOspf(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSwitchRoutingOspf(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_switch_routing_ospf"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.updateNetworkSwitchRoutingOspf") updateNetworkSwitchRoutingOspf

> Update layer 3 OSPF routing configuration


```javascript
function updateNetworkSwitchRoutingOspf(networkId, updateNetworkSwitchRoutingOspf, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSwitchRoutingOspf |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkSwitchRoutingOspf = new UpdateNetworkSwitchRoutingOspf({"key":"value"});

    controller.updateNetworkSwitchRoutingOspf(networkId, updateNetworkSwitchRoutingOspf, function(error, response, context) {

    
    });
```



### <a name="get_network_switch_settings"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getNetworkSwitchSettings") getNetworkSwitchSettings

> Returns the switch network settings


```javascript
function getNetworkSwitchSettings(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSwitchSettings(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_switch_settings"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.updateNetworkSwitchSettings") updateNetworkSwitchSettings

> Update switch network settings


```javascript
function updateNetworkSwitchSettings(networkId, updateNetworkSwitchSettings, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSwitchSettings |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkSwitchSettings = new UpdateNetworkSwitchSettings({"key":"value"});

    controller.updateNetworkSwitchSettings(networkId, updateNetworkSwitchSettings, function(error, response, context) {

    
    });
```



### <a name="get_network_switch_stacks"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getNetworkSwitchStacks") getNetworkSwitchStacks

> List the switch stacks in a network


```javascript
function getNetworkSwitchStacks(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSwitchStacks(networkId, function(error, response, context) {

    
    });
```



### <a name="create_network_switch_stack"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.createNetworkSwitchStack") createNetworkSwitchStack

> Create a stack


```javascript
function createNetworkSwitchStack(networkId, createNetworkSwitchStack, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkSwitchStack |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var createNetworkSwitchStack = new CreateNetworkSwitchStack({"key":"value"});

    controller.createNetworkSwitchStack(networkId, createNetworkSwitchStack, function(error, response, context) {

    
    });
```



### <a name="get_network_switch_stack"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getNetworkSwitchStack") getNetworkSwitchStack

> Show a switch stack


```javascript
function getNetworkSwitchStack(networkId, switchStackId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| switchStackId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var switchStackId = 'switchStackId';

    controller.getNetworkSwitchStack(networkId, switchStackId, function(error, response, context) {

    
    });
```



### <a name="delete_network_switch_stack"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.deleteNetworkSwitchStack") deleteNetworkSwitchStack

> Delete a stack


```javascript
function deleteNetworkSwitchStack(networkId, switchStackId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| switchStackId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var switchStackId = 'switchStackId';

    controller.deleteNetworkSwitchStack(networkId, switchStackId, function(error, response, context) {

    
    });
```



### <a name="add_network_switch_stack"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.addNetworkSwitchStack") addNetworkSwitchStack

> Add a switch to a stack


```javascript
function addNetworkSwitchStack(networkId, switchStackId, addNetworkSwitchStack, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| switchStackId |  ``` Required ```  | TODO: Add a parameter description |
| addNetworkSwitchStack |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var switchStackId = 'switchStackId';
    var addNetworkSwitchStack = new AddNetworkSwitchStack({"key":"value"});

    controller.addNetworkSwitchStack(networkId, switchStackId, addNetworkSwitchStack, function(error, response, context) {

    
    });
```



### <a name="remove_network_switch_stack"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.removeNetworkSwitchStack") removeNetworkSwitchStack

> Remove a switch from a stack


```javascript
function removeNetworkSwitchStack(networkId, switchStackId, removeNetworkSwitchStack, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| switchStackId |  ``` Required ```  | TODO: Add a parameter description |
| removeNetworkSwitchStack |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var switchStackId = 'switchStackId';
    var removeNetworkSwitchStack = new RemoveNetworkSwitchStack({"key":"value"});

    controller.removeNetworkSwitchStack(networkId, switchStackId, removeNetworkSwitchStack, function(error, response, context) {

    
    });
```



### <a name="get_network_switch_stack_routing_interfaces"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getNetworkSwitchStackRoutingInterfaces") getNetworkSwitchStackRoutingInterfaces

> List layer 3 interfaces for a switch stack


```javascript
function getNetworkSwitchStackRoutingInterfaces(networkId, switchStackId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| switchStackId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var switchStackId = 'switchStackId';

    controller.getNetworkSwitchStackRoutingInterfaces(networkId, switchStackId, function(error, response, context) {

    
    });
```



### <a name="create_network_switch_stack_routing_interface"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.createNetworkSwitchStackRoutingInterface") createNetworkSwitchStackRoutingInterface

> Create a layer 3 interface for a switch stack


```javascript
function createNetworkSwitchStackRoutingInterface(networkId, switchStackId, createNetworkSwitchStackRoutingInterface, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| switchStackId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkSwitchStackRoutingInterface |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var switchStackId = 'switchStackId';
    var createNetworkSwitchStackRoutingInterface = new CreateNetworkSwitchStackRoutingInterface({"key":"value"});

    controller.createNetworkSwitchStackRoutingInterface(networkId, switchStackId, createNetworkSwitchStackRoutingInterface, function(error, response, context) {

    
    });
```



### <a name="get_network_switch_stack_routing_interface"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getNetworkSwitchStackRoutingInterface") getNetworkSwitchStackRoutingInterface

> Return a layer 3 interface from a switch stack


```javascript
function getNetworkSwitchStackRoutingInterface(networkId, switchStackId, interfaceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| switchStackId |  ``` Required ```  | TODO: Add a parameter description |
| interfaceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var switchStackId = 'switchStackId';
    var interfaceId = 'interfaceId';

    controller.getNetworkSwitchStackRoutingInterface(networkId, switchStackId, interfaceId, function(error, response, context) {

    
    });
```



### <a name="update_network_switch_stack_routing_interface"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.updateNetworkSwitchStackRoutingInterface") updateNetworkSwitchStackRoutingInterface

> Update a layer 3 interface for a switch stack


```javascript
function updateNetworkSwitchStackRoutingInterface(networkId, switchStackId, interfaceId, updateNetworkSwitchStackRoutingInterface, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| switchStackId |  ``` Required ```  | TODO: Add a parameter description |
| interfaceId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSwitchStackRoutingInterface |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var switchStackId = 'switchStackId';
    var interfaceId = 'interfaceId';
    var updateNetworkSwitchStackRoutingInterface = new UpdateNetworkSwitchStackRoutingInterface({"key":"value"});

    controller.updateNetworkSwitchStackRoutingInterface(networkId, switchStackId, interfaceId, updateNetworkSwitchStackRoutingInterface, function(error, response, context) {

    
    });
```



### <a name="delete_network_switch_stack_routing_interface"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.deleteNetworkSwitchStackRoutingInterface") deleteNetworkSwitchStackRoutingInterface

> Delete a layer 3 interface from a switch stack


```javascript
function deleteNetworkSwitchStackRoutingInterface(networkId, switchStackId, interfaceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| switchStackId |  ``` Required ```  | TODO: Add a parameter description |
| interfaceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var switchStackId = 'switchStackId';
    var interfaceId = 'interfaceId';

    controller.deleteNetworkSwitchStackRoutingInterface(networkId, switchStackId, interfaceId, function(error, response, context) {

    
    });
```



### <a name="get_network_switch_stack_routing_interface_dhcp"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getNetworkSwitchStackRoutingInterfaceDhcp") getNetworkSwitchStackRoutingInterfaceDhcp

> Return a layer 3 interface DHCP configuration for a switch stack


```javascript
function getNetworkSwitchStackRoutingInterfaceDhcp(networkId, switchStackId, interfaceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| switchStackId |  ``` Required ```  | TODO: Add a parameter description |
| interfaceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var switchStackId = 'switchStackId';
    var interfaceId = 'interfaceId';

    controller.getNetworkSwitchStackRoutingInterfaceDhcp(networkId, switchStackId, interfaceId, function(error, response, context) {

    
    });
```



### <a name="update_network_switch_stack_routing_interface_dhcp"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.updateNetworkSwitchStackRoutingInterfaceDhcp") updateNetworkSwitchStackRoutingInterfaceDhcp

> Update a layer 3 interface DHCP configuration for a switch stack


```javascript
function updateNetworkSwitchStackRoutingInterfaceDhcp(networkId, switchStackId, interfaceId, updateNetworkSwitchStackRoutingInterfaceDhcp, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| switchStackId |  ``` Required ```  | TODO: Add a parameter description |
| interfaceId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSwitchStackRoutingInterfaceDhcp |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var switchStackId = 'switchStackId';
    var interfaceId = 'interfaceId';
    var updateNetworkSwitchStackRoutingInterfaceDhcp = new UpdateNetworkSwitchStackRoutingInterfaceDhcp({"key":"value"});

    controller.updateNetworkSwitchStackRoutingInterfaceDhcp(networkId, switchStackId, interfaceId, updateNetworkSwitchStackRoutingInterfaceDhcp, function(error, response, context) {

    
    });
```



### <a name="get_network_switch_stack_routing_static_routes"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getNetworkSwitchStackRoutingStaticRoutes") getNetworkSwitchStackRoutingStaticRoutes

> List layer 3 static routes for a switch stack


```javascript
function getNetworkSwitchStackRoutingStaticRoutes(networkId, switchStackId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| switchStackId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var switchStackId = 'switchStackId';

    controller.getNetworkSwitchStackRoutingStaticRoutes(networkId, switchStackId, function(error, response, context) {

    
    });
```



### <a name="create_network_switch_stack_routing_static_route"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.createNetworkSwitchStackRoutingStaticRoute") createNetworkSwitchStackRoutingStaticRoute

> Create a layer 3 static route for a switch stack


```javascript
function createNetworkSwitchStackRoutingStaticRoute(networkId, switchStackId, createNetworkSwitchStackRoutingStaticRoute, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| switchStackId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkSwitchStackRoutingStaticRoute |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var switchStackId = 'switchStackId';
    var createNetworkSwitchStackRoutingStaticRoute = new CreateNetworkSwitchStackRoutingStaticRoute({"key":"value"});

    controller.createNetworkSwitchStackRoutingStaticRoute(networkId, switchStackId, createNetworkSwitchStackRoutingStaticRoute, function(error, response, context) {

    
    });
```



### <a name="get_network_switch_stack_routing_static_route"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getNetworkSwitchStackRoutingStaticRoute") getNetworkSwitchStackRoutingStaticRoute

> Return a layer 3 static route for a switch stack


```javascript
function getNetworkSwitchStackRoutingStaticRoute(networkId, switchStackId, staticRouteId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| switchStackId |  ``` Required ```  | TODO: Add a parameter description |
| staticRouteId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var switchStackId = 'switchStackId';
    var staticRouteId = 'staticRouteId';

    controller.getNetworkSwitchStackRoutingStaticRoute(networkId, switchStackId, staticRouteId, function(error, response, context) {

    
    });
```



### <a name="update_network_switch_stack_routing_static_route"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.updateNetworkSwitchStackRoutingStaticRoute") updateNetworkSwitchStackRoutingStaticRoute

> Update a layer 3 static route for a switch stack


```javascript
function updateNetworkSwitchStackRoutingStaticRoute(networkId, switchStackId, staticRouteId, updateNetworkSwitchStackRoutingStaticRoute, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| switchStackId |  ``` Required ```  | TODO: Add a parameter description |
| staticRouteId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSwitchStackRoutingStaticRoute |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var switchStackId = 'switchStackId';
    var staticRouteId = 'staticRouteId';
    var updateNetworkSwitchStackRoutingStaticRoute = new UpdateNetworkSwitchStackRoutingStaticRoute({"key":"value"});

    controller.updateNetworkSwitchStackRoutingStaticRoute(networkId, switchStackId, staticRouteId, updateNetworkSwitchStackRoutingStaticRoute, function(error, response, context) {

    
    });
```



### <a name="delete_network_switch_stack_routing_static_route"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.deleteNetworkSwitchStackRoutingStaticRoute") deleteNetworkSwitchStackRoutingStaticRoute

> Delete a layer 3 static route for a switch stack


```javascript
function deleteNetworkSwitchStackRoutingStaticRoute(networkId, switchStackId, staticRouteId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| switchStackId |  ``` Required ```  | TODO: Add a parameter description |
| staticRouteId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var switchStackId = 'switchStackId';
    var staticRouteId = 'staticRouteId';

    controller.deleteNetworkSwitchStackRoutingStaticRoute(networkId, switchStackId, staticRouteId, function(error, response, context) {

    
    });
```



### <a name="get_network_switch_storm_control"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getNetworkSwitchStormControl") getNetworkSwitchStormControl

> Return the storm control configuration for a switch network


```javascript
function getNetworkSwitchStormControl(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSwitchStormControl(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_switch_storm_control"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.updateNetworkSwitchStormControl") updateNetworkSwitchStormControl

> Update the storm control configuration for a switch network


```javascript
function updateNetworkSwitchStormControl(networkId, updateNetworkSwitchStormControl, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSwitchStormControl |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkSwitchStormControl = new UpdateNetworkSwitchStormControl({"key":"value"});

    controller.updateNetworkSwitchStormControl(networkId, updateNetworkSwitchStormControl, function(error, response, context) {

    
    });
```



### <a name="get_network_switch_stp"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getNetworkSwitchStp") getNetworkSwitchStp

> Returns STP settings


```javascript
function getNetworkSwitchStp(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSwitchStp(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_switch_stp"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.updateNetworkSwitchStp") updateNetworkSwitchStp

> Updates STP settings


```javascript
function updateNetworkSwitchStp(networkId, updateNetworkSwitchStp, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSwitchStp |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkSwitchStp = new UpdateNetworkSwitchStp({"key":"value"});

    controller.updateNetworkSwitchStp(networkId, updateNetworkSwitchStp, function(error, response, context) {

    
    });
```



### <a name="get_organization_config_template_switch_profiles"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getOrganizationConfigTemplateSwitchProfiles") getOrganizationConfigTemplateSwitchProfiles

> List the switch profiles for your switch template configuration


```javascript
function getOrganizationConfigTemplateSwitchProfiles(organizationId, configTemplateId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| configTemplateId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var configTemplateId = 'configTemplateId';

    controller.getOrganizationConfigTemplateSwitchProfiles(organizationId, configTemplateId, function(error, response, context) {

    
    });
```



### <a name="get_organization_config_template_switch_profile_ports"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getOrganizationConfigTemplateSwitchProfilePorts") getOrganizationConfigTemplateSwitchProfilePorts

> Return all the ports of a switch profile


```javascript
function getOrganizationConfigTemplateSwitchProfilePorts(organizationId, configTemplateId, profileId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| configTemplateId |  ``` Required ```  | TODO: Add a parameter description |
| profileId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var configTemplateId = 'configTemplateId';
    var profileId = 'profileId';

    controller.getOrganizationConfigTemplateSwitchProfilePorts(organizationId, configTemplateId, profileId, function(error, response, context) {

    
    });
```



### <a name="get_organization_config_template_switch_profile_port"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.getOrganizationConfigTemplateSwitchProfilePort") getOrganizationConfigTemplateSwitchProfilePort

> Return a switch profile port


```javascript
function getOrganizationConfigTemplateSwitchProfilePort(organizationId, configTemplateId, profileId, portId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| configTemplateId |  ``` Required ```  | TODO: Add a parameter description |
| profileId |  ``` Required ```  | TODO: Add a parameter description |
| portId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var configTemplateId = 'configTemplateId';
    var profileId = 'profileId';
    var portId = 'portId';

    controller.getOrganizationConfigTemplateSwitchProfilePort(organizationId, configTemplateId, profileId, portId, function(error, response, context) {

    
    });
```



### <a name="update_organization_config_template_switch_profile_port"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.updateOrganizationConfigTemplateSwitchProfilePort") updateOrganizationConfigTemplateSwitchProfilePort

> Update a switch profile port


```javascript
function updateOrganizationConfigTemplateSwitchProfilePort(organizationId, configTemplateId, profileId, portId, updateOrganizationConfigTemplateSwitchProfilePort, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| configTemplateId |  ``` Required ```  | TODO: Add a parameter description |
| profileId |  ``` Required ```  | TODO: Add a parameter description |
| portId |  ``` Required ```  | TODO: Add a parameter description |
| updateOrganizationConfigTemplateSwitchProfilePort |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var configTemplateId = 'configTemplateId';
    var profileId = 'profileId';
    var portId = 'portId';
    var updateOrganizationConfigTemplateSwitchProfilePort = new UpdateOrganizationConfigTemplateSwitchProfilePort({"key":"value"});

    controller.updateOrganizationConfigTemplateSwitchProfilePort(organizationId, configTemplateId, profileId, portId, updateOrganizationConfigTemplateSwitchProfilePort, function(error, response, context) {

    
    });
```



### <a name="clone_organization_switch_devices"></a>![Method: ](https://apidocs.io/img/method.png ".SwitchController.cloneOrganizationSwitchDevices") cloneOrganizationSwitchDevices

> Clone port-level and some switch-level configuration settings from a source switch to one or more target switches. Cloned settings include: Aggregation Groups, Power Settings, Multicast Settings, MTU Configuration, STP Bridge priority, Port Mirroring


```javascript
function cloneOrganizationSwitchDevices(organizationId, cloneOrganizationSwitchDevices, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| cloneOrganizationSwitchDevices |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var cloneOrganizationSwitchDevices = new CloneOrganizationSwitchDevices({"key":"value"});

    controller.cloneOrganizationSwitchDevices(organizationId, cloneOrganizationSwitchDevices, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="cellular_gateway_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CellularGatewayController") CellularGatewayController

### Get singleton instance

The singleton instance of the ``` CellularGatewayController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CellularGatewayController;
```

### <a name="get_device_cellular_gateway_lan"></a>![Method: ](https://apidocs.io/img/method.png ".CellularGatewayController.getDeviceCellularGatewayLan") getDeviceCellularGatewayLan

> Show the LAN Settings of a MG


```javascript
function getDeviceCellularGatewayLan(serial, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';

    controller.getDeviceCellularGatewayLan(serial, function(error, response, context) {

    
    });
```



### <a name="update_device_cellular_gateway_lan"></a>![Method: ](https://apidocs.io/img/method.png ".CellularGatewayController.updateDeviceCellularGatewayLan") updateDeviceCellularGatewayLan

> Update the LAN Settings for a single MG.


```javascript
function updateDeviceCellularGatewayLan(serial, updateDeviceCellularGatewayLan, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| updateDeviceCellularGatewayLan |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';
    var updateDeviceCellularGatewayLan = new UpdateDeviceCellularGatewayLan({"key":"value"});

    controller.updateDeviceCellularGatewayLan(serial, updateDeviceCellularGatewayLan, function(error, response, context) {

    
    });
```



### <a name="get_device_cellular_gateway_port_forwarding_rules"></a>![Method: ](https://apidocs.io/img/method.png ".CellularGatewayController.getDeviceCellularGatewayPortForwardingRules") getDeviceCellularGatewayPortForwardingRules

> Returns the port forwarding rules for a single MG.


```javascript
function getDeviceCellularGatewayPortForwardingRules(serial, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';

    controller.getDeviceCellularGatewayPortForwardingRules(serial, function(error, response, context) {

    
    });
```



### <a name="update_device_cellular_gateway_port_forwarding_rules"></a>![Method: ](https://apidocs.io/img/method.png ".CellularGatewayController.updateDeviceCellularGatewayPortForwardingRules") updateDeviceCellularGatewayPortForwardingRules

> Updates the port forwarding rules for a single MG.


```javascript
function updateDeviceCellularGatewayPortForwardingRules(serial, updateDeviceCellularGatewayPortForwardingRules, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| serial |  ``` Required ```  | TODO: Add a parameter description |
| updateDeviceCellularGatewayPortForwardingRules |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var serial = 'serial';
    var updateDeviceCellularGatewayPortForwardingRules = new UpdateDeviceCellularGatewayPortForwardingRules({"key":"value"});

    controller.updateDeviceCellularGatewayPortForwardingRules(serial, updateDeviceCellularGatewayPortForwardingRules, function(error, response, context) {

    
    });
```



### <a name="get_network_cellular_gateway_connectivity_monitoring_destinations"></a>![Method: ](https://apidocs.io/img/method.png ".CellularGatewayController.getNetworkCellularGatewayConnectivityMonitoringDestinations") getNetworkCellularGatewayConnectivityMonitoringDestinations

> Return the connectivity testing destinations for an MG network


```javascript
function getNetworkCellularGatewayConnectivityMonitoringDestinations(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkCellularGatewayConnectivityMonitoringDestinations(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_cellular_gateway_connectivity_monitoring_destinations"></a>![Method: ](https://apidocs.io/img/method.png ".CellularGatewayController.updateNetworkCellularGatewayConnectivityMonitoringDestinations") updateNetworkCellularGatewayConnectivityMonitoringDestinations

> Update the connectivity testing destinations for an MG network


```javascript
function updateNetworkCellularGatewayConnectivityMonitoringDestinations(networkId, updateNetworkCellularGatewayConnectivityMonitoringDestinations, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkCellularGatewayConnectivityMonitoringDestinations |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkCellularGatewayConnectivityMonitoringDestinations = new UpdateNetworkCellularGatewayConnectivityMonitoringDestinations({"key":"value"});

    controller.updateNetworkCellularGatewayConnectivityMonitoringDestinations(networkId, updateNetworkCellularGatewayConnectivityMonitoringDestinations, function(error, response, context) {

    
    });
```



### <a name="get_network_cellular_gateway_dhcp"></a>![Method: ](https://apidocs.io/img/method.png ".CellularGatewayController.getNetworkCellularGatewayDhcp") getNetworkCellularGatewayDhcp

> List common DHCP settings of MGs


```javascript
function getNetworkCellularGatewayDhcp(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkCellularGatewayDhcp(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_cellular_gateway_dhcp"></a>![Method: ](https://apidocs.io/img/method.png ".CellularGatewayController.updateNetworkCellularGatewayDhcp") updateNetworkCellularGatewayDhcp

> Update common DHCP settings of MGs


```javascript
function updateNetworkCellularGatewayDhcp(networkId, updateNetworkCellularGatewayDhcp, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkCellularGatewayDhcp |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkCellularGatewayDhcp = new UpdateNetworkCellularGatewayDhcp({"key":"value"});

    controller.updateNetworkCellularGatewayDhcp(networkId, updateNetworkCellularGatewayDhcp, function(error, response, context) {

    
    });
```



### <a name="get_network_cellular_gateway_subnet_pool"></a>![Method: ](https://apidocs.io/img/method.png ".CellularGatewayController.getNetworkCellularGatewaySubnetPool") getNetworkCellularGatewaySubnetPool

> Return the subnet pool and mask configured for MGs in the network.


```javascript
function getNetworkCellularGatewaySubnetPool(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkCellularGatewaySubnetPool(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_cellular_gateway_subnet_pool"></a>![Method: ](https://apidocs.io/img/method.png ".CellularGatewayController.updateNetworkCellularGatewaySubnetPool") updateNetworkCellularGatewaySubnetPool

> Update the subnet pool and mask configuration for MGs in the network.


```javascript
function updateNetworkCellularGatewaySubnetPool(networkId, updateNetworkCellularGatewaySubnetPool, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkCellularGatewaySubnetPool |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkCellularGatewaySubnetPool = new UpdateNetworkCellularGatewaySubnetPool({"key":"value"});

    controller.updateNetworkCellularGatewaySubnetPool(networkId, updateNetworkCellularGatewaySubnetPool, function(error, response, context) {

    
    });
```



### <a name="get_network_cellular_gateway_uplink"></a>![Method: ](https://apidocs.io/img/method.png ".CellularGatewayController.getNetworkCellularGatewayUplink") getNetworkCellularGatewayUplink

> Returns the uplink settings for your MG network.


```javascript
function getNetworkCellularGatewayUplink(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkCellularGatewayUplink(networkId, function(error, response, context) {

    
    });
```



### <a name="update_network_cellular_gateway_uplink"></a>![Method: ](https://apidocs.io/img/method.png ".CellularGatewayController.updateNetworkCellularGatewayUplink") updateNetworkCellularGatewayUplink

> Updates the uplink settings for your MG network.


```javascript
function updateNetworkCellularGatewayUplink(networkId, updateNetworkCellularGatewayUplink, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkCellularGatewayUplink |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkCellularGatewayUplink = new UpdateNetworkCellularGatewayUplink({"key":"value"});

    controller.updateNetworkCellularGatewayUplink(networkId, updateNetworkCellularGatewayUplink, function(error, response, context) {

    
    });
```



### <a name="get_organization_cellular_gateway_uplink_statuses"></a>![Method: ](https://apidocs.io/img/method.png ".CellularGatewayController.getOrganizationCellularGatewayUplinkStatuses") getOrganizationCellularGatewayUplinkStatuses

> List the uplink status of every Meraki MG cellular gateway in the organization


```javascript
function getOrganizationCellularGatewayUplinkStatuses(organizationId, perPage, startingAfter, endingBefore, networkIds, serials, iccids, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| networkIds |  ``` Optional ```  ``` Collection ```  | A list of network IDs. The returned devices will be filtered to only include these networks. |
| serials |  ``` Optional ```  ``` Collection ```  | A list of serial numbers. The returned devices will be filtered to only include these serials. |
| iccids |  ``` Optional ```  ``` Collection ```  | A list of ICCIDs. The returned devices will be filtered to only include these ICCIDs. |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var perPage = 211;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';
    var networkIds = ['networkIds'];
    var serials = ['serials'];
    var iccids = ['iccids'];

    controller.getOrganizationCellularGatewayUplinkStatuses(organizationId, perPage, startingAfter, endingBefore, networkIds, serials, iccids, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)

## <a name="sm_controller"></a>![Class: ](https://apidocs.io/img/class.png ".SmController") SmController

### Get singleton instance

The singleton instance of the ``` SmController ``` class can be accessed from the API Client.

```javascript
var controller = lib.SmController;
```

### <a name="create_network_sm_bypass_activation_lock_attempt"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.createNetworkSmBypassActivationLockAttempt") createNetworkSmBypassActivationLockAttempt

> Bypass activation lock attempt


```javascript
function createNetworkSmBypassActivationLockAttempt(networkId, createNetworkSmBypassActivationLockAttempt, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkSmBypassActivationLockAttempt |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var createNetworkSmBypassActivationLockAttempt = new CreateNetworkSmBypassActivationLockAttempt({"key":"value"});

    controller.createNetworkSmBypassActivationLockAttempt(networkId, createNetworkSmBypassActivationLockAttempt, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_bypass_activation_lock_attempt"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.getNetworkSmBypassActivationLockAttempt") getNetworkSmBypassActivationLockAttempt

> Bypass activation lock attempt status


```javascript
function getNetworkSmBypassActivationLockAttempt(networkId, attemptId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| attemptId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var attemptId = 'attemptId';

    controller.getNetworkSmBypassActivationLockAttempt(networkId, attemptId, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_devices"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.getNetworkSmDevices") getNetworkSmDevices

> List the devices enrolled in an SM network with various specified fields and filters


```javascript
function getNetworkSmDevices(networkId, fields, wifiMacs, serials, ids, scope, perPage, startingAfter, endingBefore, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| fields |  ``` Optional ```  ``` Collection ```  | Additional fields that will be displayed for each device.
    The default fields are: id, name, tags, ssid, wifiMac, osName, systemModel, uuid, and serialNumber. The additional fields are: ip,
    systemType, availableDeviceCapacity, kioskAppName, biosVersion, lastConnected, missingAppsCount, userSuppliedAddress, location, lastUser,
    ownerEmail, ownerUsername, osBuild, publicIp, phoneNumber, diskInfoJson, deviceCapacity, isManaged, hadMdm, isSupervised, meid, imei, iccid,
    simCarrierNetwork, cellularDataUsed, isHotspotEnabled, createdAt, batteryEstCharge, quarantined, avName, avRunning, asName, fwName,
    isRooted, loginRequired, screenLockEnabled, screenLockDelay, autoLoginDisabled, autoTags, hasMdm, hasDesktopAgent, diskEncryptionEnabled,
    hardwareEncryptionCaps, passCodeLock, usesHardwareKeystore, and androidSecurityPatchVersion. |
| wifiMacs |  ``` Optional ```  ``` Collection ```  | Filter devices by wifi mac(s). |
| serials |  ``` Optional ```  ``` Collection ```  | Filter devices by serial(s). |
| ids |  ``` Optional ```  ``` Collection ```  | Filter devices by id(s). |
| scope |  ``` Optional ```  ``` Collection ```  | Specify a scope (one of all, none, withAny, withAll, withoutAny, or withoutAll) and a set of tags. |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var fields = ['fields'];
    var wifiMacs = ['wifiMacs'];
    var serials = ['serials'];
    var ids = ['ids'];
    var scope = ['scope'];
    var perPage = 211;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';

    controller.getNetworkSmDevices(networkId, fields, wifiMacs, serials, ids, scope, perPage, startingAfter, endingBefore, function(error, response, context) {

    
    });
```



### <a name="checkin_network_sm_devices"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.checkinNetworkSmDevices") checkinNetworkSmDevices

> Force check-in a set of devices


```javascript
function checkinNetworkSmDevices(networkId, checkinNetworkSmDevices, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| checkinNetworkSmDevices |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var checkinNetworkSmDevices = new CheckinNetworkSmDevices({"key":"value"});

    controller.checkinNetworkSmDevices(networkId, checkinNetworkSmDevices, function(error, response, context) {

    
    });
```



### <a name="update_network_sm_devices_fields"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.updateNetworkSmDevicesFields") updateNetworkSmDevicesFields

> Modify the fields of a device


```javascript
function updateNetworkSmDevicesFields(networkId, updateNetworkSmDevicesFields, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSmDevicesFields |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var updateNetworkSmDevicesFields = new UpdateNetworkSmDevicesFields({"key":"value"});

    controller.updateNetworkSmDevicesFields(networkId, updateNetworkSmDevicesFields, function(error, response, context) {

    
    });
```



### <a name="lock_network_sm_devices"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.lockNetworkSmDevices") lockNetworkSmDevices

> Lock a set of devices


```javascript
function lockNetworkSmDevices(networkId, lockNetworkSmDevices, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| lockNetworkSmDevices |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var lockNetworkSmDevices = new LockNetworkSmDevices({"key":"value"});

    controller.lockNetworkSmDevices(networkId, lockNetworkSmDevices, function(error, response, context) {

    
    });
```



### <a name="modify_network_sm_devices_tags"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.modifyNetworkSmDevicesTags") modifyNetworkSmDevicesTags

> Add, delete, or update the tags of a set of devices


```javascript
function modifyNetworkSmDevicesTags(networkId, modifyNetworkSmDevicesTags, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| modifyNetworkSmDevicesTags |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var modifyNetworkSmDevicesTags = new ModifyNetworkSmDevicesTags({"key":"value"});

    controller.modifyNetworkSmDevicesTags(networkId, modifyNetworkSmDevicesTags, function(error, response, context) {

    
    });
```



### <a name="move_network_sm_devices"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.moveNetworkSmDevices") moveNetworkSmDevices

> Move a set of devices to a new network


```javascript
function moveNetworkSmDevices(networkId, moveNetworkSmDevices, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| moveNetworkSmDevices |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var moveNetworkSmDevices = new MoveNetworkSmDevices({"key":"value"});

    controller.moveNetworkSmDevices(networkId, moveNetworkSmDevices, function(error, response, context) {

    
    });
```



### <a name="wipe_network_sm_devices"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.wipeNetworkSmDevices") wipeNetworkSmDevices

> Wipe a device


```javascript
function wipeNetworkSmDevices(networkId, wipeNetworkSmDevices, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| wipeNetworkSmDevices |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var wipeNetworkSmDevices = new WipeNetworkSmDevices({"key":"value"});

    controller.wipeNetworkSmDevices(networkId, wipeNetworkSmDevices, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_device_cellular_usage_history"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.getNetworkSmDeviceCellularUsageHistory") getNetworkSmDeviceCellularUsageHistory

> Return the client's daily cellular data usage history. Usage data is in kilobytes.


```javascript
function getNetworkSmDeviceCellularUsageHistory(networkId, deviceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| deviceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var deviceId = 'deviceId';

    controller.getNetworkSmDeviceCellularUsageHistory(networkId, deviceId, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_device_certs"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.getNetworkSmDeviceCerts") getNetworkSmDeviceCerts

> List the certs on a device


```javascript
function getNetworkSmDeviceCerts(networkId, deviceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| deviceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var deviceId = 'deviceId';

    controller.getNetworkSmDeviceCerts(networkId, deviceId, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_device_connectivity"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.getNetworkSmDeviceConnectivity") getNetworkSmDeviceConnectivity

> Returns historical connectivity data (whether a device is regularly checking in to Dashboard).


```javascript
function getNetworkSmDeviceConnectivity(networkId, deviceId, perPage, startingAfter, endingBefore, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| deviceId |  ``` Required ```  | TODO: Add a parameter description |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var deviceId = 'deviceId';
    var perPage = 211;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';

    controller.getNetworkSmDeviceConnectivity(networkId, deviceId, perPage, startingAfter, endingBefore, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_device_desktop_logs"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.getNetworkSmDeviceDesktopLogs") getNetworkSmDeviceDesktopLogs

> Return historical records of various Systems Manager network connection details for desktop devices.


```javascript
function getNetworkSmDeviceDesktopLogs(networkId, deviceId, perPage, startingAfter, endingBefore, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| deviceId |  ``` Required ```  | TODO: Add a parameter description |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var deviceId = 'deviceId';
    var perPage = 211;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';

    controller.getNetworkSmDeviceDesktopLogs(networkId, deviceId, perPage, startingAfter, endingBefore, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_device_device_command_logs"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.getNetworkSmDeviceDeviceCommandLogs") getNetworkSmDeviceDeviceCommandLogs

> Return historical records of commands sent to Systems Manager devices. Note that this will include the name of the Dashboard user who initiated the command if it was generated by a Dashboard admin rather than the automatic behavior of the system; you may wish to filter this out of any reports.


```javascript
function getNetworkSmDeviceDeviceCommandLogs(networkId, deviceId, perPage, startingAfter, endingBefore, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| deviceId |  ``` Required ```  | TODO: Add a parameter description |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var deviceId = 'deviceId';
    var perPage = 211;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';

    controller.getNetworkSmDeviceDeviceCommandLogs(networkId, deviceId, perPage, startingAfter, endingBefore, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_device_device_profiles"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.getNetworkSmDeviceDeviceProfiles") getNetworkSmDeviceDeviceProfiles

> Get the profiles associated with a device


```javascript
function getNetworkSmDeviceDeviceProfiles(networkId, deviceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| deviceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var deviceId = 'deviceId';

    controller.getNetworkSmDeviceDeviceProfiles(networkId, deviceId, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_device_network_adapters"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.getNetworkSmDeviceNetworkAdapters") getNetworkSmDeviceNetworkAdapters

> List the network adapters of a device


```javascript
function getNetworkSmDeviceNetworkAdapters(networkId, deviceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| deviceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var deviceId = 'deviceId';

    controller.getNetworkSmDeviceNetworkAdapters(networkId, deviceId, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_device_performance_history"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.getNetworkSmDevicePerformanceHistory") getNetworkSmDevicePerformanceHistory

> Return historical records of various Systems Manager client metrics for desktop devices.


```javascript
function getNetworkSmDevicePerformanceHistory(networkId, deviceId, perPage, startingAfter, endingBefore, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| deviceId |  ``` Required ```  | TODO: Add a parameter description |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 1000. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var deviceId = 'deviceId';
    var perPage = 211;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';

    controller.getNetworkSmDevicePerformanceHistory(networkId, deviceId, perPage, startingAfter, endingBefore, function(error, response, context) {

    
    });
```



### <a name="refresh_network_sm_device_details"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.refreshNetworkSmDeviceDetails") refreshNetworkSmDeviceDetails

> Refresh the details of a device


```javascript
function refreshNetworkSmDeviceDetails(networkId, deviceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| deviceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var deviceId = 'deviceId';

    controller.refreshNetworkSmDeviceDetails(networkId, deviceId, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_device_restrictions"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.getNetworkSmDeviceRestrictions") getNetworkSmDeviceRestrictions

> List the restrictions on a device


```javascript
function getNetworkSmDeviceRestrictions(networkId, deviceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| deviceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var deviceId = 'deviceId';

    controller.getNetworkSmDeviceRestrictions(networkId, deviceId, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_device_security_centers"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.getNetworkSmDeviceSecurityCenters") getNetworkSmDeviceSecurityCenters

> List the security centers on a device


```javascript
function getNetworkSmDeviceSecurityCenters(networkId, deviceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| deviceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var deviceId = 'deviceId';

    controller.getNetworkSmDeviceSecurityCenters(networkId, deviceId, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_device_softwares"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.getNetworkSmDeviceSoftwares") getNetworkSmDeviceSoftwares

> Get a list of softwares associated with a device


```javascript
function getNetworkSmDeviceSoftwares(networkId, deviceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| deviceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var deviceId = 'deviceId';

    controller.getNetworkSmDeviceSoftwares(networkId, deviceId, function(error, response, context) {

    
    });
```



### <a name="unenroll_network_sm_device"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.unenrollNetworkSmDevice") unenrollNetworkSmDevice

> Unenroll a device


```javascript
function unenrollNetworkSmDevice(networkId, deviceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| deviceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var deviceId = 'deviceId';

    controller.unenrollNetworkSmDevice(networkId, deviceId, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_device_wlan_lists"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.getNetworkSmDeviceWlanLists") getNetworkSmDeviceWlanLists

> List the saved SSID names on a device


```javascript
function getNetworkSmDeviceWlanLists(networkId, deviceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| deviceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var deviceId = 'deviceId';

    controller.getNetworkSmDeviceWlanLists(networkId, deviceId, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_profiles"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.getNetworkSmProfiles") getNetworkSmProfiles

> List all profiles in a network


```javascript
function getNetworkSmProfiles(networkId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';

    controller.getNetworkSmProfiles(networkId, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_target_groups"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.getNetworkSmTargetGroups") getNetworkSmTargetGroups

> List the target groups in this network


```javascript
function getNetworkSmTargetGroups(networkId, withDetails, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| withDetails |  ``` Optional ```  | Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var withDetails = true;

    controller.getNetworkSmTargetGroups(networkId, withDetails, function(error, response, context) {

    
    });
```



### <a name="create_network_sm_target_group"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.createNetworkSmTargetGroup") createNetworkSmTargetGroup

> Add a target group


```javascript
function createNetworkSmTargetGroup(networkId, createNetworkSmTargetGroup, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| createNetworkSmTargetGroup |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var createNetworkSmTargetGroup = new CreateNetworkSmTargetGroup({"key":"value"});

    controller.createNetworkSmTargetGroup(networkId, createNetworkSmTargetGroup, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_target_group"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.getNetworkSmTargetGroup") getNetworkSmTargetGroup

> Return a target group


```javascript
function getNetworkSmTargetGroup(networkId, targetGroupId, withDetails, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| targetGroupId |  ``` Required ```  | TODO: Add a parameter description |
| withDetails |  ``` Optional ```  | Boolean indicating if the the ids of the devices or users scoped by the target group should be included in the response |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var targetGroupId = 'targetGroupId';
    var withDetails = true;

    controller.getNetworkSmTargetGroup(networkId, targetGroupId, withDetails, function(error, response, context) {

    
    });
```



### <a name="update_network_sm_target_group"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.updateNetworkSmTargetGroup") updateNetworkSmTargetGroup

> Update a target group


```javascript
function updateNetworkSmTargetGroup(networkId, targetGroupId, updateNetworkSmTargetGroup, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| targetGroupId |  ``` Required ```  | TODO: Add a parameter description |
| updateNetworkSmTargetGroup |  ``` Optional ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var targetGroupId = 'targetGroupId';
    var updateNetworkSmTargetGroup = new UpdateNetworkSmTargetGroup({"key":"value"});

    controller.updateNetworkSmTargetGroup(networkId, targetGroupId, updateNetworkSmTargetGroup, function(error, response, context) {

    
    });
```



### <a name="delete_network_sm_target_group"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.deleteNetworkSmTargetGroup") deleteNetworkSmTargetGroup

> Delete a target group from a network


```javascript
function deleteNetworkSmTargetGroup(networkId, targetGroupId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| targetGroupId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var targetGroupId = 'targetGroupId';

    controller.deleteNetworkSmTargetGroup(networkId, targetGroupId, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_user_access_devices"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.getNetworkSmUserAccessDevices") getNetworkSmUserAccessDevices

> List User Access Devices and its Trusted Access Connections


```javascript
function getNetworkSmUserAccessDevices(networkId, perPage, startingAfter, endingBefore, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| perPage |  ``` Optional ```  | The number of entries per page returned. Acceptable range is 3 - 1000. Default is 100. |
| startingAfter |  ``` Optional ```  | A token used by the server to indicate the start of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |
| endingBefore |  ``` Optional ```  | A token used by the server to indicate the end of the page. Often this is a timestamp or an ID but it is not limited to those. This parameter should not be defined by client applications. The link for the first, last, prev, or next page in the HTTP Link header should define it. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var perPage = 211;
    var startingAfter = 'startingAfter';
    var endingBefore = 'endingBefore';

    controller.getNetworkSmUserAccessDevices(networkId, perPage, startingAfter, endingBefore, function(error, response, context) {

    
    });
```



### <a name="delete_network_sm_user_access_device"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.deleteNetworkSmUserAccessDevice") deleteNetworkSmUserAccessDevice

> Delete a User Access Device


```javascript
function deleteNetworkSmUserAccessDevice(networkId, userAccessDeviceId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| userAccessDeviceId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var userAccessDeviceId = 'userAccessDeviceId';

    controller.deleteNetworkSmUserAccessDevice(networkId, userAccessDeviceId, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_users"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.getNetworkSmUsers") getNetworkSmUsers

> List the owners in an SM network with various specified fields and filters


```javascript
function getNetworkSmUsers(networkId, ids, usernames, emails, scope, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| ids |  ``` Optional ```  ``` Collection ```  | Filter users by id(s). |
| usernames |  ``` Optional ```  ``` Collection ```  | Filter users by username(s). |
| emails |  ``` Optional ```  ``` Collection ```  | Filter users by email(s). |
| scope |  ``` Optional ```  ``` Collection ```  | Specifiy a scope (one of all, none, withAny, withAll, withoutAny, withoutAll) and a set of tags. |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var ids = ['ids'];
    var usernames = ['usernames'];
    var emails = ['emails'];
    var scope = ['scope'];

    controller.getNetworkSmUsers(networkId, ids, usernames, emails, scope, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_user_device_profiles"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.getNetworkSmUserDeviceProfiles") getNetworkSmUserDeviceProfiles

> Get the profiles associated with a user


```javascript
function getNetworkSmUserDeviceProfiles(networkId, userId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| userId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var userId = 'userId';

    controller.getNetworkSmUserDeviceProfiles(networkId, userId, function(error, response, context) {

    
    });
```



### <a name="get_network_sm_user_softwares"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.getNetworkSmUserSoftwares") getNetworkSmUserSoftwares

> Get a list of softwares associated with a user


```javascript
function getNetworkSmUserSoftwares(networkId, userId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| networkId |  ``` Required ```  | TODO: Add a parameter description |
| userId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var networkId = 'networkId';
    var userId = 'userId';

    controller.getNetworkSmUserSoftwares(networkId, userId, function(error, response, context) {

    
    });
```



### <a name="get_organization_sm_apns_cert"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.getOrganizationSmApnsCert") getOrganizationSmApnsCert

> Get the organization's APNS certificate


```javascript
function getOrganizationSmApnsCert(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.getOrganizationSmApnsCert(organizationId, function(error, response, context) {

    
    });
```



### <a name="get_organization_sm_vpp_accounts"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.getOrganizationSmVppAccounts") getOrganizationSmVppAccounts

> List the VPP accounts in the organization


```javascript
function getOrganizationSmVppAccounts(organizationId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';

    controller.getOrganizationSmVppAccounts(organizationId, function(error, response, context) {

    
    });
```



### <a name="get_organization_sm_vpp_account"></a>![Method: ](https://apidocs.io/img/method.png ".SmController.getOrganizationSmVppAccount") getOrganizationSmVppAccount

> Get a hash containing the unparsed token of the VPP account with the given ID


```javascript
function getOrganizationSmVppAccount(organizationId, vppAccountId, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| organizationId |  ``` Required ```  | TODO: Add a parameter description |
| vppAccountId |  ``` Required ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var organizationId = 'organizationId';
    var vppAccountId = 'vppAccountId';

    controller.getOrganizationSmVppAccount(organizationId, vppAccountId, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



