
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
const firebaseConfig = {
  apiKey: "AIzaSyDUwaV6tyxtFjOSWbHqgMDkkLP4mfzHi5A",
  authDomain: "test-web-notification-7c0e2.firebaseapp.com",
  projectId: "test-web-notification-7c0e2",
  storageBucket: "test-web-notification-7c0e2.appspot.com",
  messagingSenderId: "496516845654",
  appId: "1:496516845654:web:bc5127331cce2679206bf7",
  measurementId: "G-XPR5VW2HRL"
};


  
 
  
  const app = initializeApp(firebaseConfig);
  const messaging = getMessaging(app);
  
  export const requestPermission = (onTokenReceived) => {
    console.log("Requesting User Permission......");
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification User Permission Granted.");
        getToken(messaging, {
          vapidKey: 'BAC-tQf5jPu475hhw9eHD4J0lZvzuqxQVaoymCvwtDV2gl6e050-WoUf197ur8_kGssUwnnbd13oKIypQ1jy9LU'
        })
          .then((currentToken) => {
            if (currentToken) {
              console.log("Client Token: ", currentToken);
              // Pass the token to the parent or another function
              onTokenReceived(currentToken);
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
  
  // requestPermission();
  
  export const onMessageListener = () =>
    new Promise((resolve) => {
      onMessage(messaging, (payload) => {
        resolve(payload);
      });
    });