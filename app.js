/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'MyLogin.Application',

    name: 'MyLogin',

    requires: [
        // This will automatically load all classes in the MyLogin namespace
        // so that application classes do not need to require each other.
        'MyLogin.*'
    ],

    // The name of the initial view to create.
     /* mainView: 'MyLogin.view.main.Main'  */
     launch: function () {
        Ext.Viewport.add({
            xtype: 'loginform'
        });
    } 
});
