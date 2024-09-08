import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DashboardPage from '@/pages/Dashboard';
import LoginPage from '@/pages/Login';
import { useEffect, useState } from 'react';

function App() {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token'));
  const token = localStorage.getItem('access_token');

  useEffect(() => {
    setAccessToken(token);
  }, [token]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={accessToken ? <DashboardPage /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;