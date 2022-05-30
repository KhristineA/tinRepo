Ext.define('MyApp.view.rental.RentalEdit', {
    extend: 'Ext.window.Window',
    alias: 'widget.rentaledit',
    controller: 'rental-list',

    title: 'Edit Rental',
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
                    /*{
                        xtype: 'label',
                        forId: 'myFieldId',
                        text: 'Movie Id: ',
                        margin: '10 10 10 10'
                    },*/
                    {
                        xtype: 'displayfield',
                        bind: '{currentRecord.customerId}',
                        fieldLabel: 'Customer Name',
                        margin: '10 10 10 10'
                    },
                    {
                        xtype: 'displayfield',
                        bind: '{currentRecord.dateRented}',
                        fieldLabel: 'Date Rented',
                        margin: '10 10 10 10'
                    },
                    //{
                    //    xtype: 'textfield',
                    //    name: 'movieId',
                    //    bind: '{currentRecord.movieId}',
                    //    store: { type: 'MovieListPagingStore' },
                    //    valueField: 'id',
                    //    displayField: 'name',
                    //    //renderer: function (value, metaData) {
                    //    //    return metaData.record.getAssociatedData().movie.name;
                    //    //},
                    //    fieldLabel: 'MovieId',
                    //    margin: '10 10 10 10',
                    //    disabled: true
                    //},
                    //{
                    //    xtype: 'combo',
                    //    name: 'movieId',
                    //    label: 'Select',
                    //    valueField: 'id',
                    //    displayField: 'name',
                    //    bind: '{currentRecord.movieId}',
                    //    store: { type: 'MovieListPagingStore' },
                    //    fieldLabel: 'Movie',
                    //    margin: '10 10 10 10',
                    //    disabled: true
                    //},
                    {
                        xtype: 'displayfield',
                        bind: '{currentRecord.movieId}',
                        fieldLabel: 'MovieId',
                        margin: '10 10 10 10'
                    },
                    {
                        xtype: 'displayfield',
                        bind: '{currentRecord.movie.name}',
                        fieldLabel: 'Movie Name',
                        margin: '10 10 10 10'
                    },
                    {
                        xtype: 'textfield',
                        name: 'dateReturned',
                        bind: '{currentRecord.dateReturned}',
                        fieldLabel: 'DateReturned',
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

        /*this.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: this.close
            }
        ];*/

        this.callParent(arguments);
    }
});