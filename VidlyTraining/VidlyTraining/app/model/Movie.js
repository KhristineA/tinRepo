Ext.define('Vidly.model.Movie', {
    extend: 'iRely.BaseEntity',

    requires: [
        'Ext.data.Field'
    ],

    idProperty: 'intMovieId',

    fields: [
        { name: 'intMovieId', type: 'int' },
        { name: 'strMovieName', type: 'string', critical: true },
        { name: 'intGenreId', type: 'int', critical: true },
        { name: 'strGenre', type: 'string' },
        { name: 'dtmDateAdded', type: 'date', dateFormat: 'c', dateWriteFormat: 'Y-m-d' },
        { name: 'dtmReleaseDate', type: 'date', dateFormat: 'c', dateWriteFormat: 'Y-m-d', critical: true },
        { name: 'intNumberInStock', type: 'int', critical: true}, 
        { name: 'intNumberAvailable', type: 'int' }
    ]
});