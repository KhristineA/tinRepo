Ext.define('Vidly.search.Rental',{
    alias: 'search.vmrental',
    singleton: true,

    searchConfigs: [
        {
            title: 'Search Rental Header',
            api: {
                read: './vidly/api/rentalheader/search'
            },
            columns: [
                {dataIndex: 'intRentalHeaderId', text: 'Rental Header Id', dataType: 'numeric', key: true, hidden: true},
                {dataIndex: 'strCustomerName', text: 'Customer Name', flex: 1, dataType: 'string', defaultSort: true},
                {dataIndex: 'dtmDateRented', text: 'Date Rented',flex: 1, dataType: 'date'}
            ]
        }
    ]
});