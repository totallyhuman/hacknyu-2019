from pymongo import MongoClient
import time
import random

import logging

logging.basicConfig(filename="hacknyu.log", level=logging.INFO)

client = MongoClient("mongodb://34.73.115.63:27017/")
db = client.database
collection = db.collection


def addTransaction(category, total, file_name):
    post = {
        "category": str(category),
        "total": float(total),
        "file_name": str(file_name)
    }

    logging.info(post)
    collection.insert_one(post)

def getTransaction()


def fillTestData(amount):
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

    for x in range(0, amount):
        current_time = int(time.time())
        addTransaction(random.randint(0, len(categories)), random.randint(
            0, 100), current_time, str(current_time) + ".jpg") 


def clearDatabase():
    db.collection.delete_many({})


if __name__ == "__main__":
    print(fillTestData(100))
