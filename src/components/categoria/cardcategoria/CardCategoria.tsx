import { FaEdit, FaTrash } from "react-icons/fa";
import Categoria from "../../../models/Categoria";
import { Link } from "react-router-dom";

interface CardCategoriaProps {
    categoria: Categoria;
    onDelete: (categoria: Categoria) => void; 
}

function CardCategoria({ categoria, onDelete }: CardCategoriaProps) {
    return (
        <div className="border flex flex-col rounded-2xl overflow-hidden bg-[#fff6cc] shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-full h-48 overflow-hidden">
                <img
                    src={categoria.descricao}
                    alt="Categoria"
                    className="w-full h-full object-cover"
                />
            </div>

            <header className="py-4 px-6 bg-[#fff6cc] text-[#002914] font-bold text-2xl text-center">
                {categoria.nomeCategoria}
            </header>

            <div className="flex flex-col">
                <Link to={`/editarcategoria/${categoria.id}`} className="w-full">
                    <button
                        className="w-full text-slate-100 bg-[#002914] hover:bg-[#004d29] 
                        flex items-center justify-center py-3 transition-colors duration-300 group"
                    >
                        <FaEdit className="text-xl text-slate-100 transition-colors duration-300" />
                        <span className="ml-2">Editar</span>
                    </button>
                </Link>
                <button
                    onClick={() => onDelete(categoria)} 
                    className="w-full text-slate-100 bg-[#ff3c00] hover:bg-[#cc2f00] 
                    flex items-center justify-center py-3 transition-colors duration-300 group"
                >
                    <FaTrash className="text-xl text-slate-100 transition-colors duration-300" />
                    <span className="ml-2">Deletar</span>
                </button>
            </div>
        </div>
    );
}

export default CardCategoria;