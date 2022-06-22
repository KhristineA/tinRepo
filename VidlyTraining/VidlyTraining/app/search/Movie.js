Ext.define('Vidly.search.Movie',{
    alias: 'search.vmmovie',
    singleton: true,

    searchConfigs: [
        {
            title: 'Search Movie',
            api: {
                read: './vidly/api/movie/search'
            },
            columns: [
                {dataIndex: 'intMovieId', text: 'Movie Id', dataType: 'numeric', key: true, hidden: true},
                {dataIndex: 'strName', text: 'Movie Name', flex: 1, dataType: 'string', defaultSort: true},
                {dataIndex: 'intGenreId', text: 'Genre Id', flex: 1, dataType: 'numeric'},
                {dataIndex: 'dtmReleaseDate', text: 'Release Date', flex: 1, dataType: 'date'}, //xtype: 'datecolumn'
                {dataIndex: 'intNumberInStock', text: 'Number In Stock', flex: 1, dataType: 'numeric'}
            ]
        }
    ]
});