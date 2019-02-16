import json
from watson_developer_cloud import NaturalLanguageUnderstandingV1
from watson_developer_cloud.natural_language_understanding_v1 import Features, CategoriesOptions


def classify(text):
    natural_language_understanding = NaturalLanguageUnderstandingV1(
        version='2018-11-16',
        iam_apikey='M8P_xFkgWhbFvdyAfc-aeK6ROxa9D4GxXnjE6LUEs0as',
        url="https://gateway-wdc.watsonplatform.net/natural-language-understanding/api"
    )

    return natural_language_understanding.analyze(text=text, features=Features(categories=CategoriesOptions(limit=3))).get_result()


if __name__ == "__main__":
    print(json.dumps(classify("  # 5 - San Jose 1160 N Capitol Ave San Jose CA, CA 95132 6/11/2017 Order Id: AABKTGAYACBZ eva 1. To Go Employee: Z POSr1 2:29:23 PM 1 20oz Peach Me Sweetea $4.50 $0.00 $4.25 $0.00 $0.00 $0.85 $6.50 $0.00 $0.00 25 Percent Sweet 1 20oz Matcha Coffee Half Ice 25 Percent Sweet Crystal Boba 1 Shrimp On It! [3] me soo spicy Weak Sauce Sub Total $16.10 Sales Tax Order Total $0.52 $16.62 MasterCard $16.62 Card#: 1373 Authorization: 66449Z » Order Closed <- Thank You Chino Hills Location Now Open!"), indent=2))
