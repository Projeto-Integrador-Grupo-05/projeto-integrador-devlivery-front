import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import Home from "./pages/home/Home";

import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";

import Perfil from "./pages/perfil/Perfil";
import "react-toastify/dist/ReactToastify.css";
import About from "./pages/about/About";
import ListaProdutos from "./components/produtos/listaprodutos/ListaProdutos";
import Carrinho from "./pages/carrinho/Carrinho";
import ListaCategoria from "./components/categoria/listacategoria/ListaCategoria";
import FormCategoria from "./components/categoria/formcategoria/FormCategoria";
import DeletarCategoria from "./components/categoria/deletarcategoria/DeletarCategoria";

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <ToastContainer />
        <BrowserRouter>
          <MainApp />
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  );
}

function MainApp() {
  const location = useLocation();
  const hiddenRoutes = ["/login", "/cadastro"];
  const hideLayout = hiddenRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />

        <Route path="/about" element={<About />} />
        <Route path="/produtos" element={<ListaProdutos />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/categoria" element={<ListaCategoria />} />
        <Route path="/cadastrarcategoria" element={<FormCategoria />} />
        <Route path="/editarcategoria/:id" element={<FormCategoria />} />
        <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;