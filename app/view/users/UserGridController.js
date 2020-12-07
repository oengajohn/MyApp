Ext.define('MyApp.view.users.UserGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.usergridcontroller',
    mixins: [
        'MyApp.view.mixins.GridMixin'
    ],
    init: function() {
        this.getView().getStore().load();
    },
    onAddUserButtonClick: function() {
        Ext.create({
            xtype: 'userform'
        });
    },
    onViewUserDetailsButtonClick: function() {
        var me = this;
        var record = me.getSelectedRecord();
        if (record) {
            console.log(record);
            var windowContainer = Ext.create({
                xtype: 'userform'
            });
            windowContainer.lookupReference('form').getForm().loadRecord(record);
        }
    },
    onRemoveButtonClick: function() {
        var me = this;
        var record = me.getSelectedRecord();
        if (record) {
            Ext.Ajax.request({
                url: 'http://localhost:8080/Jotech/api/users/' + record.get('id'),
                method: 'DELETE',
                success: function(response, opts) {
                    var obj = Ext.decode(response.responseText);
                    console.dir(obj);
                    Ext.ComponentQuery.query('usergrid')[0].getStore().remove(record);
                },

                failure: function(response, opts) {
                    console.log('server-side failure with status code ' + response.status);
                }
            });
        }
    },
    onIdSearchEnterKey: function(field, e) {
        var me = this;
        // e.HOME, e.END, e.PAGE_UP, e.PAGE_DOWN,
        // e.TAB, e.ESC, arrow keys: e.LEFT, e.RIGHT, e.UP, e.DOWN
        if (e.getKey() == e.ENTER) {
            me.getRecordFromServer(field.getValue());
        }
    },
    getRecordFromServer: function(searchId) {
        if (searchId) {
            Ext.Ajax.request({
                url: 'http://localhost:8080/Jotech/api/users/' + searchId,
                method: 'GET',
                success: function(response, opts) {
                    console.log(response.responseText);
                },

                failure: function(response, opts) {
                    console.log('server-side failure with status code ' + response.status);
                }
            });
        } else {
            Ext.Msg.alert('No search Id provided', 'Please insert an id to search for!!');
        }
    },
    onGetButtonClick: function() {
        var me = this;
        var searchId = me.getView().lookupReference('searchId').getValue();
        me.getRecordFromServer(searchId);


    },


})