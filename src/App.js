import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Login from './pages/login/login';
import Register from './pages/register/register'
import DashboarPage from "./pages/dashboard/dashboard-page";
import Navbar from './component/navigation/navbar';
import Sidebar from './component/navigation/sidebar';
import Transaction from './pages/transaction/transaction';
import Wallet from "./pages/wallet/wallet";
import {useEffect, useState} from 'react';

function App() {
  const location = useLocation();
  const [route, setRoute] = useState("")

  useEffect (() => {
    setRoute((location.pathname).replace("/", ""));
  }, [location])

  console.log(route);
  return (
    <div className="App">
      <Navbar route={route}/>
      <Sidebar route={route}/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<DashboarPage />} />
        <Route path="/transaksi" element={<Transaction />} />
        <Route path="/dompet" element={<Wallet />} />
      </Routes>
    </div>
  );
}

export default App;
