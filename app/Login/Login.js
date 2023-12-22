Ext.define('MyApp.view.LoginForm', {
  extend: 'Ext.form.Panel',
  xtype: 'loginform',

  title: 'Login',
  items:[
    {
      xtype: 'textfield',
      name: 'username',
      fieldLabel: 'Username',
      allowBlank: false,
    },
    {
      xtype: 'textfield',
      name: 'password',
      inputType: 'password',
      fieldLabel: 'Password',
      allowBlank: false,
    }
  ],
  buttons: [
    {
      text: 'Login',
      handler: function() {
        
      }
    },
    {
      text: 'Register',
      handler: 'onRegisterButtonClick'
    }
  ]
})