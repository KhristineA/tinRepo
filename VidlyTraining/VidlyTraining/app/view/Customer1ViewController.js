/*
 * File: app/view/Customer1ViewController.js
 *
 * This file was generated by Sencha Architect version 4.2.4.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.6.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.6.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Vidly.view.Customer1ViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.vmcustomer1',

    config: {
        binding: {
            txtCusotmerName: {
                value: '{current.strCustomerName}'
            },
            chkIsSubscribedToNewsletter: {
                value: '{current.ysnIsSubscribedToNewsletter}'
            },
            cboMembershipType: {
                value: '{current.strMembershipTypeName}',
                origValueField: 'intMembershipTypeId',
                store: '{membershipType}'
            },
            txtMembershipTypeId: {
                value: '{current.intMembershipTypeId}'
            },
            dtmBirthdate: {
                value: '{current.dtmBirthdate}'
            }
        },
    },

    show: function(config){
        "use strict";

        var me = this,
        win = me.getView(),
        action = config && config.action;

        if (config) {

            win.show();

            var context = win.context ? win.context.initialize() : me.setupContext();

            if (config.action === 'new') {
                context.data.addRecord();
            } else {
                if (config.id) {
                    config.filters = [{
                        column: 'intCustomerId',
                        value: config.id
                    }];
                }
                context.data.load({
                    filters: config.filters
                });
            }
        }
    },

    setupContext : function(options){
        "use strict";
        var me = this,
            win = this.getView(),
            store = Ext.create('Vidly.store.Customer', { pageSize: 1 });

        win.context = Ext.create('iRely.Engine', {
            window : win,
            store  : store,
            enableAudit: true,
            binding: me.config.binding
        });

        return win.context;
    }
});
