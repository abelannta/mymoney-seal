import './App.css';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';
import Login from './pages/login/login';
import Register from './pages/register/register'
import DashboarPage from "./pages/dashboard/dashboard-page";
import Navbar from './component/navigation/navbar';
import Sidebar from './component/navigation/sidebar';
import Transaction from './pages/transaction/transaction';
import Wallet from "./pages/wallet/wallet";
import {useEffect, useState} from 'react';
import Setting from "./pages/setting/setting";

function App() {
  const location = useLocation();
  const [route, setRoute] = useState("");
  const [userData, setUserData] = useState(null);
  const [userToken, setToken] = useState(null);
  
  // Detect Route
  useEffect (() => {
    setRoute((location.pathname).replace("/", ""));
  }, [location])

  // Set User Data
  const userItem = localStorage.getItem('user');
  const userTkn = localStorage.getItem('token');
  useEffect (() => {
    setUserData(JSON.parse(userItem));
    setToken(JSON.parse(userTkn));
  }, [userItem, userTkn])

  return (
    <div className="App">
      {userData == null && 
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register/>}/>
        </Routes>
      }
      {userData != null && 
      <>
        <Navbar route={route} userData={userData} />
        <Sidebar route={route} userToken={userToken}/>
        <Routes>
          {/* <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register/>}/> */}
          <Route path="/dashboard" element={<DashboarPage />} />
          <Route path="/transaksi" element={<Transaction userToken={userToken} />} />
          <Route path="/dompet" element={<Wallet />} />
          <Route path="/pengaturan" element={<Setting />} />
        </Routes>
      </>
      }
    </div>
  );
}

export default App;
