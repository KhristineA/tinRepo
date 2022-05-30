Ext.define('MyApp.view.movie.MovieEdit', {
    extend: 'Ext.window.Window',
    alias: 'widget.movieedit',
    xtype: 'movieForm',
    controller: 'movie-list',
    viewModel: { type: 'movieviewmodel' },

    title: 'Movie',
    layout: 'fit',
    autoShow: true,

    initComponent: function () {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'hiddenfield',
                        name: 'id',
                        bind: '{currentRecord.id}'
                    },
                    {
                        xtype: 'textfield',
                        name: 'name',
                        fieldLabel: 'Name',
                        bind: '{currentRecord.name}',
                        margin: '10 10 10 10'
                    },
                    {
                        xtype: 'hiddenfield',
                        bind: '{currentRecord.genreId}'
                    },
                    {
                        xtype: 'combo',
                        name: 'genreId',
                        label: 'Select',
                        valueField: 'id',
                        displayField: 'name',
                        bind: '{currentRecord.genreId}',
                        store: { type: 'GenreStore'},
                        fieldLabel: 'Genre',
                        margin: '10 10 10 10'
                    },
                    {
                        //xtype: 'datefield',
                        xtype: 'textfield',
                        name: 'releaseDate',
                        bind: '{currentRecord.releaseDate}',
                        fieldLabel: 'Release Date',
                        margin: '10 10 10 10'
                        /*dateFormat: 'm/d/Y',
                       submitFormat: 'm/d/Y',*/
                    },
                    {
                        xtype: 'textfield',
                        name: 'numberInStock',
                        bind: '{currentRecord.numberInStock}',
                        fieldLabel: 'Number In Stock',
                        margin: '10 10 10 10'
                    },
                    {
                        xtype: 'toolbar',
                        docked: 'bottom',
                        items: ['->', {
                            xtype: 'button',
                            text: 'Save',
                            iconCls: 'x-fa fa-check',
                            handler: 'submitUpdate'
                        }, {
                                xtype: 'button',
                                text: 'Cancel',
                                iconCls: 'x-fa fa-close',
                                scope: this,
                                handler: this.close
                            }]
                    }
                ]
            }
        ];

        //this.buttons = [
        //    {
        //        text: 'Save',
        //        action: 'save'
        //    },
        //    {
        //        text: 'Cancel',
        //        scope: this,
        //        handler: this.close
        //    }
        //];

        this.callParent(arguments);
    }
});