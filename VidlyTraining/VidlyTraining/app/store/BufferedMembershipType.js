Ext.define('Vidly.store.BufferedMembershipType', {
    extend: 'Ext.data.BufferedStore',
    alias: 'store.vmbufferedmembershiptype',

    requires: [
        'Vidly.model.MembershipType'
    ],

    model: 'Vidly.model.MembershipType',
    storeId: 'BufferedMembershipType',
    pageSize: 100,
    batchAction: true,
    proxy: {
        type: 'rest',
        api: {
            read: './vidly/api/membershiptype/search'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            messageProperty: 'message'
        }
    }
})