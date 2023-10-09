CKEDITOR.plugins.add( 'exportodt', {
    icons: 'exportodt',
    init: function( editor ) {
        editor.ui.addButton( 'exportodt', {
            label: 'Export to ODT',
            command: 'exportodt_command',
            toolbar: 'document'
        });

        editor.addCommand( 'exportodt_command', {
            exec: function( editor ) {
                var html = editor.getData();

                function downloadODT(html, filename) {
                    // Создание Blob из HTML
                    const blob = new Blob([html], { type: 'application/vnd.oasis.opendocument.text' });
                  
                    // Создание ссылки для скачивания файла
                    const link = document.createElement('a');
                    link.href = URL.createObjectURL(blob);
                    link.download = filename;
                  
                    // Добавление ссылки на страницу и эмуляция клика
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }
                  
                  // Пример использования
                  const filename = 'document.odt';
                  downloadODT(html, filename);
            }
        });
    }
});