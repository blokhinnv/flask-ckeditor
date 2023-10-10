
CKEDITOR.plugins.add('inputsdb', {
        init : function(editor) {
          var command = editor.addCommand('inputsdb', new CKEDITOR.dialogCommand('inputsdb'));
          command.modes = {wysiwyg:1, source:1};
          command.canUndo = true;
      
          editor.ui.addButton('Cuttable', {
            label : 'Создать Cut',
            command : 'inputsdb',
            icon: '/your/path/to/icon/cut.png'
          });
      
          CKEDITOR.dialog.add('inputsdb', this.path + 'dialogs/inputsdb.js');
        }
      });