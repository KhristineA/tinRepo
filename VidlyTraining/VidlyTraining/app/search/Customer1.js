Ext.define('Vidly.search.Customer1',{
    alias: 'search.vmcustomer1',
    singleton: true,

    searchConfigs: [
        {
            title: 'Search Customer',
            api: {
                read: './vidly/api/customer/search'
            },
            columns: [
                {dataIndex: 'intCustomerId', text: 'Customer Id', dataType: 'numeric', key: true, hidden: true},
                {dataIndex: 'strCustomerName', text: 'Customer Name', flex: 1, dataType: 'string', defaultSort: true, flex: 1},
                {dataIndex: 'strMembershipTypeName', text: 'Membership Type', dataType: 'string', flex: 1}
            ]
        }
    ]
});