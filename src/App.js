import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import DashboarPage from "./pages/dashboard/dashboard-page";
import Navbar from './component/navigation/navbar';
import Sidebar from './component/navigation/sidebar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashboarPage />} />
      </Routes>
    </div>
  );
}

export default App;
