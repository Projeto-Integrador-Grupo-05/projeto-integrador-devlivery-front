import {
  FaEdit,
  FaMapMarkerAlt,
  FaPhone,
  FaCreditCard,
  FaUserShield,
  FaUser,
  FaBoxOpen,
  FaTags,
} from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Perfil = () => {
  const userType = "Administrador";
  const { usuario } = useContext(AuthContext);

  return (
    <div className="text-center p-4">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 mb-4 border-4 border-[#ff3c00]">
          <img
            src={usuario.foto}
            alt="Foto de perfil"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h2 className="text-2xl font-bold text-[#002914]">{usuario.nome}</h2>
        <p className="text-[#002914]">{usuario.email}</p>
        <div className="mt-2 flex items-center gap-2 text-[#002914] font-semibold">
          {userType === "Administrador" ? (
            <FaUserShield className="text-[#ff3c00]" />
          ) : (
            <FaUser className="text-[#002914]" />
          )}
          {userType}
        </div>
      </div>

      <div className="mt-4 p-4 bg-[#fff6cc] rounded-lg shadow-inner">
        <h3 className="text-lg font-semibold text-[#002914]">Informações</h3>
        <p className="text-[#002914] flex items-center gap-2">
          <FaMapMarkerAlt className="text-[#ff3c00]" />
          <strong>Endereço:</strong> {usuario.endereco}
        </p>
        <p className="text-[#002914] flex items-center gap-2">
          <FaPhone className="text-[#ff3c00]" />
          <strong>Telefone:</strong> (11) 94995-3838
        </p>
        <p className="text-[#002914] flex items-center gap-2">
          <FaCreditCard className="text-[#ff3c00]" />
          <strong>Método de Pagamento:</strong> Cartão crédito
        </p>
      </div>

      {userType === "Administrador" && (
        <div className="mt-4 p-4 bg-[#fff6cc] rounded-lg shadow-inner">
          <h3 className="font-semibold text-[#002914]">Administração</h3>
          <button className="flex items-center gap-2 bg-[#004d30] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#003822] transition-all w-full">
            <FaBoxOpen /> Gerenciar Produtos
          </button>
          <button className="flex items-center gap-2 bg-[#004d30] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#003822] transition-all w-full">
            <FaTags /> Gerenciar Categorias
          </button>
        </div>
      )}

      <div className="mt-4 flex justify-center">
        <button className="flex items-center gap-2 bg-[#ff3c00] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#cc3200] transition-all">
          <FaEdit /> Editar Perfil
        </button>
      </div>
    </div>
  );
};

export default Perfil;
