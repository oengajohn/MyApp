Ext.define('MyApp.store.Users', {
    extend: 'Ext.data.Store',
    alias: 'store.users',
    model: 'MyApp.model.User',
    proxy: {
        type: 'ajax',
        url: 'http://localhost:8080/Jotech/api/users/',
        reader: {
            type: 'json',
            rootProperty: 'users'
        }
    },
});