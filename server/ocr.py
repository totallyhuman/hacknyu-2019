import io
from google.cloud import vision


def detect_text(path):
    client = vision.ImageAnnotatorClient()
    client = client.from_service_account_json("credentials.json")

    with io.open(path, 'rb') as image_file:
        content = image_file.read()

    image = vision.types.Image(content=content)

    response = client.text_detection(image=image)
    texts = response.text_annotations

    image_text = ""

    for text in texts:
        image_text += "\n" + text.description

    return image_text

              

