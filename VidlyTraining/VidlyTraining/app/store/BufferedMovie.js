Ext.define('Vidly.store.BufferedMovie', {
    extend: 'Ext.data.BufferedStore',
    alias: 'store.vmbufferedmovie',

    requires: [
        'Vidly.model.Movie'
    ],

    model: 'Vidly.model.Movie',
    storeId: 'BufferedMovie',
    pageSize: 10,
    batchAction: true,
    proxy: {
        type: 'rest',
        api: {
            read: './vidly/api/movie/search'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            messageProperty: 'message'
        }
    }
})