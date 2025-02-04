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
                headers: { Authorization: token }
            });
        } catch (error: any) {
            if (error.toString().includes('403')) {
                handleLogout();
            }
        }
    }

    useEffect(() => {
        if (token === '') {
            ToastAlerta('Você precisa estar logado!', 'info');
            navigate('/');
        }
    }, [token]);

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
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
                    headers: { 'Authorization': token }
                });
                ToastAlerta('A Categoria foi atualizada com sucesso!', 'info');
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    ToastAlerta('Erro ao atualizar a categoria.', 'info');
                }
            }
        } else {
            try {
                await cadastrar(`/categoria`, categoria, {
                    headers: { 'Authorization': token }
                });
                ToastAlerta('A Categoria foi cadastrada com sucesso!', 'info');
            } catch (error: any) {
                if (error.toString().includes('403')) {
                    handleLogout();
                } else {
                    ToastAlerta('Erro ao cadastrar a categoria.', 'info');
                }
            }
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl font-bold text-center my-8">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Nome da Categoria</label>
                    <input
                        type="text"
                        placeholder="Digite o nome da categoria"
                        name='nomeCategoria'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.nomeCategoria || ''}
                        onChange={atualizarEstado}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao">Link da imagem</label>
                    <input
                        type="text"
                        placeholder="Link da imagem da categoria"
                        name='descricao'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.descricao || ''}
                        onChange={atualizarEstado}
                    />
                </div>
                <div className="flex justify-around gap-4">
                    <button
                        className="rounded text-slate-100 font-bold bg-[#002914] 
                                   hover:bg-[#004d29] w-1/2 py-2 flex justify-center"
                        type="submit">
                        {isLoading ?
                            <RotatingLines
                                strokeColor="white"
                                strokeWidth="5"
                                animationDuration="0.75"
                                width="24"
                                visible={true}
                            /> :
                            <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                        }
                    </button>
                    <button
                        className="rounded text-slate-100 font-bold bg-[#ff3c00] 
                                   hover:bg-[#cc2f00] w-1/2 py-2 flex justify-center"
                        type="button"
                        onClick={retornar}>
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default FormCategoria;