Ext.define('Vidly.search.Movie1',{
    alias: 'search.vmmovie1',
    singleton: true,

    searchConfigs: [
        {
            title: 'Search Movie',
            api: {
                read: './vidly/api/movie/search'
            },
            columns: [
                {dataIndex: 'intMovieId', text: 'Movie Id', dataType: 'numeric', key: true, hidden: true},
                {dataIndex: 'strMovieName', text: 'Movie Name', flex: 1, dataType: 'string', defaultSort: true},
                {dataIndex: 'strGenreName', text: 'Genre Name', flex: 1, dataType: 'string'}
            ]
        }
    ]
});