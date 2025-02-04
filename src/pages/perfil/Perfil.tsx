import {
  FaEdit,
  FaMapMarkerAlt,
  FaPhone,
  FaCreditCard,
  FaUserShield,
  FaUser,
  FaBoxOpen,
  FaTags,
  FaSave,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";

const Perfil = () => {
  const userType = "Administrador";

  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    nome: "Nome do Usuário",
    email: "email@exemplo.com",
    telefone: "(00) 12345-6789",
    endereco: "Rua Exemplo, 123",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="text-center p-4">
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 border-4 border-[#ff3c00]"></div>
        <h2 className="text-2xl font-bold text-[#002914]">{userData.nome}</h2>
        <p className="text-[#002914]">{userData.email}</p>
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
        <h3 className="text-lg font-semibold text-[#002914] mb-2">Informações</h3>
        <p className="text-[#002914] flex items-center gap-2">
          <FaMapMarkerAlt className="text-[#ff3c00]" />
          <strong>Endereço:</strong> {userData.endereco}
        </p>
        <p className="text-[#002914] flex items-center gap-2">
          <FaPhone className="text-[#ff3c00]" />
          <strong>Telefone:</strong> {userData.telefone}
        </p>
        <p className="text-[#002914] flex items-center gap-2">
          <FaCreditCard className="text-[#ff3c00]" />
          <strong>Método de Pagamento:</strong> Cartão de Crédito
        </p>
      </div>

      {userType === "Administrador" && (
        <div className="mt-4 p-4 bg-[#fff6cc] rounded-lg shadow-inner">
          <h3 className="font-semibold text-[#002914] mb-2">Administração</h3>
          <button className="flex items-center gap-2 bg-[#004d30] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#003822] transition-all w-full mb-2">
            <FaBoxOpen /> Gerenciar Produtos
          </button>
          <button className="flex items-center gap-2 bg-[#004d30] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#003822] transition-all w-full">
            <FaTags /> Gerenciar Categorias
          </button>
        </div>
      )}

      <div className="mt-4 flex justify-center">
        <button
          onClick={() => setIsEditing(true)}
          className="flex items-center gap-2 bg-[#ff3c00] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#cc3200] transition-all"
        >
          <FaEdit /> Editar Perfil
        </button>
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-[#002914]">Editar Perfil</h2>
              <button onClick={() => setIsEditing(false)} className="text-[#ff3c00]">
                <FaTimes size={20} />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[#002914] font-semibold">Nome</label>
              <input
                type="text"
                name="nome"
                value={userData.nome}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2"
              />
              <label className="text-[#002914] font-semibold">E-mail</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2"
              />
              <label className="text-[#002914] font-semibold">Telefone</label>
              <input
                type="text"
                name="telefone"
                value={userData.telefone}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2"
              />
              <label className="text-[#002914] font-semibold">Endereço</label>
              <input
                type="text"
                name="endereco"
                value={userData.endereco}
                onChange={handleChange}
                className="border border-gray-300 rounded p-2"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-500 transition-all"
              >
                Cancelar
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="flex items-center gap-2 bg-[#28a745] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#1e7d32] transition-all"
              >
                <FaSave /> Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Perfil;
