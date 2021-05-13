/**
 * MerakiDashboardAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of CreateDeviceSwitchRoutingStaticRoute
 */
class CreateDeviceSwitchRoutingStaticRoute extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.name = this.constructor.getValue(obj.name);
        this.subnet = this.constructor.getValue(obj.subnet);
        this.nextHopIp = this.constructor.getValue(obj.nextHopIp);
        this.advertiseViaOspfEnabled = this.constructor.getValue(obj.advertiseViaOspfEnabled);
        this.preferOverOspfRoutesEnabled =
          this.constructor.getValue(obj.preferOverOspfRoutesEnabled);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'name', realName: 'name' },
            { name: 'subnet', realName: 'subnet' },
            { name: 'nextHopIp', realName: 'nextHopIp' },
            { name: 'advertiseViaOspfEnabled', realName: 'advertiseViaOspfEnabled' },
            { name: 'preferOverOspfRoutesEnabled', realName: 'preferOverOspfRoutesEnabled' },
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

module.exports = CreateDeviceSwitchRoutingStaticRoute;