Ext.define('MyApp.model.RentalHeader', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'rentId', type: 'int' },
        { name: 'customerId', type: 'int' },
        { name: 'customer', model: 'Customer', reference: 'Customer' },
        { name: 'dateRented', type: 'string' },
        //{ name: 'rentDetail', model: 'RentalDetail', reference: 'RentalDetail' },
    ],
    hasOne: [{
        name: 'customer',
        model: 'Customer',
        associationKey: 'customer'
    }],
    hasMany: [{
        name: 'rentDetail',
        model: 'RentalDetail',
        associationKey: 'rentDetail'
    }]
});