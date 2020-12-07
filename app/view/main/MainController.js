/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    init: function() {
        this.control({
            'menutree': {
                itemclick: this.onTreePanelItemClick
            }
        })
    },
    onTreePanelItemClick: function(view, record, item, index, event, options) {
        console.log(record);
        var mainPanel = Ext.ComponentQuery.query('mainpanel')[0];
        if (record.get('leaf')) {
            var newTab = mainPanel.items.findBy(
                function(tab) {
                    return tab.title === record.get('text');
                });
            if (!newTab) {
                newTab = mainPanel.add({
                    xtype: record.get('className'),
                    glyph: record.get('glyph'),
                    title: record.get('text'),
                    closable: true
                });
            }
            mainPanel.setActiveTab(newTab);
        }

    },
    onLogout: function() {

    }
});