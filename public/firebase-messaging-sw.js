importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.10.0/firebase-messaging-compat.js');
const firebaseConfig = {
  apiKey: "AIzaSyB30QqSskLcuHYuGNvzEuWnowhAQCpX6b4",
  authDomain: "test-push-notification-2d2bb.firebaseapp.com",
  projectId: "test-push-notification-2d2bb",
  storageBucket: "test-push-notification-2d2bb.appspot.com",
  messagingSenderId: "507544935388",
  appId: "1:507544935388:web:e188cfb3c48bc905d5cd19",
  measurementId: "G-8Y0PM6KF6Z"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('Received background message: ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = { body: payload.notification.body };

  self.registration.showNotification(notificationTitle, notificationOptions);
});