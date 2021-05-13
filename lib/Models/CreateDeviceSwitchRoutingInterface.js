/**
 * MerakiDashboardAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of CreateDeviceSwitchRoutingInterface
 */
class CreateDeviceSwitchRoutingInterface extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.name = this.constructor.getValue(obj.name);
        this.subnet = this.constructor.getValue(obj.subnet);
        this.interfaceIp = this.constructor.getValue(obj.interfaceIp);
        this.multicastRouting = this.constructor.getValue(obj.multicastRouting);
        this.vlanId = this.constructor.getValue(obj.vlanId);
        this.defaultGateway = this.constructor.getValue(obj.defaultGateway);
        this.ospfSettings = this.constructor.getValue(obj.ospfSettings);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'name', realName: 'name' },
            { name: 'subnet', realName: 'subnet' },
            { name: 'interfaceIp', realName: 'interfaceIp' },
            { name: 'multicastRouting', realName: 'multicastRouting' },
            { name: 'vlanId', realName: 'vlanId' },
            { name: 'defaultGateway', realName: 'defaultGateway' },
            { name: 'ospfSettings', realName: 'ospfSettings', type: 'OspfSettings' },
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

module.exports = CreateDeviceSwitchRoutingInterface;