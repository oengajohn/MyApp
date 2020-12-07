Ext.define('MyApp.store.MenuTreeStore', {
    extend: 'Ext.data.TreeStore',
    alias: 'store.menutreestore',
    fields: [{
            name: 'text',
            type: 'string'
        },
        {
            name: 'className',
            type: 'string'
        }, {
            name: 'iconCls',
            type: 'string'
        }, {
            name: 'leaf',
            type: 'boolean'
        }
    ],
    root: {
        expanded: true,
        children: [{
                text: 'User Module',
                expanded: true,
                children: [
                    { text: 'Users', leaf: true, className: 'usergrid' },
                    { text: 'others', leaf: true }
                ]
            },
            {
                text: 'Post Module',
                expanded: true,
                children: [
                    { text: 'Posts', leaf: true },
                    { text: 'others', leaf: true }
                ]
            },

        ]
    }

});