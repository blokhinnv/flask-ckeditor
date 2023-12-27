CKEDITOR.plugins.add('savestatic', {
  init: function(editor) {
      editor.addCommand('savestatic', {
          exec: function(editor) {
            
              // Код для сохранения данных на сервер
              var data_html = editor.getData();

              var data = {"name" : '', "note" : '', "data" : data_html}

              fetch('pages/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              })
              .then(response => response.json())
              .then(data => console.log('Success:', data))
              .catch((error) => console.error('Error:', error));
          }
      });
      editor.ui.addButton('savestatic', {
          label: 'Сохранить',
          command: 'savestatic',
          toolbar: 'save',
          icon: null
      });
  }
});