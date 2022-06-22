Ext.define('Vidly.model.Customer1', {
    extend: 'iRely.BaseEntity',

    requires: [
        'Ext.data.Field'
    ],

    idProperty: 'intCustomerId',

    fields: [
        { name: 'intCustomerId', type: 'int' },
        { name: 'strName', type: 'string'},
        { name: 'ysnIsSubscribedToNewsletter', type: 'bool' },
        { name: 'strMembershipTypeName', type: 'int' },
        { name: 'intMembershipTypeId', model: 'MembershipType', reference: 'MembershipType'},
        { name: 'dtmBirthdate', type: 'date', dateFormat: 'c', dateWriteFormat: 'Y-m-d' } //defaultValue: Ext.Date.format(new Date(), 'c')
        //{ name: 'dtmBirthdate', type: 'string' }
    ],
    // hasOne: [{
    //     name: 'membershipType',
    //     model: 'MembershipType',
    //     associationKey: 'membershipType'
    // }]
});