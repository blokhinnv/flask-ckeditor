
from flask import Flask, render_template
from flask_bootstrap import Bootstrap4
from flask_ckeditor import CKEditor

app = Flask(__name__)


bootstrap = Bootstrap4(app)
editor = CKEditor(app)


@app.route("/")
def form():

    return render_template("form.html")

if __name__ == "__main__":
    app.run(debug=True)