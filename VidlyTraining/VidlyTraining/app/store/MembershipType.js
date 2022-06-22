Ext.define('Vidly.store.MembershipType', {
    extend: 'Ext.data.Store',
    alias: 'store.vmmembershiptype',

    requires: [
        'Vidly.model.MembershipType'
    ],

    model: 'Vidly.model.MembershipType',
    storeId: 'MembershipType',
    pageSize: 15,
    batchActions: true,
    proxy: {
        type: 'rest',
        api: {
            read: './vidly/api/membershiptype/get',
            update: './vidly/api/membershiptype/put',
            create: './vidly/api/membershiptype/post',
            destroy: './vidly/api/membershiptype/delete'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            messageProperty: 'message'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            allowSingle: false
        }
    }
});