/**
 * MerakiDashboardAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of FiveGhzSettings
 */
class FiveGhzSettings extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.channel = this.constructor.getValue(obj.channel);
        this.channelWidth = this.constructor.getValue(obj.channelWidth);
        this.targetPower = this.constructor.getValue(obj.targetPower);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'channel', realName: 'channel' },
            { name: 'channelWidth', realName: 'channelWidth' },
            { name: 'targetPower', realName: 'targetPower' },
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

module.exports = FiveGhzSettings;