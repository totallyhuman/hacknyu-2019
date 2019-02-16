from flask import Flask, request

from opencv import do_things

from ocr import *

import random, string, time

app = Flask(__name__)

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

if __name__ == "__main__":
    app.run(debug=True)
