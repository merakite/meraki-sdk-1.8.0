/**
 * MerakiDashboardAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of VpnTrafficUplinkPreference
 */
class VpnTrafficUplinkPreference extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.trafficFilters = this.constructor.getValue(obj.trafficFilters);
        this.preferredUplink = this.constructor.getValue(obj.preferredUplink);
        this.failOverCriterion = this.constructor.getValue(obj.failOverCriterion);
        this.performanceClass = this.constructor.getValue(obj.performanceClass);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            {
                name: 'trafficFilters',
                realName: 'trafficFilters',
                array: true,
                type: 'TrafficFilter1',
            },
            { name: 'preferredUplink', realName: 'preferredUplink' },
            { name: 'failOverCriterion', realName: 'failOverCriterion' },
            { name: 'performanceClass', realName: 'performanceClass', type: 'PerformanceClass' },
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

module.exports = VpnTrafficUplinkPreference;