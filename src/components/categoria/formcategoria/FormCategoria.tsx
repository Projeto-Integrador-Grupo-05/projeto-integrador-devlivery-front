import { ChangeEvent, useContext, useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import Categoria from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function FormCategoria() {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState<Categoria>({} as Categoria);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;
  const { id } = useParams<{ id: string }>();

  async function buscarPorId(id: string) {
    try {
      await buscar(`/categoria/${id}`, setCategoria, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      ToastAlerta("Você precisa estar logado!", "info");
      navigate("/");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setCategoria({ ...categoria, [e.target.name]: e.target.value });
  }

  function retornar() {
    navigate("/categoria");
  }

  async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    if (id !== undefined) {
      try {
        await atualizar(`/categoria`, categoria, {
          headers: { Authorization: token },
        });
        ToastAlerta("A Categoria foi atualizada com sucesso!", "info");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          handleLogout();
        } else {
          ToastAlerta("Erro ao atualizar a categoria.", "info");
        }
      }
    } else {
      try {
        await cadastrar(`/categoria`, categoria, setCategoria, {
          headers: { Authorization: token },
        });
        ToastAlerta("A Categoria foi cadastrada com sucesso!", "info");
      } catch (error: any) {
        if (error.toString().includes("403")) {
          handleLogout();
        } else {
          ToastAlerta("Erro ao cadastrar a categoria.", "info");
        }
      }
    }

    setIsLoading(false);
    retornar();
  }

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-lg">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
      </h1>
      <form className="space-y-4" onSubmit={gerarNovaCategoria}>
        <div>
          <label
            htmlFor="nomeCategoria"
            className="block text-sm font-semibold text-gray-700"
          >
            Nome da Categoria
          </label>
          <input
            type="text"
            id="nomeCategoria"
            name="nomeCategoria"
            value={categoria.nomeCategoria}
            onChange={atualizarEstado}
            placeholder="Digite o nome da categoria"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="descricao"
            className="block text-sm font-semibold text-gray-700"
          >
            Link da Imagem
          </label>
          <input
            type="text"
            id="descricao"
            name="descricao"
            value={categoria.descricao}
            onChange={atualizarEstado}
            placeholder="Link da imagem da categoria"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-1/2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          >
            {isLoading ? (
              <RotatingLines strokeColor="white" />
            ) : id === undefined ? (
              "Cadastrar Categoria"
            ) : (
              "Atualizar Categoria"
            )}
          </button>
        </div>
      </form>
      <div className="text-center mt-4">
        <button
          onClick={retornar}
          className="text-sm text-gray-600 hover:underline"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default FormCategoria;
