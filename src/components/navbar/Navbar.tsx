import { ReactNode, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {
  const navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const location = useLocation();

  if (location.pathname === "/login" || location.pathname === "/cadastro") {
    return null;
  }

  function logout() {
    handleLogout();
    ToastAlerta("O Usuário foi desconectado com sucesso!", "info");
    navigate("/home");
  }

  let component: ReactNode;

  if (usuario.token !== "") {
    component = (
      <header className="w-full top-0 left-0 transition-all duration-500 bg-black py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/home" className="text-white text-2xl">
              <img
                src="https://i.imgur.com/RhVXHKF.png"
                alt="Logo DevFit"
                className="w-14"
              />
            </Link>

            <nav>
              <ul className="flex space-x-12">
                <li>
                  <Link
                    to="/categorias"
                    className="text-white hover:text-yellow-500"
                  >
                    Categorias
                  </Link>
                </li>
                <li>
                  <Link
                    to="/produtos"
                    className="text-white hover:text-yellow-500"
                  >
                    Produtos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/perfil"
                    className="text-white hover:text-yellow-500"
                  >
                    ÁREA DO ALUNO
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-white hover:text-yellow-500"
                  >
                    SOBRE NÒS
                  </Link>
                </li>
              </ul>
            </nav>

            <button
              onClick={logout}
              className="w-32 h-10 bg-red-500 hover:bg-red-700 text-white font-bold rounded transition-all duration-200"
            >
              SAIR
            </button>
          </div>
        </div>
      </header>
    );
  } else {
    component = (
      <header className="w-full top-0 left-0 transition-all duration-500 bg-black py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/home" className="text-white text-2xl">
              <img
                src="https://i.imgur.com/RhVXHKF.png"
                alt="Logo DevFit"
                className="w-14"
              />
            </Link>

            <nav>
              <ul className="flex space-x-12">
                <li>
                  <Link
                    to="/listacategorias"
                    className="text-white hover:text-yellow-500"
                  >
                    EXERCÍCIOS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/produtos"
                    className="text-white hover:text-yellow-500"
                  >
                    Produtos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-white hover:text-yellow-500"
                  >
                    SOBRE
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex gap-4">
              <Link to="/login">
                <button className="w-32 h-10 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded transition-all duration-200">
                  LOGIN
                </button>
              </Link>

              <Link to="/cadastro">
                <button className="w-32 h-10 bg-orange-400 hover:bg-orange-600 text-white font-bold rounded transition-all duration-200">
                  MATRICULE-SE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return <>{component}</>;
}

export default Navbar;
