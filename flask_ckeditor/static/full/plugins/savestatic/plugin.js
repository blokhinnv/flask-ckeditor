CKEDITOR.plugins.add('savestatic', {
  init: function(editor) {
      editor.addCommand('savestatic', {
          exec: function(editor) {

              // Код для сохранения данных на сервер
              var data_html = editor.getData();
              var modal_timeout;
              
              var data = {name : document.getElementById('title').value, description : document.getElementById('description').value, content : data_html}
              fetch('http://localhost:5000/pages/api', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              })
              .then(response => {
                response.json()
                if(response.status == 201){
                  document.getElementById('btn-save').style.display = 'block';
                  clearTimeout(modal_timeout)
                  let modal_timeout = setTimeout(function() {
                      

                    document.getElementById('btn-save').style.display = 'none';
                  }, 2000);
                
                }
              })
              .catch((error) => console.error('Error:', error));

              
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