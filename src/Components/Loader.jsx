// Components/LoadingSpinner.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HashLoader from "react-spinners/HashLoader";

function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
     <HashLoader color='black' />
    </div>
  );
}

export default LoadingSpinner;
