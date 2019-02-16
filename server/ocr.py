import io
from google.cloud import vision

client = vision.ImageAnnotatorClient()
client = client.from_service_account_json("credentials.json")


def analyze_image(path):
    with io.open(path, 'rb') as image_file:
        content = image_file.read()

    image = vision.types.Image(content=content)

    response = client.text_detection(image=image)
    texts = response.text_annotations

    return texts


def detect_text(texts):
    image_text = ""

    for text in texts:
        image_text += "\n" + text.description

    return image_text


def calculate_total(texts):
    processed_text = ""
    total = 0.0

    for text in texts:
        processed_text = text.description.replace("\n", " ").split(" ")
        if (processed_text[0][0] == "$"):
            check = processed_text[0][1:]
            if (float(check) > total):
                total = float(check)

    return total


if __name__ == "__main__":
    print(detect_text(analyze_image("image.jpg")))
    print(calculate_total(analyze_image("image.jpg")))
