CKEDITOR.plugins.add('savestatic', {
  init: function(editor) {
      editor.addCommand('savestatic', {
          exec: function(editor) {

              // Код для сохранения данных на сервер
              var data_html = editor.getData();
      

              // let utf8 = data_html.getBytes("UTF8");
              // htmlMessage= new String(new Base64().encode(utf8));


              // let dec = new Base64().decode(htmlMessage.getBytes());
              // htmlMessage = new String(dec , "UTF8");


              var data = {name : '1', description : '2', context : data_html}
              console.log(data)
              
              fetch('pages/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: data
              })
              .then(response => console.log(response.json()))
              .then(data => console.log('Success:', data))
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