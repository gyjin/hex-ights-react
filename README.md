This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Hex-ights

Light up your life! Hex-ights are WiFi-controlled customizable led lights for all light enthusiasts. 
Control the lights from any device that can access the webpage! This is the webpage portion of this project. Please refer to the [hardware portion](https://github.com/gyjin/hex-ights-esp8266/blob/master/README.md) to set up the hardware. 

### Installation
1. Clone this repository.
2. Install dependencies with `npm install`.
3. Install axios with `npm install axios`.
4. (if you have not done so already)<br />
- Make a new Realtime Database project on [Firebase](https://firebase.google.com/): 
  - note the firebaseio URL in the database tab and the Web API Key in settings
  - in the realtime database, add 4 variables as below:
    - red: 0
    - green: 0
    - blue: 0
    - pattern: ""
    
5. Change the Firebase configurations in PatternButton.js and ColorButton.js
6. Create a new file named ".env". Add .env to the .gitignore file. 
7. Add the Web API Key to the .env file as below:<br />
REACT_APP_FB_AUTH_KEY=\*WEB API KEY HERE\*

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

\*Confirm that making a selection on this localhost (pattern or color) changes the variables in the Firebase database respectively.\*

### Deployment
This project was deployed with [Google Firebase](https://firebase.google.com/docs/hosting/deploying).
Follow this [guide](https://www.robinwieruch.de/firebase-deploy-react-js) on how to deploy an existing React application.
Please `npm build` before deployment. 

Hex-ights is a capstone project developed at Ada Developers Academy in Seattle, WA by Ga-Young Jin. 
