Ext.define('TutorialApp.view.users.UserFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.userformcontroller',
    /**
     * Called when the view is created
     */
    init: function() {},
    onUserFormSubmit: function() {
        var me = this,
            form = me.getView().lookupReference('form').getForm();
        var id = form.findField('id').getValue();
        console.log(id);
        var method = 'POST';
        var url = 'http://localhost:8080/TrainingApp/api/users/';
        if (id) {
            method = 'PUT';
            url = url + id
        }
        if (form.isValid()) {
            form.submit({
                url: url,

                waitMsg: 'Please wait...',
                method: method,
                success: function(form, action) {
                    Ext.ComponentQuery.query('usergrid')[0].getStore().reload();
                },
                failure: function(form, action) {
                    console.log(action.result);
                }
            });
        }
    },
    onUserFormCancel: function() {
        this.getView().close();
    }
});