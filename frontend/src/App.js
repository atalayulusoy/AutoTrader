import { useEffect } from "react";
import "@/App.css";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || '';

function App() {
  useEffect(() => {
    // Redirect to Flask app through API route
    window.location.href = `${BACKEND_URL}/api/app/login`;
  }, []);

  return (
    <div className="loading-container">
      <div className="loading-content">
        <h1>Atalay Ulusoy Auto Trade</h1>
        <div className="spinner"></div>
        <p>Yönlendiriliyor...</p>
      </div>
    </div>
  );
}

export default App;
