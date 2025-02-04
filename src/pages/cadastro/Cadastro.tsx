import { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cadastrarUsuario } from "../../services/Service";
import { RotatingLines } from "react-loader-spinner";

function Cadastro() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");

  const [usuario, setUsuario] = useState({
    nome: "",
    email: "",
    senha: "",
    tipo: "",
    endereco: "",
  });

  function retornar() {
    navigate("/login");
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      setIsLoading(true);

      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuario);
        navigate("/login");
        alert("Usuário cadastrado com sucesso!");
      } catch (error) {
        alert("Erro ao cadastrar o usuário!");
      }
    } else {
      alert(
        "Dados do usuário inconsistentes! Verifique as informações do cadastro."
      );
      setUsuario({ ...usuario, senha: "" });
      setConfirmaSenha("");
    }

    setIsLoading(false);
  }

  return (
    <>
      <div className="flex w-full h-screen bg-gray-100">
        <div className="hidden relative lg:flex flex-col h-full w-1/2 items-center justify-center bg-gray-900">
          <img src="https://i.imgur.com/fBJcXWf.png" alt="LogoDevlivery" />
          <Link to='/home'
            type="submit"
            className="w-1/2 hover:bg-orange-600 hover:text-white py-3 rounded-xl bg-white
                                        text-black text-lg flex font-bold justify-center">
            <span>Voltar para Home</span>
          </Link>
        </div>
        <div className="w-full flex flex-col items-center justify-center lg:w-1/2">
          <div className="w-3/4 bg-white px-10 py-5 rounded-3xl border-2 border-gray-200">
            <h2 className="text-slate-900 text-3xl font-semibold">Cadastrar</h2>
            <form className="mt-4" onSubmit={cadastrarNovoUsuario}>
              <div className="flex flex-col w-full">
                <label className="text-lg font-medium" htmlFor="nome">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  placeholder="Nome"
                  className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                  value={usuario.nome}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-lg font-medium" htmlFor="usuario">
                  Usuario
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                  value={usuario.email}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-lg font-medium" htmlFor="foto">
                  Tipo
                </label>
                <input
                  type="text"
                  id="tipo"
                  name="tipo"
                  placeholder="tipo"
                  className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                  value={usuario.tipo}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-lg font-medium" htmlFor="foto">
                  Endereco
                </label>
                <input
                  type="text"
                  id="endereco"
                  name="endereco"
                  placeholder="endereco"
                  className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                  value={usuario.endereco}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    atualizarEstado(e)
                  }
                />
              </div>
              <div className="grid grid-cols-2">
                <div className="flex flex-col w-full">
                  <label className="text-lg font-medium" htmlFor="senha">
                    Senha
                  </label>
                  <input
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Senha"
                    className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                    value={usuario.senha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      atualizarEstado(e)
                    }
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label
                    className="text-lg font-medium"
                    htmlFor="confirmarSenha"
                  >
                    Confirmar Senha
                  </label>
                  <input
                    type="password"
                    id="confirmarSenha"
                    name="confirmarSenha"
                    placeholder="Confirmar Senha"
                    className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent"
                    value={confirmaSenha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleConfirmarSenha(e)
                    }
                  />
                </div>
              </div>
              <div className="mt-4 flex flex-row gap-4">
                <button
                  className="font-semibold rounded-xl text-white bg-red-700  hover:bg-red-400 w-1/2 py-2"
                  onClick={retornar}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="rounded-xl text-white bg-gray-900 
                 hover:bg-indigo-900 w-1/2 py-2
                 flex justify-center font-semibold"
                >
                  {isLoading ? (
                    <RotatingLines
                      strokeColor="white"
                      strokeWidth="5"
                      animationDuration="0.75"
                      width="24"
                      visible={true}
                    />
                  ) : (
                    <span>Cadastrar</span>
                  )}
                </button>
              </div>
              <div className="mt-2 flex justify-center items-center">
                <p className="font-medium text-base">Já possui uma conta?</p>
                <Link
                  to="/login"
                  className="text-indigo-900 text-bold font-medium ml-2"
                >
                  Faça o login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
