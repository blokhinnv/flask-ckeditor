
CKEDITOR.plugins.add('inputsdb', {
  icons: 'inputsdb',
  init : function(editor) {
    var command = editor.addCommand('inputsdb', new CKEDITOR.dialogCommand('inputsdb'));
    command.modes = {wysiwyg:1, source:1};
    command.canUndo = true;

    editor.ui.addButton('inputsdb', {
      label : 'Insert Image',
      command : 'inputsdb',
      toolbar: 'document'
    });

    CKEDITOR.dialog.add('inputsdb', this.path + 'dialogs/inputsdb.js');
  }
});