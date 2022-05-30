Ext.define('MyApp.view.rental.RentalViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.rentalviewmodel',
    requires: [
        'MyApp.store.Rental',
        //'MyApp.store.Customer',
    ],
    stores: {
        RentalListPagingStore:
        {
            type: 'RentalListPagingStore'
        },
        //CustomerListPagingStore:
        //{
        //    type: 'CustomerListPagingStore'
        //},
    }
});