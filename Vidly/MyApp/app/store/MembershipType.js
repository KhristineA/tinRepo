Ext.define('MyApp.store.MembershipType', {
    extend: 'Ext.data.Store',
    alias: 'store.MembershipTypeStore',
    model: 'MyApp.model.MembershipType',
    data: [
        { id: 1, name: 'Pay as You Go', signUpFee: 0, durationInMonths: 0, discountRate: 0 },
        { id: 2, name: 'Monthly', signUpFee: 30, durationInMonths: 1, discountRate: 10 },
        { id: 3, name: 'Quarterly', signUpFee: 90, durationInMonths: 3, discountRate: 15 },
        { id: 4, name: 'Annual', signUpFee: 300, durationInMonths: 12, discountRate: 20 }
    ]
});