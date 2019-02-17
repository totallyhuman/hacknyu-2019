from flask import Flask, request, render_template
import json
from bson.json_util import dumps

from opencv import do_things

from ocr import *
from content_classification import *

from database import *

import random, string, time
import database

app = Flask(__name__)

@app.route("/")
def index():
    top_categories = database.sortedCategories("user@provider.com")

    table = [["Entertainment", "<i class='fas fa-film icon'></i>"],
             ["Automotives", "<i class='fas fa-car icon'></i>"],
             ["Business", "<i class='fas fa-briefcase icon'></i>"],
             ["Careers", "<i class='fas fa-user-md icon'></i>"],
             ["Education", "<i class='fas fa-graduation-cap icon'></i>"],
             ["Family", "<i class='fas fa-child icon'></i>"],
             ["Finance", "<i class='fas fa-file-invoice-dollar icon'></i>"],
             ["Food", "<i class='fas fa-utensils icon'></i>"],
             ["Health", "<i class='fas fa-medkit icon'></i>"],
             ["Hobbies", "<i class='fas fa-guitar icon'></i>"],
             ["Home", "<i class='fas fa-home icon'></i>"],
             ["Government", "<i class='fas fa-university icon'></i>"],
             ["News", "<i class='fab fa-hacker-news icon'></i>"],
             ["Real Estate", "<i class='fas fa-warehouse icon'></i>"],
             ["Religion and Spirituality", "<i class='fas fa-church icon'></i>"],
             ["Science", "<i class='fas fa-flask icon'></i>"],
             ["Shopping", "<i class='fas fa-shopping-cart icon'></i>"],
             ["Society", "<i class='fas fa-male icon'></i>"],
             ["Sports", "<i class='fas fa-football-ball icon'></i>"],
             ["Style and Fashion", "<i class='fas fa-tshirt icon'></i>"],
             ["Technology and Computing", "<i class='fas fa-laptop icon'></i>"],
             ["Travel", "<i class='fa fa-plane icon'></i>"]]

    return render_template("index.html", total_spent=get_total_spend(), c1_text=table[top_categories[0][1]][0], c1_spend=top_categories[0][0], c1_icon=table[0][1], c2_text=table[top_categories[1][1]][0], c2_spend=top_categories[1][0], c2_icon=table[1][1], c3_text=table[top_categories[2][1]][0], c3_spend=top_categories[2][0], c3_icon=table[2][1], c4_text=table[top_categories[3][1]][0], c4_spend=top_categories[3][0], c4_icon=table[3][1], c5_text=table[top_categories[4][1]][0], c5_spend=top_categories[4][0], c5_icon=table[4][1])


@app.route("/api/totalspend")
def get_total_spend():
    return str(database.getTotalSpent("user@provider.com"))

@app.route("/api/uploadimage", methods=['POST'])
def upload_image():
    print("Receiving new image")

    categories = ["art and entertainment",
                "automotive and vehicles",
                "business and industrial",
                "careers",
                "education",
                "family and parenting",
                "finance",
                "food and drink",
                "health and fitness",
                "hobbies and interests",
                "home and garden",
                "law, govt and politics",
                "news",
                "real estate",
                "religion and spirituality",
                "science",
                "shopping",
                "society",
                "sports",
                "style and fashion",
                "technology and computing",
                "travel"]

    if request.method == "POST":
        file = request.files['image']
        time_submitted = str(int(time.time() * 1000.0 / 13.0))
        newpath = "/var/www/html/images/" + time_submitted + ".jpg"
        file.save(newpath)

        newpath = do_things(newpath)
        texts = analyze_image(newpath)

        classified = categories.index(str(classify(texts)[
                                      'categories'][0]['label'].split('/')[1]))

        total = calculate_total(texts)

        database.addTransaction(classified, total, newpath, "user@provider.com")

        return "https://i.budgetbucket.com/images/trimmed_" + time_submitted + ".jpg"

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
