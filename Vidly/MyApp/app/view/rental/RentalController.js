Ext.define('MyApp.view.rental.RentalController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.rental-list',

    viewModel: 'rentalviewmodel',

    bind: {
        store: '{RentalListPagingStore}'
    },

    init: function () {
        this.control({
            //'rentalsubmainlist': {
            //    itemdblclick: this.editRental
            //},
            'button[reference=buttonone]': {
                buttonPush: 'submitAdd'
            }
        });
    },

    editRental: function (grid, record) {
        var view = Ext.widget('rentaledit');

        view.down('form').loadRecord(record);
    },

    submitUpdate: function (button) {
        var win = button.up('window'),
            form = win.down('form'),
            values = form.getValues();
        var store = this.getViewModel().get('currentRecord');
        
        store.store.sync();
        win.close();
    },

    submitAdd: function (arg1, button) {
        var win = button.up('window'),
            form = win.down('form'),
            values = form.getValues();


        var rentDetails = arg1.split(",");//values.movieId.toString().split(",");
        var rentDetail = [];
        rentDetails.forEach(item => {
            rentDetail.push({
                movieId: parseInt(item)
            });
        });
        rentDetail.shift();
        //var newRental = {
        //    rentId : 0,
        //    customerId : values.customerId,
        //    rentDetail : [
        //        {
        //            movieId : values.movieId
        //        }]
        //};
        var newRental = {
            rentId: 0,
            customerId: values.customerId,
            rentDetail: rentDetail
        };
        var store = this.getView().viewModel.getStore('RentalListPagingStore')
        store.add(newRental);
        store.save();
        win.close();
    },


    updateRental: function (button) {
        var win = button.up('window'),
            form = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
        var store = this.getViewModel().get('currentRecord');
        //store.store.sync();
        record.set(values);
        record.store.sync();
        win.close();
    },

    onAddClick: function (sender, record) {
        
        Ext.create({
            xtype: 'rentalnew',
            width: 400,
            record: record,
            viewModel: {
                data: {
                    currentRecord: record
                }
            }
        });
    },
});