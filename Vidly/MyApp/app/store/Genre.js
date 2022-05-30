Ext.define('MyApp.store.Genre', {
    extend: 'Ext.data.Store',
    alias: 'store.GenreStore',
    model: 'MyApp.model.Genre',
    data: [
        { id: 1, name: 'Action' },
        { id: 2, name: 'Thriller' },
        { id: 3, name: 'Family' },
        { id: 4, name: 'Romance' },
        { id: 5, name: 'Comedy' }
    ]
});