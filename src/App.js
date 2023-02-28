import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './layout/layout';
import Login from './page/login';
import Dashboard from './page/dashboard';
import Devices from './page/devices';
import HealthyContent from './page/healthyContent';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/device" element={<Devices />} />
          <Route path="/healthycontent" element={<HealthyContent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
