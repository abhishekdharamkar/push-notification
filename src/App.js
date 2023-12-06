import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import Notification from './firebaseNotification/Notification';

function App() {
  const [notification, setNotification] = useState({ title: '', body: '' });
  const [userMessage, setUserMessage] = useState('');

  const handleGetNotification = async () => {
    // try {
    //   // Replace 'YOUR_API_ENDPOINT' with the actual endpoint you want to call
    //   const response = await fetch('YOUR_API_ENDPOINT', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ message: userMessage }),
    //   });

    //   if (response.ok) {
    //     const data = await response.json();
    //     // Assuming your API response has title and body properties
    //     setNotification({ title: data.title, body: data.body });
    //     // Display a success message
    //     toast.success('Notification received successfully!');
    //   } else {
    //     // Handle error responses
    //     toast.error('Error fetching notification.');
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    //   toast.error('An error occurred while fetching notification.');
    // }
  };

  return (
    <div>
      <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translate(-50%, -50%)", marginTop: "4rem", display: "flex", flexDirection: "column", padding: "1rem" }}>

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
            marginTop: "5px"
          }}
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <button
          style={{ marginTop: "10px", padding: '2px', cursor: "pointer" }}
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
