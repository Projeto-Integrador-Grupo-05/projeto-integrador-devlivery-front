import CardCategoria from "../cardcategoria/CardCategoria";
import { useContext, useEffect, useState } from "react";
import { DNA } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import Categoria from "../../../models/Categoria";
import { buscar, deletar, atualizar } from "../../../services/Service";
import { FaPlus } from "react-icons/fa";
import ModalCadastroCategoria from "../modal/ModalCadastroCategoria";
import Modal from "../modal/Modal";
import FormCategoria from "../formcategoria/FormCategoria";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListaCategoria() {
  const navigate = useNavigate();
  const [categorias, setCategorias] = useState<Categoria[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [categoriaToDelete, setCategoriaToDelete] = useState<Categoria | null>(
    null
  );
  const [categoriaToEdit, setCategoriaToEdit] = useState<Categoria | null>(
    null
  );
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario?.token || "";

  async function buscarCategoria() {
    try {
      await buscar("/categoria", setCategorias, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (!token) {
      ToastAlerta("Você precisa estar logado!", "erro");
      navigate("/");
    } else {
      buscarCategoria();
    }
  }, [token]);

  function abrirModal() {
    setIsModalOpen(true);
  }

  function fecharModal() {
    setIsModalOpen(false);
  }

  function abrirDeleteModal(categoria: Categoria) {
    setCategoriaToDelete(categoria);
    setIsDeleteModalOpen(true);
  }

  function fecharDeleteModal() {
    setIsDeleteModalOpen(false);
    setCategoriaToDelete(null);
  }

  function abrirEditModal(categoria: Categoria) {
    setCategoriaToEdit(categoria);
    setIsEditModalOpen(true);
  }

  function fecharEditModal() {
    setIsEditModalOpen(false);
    setCategoriaToEdit(null);
  }

  async function confirmarDelete() {
    if (categoriaToDelete) {
      try {
        await deletar(`/categoria/${categoriaToDelete.id}`, {
          headers: { Authorization: token },
        });
        ToastAlerta("Categoria deletada com sucesso!", "info");
        buscarCategoria();
      } catch (error: any) {
        if (error.toString().includes("403")) {
          handleLogout();
        } else {
          ToastAlerta("Erro ao deletar a categoria.", "erro");
        }
      }
    }
    fecharDeleteModal();
  }

  async function atualizarCategoria(categoria: Categoria) {
    try {
      await atualizar(`/categoria`, categoria, setCategorias, {
        headers: { Authorization: token },
      });
      ToastAlerta("Categoria atualizada com sucesso!", "sucesso");
      buscarCategoria();
      fecharEditModal();
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      } else {
        ToastAlerta("Erro ao atualizar a categoria.", "erro");
      }
    }
  }

  return (
    <>
      {categorias.length === 0 && (
        <DNA
          visible={true}
          height="200"
          width="200"
          ariaLabel="dna-loading"
          wrapperClass="dna-wrapper mx-auto"
        />
      )}

      <div className="flex justify-center my-4">
        <button
          onClick={abrirModal}
          className="flex items-center px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all"
        >
          <FaPlus className="mr-2" />
          Adicionar Categoria
        </button>
      </div>

      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <CardCategoria
                key={categoria.id}
                categoria={categoria}
                onDelete={abrirDeleteModal}
                onEdit={abrirEditModal}
              />
            ))}
          </div>
        </div>
      </div>

      <ModalCadastroCategoria
        isOpen={isModalOpen}
        onClose={fecharModal}
        atualizarLista={buscarCategoria}
      />

      <Modal
        isOpen={isDeleteModalOpen}
        onClose={fecharDeleteModal}
        onConfirm={confirmarDelete}
      >
        <p>
          Tem certeza de que deseja deletar a categoria "
          {categoriaToDelete?.nomeCategoria}"?
        </p>
      </Modal>

      <Modal
        isOpen={isEditModalOpen}
        onClose={fecharEditModal}
        onConfirm={() => categoriaToEdit && atualizarCategoria(categoriaToEdit)}
      >
        {categoriaToEdit && <FormCategoria />}
      </Modal>
    </>
  );
}

export default ListaCategoria;
