////Ext.define('MyApp.view.rental.RentalList', {
////    extend: 'Ext.grid.Panel',
////    xtype: 'rentalmainlist',
////    alias: 'widget.rentalmainlist',

////    title: 'Rental',

////    controller: 'rental-list',
////    viewModel: { type: 'rentalviewmodel' },
////    selType: 'rowmodel',
////    selModel:
////    {
////        mode: 'SINGLE'
////    },
////    viewConfig:
////    {
////        stripeRows: true
////    },
////    bind: {
////        store: '{RentalListPagingStore}'
////    },
////    initComponent: function () {
////        Ext.apply(this,
////            {
////                columns: [{
////                    text: "Transaction No.",
////                    dataIndex: 'rentId',
////                },
////                {
////                    text: "MovieId",
////                    flex: 1,
////                    dataIndex: 'movieId'
////                },
////                {
////                    text: "Movie",
////                    flex: 1,
////                    dataIndex: 'movie',
////                    renderer: function (value, metaData) {
////                        return metaData.record.getAssociatedData().movie.name;
////                    },
////                    filter: { type: 'string' }
////                },
////                {
////                    text: "Date Returned",
////                    flex: 1,
////                    dataIndex: 'dateReturned'
////                }],
////                tbar: [{
////                    text: 'New Rental',
////                    iconCls: 'fa-plus',
////                    handler: 'onAddClick'
////                }],
////                plugins: 'gridfilters',
////                bbar: [{
////                    xtype: 'pagingtoolbar',
////                    bind: {
////                        store: '{RentalListPagingStore}'
////                    },
////                    displayInfo: true,
////                    displayMsg: 'Displaying {0} to {1} of {2} &nbsp;records ',
////                    emptyMsg: "No records to display&nbsp;"
////                }]
////            });

////        this.callParent(arguments);
////    }
////});


Ext.define('MyApp.view.rental.RentalList', {
    extend: 'Ext.grid.Panel',
    xtype: 'rentalmainlist',
    alias: 'widget.rentalmainlist',
    title: 'Rental',
    controller: 'rental-list',
    viewModel: { type: 'rentalviewmodel' },
    selType: 'rowmodel',
    selModel:
    {
        mode: 'SINGLE'
    },
    viewConfig:
    {
        stripeRows: true
    },
    bind: {
        store: '{RentalListPagingStore}'
    },
    reference: 'rentalGrid',
    initComponent: function () {
        Ext.apply(this,
            {
                columns: [{
                    text: "Transaction No.",
                    dataIndex: 'rentId',
                    flex: 1
                },
                /*{
                    text: "CustomerId",
                    flex: 1,
                    dataIndex: 'customerId'
                },*/
                {
                    text: "Customer",
                    flex: 1,
                    dataIndex: 'customer',
                    renderer: function (value, metaData) {
                        return metaData.record.getAssociatedData().customer.name;
                    },
                    filter: { type: 'string' }
                },
                {
                    text: "Date Rented",
                    flex: 1,
                    dataIndex: 'dateRented'
                }],
                tbar: [{
                    text: 'New Rental',
                    iconCls: 'fa-plus',
                    handler: 'onAddClick'
                }],
                //plugins: 'gridfilters',
                plugins: [
                    'gridfilters',
                    {
                        ptype: 'rowexpander',
                        rowBodyTpl: '<div class="ux-row-expander-box"></div>'
                
                    }       
                ],
                viewConfig: {
                    forceFit: true,
                    stripeRows: false,
                    trackOver: false,
                    scrollable: true,
                    listeners: {
                        expandbody: function (rowNode, record, expandRow, eOpts) {
                            var customerName = record._customer.data.name;
                            var dateRented = record.data.dateRented;
                            var element = Ext.get(expandRow).child('.x-grid-cell-rowbody').child('.x-grid-rowbody ').child('.ux-row-expander-box');
                            var contain = element.child('.x-panel', true);
                            if (contain == null) {
                                var subGrid = Ext.create('Ext.grid.Panel', {
                                    xtype: 'rentalsubmainlist',
                                    alias: 'widget.rentalsubmainlist',
                                    controller: 'rental-list',
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
                                        itemclick: function (grid, record, item, index, event) {
                                            record.data.customerId = customerName;
                                            record.data.dateRented = dateRented;
                                            Ext.create({
                                                xtype: 'rentaledit',
                                                width: 400,
                                                record: record,
                                                viewModel: {
                                                    data: {
                                                        currentRecord: record
                                                    }
                                                }
                                            });
                                        }
                                    },
                                    store: Ext.create('Ext.data.Store', {
                                        data: record.get('rentDetail'),
                                        model: 'MyApp.model.RentalHeader',
                                        proxy: {
                                            type: 'rest',
                                            url: 'https://localhost:44378/api/newrentals',
                                            reader: {
                                                type: 'json',
                                                rootProperty: 'rent',
                                                totalProperty: 'totalCount',
                                            },
                                            writer: {
                                                writeAllFields: true
                                            }
                                        }
                                    }),
                                    columns: [
                                        //{ text: 'Id', dataIndex: 'id' },
                                        //{ text: 'rentId', dataIndex: 'rentId' },
                                        //{ text: 'movieId', dataIndex: 'movieId', flex: 1 },
                                        { text: 'Movie Name', tpl: '{rentDetail.id}', xtype: 'templatecolumn', flex: 1,
                                            renderer: function (value, metaData) {
                                                //return metaData.record.getAssociatedData().rentDetail.movie.name;
                                                return metaData.record.data.movie.name;
                                            }
                                        },
                                        { text: 'Date Returned', dataIndex: 'dateReturned', flex: 1 }
                                        /*{ text: 'rentId', dataIndex: 'rentId' },
                                        { text: 'movieId',
                                            renderer: function (v, record) {
                                                return record.record.data.movieId;
                                            }
                                        },
                                        {
                                            text: 'dateReturned',
                                            renderer: function (v, record) {
                                                return record.record.data.dateReturned;
                                            },
                                            flex: 1
                                        }*/
                                        //{ text: 'movieId', tpl: '{rentDetail.movieId}', xtype: 'templatecolumn', },
                                        //{ text: 'dateReturned', tpl: '{rentDetail.dateReturned}', xtype: 'templatecolumn', }
                                    ]
                                });
                                subGrid.render(element);
                            }
                        }
                    }
                },
                bbar: [{
                    xtype: 'pagingtoolbar',
                    bind: {
                        store: '{RentalListPagingStore}'
                    },
                    displayInfo: true,
                    displayMsg: 'Displaying {0} to {1} of {2} &nbsp;records ',
                    emptyMsg: "No records to display&nbsp;"
                }]
            });

        this.callParent(arguments);
    }
});
