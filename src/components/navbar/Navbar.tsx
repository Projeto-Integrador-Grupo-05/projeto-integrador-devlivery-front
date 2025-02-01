import { useState, useRef, useEffect } from "react";
import { ShoppingCart, User } from "lucide-react";
import Search from "../search/Search";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const token = localStorage.getItem("token");

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleCartClick = () => {
        if (!token) {
            alert("Você precisa estar logado para acessar o carrinho!");
        } else {
            window.location.href = "/carrinho";
        }
    };

    return (
      
        <nav className="flex justify-between items-center bg-gray-900 text-white p-4">
            <img src="https://i.imgur.com/fBJcXWf.png" alt="LogoDevlivery" className="w-32" />

            <div className="flex items-center gap-2 border rounded-full w-full md:w-1/3 lg:w-1/4 px-4 py-2 bg-gray-200">
                <input
                    type="text"
                    placeholder="Buscar..."
                    className="bg-transparent text-black outline-none w-full"
                />

                <div className="relative" ref={menuRef}>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="p-2 rounded-full bg-[#ff3c00] hover:bg-[#ff3c00cc]"
                    >
                        <User size={24} className="text-[#fff6cc]" />
                    </button>

                    {menuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-[#fff6cc] text-[#002914] rounded-lg shadow-lg overflow-hidden animate-fade-in">
                            {token ? (
                                <>
                                    <a href="#" className="block px-4 py-2 hover:bg-[#ff3c00] hover:text-[#fff6cc]">Meu Perfil</a>
                                    <a href="/carrinho" className="block px-4 py-2 hover:bg-[#ff3c00] hover:text-[#fff6cc]">Meu Carrinho</a>
                                    <hr />
                                    <button
                                        onClick={() => {
                                            localStorage.removeItem("token");
                                            window.location.reload();
                                        }}
                                        className="w-full text-left px-4 py-2 hover:bg-[#ff3c00] hover:text-[#fff6cc]"
                                    >
                                        Sair
                                    </button>
                                </>
                            ) : (
                                <>
                                    <a href="/login" className="block px-4 py-2 hover:bg-[#ff3c00] hover:text-[#fff6cc]">Login</a>
                                    <a href="/cadastro" className="block px-4 py-2 hover:bg-[#ff3c00] hover:text-[#fff6cc]">Criar Conta</a>
                                </>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
