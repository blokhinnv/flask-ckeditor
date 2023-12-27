CKEDITOR.plugins.add('savestatic', {
  init: function(editor) {
      editor.addCommand('savestatic', {
          exec: function(editor) {

              // Код для сохранения данных на сервер
              var data_html = editor.getData();
              var sanitized_data_html = data_html.replace(/[\u007F-\uFFFF]/g, function(chr) {
                return "\\u" + ("0000" + chr.charCodeAt(0).toString(16)).substr(-4);
              });
              
              var data = {"name" : '1', "description" : '2', "context" : sanitized_data_html};
              // var data = {"name" : '1', "description" : '2', "context" : data_html}
              console.log(JSON.stringify(data))
              fetch('pages/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
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