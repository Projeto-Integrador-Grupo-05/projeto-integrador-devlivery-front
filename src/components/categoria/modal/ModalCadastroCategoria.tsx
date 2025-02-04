import { ChangeEvent, useContext, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import Categoria from "../../../models/Categoria";
import { cadastrar } from "../../../services/Service";
import { ToastAlerta } from "../../../utils/ToastAlerta";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    atualizarLista: () => void;
}

function ModalCadastroCategoria({ isOpen, onClose, atualizarLista }: ModalProps) {
    const [Categoria, setCategoria] = useState<Categoria>({} as Categoria);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { usuario, handleLogout } = useContext(AuthContext);
    const token = usuario.token;

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...Categoria,
            [e.target.name]: e.target.value
        });
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            await cadastrar(`/categoria`, Categoria, setCategoria, {
                headers: { 'Authorization': token }
            });
            ToastAlerta('A categoria foi cadastrada com sucesso!', 'info');
            atualizarLista(); 
            onClose(); 
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            } else {
                ToastAlerta('Erro ao cadastrar a categoria.', 'info');
            }
        }

        setIsLoading(false);
    }

    return (
        <>
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96 max-w-full">
                        <h2 className="text-2xl font-bold mb-4">Adicionar Categoria</h2>
                        <form onSubmit={gerarNovaCategoria}>
                            <input
                                type="text"
                                name="nomeCategoria"
                                value={Categoria.nomeCategoria}
                                onChange={atualizarEstado}
                                placeholder="Nome da categoria"
                                className="border p-2 w-full mb-4 rounded"
                            />
                            <input
                                type="text"
                                name="descricao"
                                value={Categoria.descricao}
                                onChange={atualizarEstado}
                                placeholder="Link da imagem da categoria"
                                className="border p-2 w-full mb-4 rounded"
                            />
                            <button
                                type="submit"
                                className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <RotatingLines width={24} strokeColor="white" />
                                ) : (
                                    "Cadastrar"
                                )}
                            </button>
                        </form>
                        <button
                            onClick={onClose}
                            className="mt-4 w-full p-2 bg-red-600 text-white rounded hover:bg-red-700"
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ModalCadastroCategoria;
