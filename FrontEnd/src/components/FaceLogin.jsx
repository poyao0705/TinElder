// create empty react page
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const FaceLogin = () => {

    const navigate = useNavigate();
    useEffect(() => {
        // Set a delay of 5 seconds (5000 milliseconds) before navigating to the homepage
        const timer = setTimeout(() => {
          navigate('/home');
        }, 10000);
    
        // Cleanup the timer if the component unmounts before the delay
        return () => clearTimeout(timer);
      }, [navigate]);

    return (
        
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Face Recognition Login</h1>
            <img
                src="http://127.0.0.1:5000/video"  // Make sure Flask is running on this address
                alt="Face Recognition Stream"
                style={{ width: '640px', height: '480px', borderRadius: '10px' }}
            />
        </div>
    );
}
export default FaceLogin;