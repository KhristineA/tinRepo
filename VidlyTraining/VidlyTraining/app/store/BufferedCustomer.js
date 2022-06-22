Ext.define('Vidly.store.BufferedCustomer', {
    extend: 'Ext.data.BufferedStore',
    alias: 'store.vmbufferedcustomer',

    requires: [
        'Vidly.model.Customer'
    ],

    model: 'Vidly.model.Customer',
    storeId: 'BufferedCustomer',
    pageSize: 10,
    batchAction: true,
    proxy: {
        type: 'rest',
        api: {
            read: './vidly/api/customer/search'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            messageProperty: 'message'
        }
    }
})