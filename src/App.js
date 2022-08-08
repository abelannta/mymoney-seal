import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import DashboarPage from "./pages/dashboard/dashboard-page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<DashboarPage />} />
      </Routes>
    </div>
  );
}

export default App;
