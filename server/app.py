from flask import Flask, request, render_template

from bson.json_util import dumps

from opencv import do_things

from ocr import *

from database import *

import random, string, time
import database

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html", total_spent=get_total_spend())


@app.route("/api/totalspend")
def get_total_spend():
    print("Some goon wanted to know how much they spent")
    return str(database.getTotalSpent("user@provider.com"))

@app.route("/api/uploadimage", methods=['POST'])
def upload_image():
    if request.method == "POST":
        file = request.files['image']
        newpath = "/var/www/html/images/" + str(int(time.time() * 1000.0 / 13.0)) + ".jpg"
        file.save(newpath)

        newpath = do_things(newpath)
        print(newpath)

        text = detect_text(analyze_image(newpath))
        print(text)

    return "Uploaded"

    # return send_files(newpath, attachment_filename="tweaked.jpg")

@app.route('/api/transactions', methods=['GET'])
def get_transactions():
    return dumps(getTransactions("user@provider.com"))

@app.route("/api/categories", methods=['GET'])
def get_categories():
    return ["Entertainment",
            "Automotives",
            "Business",
            "Careers",
            "Education",
            "Family",
            "Finance",
            "Food",
            "Health",
            "Hobbies",
            "Home",
            "Government",
            "News",
            "Real Estate",
            "Religion and Spirituality",
            "Science",
            "Shopping",
            "Society",
            "Sports",
            "Style and Fashion",
            "Technology and Computing",
            "Travel"]

if __name__ == "__main__":
    app.run(debug=True)
