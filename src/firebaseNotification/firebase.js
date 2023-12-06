
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
const firebaseConfig = {
  apiKey: "AIzaSyB30QqSskLcuHYuGNvzEuWnowhAQCpX6b4",
  authDomain: "test-push-notification-2d2bb.firebaseapp.com",
  projectId: "test-push-notification-2d2bb",
  storageBucket: "test-push-notification-2d2bb.appspot.com",
  messagingSenderId: "507544935388",
  appId: "1:507544935388:web:e188cfb3c48bc905d5cd19",
  measurementId: "G-8Y0PM6KF6Z"
};


  
 
  
  const app = initializeApp(firebaseConfig);
  const messaging = getMessaging(app);
  
  export const requestPermission = () => {
    console.log("Requesting User Permission......");
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification User Permission Granted.");
        return getToken(messaging, {
          vapidKey: 'BPtGH9V69dJ68kQEoSreyuPEFOQ0nujub4YyBO1PhXUA405I-cefvDVG7DwrXFcUhf6ZQKQ9xnXYNefhLBc4f0o'
        })
          .then((currentToken) => {
            if (currentToken) {
              console.log("Client Token: ", currentToken);
            } else {
              console.log("Failed to generate the app registration token.");
            }
          })
          .catch((err) => {
            console.log(
              "An error occurred when requesting to receive the token.",
              err
            );
          });
      } else {
        console.log("User Permission Denied.");
      }
    });
  };
  
  requestPermission();
  
  export const onMessageListener = () =>
    new Promise((resolve) => {
      onMessage(messaging, (payload) => {
        resolve(payload);
      });
    });