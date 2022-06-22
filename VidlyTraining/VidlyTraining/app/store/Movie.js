Ext.define('Vidly.store.Movie', {
    extend: 'Ext.data.Store',
    alias: 'vmmovie',

    requires: [
        'Vidly.model.Movie'
    ],

    model: 'Vidly.model.Movie',
    storeId: 'Movie',
    pageSize: 15,
    batchActions: true,
    proxy: {
        type: 'rest',
        api: {
            read: './vidly/api/movie/get',
            update: './vidly/api/movie/put',
            create: './vidly/api/movie/post',
            destroy: './vidly/api/movie/delete'
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