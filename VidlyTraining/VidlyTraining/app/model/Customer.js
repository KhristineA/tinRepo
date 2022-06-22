Ext.define('Vidly.model.Customer', {
    extend: 'iRely.BaseEntity',

    requires: [
        'Ext.data.Field'
    ],

    idProperty: 'intCustomerId',

    fields: [
        { name: 'intCustomerId', type: 'int' },
        { name: 'strCustomerName', type: 'string', critical: true},
        { name: 'ysnIsSubscribedToNewsletter', type: 'bool' },
        { name: 'strMembershipTypeName', type: 'string' },
        { name: 'intMembershipTypeId', model: 'MembershipType', reference: 'MembershipType'},
        { name: 'dtmBirthdate', type: 'date', dateFormat: 'c', dateWriteFormat: 'Y-m-d' }
        //{ name: 'dtmBirthdate', type: 'date', dateFormat: 'c', dateWriteFormat: 'Y-m-d' }
    ],
    // hasOne: [{
    //     name: 'membershipType',
    //     model: 'MembershipType',
    //     associationKey: 'membershipType'
    // }]
});