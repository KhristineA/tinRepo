Ext.define('Vidly.model.MembershipType', {
    extend: 'iRely.BaseEntity',

    requires: [
        'Ext.data.Field'
    ],

    idProperty: 'intMembershipTypeId',

    fields: [
        { name: 'intMembershipTypeId', type: 'int' },
        { name: 'strMembershipTypeName', type: 'string', critical: true },
        { name: 'intSignUpFee', type: 'int' },
        { name: 'intDurationInMonths', type: 'int' },
        { name: 'intDiscountRate', type: 'int' }
    ]
});