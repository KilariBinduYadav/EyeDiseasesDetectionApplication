import os

import numpy as np
from flask import Flask, request
from flask_cors import CORS
from keras.models import load_model
import keras.utils as imageKeras
from PIL import Image, ImageOps
from werkzeug.utils import secure_filename

app = Flask(__name__) # instance of flask app
CORS(app) # wrap the flask app instance

uploadPath = 'E:\EyeDiseaseDetection\eye-app\src\images'
app.config['UPLOAD'] = uploadPath

@app.route('/upload', methods=['POST'])
def upload():

    model = load_model('Final_Model_CGAM.h5', compile=False)

    leftFile = request.files['leftFile']
    rightFile = request.files['rightFile']

    rightfilename = secure_filename(rightFile.filename)
    leftFilename = secure_filename(leftFile.filename)


    leftFile.save(os.path.join(app.config['UPLOAD'], leftFilename))
    path_of_left_image = os.path.join(app.config['UPLOAD'], leftFilename)

    rightFile.save(os.path.join(app.config['UPLOAD'], rightfilename))
    path_of_right_image = os.path.join(app.config['UPLOAD'], rightfilename)

    leftEyePrediction, leftClass = predictModelOfImage(path_of_left_image,model)
    rightEyePrediction, rightClass = predictModelOfImage(path_of_right_image,model)


    classArr = [leftClass, rightClass]

    return {"leftPrediction": leftEyePrediction, "rightPrediction": rightEyePrediction, "class" : classArr, "lPath" : path_of_left_image, "rPath" : path_of_right_image}
    

def predictModelOfImage(path_of_image,model):
    img = imageKeras.load_img(path_of_image, target_size=(224,224))
    x = imageKeras.img_to_array(img)
    x = np.expand_dims(x, axis=0)
    images = np.vstack([x])
    prediction = model.predict(images)
    predicted_class = ""
    val = np.argmax(prediction,axis=1)
    val = int(val)
    
    if val == 0:
        predicted_class = "Cataract"
    elif val == 1:
        predicted_class = "Glaucoma"
    elif val == 2:
        predicted_class = "Age-related Macular Degeneration"
    elif val == 3:
        predicted_class = "Pathological Myopia"
    else:
        predicted_class = "Unable to predict the image properly"
    return (predicted_class,val)
