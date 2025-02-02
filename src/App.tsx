import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";  
import { store } from "./redux/store"; 

import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import { AuthProvider } from "./context/AuthContext";
import Perfil from "./pages/perfil/Perfil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./pages/about/About";
import Carrinho from "./pages/carrinho/Carrinho";

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <Navbar />
          
            <Routes>
              <Route path="/" element={<Carrinho />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/about" element={<About />} />
              <Route path="/carrinho" element={<Carrinho />} />
            </Routes>
          
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
}

export default App;
