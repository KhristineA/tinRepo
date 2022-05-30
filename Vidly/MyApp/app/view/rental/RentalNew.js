Ext.define('MyApp.view.rental.RentalNew', {
    extend: 'Ext.window.Window',
    alias: 'widget.rentalnew',
    xtype: 'rentalForm',
    controller: 'rental-list',
    viewModel: { type: 'rentalviewmodel' },

    title: 'New Rental',
    layout: 'fit',
    autoShow: true,

    initComponent: function () {
        var movieSelected = "";
        this.items = [
            {
                xtype: 'form',
                layout: 'anchor',
                defaults: {
                    anchor: '100%'
                },
                items: [
                    /*{
                        xtype: 'hiddenfield',
                        name: 'id',
                        bind: '{currentRecord.id}'
                    },*/
                    {
                        xtype: 'combo',
                        name: 'customerId',
                        label: 'Select',
                        valueField: 'id',
                        displayField: 'name',
                        //bind: '{currentRecord.genreId}',
                        store: { type: 'CustomerListPagingStore' },
                        fieldLabel: 'Customer Name',
                        typeAhead: true,
                        minChars: 2,
                        //grow: true,
                        //growToLongestValue: true,
                        margin: '10 10 10 10',
                        pageSize: true,
                        listWidth: 1,
                        width: 1000
                    },
                    //{
                    //    xtype: 'textfield',
                    //    name: 'customerId',
                    //    fieldLabel: 'Customer',
                    //    margin: '10 10 10 10'
                    //},
                    //{
                    //    xtype: 'textfield',
                    //    name: 'movieId',
                    //    fieldLabel: 'Movie',
                    //    margin: '10 10 10 10'
                    //},
                    {
                        xtype: 'combo',
                        name: 'movieId',
                        label: 'Select',
                        valueField: 'id',
                        displayField: 'name',
                        //bind: '{currentRecord.genreId}',
                        store: { type: 'MovieListPagingStore' },
                        fieldLabel: 'Movie Name',
                        typeAhead: true,
                        minChars: 2,
                        listeners: {
                            select: function (combo, records) {
                                movieSelected = movieSelected + "," + records.data.id;
                            }
                        },
                        margin: '10 10 10 10',
                        pageSize: true,
                        listWidth: 1,
                        width: 1000
                    },
                    {
                        xtype: 'toolbar',
                        docked: 'bottom',
                        items: ['->', {
                            xtype: 'button',
                            text: 'Save',
                            iconCls: 'x-fa fa-check',
                            //handler: 'submitAdd'
                            reference: 'buttonone',
                            handler: function (button) {
                                button.fireEvent('buttonPush', movieSelected, button);
                            }
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