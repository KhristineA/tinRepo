/*
 * File: app/view/CustomerViewController.js
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

Ext.define('Vidly.view.CustomerViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.vmcustomer',

    
    show : function() {
        "use strict";
 
        var me = this;
        me.getView().show();
 
        //var context = win.context ? win.context.initialize() : me.setupContext();
        var context = me.setupContext();
        context.data.load();
    },

    setupContext: function() {
        var me = this,
            win = me.getView();
 
        win.context = Ext.create('iRely.Engine', {
            window : win,
            store  : Ext.create('Vidly.store.Customer'),
            singleGridMgr: Ext.create('iRely.grid.Manager', {
                grid:  win.down('grid'),
                title: 'Customer Grid',
                columns: [
                    {
                        xtype: 'gridcolumn',
                        itemId: 'colName',
                        dataType: 'string',
                        dataIndex: 'strName',
                        text: 'Customer Name',
                        flex: 1,
                        required: true,
                        editor: {
                            xtype: 'textfield',
                            itemId: 'txtName',
                            required: true,
                        }
                    },
                    {
                        xtype: 'checkcolumn',
                        itemId: 'colIsSubscribedToNewsletter',
                        dataType: 'bool',
                        dataIndex: 'ysnIsSubscribedToNewsletter',
                        text: 'Is Subscribed To Newsletter',
                        flex: 1,
                        editor: {
                            xtype: 'checkboxfield',
                            itemId: 'txtName'
                        }
                    },
                    {
                        xtype: 'gridcolumn',
                        itemId: 'colMembershipTypeId',
                        dataType: 'numeric',
                        dataIndex: 'intMembershipTypeId',
                        text: 'Membership Type Id',
                        flex: 1,
                        editor: {
                            xtype: 'textfield',
                            itemId: 'txtMembershipTypeId'
                        }
                    },
                    // {
                    //     xtype: 'numbercolumn',
                    //     itemId: 'colMembershipTypeId',
                    //     minWidth: 110,
                    //     width: 110,
                    //     dataIndex: 'intMembershipTypeId',
                    //     format: '0',
                    //     text: 'Membership Type Ids',
                    //     flex: 1,
                    //     editor: {
                    //         xtype: 'gridcombobox',
                    //         columns: [
                    //             {
                    //                 dataIndex: 'intMembershipTypeId',
                    //                 dataType: 'numeric',
                    //                 text: 'Membership Type Id',
                    //                 flex: 1,
                    //                 store: '{membershiptypes}'
                    //             }
                    //         ],
                    //         pickerWidth: 80,
                    //         itemId: 'cboMembershipTypeId',
                    //         displayField: 'intMembershipTypeId',
                    //         queryMode: 'local',
                    //         valueField: 'intMembershipTypeId'
                    //     }
                    // },
                    {
                        xtype: 'datecolumn',
                        itemId: 'colBirthdate',
                        dataType: 'date',
                        dataIndex: 'dtmBirthdate',
                        text: 'Birthdate',
                        flex: 1,
                        editor: {
                            xtype: 'textfield',
                            itemId: 'txtBirthdate'
                        }
                    },
                ]
            })
        });
 
        return win.context;
    }



});
