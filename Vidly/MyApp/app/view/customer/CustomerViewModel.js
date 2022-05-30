Ext.define('MyApp.view.customer.CustomerViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.customerviewmodel',
    requires: [
        'MyApp.store.Customer',
        'MyApp.store.MembershipType'
    ],
    stores:     {
        CustomerListPagingStore:  
        {
            type: 'CustomerListPagingStore'
        },
        MembershipTypeStore:
        {
            type: 'MembershipTypeStore'
        }
    }
});

//CustomerListStore: {
//    model: 'MyApp.model.Customer',
//        proxy:
//    {
//        type: 'rest',
//            url: 'https://localhost:44378/api/customers',
//                reader:
//        {
//            rootProperty: 'customer',
//                type: 'json'
//        },
//        writer: {
//            writeAllFields: true
//        }
//    }
//},

/*autoLoad: false,
            pageSize: 2,
            data: { items: [
                    { id: 1, name: 'John Smith+', isSubscribed: true, membershipTypeId: 1, birthdate: "05/05/2022 12:00:00 am" },
                    { id: 2, name: 'Khristine Aranterssts', isSubscribed: false, membershipTypeId: 2, birthdate: "05/05/2022 12:00:00 am" },
                    { id: 3, name: 'Kimberly Arante', isSubscribed: true, membershipTypeId: 1, birthdate: "05/05/2022 12:00:00 am" },
                    { id: 4, name: 'Red Red', isSubscribed: false, membershipTypeId: 3, birthdate: "05/05/2022 12:00:00 am" },
                    { id: 5, name: 'George Rivera', isSubscribed: true, membershipTypeId: 4, birthdate: "05/05/2022 12:00:00 am" },
            ]},
            proxy: {
                type: 'memory',
                reader: {
                    type: 'json',
                    rootProperty: 'items',
                    totalProperty: 'total'
                }
            }*/


/*'Access-Control-Allow-Origin': '*',
'Access-Control-Allow-Methods': 'DELETE, POST, GET, OPTIONS',
'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Requested-With',
'origin' : 'https://localhost:44378/*'}*/