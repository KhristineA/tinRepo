Ext.define('Vidly.search.RentalHeader',{
    alias: 'search.vmrentalheader',
    singleton: true,

    searchConfigs: [
        {
            title: 'Search Rental Header',
            api: {
                read: './vidly/api/rentalheader/search'
            },
            columns: [
                {dataIndex: 'intRentalHeaderId', text: 'Rental Header Id', dataType: 'numeric', key: true, hidden: true},
                {dataIndex: 'intCustomerId', text: 'Customer Id', flex: 1, dataType: 'numeric', defaultSort: true},
                {dataIndex: 'dtmDateRented', text: 'Date Rented',flex: 1, dataType: 'date'}
            ]
        }
    ]
});