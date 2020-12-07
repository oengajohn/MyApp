Ext.define('MyApp.view.footer.AppFooter', {
    extend: 'Ext.container.Container',
    xtype: 'appfooter',
    cls: 'appfooter',
    height: 30,
    layout: 'center',
    items: [{
        xtype: 'component',
        width: 500,
        componentCls: 'appfooter-title',
        bind: {
            html: '{appfooter}'
        }

    }]
});