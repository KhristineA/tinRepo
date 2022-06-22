Ext.define('Vidly.search.Customer',{
    alias: 'search.vmcustomer',
    singleton: true,

    searchConfigs: [
        {
            title: 'Search Customer',
            api: {
                read: './vidly/api/customer/search'
            },
            columns: [
                {dataIndex: 'intCustomerId', text: 'Customer Id', dataType: 'numeric', key: true, hidden: true},
                {dataIndex: 'strName', text: 'Customer Name', flex: 1, dataType: 'string', defaultSort: true},
                {dataIndex: 'ysnIsSubscribedToNewsletter', text: 'ysnIsSubscribedToNewsletter', dataType: 'boolean'}, //xtype: 'checkcolumn'
                {dataIndex: 'intMembershipTypeId', text: 'Membership Type Id', dataType: 'numeric'},
                {dataIndex: 'strMembershipType', text: 'Membership Type', dataType: 'string'},
                {dataIndex: 'dtmBirthdate', text: 'Birthdate', flex: 1, dataType: 'date', xtype: 'datecolumn'} 
            ]
        }
    ]
});