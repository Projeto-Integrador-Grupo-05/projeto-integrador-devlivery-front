import Navbar from "./components/navbar/Navbar";
import './App.css'

import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from './pages/home/Home'

function App() {
 
  return (
    <>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
          <Footer/>
        </BrowserRouter>
      </AuthProvider>
      </>
  );
}
      
export default App;
