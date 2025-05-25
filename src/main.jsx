import React, { StrictMode, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client';
import  NavBar from './Components/Nav.jsx'
import Home from './Components/Home.jsx'
import { ToastContainer } from 'react-bootstrap'
import About from './Components/about/About.jsx'
import LoadingSpinner from './Components/Loader';
import Contacts from './Components/Contacts.jsx';
import WorkPage from './Components/badgePage/workPage.jsx';
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
          <NavBar />
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
