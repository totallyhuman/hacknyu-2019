from pymongo import MongoClient
import datetime
import random

import logging

logging.basicConfig(filename="hacknyu.log", level=logging.INFO)

client = MongoClient("mongodb://34.73.115.63:27017/")
db = client.database
collection = db.collection


def addTransaction(category, total, time, file_name):
    post = {
        "category": str(category),
        "total": float(total),
        "time": str(time),
        "file_name": str(file_name)
    }

    logging.info(post)
    collection.insert_one(post)


def fillTestData():



def clearDatabase():
    db.collection.delete_many({})


if __name__ == "__main__":
    print(fillTestData())
