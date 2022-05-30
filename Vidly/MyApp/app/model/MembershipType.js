Ext.define('MyApp.model.MembershipType', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string' },
        { name: 'signUpFee', type: 'int' },
        { name: 'durationInMonths', type: 'int' },
        { name: 'discountRate', type: 'int' }
    ]
});