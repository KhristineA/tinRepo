Ext.define('Vidly.store.Customer', {
    extend: 'Ext.data.Store',
    alias: 'vmcustomer',

    requires: [
        'Vidly.model.Customer'
    ],

    model: 'Vidly.model.Customer',
    storeId: 'Customer',
    pageSize: 15,
    batchActions: true,
    proxy: {
        type: 'rest',
        api: {
            read: './vidly/api/customer/get',
            update: './vidly/api/customer/put',
            create: './vidly/api/customer/post',
            destroy: './vidly/api/customer/delete'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            messageProperty: 'message'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            allowSingle: false
        }
    }
});