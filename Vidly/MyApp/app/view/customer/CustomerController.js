Ext.define('MyApp.view.customer.CustomerController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.customer-list',

    viewModel: { type: 'customerviewmodel' },

    //requires: [
    //    'Ext.Dialog'
    //],

    init: function () {
        this.control({
            'customermainlist': {
                itemdblclick: this.editCustomer
            }
            //,
            //'customeredit button[action=save]': {
            //    click: this.updateCustomer
            //}
        });
    },

    editCustomer: function (grid, record) {
        //var view = Ext.widget('customeredit');
        //view.down('form').loadRecord(record);
        /*var form = Ext.create({
            xtype: 'customerForm'
        });

        form.getViewModel().set('record', record.data);
        form.show();*/

        Ext.create({
            xtype: 'customeredit',
            width: 400,
            record: record,
            viewModel: {
                data: {
                    currentRecord: record
                }
            }
        });
    },

    submitUpdate: function (button) {
        var win = button.up('window'),
            form = win.down('form'),
            values = form.getValues();
        var record = this.getViewModel().get('currentRecord');
        if (record.crudState == 'C') {
            //POST
            store = this.getView().viewModel.getStore('CustomerListPagingStore')
            store.add(record);
            store.save();
        } else {
            //PUT
            record.store.sync();
        }
        win.close();
    },

    updateCustomer: function (button) {
        var win = button.up('window'),
            form = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
        
        var store = this.getView().viewModel.getStore('CustomerListPagingStore');

        if (values.id == "") {
            //POST
            store.create(values);
            store.save();
            //store.insert();
            //store.save({
            //    success: function (store) {
            //        //this.getView().viewModel.getStore('CustomerListPagingStore').sync();
            //        //store.sync();
            //        store.loadRecord();
            //    }
            //});
        } else {
            //PUT
            record.set(values);
            record.store.sync();
            /*store.update(values);
            store.save();*/
        }

        win.close();
        //this.getViewModel().getStore('CustomerListPagingStore').reload();
    },

    onAddClick: function (sender, record) {
        //Ext.widget('customeredit').show();
        Ext.create({
            xtype: 'customeredit',
            width: 400,
            record: record,
            viewModel: {
                data: {
                    currentRecord: Ext.create('MyApp.model.Customer')
                }
            }
        });
    },
    onRemoveClick: function (sender, record) {
        var customerGrid = this.getView();
        var customerStore = customerGrid.getStore();
        Ext.Msg.confirm('Delete Changes', 'Do you want to delete the cutomer?', function (choice) {
            if (choice === 'yes') {
                var selectedRows = customerGrid.getSelectionModel().getSelection();

                //customerStore.erase();
                customerStore.remove(selectedRows);
                customerStore.erase();
            }
        });
    },

    onSelectionChange: function (sender, record, isSelected) {
        var removeBtn = this.lookupReference('btnRemoveCustomer');
        if (record.length)
            removeBtn.setDisabled(false);
        else
            removeBtn.setDisabled(true);
    }
});