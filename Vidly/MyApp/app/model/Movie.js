Ext.define('MyApp.model.Movie', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'genreId', type: 'int' },
        { name: 'dateAdded', type: 'string' },
        { name: 'releaseDate', type: 'string' },
        { name: 'numberInStock', type: 'int' },
        { name: 'numberAvailable', type: 'int' }
    ],
    hasOne: [{
        name: 'genre',
        model: "Genre",
        associationKey: 'genre'
    }]
});