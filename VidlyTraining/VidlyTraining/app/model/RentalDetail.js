Ext.define('Vidly.model.RentalDetail', {
    extend: 'iRely.BaseEntity',

    requires: [
        'Ext.data.Field'
    ],

    idProperty: 'intRentalDetailId',

    fields: [
        { name: 'intRentalDetailId', type: 'int', critical: true },
        { name: 'intRentalHeaderId', 
            type: 'int',
            reference: {
                type: 'Vidly.model.RentalHeader',
                inverse: {
                    role: 'tblVMRentalDetail',
                    storeConfig: {
                        complete: true,
                        proxy: {
                            type: 'rest',
                            api: {
                                read: './vidly/api/rentaldetail/get'
                            },
                            reader: {
                                type: 'json',
                                rootProperty: 'data',
                                messageProperty: 'message'
                            }
                        }
                    }
                }
            },
            critical: true
        },
        { name: 'intMovieId', type: 'int', critical: true },
        { name: 'strMovieName', type: 'string' },
        { name: 'dtmDateReturned', type: 'date', allowNull: true }
    ]
});