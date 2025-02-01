import { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { cadastrarUsuario } from "../../services/Service";
// import "./Cadastro.css";
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

  const colors = {
    primary: "#060606",
    backgroud: "#E0E0E0",
    disabled: "",
  };

  return (
    <>
      <div className="w-full min-h-screen flex items-start">
        <div className="relative w-1/2 h-full flex flex-col">
          <img
            src={
              "https://i.pinimg.com/736x/aa/9f/b4/aa9fb4de4240e78e81b42872c0d0f676.jpg"
            }
            className="w-full h-full"
          />
        </div>
      </div>
    </>
  );
}

export default Cadastro;
{
  /* <div
        className="grid grid-cols-1 lg:grid-cols-2 h-screen 
            place-items-center font-bold"
      >
   <form
  className="flex justify-center items-center flex-col w-2/3 gap-3"
  onSubmit={cadastrarNovoUsuario}
>
  <h2 className="text-slate-900 text-5xl">Cadastrar</h2>
  <div className="flex flex-col w-full">
    <label htmlFor="nome">Nome</label>
    <input
      type="text"
      id="nome"
      name="nome"
      placeholder="Nome"
      className="border-2 border-slate-700 rounded p-2"
      value={usuario.nome}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        atualizarEstado(e)
      }
    />
  </div>
  <div className="flex flex-col w-full">
    <label htmlFor="usuario">Usuario</label>
    <input
      type="text"
      id="email"
      name="email"
      placeholder="Email"
      className="border-2 border-slate-700 rounded p-2"
      value={usuario.email}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        atualizarEstado(e)
      }
    />
  </div>
  <div className="flex flex-col w-full">
    <label htmlFor="foto">Tipo</label>
    <input
      type="text"
      id="tipo"
      name="tipo"
      placeholder="tipo"
      className="border-2 border-slate-700 rounded p-2"
      value={usuario.tipo}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        atualizarEstado(e)
      }
    />
  </div>
  <div className="flex flex-col w-full">
    <label htmlFor="foto">Endereco</label>
    <input
      type="text"
      id="endereco"
      name="endereco"
      placeholder="endereco"
      className="border-2 border-slate-700 rounded p-2"
      value={usuario.endereco}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        atualizarEstado(e)
      }
    />
  </div>
  <div className="flex flex-col w-full">
    <label htmlFor="senha">Senha</label>
    <input
      type="password"
      id="senha"
      name="senha"
      placeholder="Senha"
      className="border-2 border-slate-700 rounded p-2"
      value={usuario.senha}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        atualizarEstado(e)
      }
    />
  </div>
  <div className="flex flex-col w-full">
    <label htmlFor="confirmarSenha">Confirmar Senha</label>
    <input
      type="password"
      id="confirmarSenha"
      name="confirmarSenha"
      placeholder="Confirmar Senha"
      className="border-2 border-slate-700 rounded p-2"
      value={confirmaSenha}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        handleConfirmarSenha(e)
      }
    />
  </div>
  <div className="flex justify-around w-full gap-8">
    <button
      className="rounded text-white bg-red-400 
          hover:bg-red-700 w-1/2 py-2"
      onClick={retornar}
    >
      Cancelar
    </button>
    <button
      type="submit"
      className="rounded text-white bg-indigo-400 
                   hover:bg-indigo-900 w-1/2 py-2
                   flex justify-center"
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
  <p className="text-white">
    Já possui uma conta ?{" "}
    <Link
      to="/login"
      className="text-indigo-400 hover:text-indigo-500 cursor-pointer"
    >
      Faça o login
    </Link>
  </p>
</form>
<div className="fundoCadastro hidden lg:block"></div>
</div> */
}
