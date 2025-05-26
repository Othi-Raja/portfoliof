import React, { StrictMode, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client';
import  CustomNavbar from './components/Nav.jsx'
import Home from './components/home.jsx'
import { ToastContainer } from 'react-bootstrap'
import About from './components/about/About.jsx'
import LoadingSpinner from './components/Loader.jsx';
import Contacts from './components/contacts.jsx';
import WorkPage from './components/badgePage/workPage.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => setIsLoading(false), 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      <ToastContainer/>
      {isLoading ? (
        <LoadingSpinner/>
      ) : (
        <>
          <CustomNavbar />
          <Home />
          <About/>
          <WorkPage/>
          <Contacts/>
        </>
      )}
    </React.StrictMode>
  );
}

root.render(<App />);

// Measure performance
// reportWebVitals();
