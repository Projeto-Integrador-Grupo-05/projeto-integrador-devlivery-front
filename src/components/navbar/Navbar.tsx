import { useState, useRef, useEffect, useContext, ReactNode } from "react";
import { ShoppingCart, User } from "lucide-react";
import Search from "../search/Search";
import { AuthContext } from "../../context/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";
import { Link, useNavigate } from "react-router-dom";
import ModalPerfil from "../../pages/modalperfil/ModalPerfil";
import Perfil from "../../pages/perfil/Perfil";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const { usuario, handleLogout } = useContext(AuthContext);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleCartClick = () => {
    if (usuario.token == "") {
      ToastAlerta("Você precisa estar logado para acessar o carrinho!", "info");
      navigate("/login");
    } else {
      navigate("/carrinho");
    }
  };

  function logout() {
    handleLogout();
    ToastAlerta("O Usuário foi desconectado com sucesso!", "info");
    navigate("/home");
  }

  let component: ReactNode;

  return (
    <nav
      className={`flex justify-between items-center bg-gray-900 text-white p-4 ${
        isScrolled ? "fixed top-0 left-0 w-full z-10" : ""
      }`}
    >
      <Link to="/home">
        <img
          src="https://i.imgur.com/fBJcXWf.png"
          alt="LogoDevlivery"
          className="w-16 ml-10"
        />
      </Link>

      <Search />

      <div className="flex items-center space-x-6 pr-4">
        <ShoppingCart
          className="w-6 h-6 text-[#fff6cc] cursor-pointer hover:text-[#ff3c00]"
          onClick={handleCartClick}
        />

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full bg-[#ff3c00] hover:bg-[#ff3c00cc]"
          >
            <User size={24} className="text-[#fff6cc]" />
          </button>

          {menuOpen && (
            <div className="absolute z-30 right-0 mt-2 w-48 bg-[#fff6cc] text-[#002914] rounded-lg shadow-lg overflow-hidden animate-fade-in">
              {usuario.token !== ""
                ? (component = (
                    <>
                      <ModalPerfil open={open} onClose={() => setOpen(false)}>
                        <Perfil />
                      </ModalPerfil>
                      <a
                        onClick={() => setOpen(true)}
                        className="block px-4 py-2 hover:bg-[#ff3c00] hover:text-[#fff6cc]"
                      >
                        Meu Perfil
                      </a>
                      <Link
                        to="/carrinho"
                        className="block px-4 py-2 hover:bg-[#ff3c00] hover:text-[#fff6cc]"
                      >
                        Meu Carrinho
                      </Link>
                      <Link
                        to="/about"
                        className="block px-4 py-2 hover:bg-[#ff3c00] hover:text-[#fff6cc]"
                      >
                        Sobre
                      </Link>
                      <hr />
                      <button
                        onClick={logout}
                        className="w-full text-left px-4 py-2 hover:bg-[#ff3c00] hover:text-[#fff6cc]"
                      >
                        Sair
                      </button>
                    </>
                  ))
                : (component = (
                    <>
                      <Link
                        to="/login"
                        className="block px-4 py-2 hover:bg-[#ff3c00] hover:text-[#fff6cc]"
                      >
                        Login
                      </Link>
                      <Link
                        to="/cadastro"
                        className="block px-4 py-2 hover:bg-[#ff3c00] hover:text-[#fff6cc]"
                      >
                        Criar Conta
                      </Link>
                    </>
                  ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
