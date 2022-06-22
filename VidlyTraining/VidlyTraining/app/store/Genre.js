Ext.define('Vidly.store.Genre', {
    extend: 'Ext.data.Store',
    alias: 'store.vmgenre',

    requires: [
        'Vidly.model.Genre'
    ],

    model: 'Vidly.model.Genre',
    storeId: 'Genre',
    pageSize: 15,
    batchActions: true,
    proxy: {
        type: 'rest',
        api: {
            read: './vidly/api/genre/get',
            update: './vidly/api/genre/put',
            create: './vidly/api/genre/post',
            destroy: './vidly/api/genre/delete'
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