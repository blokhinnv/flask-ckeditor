CKEDITOR.dialog.add('inputsdb', function(editor) {
  var dataPath = editor.config.inputsdbDataPath || 'api/list'; 

  function fetchData() {
    return new Promise(function(resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', dataPath);
      xhr.onload = function() {
        if (xhr.status === 200) {
          resolve(JSON.parse(xhr.responseText));
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.onerror = function() {
        reject(xhr.statusText);
      };
      xhr.send();
    });
  }

  function fillSelect(select, data) {
    for (var i = 0; i < data.length; i++) {
      var option = new CKEDITOR.dom.element('option');
      option.setAttribute('value', data[i].url);
      option.setText(data[i].title);
      select.add(data[i].title,data[i].url)
    }
  }

  return {
    title: 'Insert Image',
    minWidth: 400,
    minHeight: 200,
    contents: [
      {
        id: 'tab1',
        label: 'Image',
        title: 'Image',
        elements: [
          {
            id: 'select',
            type: 'select',
            label: 'Choose an image',
            items: [],
            onLoad: function() {
              var element = this.getDialog().getContentElement('tab1', 'select')
              fetchData().then(function(data) {
                images = data;
                console.log(images)
                fillSelect(element, images);
              }).catch(function(error) {
                console.error(error);
              });

            }
          }
        ]
      }
    ],
    onOk: function() {
      var dialog = this;
      var selectElement = dialog.getContentElement('tab1', 'select');
      var selectedValue = selectElement.getValue();
      if (selectedValue) {
        editor.insertHtml('<img src="' + selectedValue + '" />');
      }
    }
  };
});