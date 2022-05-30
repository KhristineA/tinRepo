Ext.define('MyApp.view.movie.MovieList', {
    extend: 'Ext.grid.Panel',
    xtype: 'moviemainlist',
    alias: 'widget.moviemainlist',

    title: 'Movies',

    controller: 'movie-list',
    viewModel: { type: 'movieviewmodel' },
    selType: 'rowmodel',    
    selModel:
    {
        mode: 'SINGLE'
    },
    viewConfig:
    {
        stripeRows: true
    },
    listeners: {
        selectionchange: 'onSelectionChange'
    },
    bind: {
        store: '{MovieListPagingStore}'
    },
    reference: 'movieGrid',
    initComponent: function () {
        Ext.apply(this,
        {
            columns: [{
                text: 'Id',
                dataIndex: 'id'
            },
            {
                text: 'Name',
                flex: 1,
                dataIndex: 'name',
                filter: { type: 'string' }
            },
            {
                text: 'GenreId',
                flex: 1,
                dataIndex: 'genreId'
            },
            {
                text: 'Genre',
                flex: 1,
                dataIndex: 'genreId',
                renderer: function (value, metaData) {
                    return metaData.record.getAssociatedData().genre.name;
                }
            }],
            tbar: [{
                text: 'New Movie',
                iconCls: 'fa-plus',
                handler: 'onAddClick'
            },
            {
                itemId: 'removeMovie',
                text: 'Delete Movie',
                iconCls: 'fa-times',
                reference: 'btnRemoveMovie',
                handler: 'onRemoveClick',
                disabled: true
            }],
            plugins: 'gridfilters',
            bbar: [{
                xtype: 'pagingtoolbar',
                bind:{
                    store: '{MovieListPagingStore}'
                },
                displayInfo: true,
                displayMsg: 'Displaying {0} to {1} of {2} &nbsp;records ',
                emptyMsg: "No records to display&nbsp;"
            }]
        });
        //this.store.load();
        this.callParent(arguments);
    }
});