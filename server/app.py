from flask import Flask
import content_classification
import ocr
import opencv

app = Flask(__name__)

@app.route("/api/")
def home():
    ocr_image = ocr.analyze_image(opencv.do_things("image.jpg"))
    return str(content_classification.classify(ocr.detect_text(ocr_image))) + str(ocr.calculate_total(ocr_image))

if __name__ == "__main__":
    app.run(debug=True)

    print(content_classification.classify(ocr.detect_text(ocr_image)))
    print(ocr.calculate_total(ocr_image))
