/**
 * Demonstrates a simple registration form.
 */
Ext.define('KitchenSink.view.forms.Register', {
  extend: 'Ext.form.Panel',
  xtype: 'form-register',
  controller: 'form-register',
  title: 'Register',

  requires: [
      'KitchenSink.model.State',
      'KitchenSink.store.States'
  ],

  bodyPadding: 20,
  maxHeight: 600,
  scrollable: 'y',
  width: 500,
  autoSize: true,

  items: [{
      xtype: 'fieldset',
      title: 'User Info',
      defaultType: 'passwordfield',
      defaults: {
          required: true
      },
      items: [
          { xtype: 'textfield', label: 'User ID', name: 'user' },
          { label: 'Password', name: 'pass' },
          { label: 'Verify', name: 'pass_verify' }
      ]
  }, {
      xtype: 'fieldset',
      title: 'Contact Information',
      defaultType: 'textfield',
      margin: '20 0 0',
      items: [{
          label: 'First Name',
          name: 'first'
      }, {
          label: 'Last Name',
          name: 'last'
      }, {
          label: 'Company',
          name: 'company'
      }, {
          xtype: 'emailfield',
          label: 'Email',
          name: 'email',
          allowBlank: false,
          required: true,
          validators: 'email'
      }, {
          xtype: 'combobox',
          label: 'State',
          name: 'state',
          valueField: 'abbr',
          displayField: 'state',
          forceSelection: true,
          queryMode: 'local',
          clearable: true,
          placeholder: 'Select a state...',
          store: {
              type: 'states'
          }
      }, {
          xtype: 'datepickerfield',
          label: 'Date of Birth',
          name: 'dob',
          maxValue: new Date()
      }, {
          xtype: 'selectfield',
          label: 'Skills',
          name: 'skills',
          multiSelect: true,
          autoSelect: false,
          clearable: true,
          options: [
              'ExtJS',
              'Javascript',
              'CSS',
              'Git',
              'Java',
              'PHP',
              'COBOL',
              'Node.js',
              'JSON',
              'HTML5',
              'RIA',
              'OOP',
              'Scrum',
              'REST',
              'MVC'
          ],
          chipView: {
              plugins: {
                  dataviewtip: {
                      align: 'tl-br',
                      constrainToView: false,
                      delegate: '.x-close-el',
                      allowOver: true,
                      anchor: false,
                      anchorToTarget: false,
                      bind: '{record}',
                      tpl: 'Remove skill {text}'
                   }
               }
           }
      }, {
          xtype: 'filefield',
          label: 'Profile pic',
          name: 'pic'
      }]
  }],

  buttons: [{
      text: 'Register',
      handler: 'onRegister'
  },{
    text: 'Back to Login',
    handler: function() {
        var loginView = Ext.create({
            xtype: 'form-login'
        });

        var mainContainer = Ext.ComponentQuery.query('viewport')[0];
        mainContainer.removeAll();
        mainContainer.add(loginView)
    }
  }]
});