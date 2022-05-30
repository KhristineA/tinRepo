Ext.define('MyApp.view.customer.CustomerList', {
    extend: 'Ext.grid.Panel',
    xtype: 'customermainlist',
    alias: 'widget.customermainlist',
    
    title: 'Customers',

    controller: 'customer-list',
    viewModel: { type: 'customerviewmodel' },
    selType: 'rowmodel',    
    selModel:
    {
        mode: 'SINGLE'
    },
    viewConfig:
    {
        stripeRows: true
    },
    listeners: {
        selectionchange: 'onSelectionChange'
    },
    bind: {
        store: '{CustomerListPagingStore}'
    },
    reference: 'customerGrid',
    initComponent: function () {
        Ext.apply(this,
        {
            columns: [{
                text: "Id",
                dataIndex: 'id'
            },
            {
                text: "Name",
                flex: 1,
                dataIndex: 'name',
                filter: { type: 'string'}
            },
            {
                text: "MembershipTypeId",
                flex: 1,
                dataIndex: 'membershipTypeId'
            },
            {
                text: "MembershipType",
                flex: 1,
                dataIndex: 'membershipTypeId',
                renderer: function (value, metaData) {
                    return metaData.record.getAssociatedData().membershipType.name;
                }
            }],
            plugins: 'gridfilters',
            tbar: [{
                text: 'New Customer',
                iconCls: 'fa-plus',
                handler: 'onAddClick'
            },
            {
                itemId: 'removeCustomer',
                text: 'Delete Customer',
                iconCls: 'fa-times',
                reference: 'btnRemoveCustomer',
                handler: 'onRemoveClick',
                disabled: true
            }],
            bbar: [{
                xtype: 'pagingtoolbar',
                bind:{
                    store: '{CustomerListPagingStore}'
                },
                displayInfo: true,
                displayMsg: 'Displaying {0} to {1} of {2} &nbsp;records ',
                emptyMsg: "No records to display&nbsp;"
            }]
        });
        //this.buttons = [
        //    {
        //        text: 'Add',
        //        action: 'add'
        //    }
        //];
        //this.store.load();
        this.callParent(arguments);
        
        
    }
});


/*Ext.define('MyApp.view.customer.CustomerList', {
    extend: 'Ext.grid.Panel',
    xtype: 'customermainlist',

    requires: [
        'MyApp.store.Customer'
    ],

    title: 'Customers',

    store: {
        type: 'customer'
    },

    columns: [
        { text: 'Id',  dataIndex: 'id' },
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'IsSubscribed', dataIndex: 'isSubscribed', flex: 1 },
        { text: 'Birthdate', dataIndex: 'birthdate', flex: 1 }
    ],
    bbar: {
        xtype: 'pagingtoolbar',
        displayInfo: true
    },

    listeners: {
        select: 'editCustomer'
    }



            ,
            {
                xtype: 'datecolumn',
                text: "Birth Date",
                flex: 1,
                dataIndex: 'birthdate',
                format: 'm/d/Y',
                renderer: Ext.util.Format.dateRenderer('d/m/Y')
}
});*/