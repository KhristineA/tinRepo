Ext.define('MyApp.store.Movie', {
    extend: 'Ext.data.Store',
    alias: 'store.MovieListPagingStore',
    model: 'MyApp.model.Movie',
    autoLoad: true,
    pageSize: 15,
    proxy: {
        type: 'rest',
        url: 'https://localhost:44378/api/movies',
        reader: {
            type: 'json',
            rootProperty: 'movie',
            totalProperty: 'totalCount'
        },
        writer: {
            writeAllFields: true
        }
    },
    remoteFilter: true,
    formulas: {
        currentRecord: {
            bind: '{movieGrid.selection}',
            get: function (selection) {
                return selection;
            }
        }
    }
});