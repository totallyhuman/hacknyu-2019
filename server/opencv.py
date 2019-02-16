import numpy as np
import argparse
import cv2
import imutils
import matplotlib.pyplot as plt
from skimage.filters import threshold_local
from PIL import Image


# Find which point is which in the rectangle, top bottom, right left
def pointOrder(pts):
    rect = np.zeros((4, 2), dtype="float32")
    s = pts.sum(axis=1)
    rect[0] = pts[np.argmin(s)]
    rect[2] = pts[np.argmax(s)]

    diff = np.diff(pts, axis=1)
    rect[1] = pts[np.argmin(diff)]
    rect[3] = pts[np.argmax(diff)]

    return rect


# Use the four points to find the new corners of our warped image, and the size of it
def fourPointTransform(image, points):
    rect = pointOrder(points)
    (tl, tr, br, bl) = rect

    widthA = np.sqrt(((br[0] - bl[0]) ** 2) + ((br[1] - bl[1]) ** 2)) # Width at bottom
    widthB = np.sqrt(((tr[0] - tl[0]) ** 2) + ((tr[1] - tl[1]) ** 2)) # width at top
    maxWidth = max(int(widthA), int(widthB))

    heightA = np.sqrt(((tr[0] - br[0]) ** 2) + ((tr[1] - br[1]) ** 2))
    heightB = np.sqrt(((tl[0] - bl[0]) ** 2) + ((tl[1] - bl[1]) ** 2))
    maxHeight = max(int(heightA), int(heightB))

    dst = np.array(
        [
            [0, 0],
            [maxWidth - 1, 0],
            [maxWidth - 1, maxHeight - 1],
            [0, maxHeight - 1]
        ],
        np.float32
    )

    M = cv2.getPerspectiveTransform(rect, dst)
    warped = cv2.warpPerspective(image, M, (maxWidth, maxHeight))

    return warped


def do_things(filePath):

    image = cv2.imread(filePath)
    ratio = image.shape[0]/600
    orig = image.copy()
    image = imutils.resize(image, height=600)

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)
    # gray = cv2.GaussianBlur(image, (5, 5), 0)
    edged = cv2.Canny(gray, 75, 150)

    cnts = cv2.findContours(edged.copy(), cv2.RETR_LIST, cv2.CHAIN_APPROX_SIMPLE)
    cnts = imutils.grab_contours(cnts)
    cnts = sorted(cnts, key=cv2.contourArea, reverse=True)[:5]

    for c in cnts:
        peri = cv2.arcLength(c, True)
        approx = cv2.approxPolyDP(c, 0.02 * peri, True)

        if len(approx) == 4:
            screenCnt = approx
            break

    outlined = image.copy()
    cv2.drawContours(outlined, [screenCnt], -1, (0, 255, 0), 2)

    warped = fourPointTransform(orig, screenCnt.reshape(4, 2) * ratio)
    # warped = cv2.cvtColor(warped, cv2.COLOR_BGR2GRAY)

    cv2.imwrite("trimmed_" + filePath, warped)

    return "trimmed_" + filePath

if __name__ == "__main__":
    do_things("image.jpg")
