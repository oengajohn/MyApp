Ext.define('MyApp.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.users',
    model: 'MyApp.model.User',

    proxy: {
        type: 'ajax',
        url: baseUrl + 'users',
        reader: {
            type: 'json',
            rootProperty: 'users',
            // totalProperty:''
        }
    },
    pageSize: 5,
});