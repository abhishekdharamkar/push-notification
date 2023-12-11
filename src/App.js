import React, { useEffect, useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Notification from "./firebaseNotification/Notification";
import { onMessageListener, requestPermission } from "./firebaseNotification/firebase";
import axios from "axios";
function App() {
  const [notification, setNotification] = useState({ title: "", body: "" });
  const [userMessage, setUserMessage] = useState("");
  const [fcmToken, setFcmToken] = useState("");

  const handleGetNotification = async () => {
    try {
      const response = await axios.post("https://0de7-2401-4900-1c42-5457-ab2f-5ed1-25ee-350d.ngrok-free.app/demo/push_notification", {
        "name": userMessage,
        "fcmtoken": fcmToken,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });


      if (response.status===200) {
        // Assuming your API response has title and body properties
        // Display a success message
      
        toast.success("Api called successfully!");
      } else {
        // Handle error responses
        console.log(response)
        toast.error("Error fetching notification.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while fetching notification.");
    }
  };
  useEffect(() => {
    requestPermission((clientToken) => {
      setFcmToken(clientToken);
    });
    // onMessageListener();
  }, []);
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          marginTop: "4rem",
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
        }}
      >
        <input
          type="text"
          id="userMessage"
          placeholder="Type your message here"
          style={{
            padding: "10px",
            width: " 300px",
            border: "1px solid #ccc",
            borderRadius: " 5px",
            fontSize: "16px",
            marginTop: "5px",
          }}
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <button
          style={{ marginTop: "10px", padding: "2px", cursor: "pointer" }}
          onClick={handleGetNotification}
        >
          Get Notification
        </button>
      </div>
      <Notification notification={notification} />
      <Toaster />
    </div>
  );
}

export default App;
