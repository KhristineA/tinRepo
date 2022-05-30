Ext.define('MyApp.view.movie.MovieViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.movieviewmodel',
    requires: [
        'MyApp.store.Genre',
        'MyApp.store.Movie'
    ],
    stores: {
        MovieListPagingStore:  
        {
            type: 'MovieListPagingStore'
        },
        GenreStore: {
            type: 'GenreStore'
        }
    }
});


//MovieListStore: {
//    model: 'MyApp.model.Movie',
//        proxy:
//    {
//        type: 'rest',
//            url: 'https://localhost:44378/api/movies',
//                reader:
//        {
//            rootProperty: 'movie',
//                type: 'json'
//        },
//        writer: {
//            writeAllFields: true
//        }
//    }
//},

/*autoLoad: false,
pageSize: 2,
data: { items: [
        { id: 1, name: 'Hangover', genreId: 5, dateAdded: '04/04/2022 4:21:23 pm1', releaseDate: '10/06/2010 12:00:00 am', numberInStock: 10, numberAvailable: 50},
        { id: 2, name: 'Die Hard', genreId: 1, dateAdded: '05/05/2022 4:21:23 pm1', releaseDate: '11/06/2010 12:00:00 am', numberInStock: 20, numberAvailable: 40},
        { id: 3, name: 'The Terminator', genreId: 3, dateAdded: '03/03/2022 4:21:23 pm1', releaseDate: '09/06/2010 12:00:00 am', numberInStock: 30, numberAvailable: 30},
        { id: 4, name: 'Spider Man', genreId: 4, dateAdded: '02/02/2022 4:21:23 pm1', releaseDate: '01/06/2010 12:00:00 am', numberInStock: 40, numberAvailable: 20},
        { id: 5, name: 'The Avengers', genreId: 2, dateAdded: '01/01/2022 4:21:23 pm1', releaseDate: '03/06/2010 12:00:00 am', numberInStock: 50, numberAvailable: 10},
]},
proxy: {
    type: 'memory',
    reader: {
        type: 'json',
        rootProperty: 'items',
        totalProperty: 'total'
    }
}*/