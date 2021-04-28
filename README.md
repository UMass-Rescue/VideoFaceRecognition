# Video Face Recognition

This repository contains video face recognition module and the client-side demo

## Installation

Pleas follow the [face_recognition](https://github.com/ageitgey/face_recognition) installation instructions.


## Video face recognition

**Input:** Video file (mp4)

**Output:** Metadata 

1. timeline.json contains the number of faces in the video, the number of frame in the video, and the frames that each face appear in the video.
2. face_loc.json contains the location of the faces in each frame.
3. *.jpeg images are the faces detected in the video. 

**How to use:**

1. Open jupyter notebook
2. Scroll to the cell with VERSION 3
3. Change the path to the video file
4. Run the cell
5. .json and .jpeg will be exported into the jupyter notebook directory.


## How to run demo face timeline

**How to use:** 

1. Edit data.js (you have to copy the data from timeline.json to the timeline variable in data.js)
2. Copy your mp4 file to video folder
3. Edit the mp4 filename and path in video_player.html 
4. Open video_player.html (tested on Chrome)
5. Enjoy


## Microserver

Please refer to this [repo](https://github.com/UMass-Rescue/FaceDetectMicroservice) for microservice.






