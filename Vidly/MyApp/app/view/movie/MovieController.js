Ext.define('MyApp.view.movie.MovieController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.movie-list',

    viewModel: { type: 'movieviewmodel' },

    init: function () {
        this.control({
            'moviemainlist': {
                itemdblclick: this.editMovie
            }
            //,
            //'movieedit button[action=save]': {
            //    click: this.updateMovie
            //}
        });
    },

    editMovie: function (grid, record) {
        //var view = Ext.widget('movieedit');
        //view.down('form').loadRecord(record);
        //var form = Ext.create({
        //    xtype: 'movieForm'
        //});
        //form.getViewModel().set('currentRecord', record.data);
        //form.show();

        Ext.create({
            xtype: 'movieedit',
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
            store = this.getView().viewModel.getStore('MovieListPagingStore')
            store.add(record);
            store.save();
        } else {
            //PUT
            record.store.sync();
        }
       
        win.close();
    },

    updateMovie: function (button) {
        var win = button.up('window'),
            form = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();
        var newValues = this.getViewModel().get('currentRecord');
        
        var store = this.getView().viewModel.getStore('MovieListPagingStore');
        store.save();
        //if (newValues.id == "") {
        //    store.add(newValues);
        //    store.save();
        //} else {
        //    store.set(newValues);
        //    store.save();
        //}
        

        //store.create(newValues);
        //store.sync();

        //record.set(values);
        //var store = form.getViewModel().getStore('MovieListPagingStore');

        //store.set('record.name', values.name);
        //form.getView().getViewModel().store.sync();
        //store.sync();
        //if (values.id == "") {
        //    //POST
        //    store.create(values);
        //    store.save();
        //} else {
        //    //PUT
        //    record.set(values);
        //    record.store.sync();
        //}*/
        win.close();
    },

    onAddClick: function (sender, record) {
        Ext.create({
            xtype: 'movieedit',
            width: 400,
            record: record,
            viewModel: {
                data: {
                    currentRecord: Ext.create('MyApp.model.Movie')
                }
            }
        });
    },
    onRemoveClick: function (sender, record) {
        var movieGrid = this.getView();
        var movieStore = movieGrid.getStore();
        Ext.Msg.confirm('Delete Changes', 'Do you want to delete the movie?', function (choice) {
            if (choice === 'yes') {
                var selectedRows = movieGrid.getSelectionModel().getSelection();

                movieStore.remove(selectedRows);
                movieStore.erase();
            }
        });
    },

    onSelectionChange: function (sender, record, isSelected) {
        var removeBtn = this.lookupReference('btnRemoveMovie');
        if (record.length)
            removeBtn.setDisabled(false);
        else
            removeBtn.setDisabled(true);
    }
});