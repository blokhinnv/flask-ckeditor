
from flask import Flask, render_template
from flask_bootstrap import Bootstrap4
from flask_ckeditor import CKEditor

app = Flask(__name__)


bootstrap = Bootstrap4(app)
editor = CKEditor(app)


app.config["CKEDITOR_BTN_DATA_PATH"] = "https://jsonplaceholder.typicode.com/photos"


@app.route("/")
def form():

    return render_template("form.html")

if __name__ == "__main__":
    app.run(debug=True)
