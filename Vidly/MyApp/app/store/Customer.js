Ext.define('MyApp.store.Customer', {
    extend: 'Ext.data.Store',
    alias: 'store.CustomerListPagingStore',
    model: 'MyApp.model.Customer',
    autoLoad: true,
    pageSize: 15,
    proxy: {
        type: 'rest',
        url: 'https://localhost:44378/api/customers',
        //useDefaultXhrHeader: false,
        reader: {
            type: 'json',
            rootProperty: 'customer',
            totalProperty: 'totalCount',
            //headers: { 'Accept': 'application/json'}
        },
        writer: {
            writeAllFields: true
        }
    },
    remoteFilter: true,
    formulas: {
        currentRecord: {
            //bind: { bindTo: '{movieGrid.selection}', deep: true },
            //get: function (record) {
            //    return record;
            //},
            //set: function (record) {
            //    if (!record.isModel) {
            //        record = this.get('records').getById(record);
            //    }
            //    this.set('currentRecord', record);
            //}
            bind: '{customerGrid.selection}',
            get: function (selection) {
                return selection;
            }
        }
    }
});
/*Ext.define('MyApp.store.Customer', {
    extend: 'Ext.data.Store',

    alias: 'store.customer',

    model: 'MyApp.model.Customer',

    autoLoad: false,

    pageSize: 2,

    data: { items: [
        { id: 1, name: 'John Smith+', isSubscribed: true, birthdate: "05/05/2022 12:00:00 am" },
        { id: 2, name: 'Khristine Aranterssts', isSubscribed: false, birthdate: "05/05/2022 12:00:00 am" },
        { id: 3, name: 'Kimberly Arante', isSubscribed: true, birthdate: "05/05/2022 12:00:00 am" },
        { id: 4, name: 'Red Red', isSubscribed: false, birthdate: "05/05/2022 12:00:00 am" },
        { id: 5, name: 'George Rivera', isSubscribed: true, birthdate: "05/05/2022 12:00:00 am" },
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});*/
