Ext.define('Vidly.store.Rental', {
    extend: 'Ext.data.Store',
    alias: 'vmrental',

    requires: [
        'Vidly.model.RentalHeader'
    ],

    model: 'Vidly.model.RentalHeader',
    storeId: 'RentalHeader',
    pageSize: 50,
    batchActions: true,
    proxy: {
        type: 'rest',
        api: {
            read: './vidly/api/rentalheader/get',
            update: './vidly/api/rentalheader/put',
            create: './vidly/api/rentalheader/post',
            destroy: './vidly/api/rentalheader/delete'
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