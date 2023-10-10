CKEDITOR.plugins.add('newbutton', {
    init: function(editor) {
        editor.ui.addButton('newbutton', {
            label: 'Custom Button',
            command: 'customCommand',
            toolbar: 'document'
        });

        editor.addCommand('customCommand', {
            exec: function(editor) {
                // var dialog = editor.dialogs.get('customDialog');
                var dialog = false;
                if (!dialog) {
                    CKEDITOR.dialog.add('customDialog', function() {
                        return {
                            title: 'Custom Dialog',
                            minWidth: 300,
                            minHeight: 300,
                            contents: [{
                                id: 'tab1',
                                label: 'Tab 1',
                                elements: [{
                                    type: 'html',
                                    html: '<p>Content goes here</p>'
                                }]
                            }]
                        };
                    });
                    dialog = editor.dialogs.add('customDialog');
                }
                dialog.show();
                dialog.move('center', 'center');
            }
        });
    }
});