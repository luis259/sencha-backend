Ext.define('MyApp.controller.LoginController', {
  extend: 'Ext.appController',

  views: [
    'MyApp.view.LoginForm',
    'MyApp.view.RegisterForm'
  ],

  control:{
    'loginform button[handler=onRegisterButtonClick]':{
      click:'onRegisterButtonClick'
    }
  },

  onRegisterButtonClick: function(){
    var registerView = Ext.create('MyApp.view.RegisterForm');
    Ext.Viewport.add(registerView),
    Ext.Viewport.setActiveItem(registerView);
  }
});