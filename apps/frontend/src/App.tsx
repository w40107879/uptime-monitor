import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import DashboardPage from '@/pages/Dashboard';
import LoginPage from '@/pages/Login';
import { useEffect } from 'react';

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken && location.pathname !== '/login') {
      navigate('/login');
    }
  }, [location, navigate]);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/" element={localStorage.getItem('access_token') ? <DashboardPage /> : <Navigate to="/login" />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
