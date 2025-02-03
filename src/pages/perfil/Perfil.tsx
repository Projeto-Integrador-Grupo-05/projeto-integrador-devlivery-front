import { FaEdit, FaSignOutAlt, FaMapMarkerAlt, FaPhone, FaCreditCard, FaUserShield, FaUser, FaBoxOpen, FaTags } from "react-icons/fa";

const Perfil = () => {
  const userType = "Administrador";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#002914] p-6">
      <div className="bg-[#fff6cc] shadow-2xl rounded-2xl p-8 w-full max-w-md border border-gray-300">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 border-4 border-[#ff3c00]"></div>
          <h2 className="text-2xl font-bold text-[#002914]">Nome do Usuário</h2>
          <p className="text-[#002914]">email@exemplo.com</p>
          <div className="mt-2 flex items-center gap-2 text-[#002914] font-semibold">
            {userType === "Administrador" ? <FaUserShield className="text-[#ff3c00]" /> : <FaUser className="text-[#002914]" />}
            {userType}
          </div>
        </div>

        <div className="mt-6 w-full">
          <h3 className="text-lg font-semibold text-[#002914] mb-3">Informações</h3>
          <div className="space-y-3 bg-[#fff6cc] p-4 rounded-lg shadow-inner">
            <p className="text-[#002914] flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#ff3c00]" /> <strong>Endereço:</strong> Rua Exemplo, 123
            </p>
            <p className="text-[#002914] flex items-center gap-2">
              <FaPhone className="text-[#ff3c00]" /> <strong>Telefone:</strong> (00) 12345-6789
            </p>
            <p className="text-[#002914] flex items-center gap-2">
              <FaCreditCard className="text-[#ff3c00]" /> <strong>Método de Pagamento:</strong> Cartão de Crédito
            </p>
          </div>
        </div>

        {userType === "Administrador" && (
          <div className="mt-6 w-full">
            <h3 className="text-lg font-semibold text-[#002914] mb-3">Administração</h3>
            <div className="space-y-3 bg-[#fff6cc] p-4 rounded-lg shadow-inner">
              <button className="flex items-center gap-2 bg-[#004d30] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#003822] transition-all w-full">
                <FaBoxOpen /> Gerenciar Produtos
              </button>
              <button className="flex items-center gap-2 bg-[#004d30] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#003822] transition-all w-full">
                <FaTags /> Gerenciar Categorias
              </button>
            </div>
          </div>
        )}

        <div className="mt-6 flex justify-between w-full">
          <button className="flex items-center gap-2 bg-[#ff3c00] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#cc3200] transition-all">
            <FaEdit /> Editar Perfil
          </button>
          <button className="flex items-center gap-2 bg-[#ff3c00] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#cc3200] transition-all">
            <FaSignOutAlt /> Sair
          </button>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
