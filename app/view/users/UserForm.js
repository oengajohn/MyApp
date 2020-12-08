Ext.define('MyApp.view.users.UserForm', {
    extend: 'Ext.window.Window',
    xtype: 'userform',
    controller: 'userformcontroller',
    autoShow: true,
    modal: true,
    shadow: true,
    width: 600,
    items: [{
        xtype: 'form',
        layout: 'form',
        reference: 'form',
        jsonSubmit: true,
        defaults: {
            xtype: 'textfield',
            allowBlank: false
        },
        items: [{
                xtype: 'numberfield',
                name: 'id',
                hidden: true,
                allowBlank: true,
                fieldLabel: 'User Id',

            },
            {
                name: 'username',
                fieldLabel: 'User Name',
            },
            {
                name: 'email',
                fieldLabel: 'Email',
            },
            {
                name: 'address.street',
                fieldLabel: 'Address Street',
            },
            {
                name: 'address.suite',
                fieldLabel: 'Address Suite',
            },
            {
                name: 'address.city',
                fieldLabel: 'Address City',
            },
            {
                name: 'address.zipcode',
                fieldLabel: 'Address Zipcode',
            },
            {
                name: 'address.geo.lat',
                fieldLabel: 'Address Geo Latitude',
            },
            {
                name: 'address.geo.lng',
                fieldLabel: 'Address Geo Longitude',
            },
            {
                name: 'phone',
                fieldLabel: 'Phone',
            },
            {
                name: 'website',
                fieldLabel: 'Website',
            },
            {
                name: 'company.companyName',
                fieldLabel: 'Company Name',
            },
            {
                name: 'company.catchPhrase',
                fieldLabel: 'Company Catch Phrase',
            },
            {
                name: 'company.bs',
                fieldLabel: 'Company Bs',
            },

        ],
        buttons: [{
                text: 'Save',
                formBind: true,
                handler: 'onUserFormSubmit'
            },
            {
                text: 'Cancel',
                handler: 'onUserFormCancel'

            }
        ]
    }]
});