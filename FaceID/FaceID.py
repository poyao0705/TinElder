import cv2 as cv
import numpy as np
import os
os.environ['TF_CPP_MIN_LOG_LEVEL']='2'
os.chdir("../FaceID")
from sklearn.preprocessing import LabelEncoder
import pickle
from keras_facenet import FaceNet
import time

from flask import Flask,render_template,Response

app = Flask(__name__)

#INITIALIZE
facenet = FaceNet()
faces_embeddings = np.load("faces_embeddings_done_5classes.npz")
Y = faces_embeddings['arr_1']
encoder = LabelEncoder()
encoder.fit(Y)
haarcascade = cv.CascadeClassifier("haarcascade_frontalface_default.xml")
model = pickle.load(open("svm_model_160x160.pkl", 'rb'))

def recognize_face():
    # SET THE COUNTDOWN TIMER 
    # for simplicity we set it to 2 
    # We can also take this as input 
    TIMER = int(3)

    # Open the camera
    cap = cv.VideoCapture(1) 
    
    prev = time.time()
    
    while TIMER >= 0:
        
        # Read and display each frame 
        ret, img = cap.read() 
        img = cv.flip(img,1)
    
        font = cv.FONT_HERSHEY_SIMPLEX 
        
        cv.putText(img, str(TIMER),  
            (200, 250), font, 
            7, (255, 0, 255), 
            4, cv.LINE_AA)  

        # current time 
        cur = time.time()

        if cur-prev >= 1: 
            prev = cur
            TIMER = TIMER-1

        ret,buffer=cv.imencode('.jpg',img)
        img=buffer.tobytes()
    
        # Check if 3 seconds have passed or if 'q' is pressed
        if cv.waitKey(1) & 0xFF == ord('q'):
            break

        yield(b'--frame\r\n'
                b'Content-Type: image/jpeg\r\n\r\n' + img + b'\r\n')
        
 
    # Face recognition
    ret, test = cap.read() 
    test = cv.flip(test ,1)

    final_name = get_name(test) # Evaluates the photo for inference/prediction

    font = cv.FONT_HERSHEY_SIMPLEX 
    
    text = "Welcome " + final_name
    cv.putText(test, text,  
        (200, 250), font, 
        1, (255, 0, 255), 
        4, cv.LINE_AA)
    
    ret,buffer=cv.imencode('.jpg',test)
    test=buffer.tobytes()

    yield(b'--frame\r\n'
            b'Content-Type: image/jpeg\r\n\r\n' + test + b'\r\n')
    
    cv.waitKey(1000)
    # close the camera
    cap.release()
    
    # close all the opened windows 
    cv.destroyAllWindows()

def get_name(test):

    final_name = "Unknown"  # Default value in case no face is detected

    rgb_img = cv.cvtColor(test, cv.COLOR_BGR2RGB)
    gray_img = cv.cvtColor(test, cv.COLOR_BGR2GRAY)
    faces = haarcascade.detectMultiScale(gray_img, 1.3, 5)
    for x,y,w,h in faces:
        img = rgb_img[y:y+h, x:x+w]
        img = cv.resize(img, (160,160)) # 1x160x160x3
        img = np.expand_dims(img,axis=0)
        ypred = facenet.embeddings(img)
        face_name = model.predict(ypred)
        final_name = encoder.inverse_transform(face_name)[0]
    
    # with open("Final_name.txt", "w") as file:
    #     file.write(final_name)

    return final_name

# def get_name_string():
#     with open("Final_name.txt", "r") as file:
#         final_name = file.read()
#     print(final_name)
#     return final_name


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/video')
def video():
    return Response(recognize_face(),mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__=="__main__":
    app.run(debug=True)