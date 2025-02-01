import { useState } from "react";

export default function DeliveryProfile() {
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState({
    name: "Carlos Santos",
    email: "carlos.delivery@email.com",
    phone: "(11) 98765-4321",
    address: "Av. Central, 456, São Paulo - SP",
    photo: "https://www.patasdacasa.com.br/sites/default/files/styles/article_detail_desktop/public/inline-images/meme-gato-sorrindo.jpg.webp?itok=uzMISCk1"
  });

  const handleEdit = () => setEditing(!editing);
  
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col items-center p-6">
      <div className="w-full max-w-md p-6 shadow-lg rounded-2xl border border-gray-300 bg-white">
        <div className="flex flex-col items-center mb-4">
          <img src={user.photo} alt="Foto do Entregador" className="w-24 h-24 rounded-full border mb-4" />
          <h2 className="text-xl font-semibold">Perfil</h2>
        </div>
        <div className="flex justify-between items-center mb-4">
          <button 
            onClick={handleEdit} 
            className="px-4 py-2 border rounded-lg bg-gray-200 hover:bg-gray-300 transition">
            {editing ? "Salvar" : "Editar"}
          </button>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            disabled={!editing}
            placeholder="Nome"
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            disabled={!editing}
            placeholder="Email"
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="tel"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            disabled={!editing}
            placeholder="Telefone"
            className="w-full p-2 border rounded-lg"
          />
          <input
            type="text"
            name="address"
            value={user.address}
            onChange={handleChange}
            disabled={!editing}
            placeholder="Endereço"
            className="w-full p-2 border rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
