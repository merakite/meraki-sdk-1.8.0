/**
 * MerakiDashboardAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of ProvisionNetworkClients
 */
class ProvisionNetworkClients extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.clients = this.constructor.getValue(obj.clients);
        this.devicePolicy = this.constructor.getValue(obj.devicePolicy);
        this.groupPolicyId = this.constructor.getValue(obj.groupPolicyId);
        this.policiesBySecurityAppliance =
          this.constructor.getValue(obj.policiesBySecurityAppliance);
        this.policiesBySsid = this.constructor.getValue(obj.policiesBySsid);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'clients', realName: 'clients', array: true, type: 'Client' },
            { name: 'devicePolicy', realName: 'devicePolicy' },
            { name: 'groupPolicyId', realName: 'groupPolicyId' },
            {
                name: 'policiesBySecurityAppliance',
                realName: 'policiesBySecurityAppliance',
                type: 'PoliciesBySecurityAppliance',
            },
            { name: 'policiesBySsid', realName: 'policiesBySsid', type: 'GeneratedObject' },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = ProvisionNetworkClients;