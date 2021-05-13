/**
 * MerakiDashboardAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of UpdateNetworkSwitchRoutingOspf
 */
class UpdateNetworkSwitchRoutingOspf extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.enabled = this.constructor.getValue(obj.enabled);
        this.helloTimerInSeconds = this.constructor.getValue(obj.helloTimerInSeconds);
        this.deadTimerInSeconds = this.constructor.getValue(obj.deadTimerInSeconds);
        this.areas = this.constructor.getValue(obj.areas);
        this.md5AuthenticationEnabled = this.constructor.getValue(obj.md5AuthenticationEnabled);
        this.md5AuthenticationKey = this.constructor.getValue(obj.md5AuthenticationKey);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'enabled', realName: 'enabled' },
            { name: 'helloTimerInSeconds', realName: 'helloTimerInSeconds' },
            { name: 'deadTimerInSeconds', realName: 'deadTimerInSeconds' },
            { name: 'areas', realName: 'areas', array: true, type: 'Area' },
            { name: 'md5AuthenticationEnabled', realName: 'md5AuthenticationEnabled' },
            {
                name: 'md5AuthenticationKey',
                realName: 'md5AuthenticationKey',
                type: 'Md5AuthenticationKey',
            },
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

module.exports = UpdateNetworkSwitchRoutingOspf;