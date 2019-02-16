import content_classification
import ocr
import opencv

if __name__ == "__main__":
    print(content_classification.classify(ocr.detect_text(opencv.do_things("image.jpg"))))
