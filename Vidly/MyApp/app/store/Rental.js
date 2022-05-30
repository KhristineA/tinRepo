Ext.define('MyApp.store.Rental', {
    extend: 'Ext.data.Store',
    alias: 'store.RentalListPagingStore',
    model: 'MyApp.model.RentalHeader',
    pageSize: 15,
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
    },
    autoLoad: true,
    remoteFilter: true
});

//formulas: {
    //    currentRecord: {
    //        //bind: { bindTo: '{movieGrid.selection}', deep: true },
    //        //get: function (record) {
    //        //    return record;
    //        //},
    //        //set: function (record) {
    //        //    if (!record.isModel) {
    //        //        record = this.get('records').getById(record);
    //        //    }
    //        //    this.set('currentRecord', record);
    //        //}
    //        bind: '{rentalGrid.selection}',
    //        get: function (selection) {
    //            return selection;
    //        }
    //    }
    //}