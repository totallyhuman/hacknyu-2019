from pymongo import MongoClient
import time
import random

import logging

logging.basicConfig(filename="hacknyu.log", level=logging.INFO)

db = MongoClient("mongodb://budgetbucket.net:27017/")['hacknyu']
users = db.users
transactions = db.transactions


def addTransaction(category, price, filename, email):
    post = {
        "category": int(category),
        "price": float(price),
        "filename": str(filename),
        "email": str(email)
    }

    logging.info(post)
    transactions.insert_one(post)


def getTransactions(email):
    return transactions.find({"email": email})


def getTotalSpent(email):
    total_spent = 0.0
    
    for post in getTransactions(email):
        total_spent += post["price"]

    return total_spent

def getCategorySpent(email, category):
    category_spent = 0.0

    for post in getTransactions(email):
        if (post["category"] == category):
            category_spent += post["price"]

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
            0, 100), str(current_time) + ".jpg", "user@provider.com") 

def clearDatabase():
    users.delete_many({})
    transactions.delete_many({})

if __name__ == "__main__":
    clearDatabase()
    print(fillTestData(100))
