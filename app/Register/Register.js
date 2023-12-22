Ext.define('MyApp.view.RegisterForm', {
  extend: 'Ext.form.Panel',
  xtype: 'registerform',

  title: 'Register',
  items: [
    {
      xtype: 'textfield',
      name: 'username',
      fieldLabel: 'Username',
      allowBlank: false,
    },
    {
      xtype: 'textfield',
      name: 'password',
      fieldLabel: 'Password',
      allowBlank: false,
    },
    {
      xtype: 'textfield',
      name: 'phone',
      fieldLabel: 'Phone',
      allowBlank: false,
    },
    {
      xtype: 'textfield',
      name: 'email',
      fieldLabel: 'Email',
      allowBlank: false,
    }
  ],
  buttons: [
    {
      text: 'Register',
      handler: function () {
        // Lógica para enviar la solicitud de registro al backend
      },
    },
  ],
});