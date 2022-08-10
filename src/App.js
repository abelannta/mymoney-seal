import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Register from './pages/register/register'
import DashboarPage from "./pages/dashboard/dashboard-page";
import Navbar from './component/navigation/navbar';
import Sidebar from './component/navigation/sidebar';
import Transaction from './pages/transaction/transaction';
import Wallet from "./pages/wallet/wallet";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
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
