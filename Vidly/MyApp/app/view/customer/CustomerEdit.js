Ext.define('MyApp.view.customer.CustomerEdit', {
    extend: 'Ext.window.Window',
    alias: 'widget.customeredit',
    xtype: 'customerForm',
    controller: 'customer-list',
    viewModel: { type: 'customerviewmodel' },

    title: 'Customer',
    layout: 'fit',
    autoShow: true,

    initComponent: function () {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'hiddenfield',
                        name: 'id',
                        bind: '{currentRecord.id}'
                    },
                    {
                        xtype: 'textfield',
                        name: 'name',
                        bind: '{currentRecord.name}',
                        fieldLabel: 'Name',
                        margin: '10 10 10 10'
                    },
                    {
                        xtype: 'checkboxfield',
                        name: 'isSubscribedToNewsletter',
                        bind: '{currentRecord.isSubscribedToNewsletter}',
                        fieldLabel: 'SubToNewsletter',
                        margin: '10 10 10 10'
                        //inputValue: 1,
                        //uncheckedValue: 0
                    },
                    {
                        xtype: 'hiddenfield',
                        bind: '{currentRecord.membershipTypeId}'
                    },
                    {
                        xtype: 'combo',
                        name: 'membershipTypeId',
                        label: 'Select',
                        valueField: 'id',
                        displayField: 'name',
                        bind: '{currentRecord.membershipTypeId}',
                        store: { type: 'MembershipTypeStore' },
                        fieldLabel: 'MembershipType',
                        margin: '10 10 10 10'
                    },
                    {
                        xtype: 'textfield',
                        name: 'birthdate',
                        bind: '{currentRecord.birthdate}',
                        fieldLabel: 'Birthdate',
                        margin: '10 10 10 10'
                    },
                    {
                        xtype: 'toolbar',
                        docked: 'bottom',
                        items: ['->', {
                            xtype: 'button',
                            text: 'Save',
                            iconCls: 'x-fa fa-check',
                            handler: 'submitUpdate'
                        }, {
                                xtype: 'button',
                                text: 'Cancel',
                                iconCls: 'x-fa fa-close',
                                scope: this,
                                handler: this.close
                            }]
                    }
                ]
            }
        ];

        /*this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }      
        ];*/

        this.callParent(arguments);
    }
});