import { FaEdit, FaTrash } from "react-icons/fa";
import Categoria from "../../../models/Categoria";
import { Link } from "react-router-dom";

interface CardCategoriaProps {
  categoria: Categoria;
  onDelete: (categoria: Categoria) => void;
  onEdit: (categoria: Categoria) => void;
}

function CardCategoria({ categoria, onDelete }: CardCategoriaProps) {
  return (
    <div className="border border-gray-400 flex flex-col rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="w-full h-48 overflow-hidden">
        <img
          src={categoria.descricao}
          alt="Categoria"
          className="w-full h-full object-cover"
        />
      </div>

      <header className="py-4 px-6 bg-white text-[#002914] font-bold text-2xl text-center">
        {categoria.nomeCategoria}
      </header>

      <div className="flex flex-col">
        <Link to={`/editarcategoria/${categoria.id}`} className="w-full">
          <button
            className="w-full text-black bg-slate-200 hover:bg-gray-400 
                        flex items-center justify-center py-3 transition-colors duration-300 group"
          >
            <FaEdit className="text-xl text-black transition-colors duration-300" />
            <span className="ml-2">Editar</span>
          </button>
        </Link>
        <button
          onClick={() => onDelete(categoria)}
          className="w-full text-slate-100 bg-red-600 hover:bg-red-700 
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
