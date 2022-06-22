Ext.define('Vidly.store.BufferedGenre', {
    extend: 'Ext.data.BufferedStore',
    alias: 'store.vmbufferedgenre',

    requires: [
        'Vidly.model.Genre'
    ],

    model: 'Vidly.model.Genre',
    storeId: 'BufferedGenre',
    pageSize: 100,
    batchAction: true,
    proxy: {
        type: 'rest',
        api: {
            read: './vidly/api/genre/search'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            messageProperty: 'message'
        }
    }
})