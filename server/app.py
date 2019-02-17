from flask import Flask, request, render_template

from opencv import do_things

from ocr import *

import random, string, time
import database

app = Flask(__name__)

@app.route("/")
def index():
    databa
    return render_template("index.html", total_spent = )

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

    return send_files(newpath, attachment_filename="tweaked.jpg") 

@app.route("/api/getcategories", methods=['GET'])
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
