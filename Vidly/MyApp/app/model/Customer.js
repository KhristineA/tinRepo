Ext.define('MyApp.model.Customer', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'int' },
        { name: 'name', type: 'string'},
        { name: 'isSubscribedToNewsletter', type: 'bool' },
        { name: 'membershipTypeId', type: 'int' },
        { name: 'membershipType', model: 'MembershipType', reference: 'MembershipType'},
        { name: 'birthdate', type: 'string' }
    ],
    hasOne: [{
        name: 'membershipType',
        model: 'MembershipType',
        associationKey: 'membershipType'
    }]
});