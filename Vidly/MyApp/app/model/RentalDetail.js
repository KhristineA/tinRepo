Ext.define('MyApp.model.RentalDetail', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'rentId', type: 'int' },
        { name: 'rentalHeader', model: 'RentalHeader', reference: 'RentalHeader' },
        { name: 'movieId', type: 'int' },
        { name: 'movie', model: 'Movie', reference: 'Movie' },
        { name: 'dateReturned', type: 'string' }
    ],
    hasOne: [{
        name: 'rentalHeader',
        model: 'RentalHeader',
        associationKey: 'rentalHeader'
    }],
    hasOne: [{
        name: 'movie',
        model: 'Movie',
        associationKey: 'movie'
    }]
});