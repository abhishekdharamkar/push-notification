import React, { useState, useEffect } from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { onMessageListener, requestPermission } from './firebase';

const Notification = (props) => {
    const [notification, setNotification] = useState({ title: '', body: '' });
    useEffect(() => {
        // requestPermission();
        onMessageListener();
        const unsubscribe = onMessageListener().then((payload) => {
            setNotification({
                title: payload?.notification?.title,
                body: payload?.notification?.body,
            });
            toast.success(`${payload?.notification?.title}: ${payload?.notification?.body}`, {
                duration:5000,
                position: 'top-right',
            });
        });
        return () => {
            unsubscribe.catch((err) => console.log('failed: ', err));
        };
    }, []);
    return (
        <div>
            <Toaster />
        </div>
    );
}
export default Notification