CKEDITOR.plugins.add('savestatic', {
  init: function(editor) {
      editor.addCommand('savestatic', {
          exec: function(editor) {

              // Код для сохранения данных на сервер
              var data_html = editor.getData();
      
              
              var data = {name : document.getElementById('title').value, description : document.getElementById('description').value, content : data_html}
              
              fetch('http://localhost:5000/pages/api', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              })
              .then(response => response.json())
              .then(data => console.log('Success:', data))
              .catch((error) => console.error('Error:', error));

              if(data.status == 201){
                document.getElementById('btn-save').style.display = 'block'
              }
          }
      });
      editor.ui.addButton('savestatic', {
          label: 'Сохранить',
          command: 'savestatic',
          toolbar: 'save',
          icon: 'save'
      });
  }
});