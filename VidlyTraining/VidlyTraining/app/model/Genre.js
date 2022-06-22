Ext.define('Vidly.model.Genre', {
    extend: 'iRely.BaseEntity',

    requires: [
        'Ext.data.Field'
    ],

    idProperty: 'intGenreId',

    fields: [
        { name: 'intGenreId', type: 'int' },
        { name: 'strGenreName', type: 'string', critical: true}
    ]
});