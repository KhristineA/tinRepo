Ext.define('Vidly.model.RentalHeader', {
    extend: 'iRely.BaseEntity',

    requires: [
        'Ext.data.Field',
        'Vidly.model.RentalDetail'
    ],

    idProperty: 'intRentalHeaderId',

    fields: [
        { name: 'intRentalHeaderId', type: 'int', critical: true },
        { name: 'intCustomerId', type: 'int'},
        { name: 'strCustomerName', type: 'string'},
        { name: 'dtmDateRented', type: 'date', dateFormat: 'c', dateWriteFormat: 'Y-m-d'}
    ]
});