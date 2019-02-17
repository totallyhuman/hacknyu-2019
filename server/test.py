import requests
import sys
import content_classification
import ocr
import opencv

if __name__ == "__main__":
    img_data = requests.get(sys.argv[1]).content
    with open('/var/www/html/images/image.jpg', 'wb') as handler:
        handler.write(img_data)
    ocr_image = ocr.analyze_image(
        opencv.do_things("/var/www/html/images/image.jpg"))
    print(content_classification.classify(ocr.detect_text(ocr.analyze_image(ocr_image))))
    print(ocr.calculate_total(ocr.analyze_image(ocr_image)))
